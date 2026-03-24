import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPodcasts } from '../features/podcasts/podcastsSlice';
import PodcastCard from './PodcastCard';

function PodcastList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.podcasts);

  useEffect(() => {
    dispatch(fetchPodcasts('technology'));
  }, [dispatch]);

  if (loading) return <p style={{ color: '#1DB954' }}>Chargement...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>;

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center'
    }}>
      {items.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
}

export default PodcastList;