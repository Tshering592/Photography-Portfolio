import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Store user info in localStorage (simple auth simulation)
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userName', formData.name);
    
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="auth__page">
      <div className="auth__container">
        <div className="auth__content">
          <h2 className="section__header">Create Account</h2>
          <p className="auth__subtitle">Join us today</p>

          <form onSubmit={handleSubmit} className="auth__form">
            <div className="auth__input__group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="auth__input__group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="auth__input__group">
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>

            <div className="auth__input__group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>

            <button className="btn auth__btn" type="submit">
              SIGN UP
            </button>
          </form>

          <p className="auth__switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>

          <Link to="/" className="auth__back">
            ← Back to Home
          </Link>
        </div>

        <div className="auth__image">
          <img src="/assets/CapTshering.png" alt="signup" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
