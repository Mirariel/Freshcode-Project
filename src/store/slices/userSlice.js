import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:3001/' });

export const loginThunk = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get('/users', {
        params: { email, password },
      });

      const found = data[0];
      if (!found) {
        return thunkAPI.rejectWithValue({
          message: 'Невірний email або пароль',
        });
      }

      const { password: _, ...user } = found;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

const saved = localStorage.getItem('user');

const initialState = {
  user: saved ? JSON.parse(saved) : null,
  isFetching: false,
  error: null,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: ({ user }) => {
      user = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.user = payload;
    });
    builder.addCase(loginThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const {reducer, actions} = userSlice;

export const {logout} = actions; 
export default reducer;