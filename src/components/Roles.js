import React, { useState } from 'react';

const Roles = ({ serverIndex, servers, setServers }) => {
    const [roleName, setRoleName] = useState('');

    const handleRoleNameChange = (event) => {
        setRoleName(event.target.value);
    };

    const addRole = () => {
        if (roleName.trim() === '') return;
        const updatedServers = [...servers];
        updatedServers[serverIndex].roles.push({ name: roleName });
        setServers(updatedServers);
        setRoleName('');
    };

    const removeRole = (roleIndex) => {
        const updatedServers = [...servers];
        updatedServers[serverIndex].roles.splice(roleIndex, 1);
        setServers(updatedServers);
    };

    return (
        <div className="roles">
            <h2>Manage Roles</h2>
            <input
                type="text"
                value={roleName}
                onChange={handleRoleNameChange}
                placeholder="Enter role name"
            />
            <button onClick={addRole}>Add Role</button>
            <div className="roles-list">
                {servers[serverIndex].roles.map((role, index) => (
                    <div key={index} className="role">
                        {role.name}
                        <button onClick={() => removeRole(index)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roles;
