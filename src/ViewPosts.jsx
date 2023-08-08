import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ViewPostDetails from "./ViewPostDetails"; // Import the details component

const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function ViewPosts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // New state for selected post

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then(response => response.json())
      .then(data => {
        setPosts(data.data.posts);
      })
      .catch(error => {
        console.error('Error getting posts', error);
      });
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="posts">
      <h1>Posts</h1>
      <ol>
        {posts.map(post => (
          <li key={post._id}>
            {/* Use Link to wrap each post title */}
            <Link to="#" onClick={() => handlePostClick(post)}>
              {post.title}
            </Link>
          </li>
        ))}
      </ol>
      {/* Display selected post details */}
      {selectedPost && (
        <div>
          <h2>Post Details</h2>
          <ViewPostDetails post={selectedPost} />
        </div>
      )}
    </div>
  );
}

export default ViewPosts;
