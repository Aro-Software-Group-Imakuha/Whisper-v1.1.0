import React, { useState } from 'react';

const Feature1 = () => {
  const [channels, setChannels] = useState([]);
  const [newChannel, setNewChannel] = useState('');

  const handleAddChannel = () => {
    if (newChannel.trim() !== '') {
      setChannels([...channels, newChannel]);
      setNewChannel('');
    }
  };

  return (
    <div>
      <h2>Discord-like Channel Feature</h2>
      <input
        type="text"
        value={newChannel}
        onChange={(e) => setNewChannel(e.target.value)}
        placeholder="Enter channel name"
      />
      <button onClick={handleAddChannel}>Add Channel</button>
      <ul>
        {channels.map((channel, index) => (
          <li key={index}>{channel}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feature1;
