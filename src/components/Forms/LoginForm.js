import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import GoogleConnection from '../Connections/GoogleConnection.js';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Adresse email non-valide')
          .required('Email requis'),
        password: Yup.string()
          .min(6, 'Le mot de passe doit contenir un minimum de 6 caractères')
          .max(20, 'Le mot de passe doit contenir un maximum de 20 caractères')
          .required('Password')
          .required('Mot de passe requis'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="email" className="form-control">
          Votre email
        </label>
        <Field name="email" type="email" placeholder="paul@exemple.fr" />
        <ErrorMessage component="div" className="error-info" name="email" />

        <label htmlFor="password" className="form-control">
          Votre mot de passe
        </label>
        <Field name="password" type="password" placeholder="*************" />
        <ErrorMessage component="div" className="error-info" name="password" />

        <button
          type="submit"
          className="btn btn-pill btn-blue-white btn-submit"
        >
          Se connecter
        </button>
        <p>ou</p>
        <GoogleConnection action="Se connecter" />
        <p className="text">
          Vous n’avez pas encore de compte ?{' '}
          <Link to="signup" className="link-inline">
            Inscrivez-vous
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
