import React, { useState } from 'react';

const ContrastAdjustment = () => {
  const [contrast, setContrast] = useState(100);

  const handleContrastChange = (event) => {
    setContrast(event.target.value);
    document.documentElement.style.filter = `contrast(${event.target.value}%)`;
  };

  return (
    <div>
      <label htmlFor="contrast">Adjust Contrast:</label>
      <input
        type="range"
        id="contrast"
        name="contrast"
        min="50"
        max="150"
        value={contrast}
        onChange={handleContrastChange}
      />
    </div>
  );
};

export default ContrastAdjustment;
