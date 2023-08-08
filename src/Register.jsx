import React, { useState } from 'react';

const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Registration successful');
        // You can redirect the user to another page here
      } else {
        console.error('Registration failed:', data.error.message);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div id="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
