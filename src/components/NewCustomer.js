import React,{useState} from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';


export default function NewCustomer() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    // Simple validation for demonstration purposes
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Here you would typically send the user data to a server for registration
    // For simplicity, we'll just log the user details to the console
    console.log('User Registered:', { username, password });
  };

  return (
    <div>
      <Header page='signup' />
      <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>

    </div>
  )
}
