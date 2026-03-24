import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPodcasts, setSearchQuery } from '../features/podcasts/podcastsSlice';

function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSearch = () => {
    dispatch(setSearchQuery(input));
    dispatch(fetchPodcasts(input));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Rechercher un podcast..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{
          padding: '10px',
          width: '300px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '10px 20px',
          backgroundColor: '#1DB954',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Rechercher
      </button>
    </div>
  );
}

export default SearchBar;