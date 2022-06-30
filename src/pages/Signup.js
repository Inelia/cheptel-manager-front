import React from 'react';
import SignupForm from '../components/Forms/SignupForm';

function Signup() {
  return (
    <section className="login-container">
      <h2>
        Cheptel Manager<span className="brand-point">.</span>
      </h2>
      <p className="subtitle">
        Commencez à utiliser notre solution de gestion d’exploitation dès
        maintenant
      </p>
      <p className="title-info">
        14 jour d’essai gratuit. Carte banquaire non requi
      </p>
      <SignupForm />
    </section>
  );
}

export default Signup;
