import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ViewPosts from './ViewPosts';
import Home from './Home';
import AddPost from './AddPost.jsx'

function App() {
  
  return (
    <>
      <div id="container">
        <h1></h1>
      <div id="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/viewposts">
          View Posts
        </Link>
        <Link to="/addpost">
          Add Post
        </Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewposts" element={<ViewPosts />} />
          <Route path="/addpost" element={<AddPost />} />
        </Routes>
      </div>
      </div>
     </>
  )
}

export default App;
