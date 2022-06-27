import React from 'react';
// import { useState } from 'react';
// import ChoreChart from '../components/ChoreChart/ChoreChart.js';
// import ChoreForm from '../components/ChoreForm/ChoreForm.js';
import LoginForm from '../components/Forms/LoginForm.js';

function Login() {
  return (
    <section className="login-container">
      <h2>
        Cheptel Manager<span className="brand-point">.</span>
      </h2>
      <p>
        Commencez à utiliser notre solution de gestion d’exploitation dès
        maintenant
      </p>
      <p>14 jour d’essai gratuit. Carte bancaire non requis</p>
      <LoginForm />
    </section>
  );
}

export default Login;
