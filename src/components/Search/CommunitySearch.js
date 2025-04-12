import React, { useState } from 'react';

const CommunitySearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <div className="community-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for communities..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CommunitySearch;
