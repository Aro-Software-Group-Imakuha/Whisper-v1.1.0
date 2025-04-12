import React, { useState, useEffect } from 'react';

const Hashtags = () => {
    const [hashtags, setHashtags] = useState([]);
    const [trending, setTrending] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Fetch hashtags and trending topics from the server or local storage
        const fetchedHashtags = ['#React', '#JavaScript', '#WebDevelopment'];
        const fetchedTrending = ['#React', '#JavaScript'];
        setHashtags(fetchedHashtags);
        setTrending(fetchedTrending);
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        const results = hashtags.filter(hashtag => hashtag.includes(searchQuery));
        setSearchResults(results);
    };

    return (
        <div className="hashtags">
            <h2>Hashtags</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search hashtags..."
                />
                <button type="submit">Search</button>
            </form>
            <div className="trending">
                <h3>Trending Topics</h3>
                {trending.map((hashtag, index) => (
                    <div key={index} className="hashtag">
                        {hashtag}
                    </div>
                ))}
            </div>
            <div className="search-results">
                <h3>Search Results</h3>
                {searchResults.map((result, index) => (
                    <div key={index} className="hashtag">
                        {result}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hashtags;
