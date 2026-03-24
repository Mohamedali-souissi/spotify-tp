import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import SearchBar from './components/SearchBar';
import PodcastList from './components/PodcastList';

function App() {
  return (
    <Provider store={store}>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: 'white',
        padding: '40px'
      }}>
        <h1 style={{ color: '#1DB954', textAlign: 'center' }}>
          🎙️ Spotify Podcast Explorer
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <SearchBar />
        </div>
        <PodcastList />
      </div>
    </Provider>
  );
}

export default App;