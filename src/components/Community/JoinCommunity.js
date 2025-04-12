import React, { useState } from 'react';

const JoinCommunity = ({ communityId, onJoin }) => {
  const [joining, setJoining] = useState(false);
  const [error, setError] = useState(null);

  const handleJoin = async () => {
    setJoining(true);
    setError(null);

    try {
      // Simulate API call to join community
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onJoin(communityId);
    } catch (err) {
      setError('Failed to join community. Please try again.');
    } finally {
      setJoining(false);
    }
  };

  return (
    <div>
      <button onClick={handleJoin} disabled={joining}>
        {joining ? 'Joining...' : 'Join Community'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default JoinCommunity;
