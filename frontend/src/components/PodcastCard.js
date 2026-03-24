import React from 'react';

function PodcastCard({ podcast }) {
  const image = podcast.images?.[0]?.url;

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '15px',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      {image && (
        <img
          src={image}
          alt={podcast.name}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      )}
      <h3 style={{ fontSize: '14px', margin: '10px 0 5px' }}>
        {podcast.name}
      </h3>
      <p style={{ fontSize: '12px', color: '#666' }}>
        {podcast.publisher}
      </p>
      <p style={{ fontSize: '12px', color: '#1DB954' }}>
        {podcast.total_episodes} épisodes
      </p>
    </div>
  );
}

export default PodcastCard;