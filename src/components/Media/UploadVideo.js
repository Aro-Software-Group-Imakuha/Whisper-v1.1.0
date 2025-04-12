import React, { useState } from 'react';

const UploadVideo = () => {
  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to upload the video to the server
    console.log('Video uploaded:', video);
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={handleVideoChange} />
        {preview && <video src={preview} controls />}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadVideo;
