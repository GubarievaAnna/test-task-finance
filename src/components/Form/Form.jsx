import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import sprite from '../../images/sprite.svg';
import s from './Form.module.scss';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('This is a required field'),
    }),
  });

  const reset = () => {
    formik.values.name = '';
    formik.values.email = '';
  };

  const onFormSubmit = event => {
    event.preventDefault();

    if (formik.values.email === '') {
      toast.error('Email must be completed', {
        autoClose: 2000,
        theme: 'colored',
      });
      return;
    }

    if (formik.errors.email) {
      toast.error('Enter valid email', {
        autoClose: 2000,
        theme: 'colored',
      });
      return;
    }

    reset();
  };

  return (
    <>
      <form className={s.form} onSubmit={onFormSubmit} autoComplete="true" name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
        <div
          role="group"
          className={`${s.form__field} ${s['form__field--first']}`}
        >
          <input
            className={s.form__input}
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <label
            htmlFor="name"
            className={`${s.form__label} ${
              formik.values.name && s['form__label--valid']
            }`}
          >
            Enter your name
          </label>
        </div>
        <div role="group" className={s.form__field}>
          <input
            className={s.form__input}
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <label
            htmlFor="email"
            className={`${s.form__label} ${
              formik.values.email && s['form__label--valid']
            }`}
          >
            Enter email*
          </label>
        </div>
        <div className={s.error}>
          {formik.touched.email && formik.errors.email && (
            <>
              <svg
                className={s.error__icon}
                width="15"
                height="15"
                aria-label="Warning sign"
              >
                <use href={sprite + '#warning'}></use>
              </svg>
              <p className={s.error__text}>{formik.errors.email}</p>
            </>
          )}
        </div>
        <button type="submit" className={s.form__button}>
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
