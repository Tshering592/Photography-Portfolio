import { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    // ScrollReveal animations
    if (window.ScrollReveal) {
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };

      window.ScrollReveal().reveal(".contact__image img", {
        ...scrollRevealOption,
      });

      window.ScrollReveal().reveal(".contact__content", {
        ...scrollRevealOption,
        delay: 200,
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className="contact" id="contact">
      <div className="section__container contact__container">
        <div className="contact__content">
          <h2 className="section__header">Contact Me</h2>
          <p>
            Have a project in mind or need a photographer or filmmaker to bring
            your vision to life? I'd love to hear from you!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input__row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Your Message" required />
            <input type="text" placeholder="Date & Time" required />
            <button className="btn" type="submit">SEND IT</button>
          </form>
        </div>
        <div className="contact__image">
          <img src="/assets/CaricatureTshering.png" alt="contact" />
        </div>
      </div>
    </section>
  );
};

export default Contact;