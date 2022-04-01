import React from 'react';
import './Nav.css';
import { logout } from '../../services/users';

export default function Nav({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <nav>
      <span>React To-Do</span>
      <ul>
        {currentUser && (
          <>
            <li id="login-email" className="login-email">
              {currentUser}
            </li>
            <li className="nav-link" onClick={handleLogout}>
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
