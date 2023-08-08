import React, { useState } from 'react';

function Login({ onTokenChange }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Perform the login API call
      const response = await fetch('https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // API call succeeded, response JSON
        const data = await response.json();
        const accessToken = data.access_token;
        onTokenChange(accessToken);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div id='login'>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
