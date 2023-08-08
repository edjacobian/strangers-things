import { useEffect, useState } from "react";
// Create variables for API_URL
const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function ViewPosts() {
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
      <ol>
        {posts.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default ViewPosts