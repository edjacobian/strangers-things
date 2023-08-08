import React, { useState, useEffect } from 'react';
import './App.css';

// Create variables for API_URL
const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function App() {
  const [posts, setPosts] = useState([]);
// Fetch (GET) data from the API
  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then(response => response.json())
      .then(data => {
        setPosts(data.data.posts);
        // console.log(data.data.posts);
      })
      .catch(error => {
        console.error('Error getting posts', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
