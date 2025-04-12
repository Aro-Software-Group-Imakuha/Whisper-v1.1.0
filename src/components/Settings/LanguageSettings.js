import React, { useState } from 'react';

const LanguageSettings = () => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        // Save the selected language to local storage or send it to the server
        localStorage.setItem('language', event.target.value);
    };

    return (
        <div className="language-settings">
            <h2>Language Settings</h2>
            <label>
                <input
                    type="radio"
                    value="en"
                    checked={language === 'en'}
                    onChange={handleLanguageChange}
                />
                English
            </label>
            <label>
                <input
                    type="radio"
                    value="ja"
                    checked={language === 'ja'}
                    onChange={handleLanguageChange}
                />
                Japanese
            </label>
        </div>
    );
};

export default LanguageSettings;
