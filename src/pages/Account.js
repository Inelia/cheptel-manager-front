import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
function Account() {
  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(250, 251, 252)';
  }, []);
  return (
    <>
      <Header />
      <main>Account</main>
      <Footer />
    </>
  );
}

export default Account;
