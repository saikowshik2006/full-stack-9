// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login validation
    console.log('Login Credentials Submitted: ', credentials);
    // After successful login, navigate to LoggedInHome
    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Login Page</h2>
        <label>Username</label>
        <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
