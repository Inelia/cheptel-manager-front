import React from 'react';
import { useEffect } from 'react';
import LoginForm from '../components/Forms/LoginForm.js';

function Login() {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, []);
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
