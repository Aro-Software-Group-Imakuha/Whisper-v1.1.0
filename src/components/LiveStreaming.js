import React, { useState, useEffect } from 'react';

const LiveStreaming = () => {
    const [isStreaming, setIsStreaming] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        // Initialize live streaming setup here
    }, []);

    const startStreaming = () => {
        setIsStreaming(true);
        // Add logic to start live streaming
    };

    const stopStreaming = () => {
        setIsStreaming(false);
        // Add logic to stop live streaming
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const submitComment = () => {
        if (newComment.trim() === '') return;
        setComments([...comments, newComment]);
        setNewComment('');
    };

    return (
        <div className="live-streaming">
            <h2>Live Streaming</h2>
            {isStreaming ? (
                <div>
                    <button onClick={stopStreaming}>Stop Streaming</button>
                    <div className="comments-section">
                        <h3>Comments</h3>
                        <div className="comments-list">
                            {comments.map((comment, index) => (
                                <div key={index} className="comment">
                                    {comment}
                                </div>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={newComment}
                            onChange={handleCommentChange}
                            placeholder="Type a comment"
                        />
                        <button onClick={submitComment}>Submit</button>
                    </div>
                </div>
            ) : (
                <button onClick={startStreaming}>Start Streaming</button>
            )}
        </div>
    );
};

export default LiveStreaming;
