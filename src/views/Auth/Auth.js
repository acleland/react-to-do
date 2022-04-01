import React from 'react';
import { useState } from 'react';
import './Auth.css';
import { signInUser, signUpUser } from '../../services/users';

export default function Auth({ setCurrentUser }) {
  const [isSignUp, setIsSignUp] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      try {
        const resp = await signUpUser(email, password);
        console.log('sign up resp', resp);
        setCurrentUser(resp.email);
      } catch (e) {
        setError(e.message);
      }
    } else {
      try {
        const resp = await signInUser(email, password);
        console.log('sign in res', resp);
        setCurrentUser(resp.email);
      } catch (e) {
        setError(e.message);
      }
    }
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
      {error && <p>{`${error}`}</p>}
      <form className="auth" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>{isSignUp ? 'Sign up' : 'Sign in'}</button>
      </form>
    </div>
  );
}
