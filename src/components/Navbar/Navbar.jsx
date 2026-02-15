// import { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav>
//       <div className="nav__header">
//         <div className="nav__logo">
//           {/* <a href="#">
//             <img src="/assets/newlogo.png" alt="logo" />
//           </a> */}
//           <h1>Tshering Finjo Lama</h1>
//         </div>
//         <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
//           <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
//         </div>
//       </div>
//       <ul className={`nav__links ${isOpen ? 'open' : ''}`} id="nav-links" onClick={closeMenu}>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#gallery">Gallery</a></li>
//         <li><a href="#blog">Blog</a></li>
//         <li><a href="#contact">Contact</a></li>
//          <li><a href="#login">Login</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isDashboard = location.pathname === '/dashboard';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Don't show navbar on auth pages or dashboard
  if (isAuthPage || isDashboard) {
    return null;
  }

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          
          <h1>Tshering Finjo Lama</h1>
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </div>
      </div>
      <ul className={`nav__links ${isOpen ? 'open' : ''}`} id="nav-links" onClick={closeMenu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <Link to="/login" className="nav__login__btn">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

