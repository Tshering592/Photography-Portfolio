import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    const userEmail = localStorage.getItem('userEmail'); // Make sure Login.jsx saves this!
    
    if (!isAuth) {
      navigate('/login');
      return;
    }

    setUserName(localStorage.getItem('userName') || 'User');

    // Simple Admin Logic (Change this to your actual email)
    if (userEmail === 'tsheringfunchok@gmail.com') {
      setIsAdmin(true);
      fetchUsers();
    }
  }, [navigate]);

  // --- ADD THESE CRUD FUNCTIONS ---
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await fetch(`http://localhost:8000/delete/${id}`, { method: 'DELETE' });
        fetchUsers(); // Refresh the list
      } catch (error) {
        alert("Delete failed");
      }
    }
  };

  const handleUpdate = async (id) => {
    const newName = prompt("Enter new username:");
    const newEmail = prompt("Enter new email:");
    if (newName && newEmail) {
      try {
        await fetch(`http://localhost:8000/update/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: newName, email: newEmail })
        });
        fetchUsers();
      } catch (error) {
        alert("Update failed");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
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

        {/* Existing Grid Cards */}
        <div className="dashboard__grid">
          <div className="dashboard__card">
             <div className="dashboard__card__icon"><i className="ri-user-line"></i></div>
             <h3>Profile</h3>
             <p>Manage your personal information</p>
          </div>
          <div className="dashboard__card">
             <div className="dashboard__card__icon"><i className="ri-gallery-line"></i></div>
             <h3>Gallery</h3>
             <p>Upload your photography work</p>
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

        {/* Admin-only User List Section */}
        {isAdmin && (
          <div className="dashboard__user__list">
            <h3 className="section__header">Registered Users (Admin)</h3>
            <div className="user__table__wrapper">
              <table className="user__table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <div className="action__btns">
                          <button onClick={() => handleUpdate(user.id)} className="btn edit__btn">
                            <i className="ri-edit-line"></i>
                          </button>
                          <button onClick={() => handleDelete(user.id)} className="btn delete__btn">
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

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
