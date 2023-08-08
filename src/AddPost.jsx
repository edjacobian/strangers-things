import React, { useState } from 'react';

const AddPost = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPost = {
      title,
      description,
      price,
      location: location || '[On Request]',
      willDeliver,
    };

    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ post: newPost })
      });

      const responseData = await response.json();

      if (responseData.success) {
        // Post was successfully added
        console.log('Post added:', responseData.data.post);
        // Clear the form fields
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setWillDeliver(false);
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        {/* ... (other form inputs) ... */}
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
