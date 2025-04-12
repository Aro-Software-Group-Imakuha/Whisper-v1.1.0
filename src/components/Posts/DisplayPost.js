import React from 'react';

const DisplayPost = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post image" />}
      {post.video && <video src={post.video} controls />}
      <div className="post-interactions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default DisplayPost;
