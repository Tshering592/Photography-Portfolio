// import React, { useState } from "react";
// import "./Login.css"; // Import the CSS file
// import { useNavigate } from "react-router-dom"; // For redirect after login

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:8000/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await res.json();
//     setMessage(data.message);

//     if (data.success) {
//       // Redirect to home after 1 second
//       setTimeout(() => navigate("/"), 1000);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1>Login</h1>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//         {message && <p className="login-message">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   // Store user info in localStorage (simple auth simulation)
  //   localStorage.setItem('isAuthenticated', 'true');
  //   localStorage.setItem('userName', formData.email.split('@')[0]);
    
  //   // Navigate to dashboard
  //   navigate('/dashboard');
  // };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userName', data.userName);
        navigate('/dashboard');
      } else {
        alert(data.message); // "Invalid credentials"
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server is not running");
    }
  };

  return (
    <div className="auth__page">
      <div className="auth__container">
        <div className="auth__content">
          <h2 className="section__header">Welcome Back</h2>
          <p className="auth__subtitle">Login to your account</p>

          <form onSubmit={handleSubmit} className="auth__form">
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
              />
            </div>

            <button className="btn auth__btn" type="submit">
              LOGIN
            </button>
          </form>

          <p className="auth__switch">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>

          <Link to="/" className="auth__back">
            ← Back to Home
          </Link>
        </div>

        <div className="auth__image">
          <img src="/assets/SeminarTshering.png" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
