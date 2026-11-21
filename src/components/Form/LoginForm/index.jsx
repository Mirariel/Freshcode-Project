import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './LoginForm.module.sass';
import Input from '../Input';
import { LOGIN_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchema';
import { loginThunk } from '../../../store/slices/userSlice.js';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm ({ login }) {
  const navigate = useNavigate();

  const handleLoginingSubmit = async (values, formikBag) => {
    try {
      await login(values);
      formikBag.resetForm();
      navigate('/');
    } catch (err) {
      formikBag.setStatus(err.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLoginingSubmit}
      validationSchema={LOGIN_VALIDATION_SCHEMA}
    >
      {({ status, isSubmitting, setStatus }) => (
        <Form
          className={styles.loginingForm}
          onChange={() => status && setStatus()}
        >
          <Input
            label='Email:'
            type='email'
            name='email'
            placeholder='abc@mail.com'
            autoFocus
          />

          <Input
            label='Password:'
            type='password'
            name='password'
            placeholder='password'
          />

          {status && <div className={styles.formError}>{status}</div>}

          <button
            type='submit'
            className={styles.loginBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Перевірка...' : 'Login'}
          </button>
        </Form>
      )}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(loginThunk(values)).unwrap(),
});

export default connect(null, mapDispatchToProps)(LoginForm);
