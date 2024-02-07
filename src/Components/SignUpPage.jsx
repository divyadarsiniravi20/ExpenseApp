import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = ({ onSignUp }) => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email) => {
    // You can add your email validation logic here
    // For simplicity, let's check if it contains '@'
    return email.includes('@');
  };

  const handleSignUp = () => {
    if (isEmailValid(email)) {
      // Perform user registration only if the email is valid
      // For simplicity, let's assume successful signup and call onSignUp
      nav('/fet');
      // onSignUp(username, email);
    } else {
      alert('Invalid email. Please enter a valid email address.');
    }
  };

  return (
    <div className='wrapper'>
      <h2>Sign Up</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
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
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
