import React, { useState } from 'react';

const ServerSettings = ({ serverIndex, servers, setServers }) => {
    const [serverName, setServerName] = useState(servers[serverIndex].name);
    const [serverDescription, setServerDescription] = useState(servers[serverIndex].description || '');

    const handleServerNameChange = (event) => {
        setServerName(event.target.value);
    };

    const handleServerDescriptionChange = (event) => {
        setServerDescription(event.target.value);
    };

    const saveSettings = () => {
        const updatedServers = [...servers];
        updatedServers[serverIndex].name = serverName;
        updatedServers[serverIndex].description = serverDescription;
        setServers(updatedServers);
        alert('Server settings saved!');
    };

    return (
        <div className="server-settings">
            <h2>Server Settings</h2>
            <label>
                Server Name:
                <input
                    type="text"
                    value={serverName}
                    onChange={handleServerNameChange}
                />
            </label>
            <label>
                Server Description:
                <textarea
                    value={serverDescription}
                    onChange={handleServerDescriptionChange}
                />
            </label>
            <button onClick={saveSettings}>Save Settings</button>
        </div>
    );
};

export default ServerSettings;
