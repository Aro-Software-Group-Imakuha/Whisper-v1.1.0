import React, { useState } from 'react';

const InviteLinks = () => {
    const [inviteLinks, setInviteLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    const generateInviteLink = () => {
        const link = `https://whisper.com/invite/${Math.random().toString(36).substr(2, 9)}`;
        setInviteLinks([...inviteLinks, link]);
    };

    const handleNewLinkChange = (event) => {
        setNewLink(event.target.value);
    };

    const addInviteLink = () => {
        if (newLink.trim() === '') return;
        setInviteLinks([...inviteLinks, newLink]);
        setNewLink('');
    };

    return (
        <div className="invite-links">
            <h2>Invite Links</h2>
            <button onClick={generateInviteLink}>Generate Invite Link</button>
            <input
                type="text"
                value={newLink}
                onChange={handleNewLinkChange}
                placeholder="Enter invite link"
            />
            <button onClick={addInviteLink}>Add Invite Link</button>
            <div className="links-list">
                {inviteLinks.map((link, index) => (
                    <div key={index} className="link">
                        {link}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InviteLinks;
