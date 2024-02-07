import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const nav = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email) => {
    // You can add your email validation logic here
    // For simplicity, let's check if it contains '@'
    return email.includes('@');
  };

  const isPasswordValid = (password) => {
    // You can add your password validation logic here
    // For simplicity, let's check if it's not empty
    return password.trim() !== '';
  };

  const handleLogin = () => {
    if (isEmailValid(email) && isPasswordValid(password)) {
      // Perform authentication only if both email and password are valid
      // For simplicity, let's assume successful login and call onLogin
      nav('/fet');
      // onLogin(email);
    } else {
      alert('Invalid email or password. Please enter valid credentials.');
    }
  };

  const handleSignUp = () => {
    nav('/sign');
  };

  return (
    <div className='wrapper'>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <br />
        <label>or</label>
        <button type="button" onClick={handleSignUp}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default LoginPage;


