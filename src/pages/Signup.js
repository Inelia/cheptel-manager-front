import React, { useEffect } from 'react';
import SignupForm from '../components/Forms/SignupForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
function Signup() {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, []);
  return (
    <section className="login-container">
      <Header />
      <h2>
        Cheptel Manager<span className="brand-point">.</span>
      </h2>
      <p className="subtitle">
        Commencez à utiliser notre solution de gestion d’exploitation dès
        maintenant
      </p>
      <p className="title-info">
        14 jour d’essai gratuit. Carte bancaire non requis
      </p>
      <SignupForm />
      <Footer />
    </section>
  );
}

export default Signup;
