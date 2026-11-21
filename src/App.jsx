import './App.css';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
