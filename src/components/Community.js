import React, { useState } from 'react';

const Community = () => {
    const [servers, setServers] = useState([]);
    const [channels, setChannels] = useState([]);
    const [roles, setRoles] = useState([]);

    const createServer = (serverName) => {
        setServers([...servers, { name: serverName, channels: [], roles: [] }]);
    };

    const createChannel = (serverIndex, channelName) => {
        const updatedServers = [...servers];
        updatedServers[serverIndex].channels.push({ name: channelName });
        setServers(updatedServers);
    };

    const createRole = (serverIndex, roleName) => {
        const updatedServers = [...servers];
        updatedServers[serverIndex].roles.push({ name: roleName });
        setServers(updatedServers);
    };

    return (
        <div className="community">
            <h2>Communities</h2>
            <div className="servers">
                {servers.map((server, index) => (
                    <div key={index} className="server">
                        <h3>{server.name}</h3>
                        <div className="channels">
                            <h4>Channels</h4>
                            {server.channels.map((channel, idx) => (
                                <div key={idx} className="channel">
                                    {channel.name}
                                </div>
                            ))}
                        </div>
                        <div className="roles">
                            <h4>Roles</h4>
                            {server.roles.map((role, idx) => (
                                <div key={idx} className="role">
                                    {role.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
