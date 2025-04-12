import React, { useState } from 'react';

const MemberList = ({ serverIndex, servers, setServers }) => {
    const [members, setMembers] = useState(servers[serverIndex].members || []);

    const addMember = (memberName) => {
        if (memberName.trim() === '') return;
        const updatedServers = [...servers];
        updatedServers[serverIndex].members.push({ name: memberName });
        setServers(updatedServers);
        setMembers(updatedServers[serverIndex].members);
    };

    const removeMember = (memberIndex) => {
        const updatedServers = [...servers];
        updatedServers[serverIndex].members.splice(memberIndex, 1);
        setServers(updatedServers);
        setMembers(updatedServers[serverIndex].members);
    };

    return (
        <div className="member-list">
            <h2>Community Members</h2>
            <input
                type="text"
                placeholder="Enter member name"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addMember(e.target.value);
                        e.target.value = '';
                    }
                }}
            />
            <div className="members">
                {members.map((member, index) => (
                    <div key={index} className="member">
                        {member.name}
                        <button onClick={() => removeMember(index)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberList;
