import React from 'react';
import { useState } from 'react';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div>
      <div className="auth-menu">
        <span className="auth-toggle">Sign In</span>
        <span className="auth-toggle selected">Sign Up</span>
      </div>
    </div>
  );
}
