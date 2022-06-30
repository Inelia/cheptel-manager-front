import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const NewsletterForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Adresse email invalide')
          .required('Email requis'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
        <Form>
          <Field
            className="newletter__input"
            name="email_newsletter"
            type="email"
            placeholder="Email"/>
            <ErrorMessage name="email_newsletter" />
          
          <button type="submit" className="btn btn-icon">
            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
          </button>
        </Form>
    </Formik>
  );
};

export default NewsletterForm;
