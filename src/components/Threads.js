import React, { useState } from 'react';

const Threads = () => {
    const [threads, setThreads] = useState([]);
    const [newThreadTitle, setNewThreadTitle] = useState('');

    const createThread = () => {
        if (newThreadTitle.trim() === '') return;
        setThreads([...threads, { title: newThreadTitle, posts: [] }]);
        setNewThreadTitle('');
    };

    const addPostToThread = (threadIndex, postContent) => {
        const updatedThreads = [...threads];
        updatedThreads[threadIndex].posts.push(postContent);
        setThreads(updatedThreads);
    };

    return (
        <div className="threads">
            <h2>Threads</h2>
            <div className="create-thread">
                <input
                    type="text"
                    value={newThreadTitle}
                    onChange={(e) => setNewThreadTitle(e.target.value)}
                    placeholder="Thread title"
                />
                <button onClick={createThread}>Create Thread</button>
            </div>
            <div className="threads-list">
                {threads.map((thread, index) => (
                    <div key={index} className="thread">
                        <h3>{thread.title}</h3>
                        <div className="posts">
                            {thread.posts.map((post, idx) => (
                                <div key={idx} className="post">
                                    {post}
                                </div>
                            ))}
                        </div>
                        <div className="add-post">
                            <input
                                type="text"
                                placeholder="Post content"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        addPostToThread(index, e.target.value);
                                        e.target.value = '';
                                    }
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Threads;
