import React, { useState } from 'react';

const UserProfile = () => {
    const [profile, setProfile] = useState({
        displayName: 'User123',
        bio: 'This is my bio',
        profilePicture: 'https://example.com/profile.jpg'
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfile({ ...profile, profilePicture: reader.result });
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className="profile-picture">
                <img src={profile.profilePicture} alt="Profile" />
                <input type="file" onChange={handleProfilePictureChange} />
            </div>
            <div className="profile-details">
                <label>
                    Display Name:
                    <input
                        type="text"
                        name="displayName"
                        value={profile.displayName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Bio:
                    <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default UserProfile;
