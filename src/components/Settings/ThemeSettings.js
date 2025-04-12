import React, { useState } from 'react';

const ThemeSettings = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    document.documentElement.setAttribute('data-theme', event.target.value);
  };

  return (
    <div>
      <h2>Theme Settings</h2>
      <label>
        <input
          type="radio"
          value="light"
          checked={theme === 'light'}
          onChange={handleThemeChange}
        />
        Light Mode
      </label>
      <label>
        <input
          type="radio"
          value="dark"
          checked={theme === 'dark'}
          onChange={handleThemeChange}
        />
        Dark Mode
      </label>
    </div>
  );
};

export default ThemeSettings;
