import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        object: '',
        message: '',
        authorization: false,
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Adresse email non-valide')
          .required('Ce champs est obligatoire'),
        object: Yup.string()
          .min(6, 'Le mot de passe doit contenir un minimum de 6 caractères')
          .max(20, 'Le mot de passe doit contenir un maximum de 20 caractères')
          .required('Ce champs est obligatoire'),
        message: Yup.string()
          .min(20, 'Ce text doit contenir un minimum de 20 caractères')
          .max(255, 'Ce text doit contenir un maximum de 255 caractères')
          .required('Ce champs est obligatoire'),
        authorization: Yup.boolean().oneOf([true], 'Ce champs est obligatoire'),
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
          Votre adresse email
        </label>
        <Field name="email" type="email" placeholder="paul@exemple.fr" />
        <ErrorMessage component="div" className="error-info" name="email" />

        <label htmlFor="object" className="form-control">
          Objet du message
        </label>
        <Field
          name="object"
          id="object"
          className="form-control"
          type="text"
          placeholder="Sujet de votre message"
        />
        <ErrorMessage component="div" className="error-info" name="object" />
        <label className="control-label" for="message">
          Votre message
        </label>
        <Field
          as="textarea"
          className="form-control"
          name="message"
          id="message"
          placeholder="Votre message"
        />
        <ErrorMessage component="div" className="error-info" name="message" />
        <label className="label__checkbox">
          <Field type="checkbox" name="authorization" id="authorization" />
          J'autorise Cheptel Manager à accéder temporairement a mes données pour
          enquêter sur ce problème
        </label>
        <ErrorMessage
          component="div"
          className="error-info"
          name="authorization"
        />
        <button
          type="submit"
          className="btn btn-pill btn-blue-white btn-submit"
        >
          Se connecter
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
