import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ViewPosts from './ViewPosts';

function App() {
  return (
    <>
      <div className="App">
        {/* Navigation bar */}
        <nav>
          <ul>
            <li>
              <Link to="./ViewPosts">View Posts</Link>
            </li>
          </ul>
        </nav>
        <h2>Welcome To</h2>
        <h1>Stranger's Things Marketplace</h1>
        <Routes>
          <Route path="/viewposts" element={<ViewPosts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
