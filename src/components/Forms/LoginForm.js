import React from 'react';
import { useFormik } from 'formik';
// import { useState } from 'react';

const Validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Merci de renseigner votre email';
  } else if (!/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Ce n'est pas un email";
  }
  if (!values.password) {
    errors.password = 'Merci de renseigner votre mot de passe';
  }
  return errors;
};
const LoginForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onsubmit: (values) => {
      //'Merci de renseigner votre email et votre mot de passe'
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email" className="">
        Votre email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className="form-control"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Votre email"
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <label htmlFor="password" className="">
        Votre mot de passe
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className="form-control"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Votre mot de passe"
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type="submit" className="btn btn- btn-pill btn-blue-white">
        Se connecter
      </button>
    </form>
  );
};

export default LoginForm;
