import React from 'react';

const ViewPostDetails = ({ post }) => {
  // console.log('ViewPostDetails component stuff');
  return (
    <div id='postdetails'>
      <h2>{post.title}</h2>
      <p>Description: {post.description}</p>
      <p>Price: {post.price}</p>
      <p>Location: {post.location || 'On Request'}</p>
      <p>Will Deliver: {post.willDeliver ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default ViewPostDetails;
