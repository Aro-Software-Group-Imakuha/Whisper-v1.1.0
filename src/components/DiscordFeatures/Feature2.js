import React, { useState } from 'react';

const Feature2 = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState('');

  const handleAddMember = () => {
    if (newMember.trim() !== '') {
      setMembers([...members, newMember]);
      setNewMember('');
    }
  };

  return (
    <div>
      <h2>Discord-like Member Management Feature</h2>
      <input
        type="text"
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
        placeholder="Enter member name"
      />
      <button onClick={handleAddMember}>Add Member</button>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feature2;
