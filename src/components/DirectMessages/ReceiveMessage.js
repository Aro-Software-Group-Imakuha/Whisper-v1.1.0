import React, { useEffect, useState } from 'react';
import { getDirectMessages } from '../../api/directMessages';

const ReceiveMessage = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getDirectMessages(userId);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [userId]);

  return (
    <div>
      <h2>Direct Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <p><strong>From:</strong> {message.senderName}</p>
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReceiveMessage;
