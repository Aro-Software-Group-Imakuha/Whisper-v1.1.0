import React, { useState } from 'react';

const CommentPost = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="comment-post">
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          required
        />
        <button type="submit">Comment</button>
      </form>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default CommentPost;
