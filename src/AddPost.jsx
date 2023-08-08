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
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Will Deliver:</label>
          <input type="checkbox" checked={willDeliver} onChange={(e) => setWillDeliver(e.target.checked)} />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
