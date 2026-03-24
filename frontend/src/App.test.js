import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Store de test simplifié sans axios
const testStore = configureStore({
  reducer: {
    podcasts: (state = { items: [], loading: false, error: null }, action) => state
  }
});

import App from './App';

// Test 1 : Le titre s'affiche correctement
test('affiche le titre Spotify Podcast Explorer', () => {
  render(
    <Provider store={testStore}>
      <App />
    </Provider>
  );
  const titre = screen.getByText(/Spotify Podcast Explorer/i);
  expect(titre).toBeInTheDocument();
});

// Test 2 : La barre de recherche s'affiche
test('affiche la barre de recherche', () => {
  render(
    <Provider store={testStore}>
      <App />
    </Provider>
  );
  const searchBar = screen.getByPlaceholderText(/Rechercher un podcast/i);
  expect(searchBar).toBeInTheDocument();
});

// Test 3 : Le bouton Rechercher s'affiche
test('affiche le bouton Rechercher', () => {
  render(
    <Provider store={testStore}>
      <App />
    </Provider>
  );
  const bouton = screen.getByText(/Rechercher/i);
  expect(bouton).toBeInTheDocument();
});