import React, { useState, useEffect } from 'react';

const DirectMessages = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [readStatus, setReadStatus] = useState({});

    useEffect(() => {
        // Fetch messages from the server or local storage
        const fetchedMessages = [
            { id: 1, content: 'Hello!', read: true },
            { id: 2, content: 'How are you?', read: false }
        ];
        setMessages(fetchedMessages);
        const initialReadStatus = fetchedMessages.reduce((acc, message) => {
            acc[message.id] = message.read;
            return acc;
        }, {});
        setReadStatus(initialReadStatus);
    }, []);

    const sendMessage = () => {
        if (newMessage.trim() === '') return;
        const newMsg = { id: messages.length + 1, content: newMessage, read: false };
        setMessages([...messages, newMsg]);
        setNewMessage('');
    };

    const markAsRead = (id) => {
        setReadStatus({ ...readStatus, [id]: true });
    };

    return (
        <div className="direct-messages">
            <div className="messages-list">
                {messages.map(message => (
                    <div key={message.id} className={`message ${readStatus[message.id] ? 'read' : 'unread'}`}>
                        {message.content}
                        {!readStatus[message.id] && (
                            <button onClick={() => markAsRead(message.id)}>Mark as Read</button>
                        )}
                    </div>
                ))}
            </div>
            <div className="new-message">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default DirectMessages;
