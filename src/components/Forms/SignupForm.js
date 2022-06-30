import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import GoogleConnection from '../Connections/GoogleConnection.js';
const SignupForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', password_confirmation: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Adresse email non-valide')
          .required('Ce champs est obligatoire'),
        password: Yup.string()
          .min(6, 'Le mot de passe doit contenir un minimum de 6 caractères')
          .max(20, 'Le mot de passe doit contenir un maximum de 20 caractères')
          .required('Ce champs est obligatoire'),
        password_confirmation: Yup.string()
          .required('Ce champs est obligatoire')
          .oneOf(
            [Yup.ref('password'), null],
            'Le mot de passe de confirmation ne correspond pas'
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="email">Votre mot de passe</label>
        <Field id="email" name="email" type="email" placeholder="Votre email" />
        <ErrorMessage component="div" className="error-info" name="email" />
        <label htmlFor="password">Votre mot de passe</label>
        <Field
          id="password"
          name="password"
          type="password"
          placeholder="Votre mot de passe"
        />
        <ErrorMessage component="div" className="error-info" name="email" />
        <label htmlFor="password_confirmation">Confirmer votre email</label>
        <Field
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          placeholder="Confirmer votre mot de passe"
        />
        <ErrorMessage
          component="div"
          className="error-info"
          name="password_confirmation"
        />
        <button
          type="submit"
          className="btn btn-pill btn-blue-white btn-submit"
        >
          S'inscrire
        </button>
        <p>ou</p>
        <GoogleConnection action="S'inscrire" />
        <p>
          Vous avez déjà un compte ?{' '}
          <Link to="login" className="link-inline">
            Connectez-vous
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default SignupForm;
