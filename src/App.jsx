import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Posts from './Components/Posts';
import Home from './Components/Home';
import AddPost from './Components/AddPost.jsx';
import Register from './Register';
import Login from './Components/Login';

function App() {
  const [token, setToken] = useState(null);

  const handleTokenChange = (newToken) => {
    setToken(newToken);
  };

  return (
    <>
      <div id="container">
        <h1></h1>
      <div id="navbar">
        <Link to="/">
          Home
        </Link>
        {token ? (
          <>
            <Link to="/viewposts">
              View Posts
            </Link>
            <Link to="/addpost">
              Add Post
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">
              Register
            </Link>
            <Link to="/login">
              Login
            </Link>
          </>
        )}
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onTokenChange={handleTokenChange} />} />
          {token && <Route path="/viewposts" element={<ViewPosts token={token} />} />}
          {token && <Route path="/addpost" element={<AddPost token={token} />} />}
        </Routes>
      </div>
      </div>
     </>
  )
}

export default App;
