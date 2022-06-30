import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header/Header';
import arrowRight from '../assets/img/arrow-right.png';
import Footer from '../components/Footer/Footer';
function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = '#E5E5E5';
  }, []);
  return (
    <>
      <Header home="true" />
      <main className="home">
        <article className="presentation">
          <h2>Suivi en temps réel de votre exploitation</h2>
          <h3>
            Tous ce dont vous avez besoin pour gérer vos bêtes, parcelles et
            matériels
          </h3>

          <button className='btn btn-blue'>Essai gratuit</button>
          <button>
            Voir les forfais <img src={arrowRight} alt="Flèche vers la droite" />
          </button>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Home;
