import classNames from 'classnames';
import { Field } from 'formik';
import styles from './../LoginForm/LoginForm.module.sass';

function Input ({ name, label, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, meta: { error, touched } }) => {
        const inputStyles = classNames(styles.input, {
          [styles.valid]: !error && touched,
          [styles.invalid]: error && touched,
        });

        return (
          <label className={styles.label}>
            <span className={styles.inputName}>{label}</span>
            <input className={inputStyles} {...restProps} {...field} />
            {error && touched && <div className={styles.error}>{error}</div>}
          </label>
        );
      }}
    </Field>
  );
}

export default Input;