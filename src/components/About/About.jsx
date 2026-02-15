import { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    // ScrollReveal animations
    if (window.ScrollReveal) {
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };

      window.ScrollReveal().reveal(".about__image img", {
        ...scrollRevealOption,
        origin: "left",
      });
      window.ScrollReveal().reveal(".about__content .section__header", {
        ...scrollRevealOption,
        delay: 500,
      });
      window.ScrollReveal().reveal(".about__content p", {
        ...scrollRevealOption,
        delay: 1000,
        interval: 500,
      });
      window.ScrollReveal().reveal(".about__btn", {
        ...scrollRevealOption,
        delay: 2000,
      });
    }
  }, []);

  return (
    <section className="section__container about__container" id="about">
      <div className="about__image">
        <img src="/assets/Tshering.jpeg" alt="about" />
      </div>
      <div className="about__content">
        <h2 className="section__header">About Me</h2>
        <p>
          Hi, I'm Tshering Finjo Lama, a passionate Photographer and Filmmaker dedicated
          to capturing moments that tell stories. I specialize in creating
          stunning visuals that resonate emotionally and creatively.
        </p>
        <p>
          Whether it's through the lens of a camera or the framing of a
          cinematic shot, I strive to bring authenticity and artistry to every
          project.
        </p>
        <div className="about__btn">
          <button className="btn">VIEW MY WORKS</button>
        </div>
      </div>
    </section>
  );
};

export default About;
