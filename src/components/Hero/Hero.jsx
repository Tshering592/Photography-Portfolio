import { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    // ScrollReveal animations
    if (window.ScrollReveal) {
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };

      window.ScrollReveal().reveal(".header__image img", {
        ...scrollRevealOption,
        origin: "right",
      });
      window.ScrollReveal().reveal(".header__content h1", {
        ...scrollRevealOption,
        delay: 500,
      });
      window.ScrollReveal().reveal(".header__content h2", {
        ...scrollRevealOption,
        delay: 1000,
      });
      window.ScrollReveal().reveal(".header__btn", {
        ...scrollRevealOption,
        delay: 1500,
      });
    }
  }, []);

  return (
    <header id="home">
      <div className="section__container header__container">
        <div className="header__image">
          <img src="/assets/photocamera.png" alt="header" />
        </div>
        <div className="header__content">
          <h1>Photographer & Film Maker</h1>
          <h2>Jorpati, Kathmandu</h2>
          <div className="header__btn">
            <button className="btn">HIRE ME</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
