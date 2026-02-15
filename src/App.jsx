// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import About from './components/About/About';
// import Gallery from './components/Gallery/Gallery';
// import Blog from './components/Blogg/Blog';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
// import Login from './pages/Login/login';
// import './App.css';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Gallery />
//       <Blog />
//       <Contact />
//       <Login />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blogg/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import Dashboard from './pages/Dashboard/dashboard';
import './App.css';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
