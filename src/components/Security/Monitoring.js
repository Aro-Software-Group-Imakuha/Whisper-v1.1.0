import React, { useState, useEffect } from 'react';

const SecurityMonitoring = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Fetch security logs from the server or local storage
        const fetchedLogs = [
            { id: 1, type: 'login', content: 'User1 logged in' },
            { id: 2, type: 'passwordChange', content: 'User2 changed password' },
            { id: 3, type: 'failedLogin', content: 'Failed login attempt detected' }
        ];
        setLogs(fetchedLogs);
    }, []);

    return (
        <div className="security-monitoring">
            <h2>Security Monitoring</h2>
            <div className="logs-list">
                {logs.map(log => (
                    <div key={log.id} className="log">
                        {log.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecurityMonitoring;
