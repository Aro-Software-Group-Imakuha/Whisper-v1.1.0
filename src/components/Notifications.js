import React, { useState, useEffect } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [settings, setSettings] = useState({
        likes: true,
        comments: true,
        follows: true,
        dms: true,
        mentions: true,
        communityRequests: true
    });

    useEffect(() => {
        // Fetch notifications from the server or local storage
        const fetchedNotifications = [
            { id: 1, type: 'like', content: 'User1 liked your post' },
            { id: 2, type: 'comment', content: 'User2 commented on your post' },
            { id: 3, type: 'follow', content: 'User3 followed you' }
        ];
        setNotifications(fetchedNotifications);
    }, []);

    const handleSettingChange = (event) => {
        const { name, checked } = event.target;
        setSettings({ ...settings, [name]: checked });
    };

    return (
        <div className="notifications">
            <h2>Notifications</h2>
            <div className="settings">
                <h3>Notification Settings</h3>
                <label>
                    <input
                        type="checkbox"
                        name="likes"
                        checked={settings.likes}
                        onChange={handleSettingChange}
                    />
                    Likes
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="comments"
                        checked={settings.comments}
                        onChange={handleSettingChange}
                    />
                    Comments
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="follows"
                        checked={settings.follows}
                        onChange={handleSettingChange}
                    />
                    Follows
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="dms"
                        checked={settings.dms}
                        onChange={handleSettingChange}
                    />
                    Direct Messages
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mentions"
                        checked={settings.mentions}
                        onChange={handleSettingChange}
                    />
                    Mentions
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="communityRequests"
                        checked={settings.communityRequests}
                        onChange={handleSettingChange}
                    />
                    Community Requests
                </label>
            </div>
            <div className="notifications-list">
                {notifications.map(notification => (
                    <div key={notification.id} className="notification">
                        {notification.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
