import React from 'react';
import { useState } from 'react';
import './Auth.css';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <div className="auth-menu">
        <span className={isSignUp ? 'auth-toggle' : 'auth-toggle selected'} onClick={toggleAuth}>
          Sign In
        </span>
        <span className={isSignUp ? 'auth-toggle selected' : 'auth-toggle'} onClick={toggleAuth}>
          Sign Up
        </span>
      </div>
    </div>
  );
}
