import React from 'react';
import { useState, useEffect } from 'react';
// import ChoreChart from '../components/ChoreChart/ChoreChart.js';
// import ChoreForm from '../components/ChoreForm/ChoreForm.js';
import LoginForm from '../components/Forms/LoginForm.js';

function Login() {

  return (
    <section className="login-container">
      <h2>
        Cheptel Manager<span className="brand-point">.</span>
      </h2>
      <p className="subtitle">
        Connectez-vous à votre compte pour gérer plus simplement votre
        exploitation
      </p>
      <LoginForm />
    </section>
  );
}

export default Login;
