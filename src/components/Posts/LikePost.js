import React, { useState } from 'react';

const LikePost = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      <p>{likes} {likes === 1 ? 'like' : 'likes'}</p>
    </div>
  );
};

export default LikePost;
