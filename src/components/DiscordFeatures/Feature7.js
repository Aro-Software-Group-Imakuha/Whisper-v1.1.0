import React, { useState } from 'react';

const Feature7 = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');

  const handleAddRole = () => {
    if (newRole.trim() !== '') {
      setRoles([...roles, newRole]);
      setNewRole('');
    }
  };

  return (
    <div>
      <h2>Discord-like Role Management Feature</h2>
      <input
        type="text"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        placeholder="Enter role name"
      />
      <button onClick={handleAddRole}>Add Role</button>
      <ul>
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feature7;
