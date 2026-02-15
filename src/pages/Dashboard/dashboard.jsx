import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Check if user is authenticated
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      navigate('/login');
      return;
    }

    // Get user name
    const name = localStorage.getItem('userName') || 'User';
    setUserName(name);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    navigate('/');
  };

  return (
    <div className="dashboard__page">
      <div className="section__container dashboard__container">
        <div className="dashboard__header">
          <h2 className="section__header">Dashboard</h2>
          <button onClick={handleLogout} className="btn dashboard__logout">
            LOGOUT
          </button>
        </div>

        <div className="dashboard__welcome">
          <h1>Welcome back, {userName}! 👋</h1>
          <p>Manage your photography portfolio from here</p>
        </div>

        <div className="dashboard__grid">
          <div className="dashboard__card">
            <div className="dashboard__card__icon">
              <i className="ri-user-line"></i>
            </div>
            <h3>Profile</h3>
            <p>Manage your personal information and settings</p>
          </div>

          <div className="dashboard__card">
            <div className="dashboard__card__icon">
              <i className="ri-gallery-line"></i>
            </div>
            <h3>Gallery</h3>
            <p>Upload and organize your photography work</p>
          </div>

          <div className="dashboard__card">
            <div className="dashboard__card__icon">
              <i className="ri-article-line"></i>
            </div>
            <h3>Blog Posts</h3>
            <p>Create and edit your blog articles</p>
          </div>

          <div className="dashboard__card">
            <div className="dashboard__card__icon">
              <i className="ri-message-2-line"></i>
            </div>
            <h3>Messages</h3>
            <p>View and respond to client inquiries</p>
          </div>
        </div>

        <div className="dashboard__profile">
          <div className="dashboard__profile__image">
            <img src="/assets/Tshering.jpeg" alt="profile" />
          </div>
          <div className="dashboard__profile__info">
            <h3>{userName}</h3>
            <p className="dashboard__profile__role">Photographer & Filmmaker</p>
            <p className="dashboard__profile__location">
              <i className="ri-map-pin-line"></i> Los Angeles, USA
            </p>
          </div>
        </div>

        <div className="dashboard__actions">
          <button onClick={() => navigate('/')} className="btn">
            VIEW PORTFOLIO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
