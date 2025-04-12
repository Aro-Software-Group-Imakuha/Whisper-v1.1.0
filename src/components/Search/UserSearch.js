import React, { useState } from 'react';

const UserSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <div className="user-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for users..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default UserSearch;
