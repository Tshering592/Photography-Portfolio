import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <h4 className="section__header">Get In Touch</h4>
          <p>
            Reach out for inquiries, collaborations, or just to say hello—I'd
            love to connect with you.
          </p>
        </div>
        <div className="footer__col">
          <h4 className="section__header">Where's My Office?</h4>
          <p>Besighaun, Gokarneshowr-8, Kathmandu, Nepal</p>
        </div>
        <div className="footer__col">
          <h4 className="section__header">My Social Links</h4>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <i className="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-pinterest-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-instagram-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-youtube-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2026 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
