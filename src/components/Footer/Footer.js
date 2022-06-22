import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__social-media">
        <h3>
          Cheptel Manager<span>.</span>
        </h3>
        <ul>
          <li>
            <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
            Instagram
          </li>
          <li>
            <i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
            Facebook
          </li>
          <li>
            <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>Twitter
          </li>
        </ul>
      </section>
      <section className="footer__links">
        <p>Explore</p>
        <ul>
          <li>Figma</li>
          <li>Github</li>
          <li>Cheptel</li>
        </ul>
      </section>
      <section className="footer__ressources">
        <p>Ressources</p>
        <ul>
          <li>Community Ressources Hub</li>
          <li>Support</li>
          <li>Politique de confidentialité</li>
        </ul>
      </section>
      <div>
        <p>
          Restez informé de nos nouveauté et inscrivez-vous à notre newsletter
        </p>
        <form>
          <input type="text" placeholder="Email" />
          <input type="submit" value="fleche" />
        </form>
      </div>
    </footer>
  );
}

export default Footer;
