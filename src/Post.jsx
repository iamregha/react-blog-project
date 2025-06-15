import React, { useState } from 'react';

function Post({ title, content }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={handleLike}>👍 Like ({likes})</button>
    </div>
  );
}

export default Post;
// This code defines a Post component that displays a blog post with a title, content, and a like button.
// The like button updates the number of likes using React's useState hook.