import React from 'react';
import './src/styles/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" className="form-input" />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
