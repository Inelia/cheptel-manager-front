import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// const VALIDATE = (values) => {
//   const ERRORS = {};

//   if (!values.email) {
//     ERRORS.email = 'Email requis';
//   } else if (!/^[A-Z0-9]+@[A-Z0-9]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     ERRORS.email = 'Email invalide';
//   }
//   return ERRORS;
// };
const NewsletterForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //   },
  //   validationSchema: Yup.objet({
  //     email: Yup.string()
  //       .email('Adresse email invalide')
  //       .required('Email requis'),
  //   }),
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
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
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <input
            id="email_newsletter"
            className="newletter__input"
            name="email_newsletter"
            type="email"
            placeholder="Email"
            {...formik.getFieldProps('email_newsletter')}
          />
          {formik.touched.email && formik.ERRORS.email ? (
            <div>{formik.ERRORS.email}</div>
          ) : null}
          <button type="submit" className="btn btn-icon">
            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default NewsletterForm;
