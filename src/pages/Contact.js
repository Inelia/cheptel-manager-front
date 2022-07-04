import React, { useEffect } from 'react';
import ContactForm from '../components/Forms/ContactForm.js';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Contact() {
  useEffect(() => {
    document.body.style.backgroundColor = '#F5F7FA';
  }, []);

  return (
    <>
      <Header />
      <h2>Nous contacter</h2>
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
