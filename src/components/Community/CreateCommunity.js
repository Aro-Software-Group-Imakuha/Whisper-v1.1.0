import React, { useState } from 'react';

const CreateCommunity = ({ onCreate }) => {
    const [communityName, setCommunityName] = useState('');
    const [description, setDescription] = useState('');

    const handleCreate = () => {
        if (communityName && description) {
            onCreate({ name: communityName, description });
            setCommunityName('');
            setDescription('');
        }
    };

    return (
        <div className="create-community">
            <h2>Create a Community</h2>
            <input
                type="text"
                placeholder="Community Name"
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleCreate}>Create</button>
        </div>
    );
};

export default CreateCommunity;
