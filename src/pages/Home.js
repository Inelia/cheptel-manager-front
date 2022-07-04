import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <section className="section-text">
            <h2>Suivi en temps réel de votre exploitation</h2>
            <h3>
              Tous ce dont vous avez besoin pour gérer vos bêtes, parcelles et
              matériels
            </h3>
            <div className="btns">
              <button className="btn btn-blue">Essai gratuit</button>
              <button className="btn btn-outline">
                Voir les forfais{' '}
                <img
                  src={arrowRight}
                  alt="Flèche vers la droite"
                  className="arrow-btn"
                />
              </button>
            </div>
          </section>
        </article>
        <article className="informations">
          <section className="section-text-40">
            <h4>Tous ce dont vous avez besoin, dans la poche</h4>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte. Il n'a pas
              fait que survivre cinq siècles, mais s'est aussi adapté à la
              bureautique informatique, sans que son contenu n'en soit modifié.
              <br />
              <Link to="#" className="link-inline">
                En savoir plus{' '}
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </p>
          </section>
          <section className="container-imgs">
            <figure className="img-doc">
              <img src="" alt="" className="img-icon-1" />
              <img src="" alt="" className="img-icon-2" />
            </figure>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Home;
