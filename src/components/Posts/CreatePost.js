import React, { useState } from 'react';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    console.log('Post submitted:', { content, image, video });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="What's on your mind?"
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
