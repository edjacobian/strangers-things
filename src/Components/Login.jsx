import React, { useState } from 'react';

function Login({ onTokenChange }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Here, you would perform the actual login API call
      // For demonstration purposes, let's assume a successful login
      const fakeToken = 'fake-access-token';

      // Call the parent component's callback to update the token
      onTokenChange(fakeToken);
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div>
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
