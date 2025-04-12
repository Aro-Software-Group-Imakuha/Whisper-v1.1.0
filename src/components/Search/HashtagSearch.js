import React, { useState } from 'react';

const HashtagSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <div className="hashtag-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for hashtags..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default HashtagSearch;
