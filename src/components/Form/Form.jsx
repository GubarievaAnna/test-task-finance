import { useFormik } from 'formik';
import * as Yup from 'yup';

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

  const onButtonClick = () => {
    if (formik.values.email === '') {
      formik.setFieldError('email', 'This is a required field');
      formik.setFieldTouched('email', true);
      return;
    }
  };

  return (
    <>
      <form className={s.form} autoComplete="true" name="contact" method="post">
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
            required
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
        <button
          type="submit"
          className={s.form__button}
          onClick={onButtonClick}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
