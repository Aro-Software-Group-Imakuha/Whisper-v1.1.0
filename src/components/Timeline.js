import React, { useState, useEffect } from 'react';

const Timeline = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from the server or local storage
        const fetchedPosts = [
            { id: 1, type: 'text', content: 'Hello, world!' },
            { id: 2, type: 'image', content: 'https://example.com/image.jpg' },
            { id: 3, type: 'video', content: 'https://example.com/video.mp4' }
        ];
        setPosts(fetchedPosts);
    }, []);

    const renderPost = (post) => {
        switch (post.type) {
            case 'text':
                return <div className="post">{post.content}</div>;
            case 'image':
                return <div className="post"><img src={post.content} alt="Post" /></div>;
            case 'video':
                return (
                    <div className="post">
                        <video src={post.content} controls />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="timeline">
            {posts.map(post => (
                <div key={post.id}>
                    {renderPost(post)}
                </div>
            ))}
        </div>
    );
};

export default Timeline;
