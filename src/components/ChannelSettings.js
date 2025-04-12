import React, { useState } from 'react';

const ChannelSettings = ({ channelIndex, serverIndex, servers, setServers }) => {
    const [channelName, setChannelName] = useState(servers[serverIndex].channels[channelIndex].name);
    const [channelDescription, setChannelDescription] = useState(servers[serverIndex].channels[channelIndex].description || '');

    const handleChannelNameChange = (event) => {
        setChannelName(event.target.value);
    };

    const handleChannelDescriptionChange = (event) => {
        setChannelDescription(event.target.value);
    };

    const saveSettings = () => {
        const updatedServers = [...servers];
        updatedServers[serverIndex].channels[channelIndex].name = channelName;
        updatedServers[serverIndex].channels[channelIndex].description = channelDescription;
        setServers(updatedServers);
        alert('Channel settings saved!');
    };

    return (
        <div className="channel-settings">
            <h2>Channel Settings</h2>
            <label>
                Channel Name:
                <input
                    type="text"
                    value={channelName}
                    onChange={handleChannelNameChange}
                />
            </label>
            <label>
                Channel Description:
                <textarea
                    value={channelDescription}
                    onChange={handleChannelDescriptionChange}
                />
            </label>
            <button onClick={saveSettings}>Save Settings</button>
        </div>
    );
};

export default ChannelSettings;
