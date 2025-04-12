import React, { useState } from 'react';

const Feature5 = () => {
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
      <h2>Role Management</h2>
      <input
        type="text"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        placeholder="Enter new role"
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

export default Feature5;
