import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ViewPostDetails from './ViewPostDetails';
import DeleteButton from './DeleteButton'; // Import the DeleteButton component

const COHORT_NAME = '2306-FSA-ET-WEB-FT-SF';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function ViewPosts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

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
    // console.log('Clicked post:', post);

    setSelectedPost(post);
  };

  const handleDeleteClick = async (postId) => {
    try {
      // console.log('Deleting post:', postId);
      const response = await fetch(`${API_URL}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your access token
        },
      });

      if (response.ok) {
        // Remove the deleted post from the list
        setPosts(posts.filter(post => post._id !== postId));
        setSelectedPost(null); // Clear selected post details
      } else {
        console.error('Error deleting post');
      }
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  return (
    <div className="posts">
      <h1>Posts</h1>
      <ol>
        {posts.map(post => (
          <li key={post._id}>
            <Link to="#" onClick={() => handlePostClick(post)}>
              {post.title}
            </Link>
            <DeleteButton onClick={() => handleDeleteClick(post._id)} />
          </li>
        ))}
      </ol>
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
