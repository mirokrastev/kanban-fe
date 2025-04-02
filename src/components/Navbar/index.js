import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import styles from './styles.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  if (!user)
    return null;
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <h1>Kanban Board</h1>
        </div>
        <div className={styles.actions}>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 