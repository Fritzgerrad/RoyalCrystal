import React, { useState } from 'react'
import Header from './Header'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simple validation for demonstration purposes
    if (username === 'example' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
    <Header page='login'/>

    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {loggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <div>
          <h2>Login</h2>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '200px',
              margin: 'auto',
            }}
          >
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
    </>
  );
};
      
