const express = require('express');
const axios = require('axios');
const router = express.Router();

async function getSpotifyToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    'grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  return response.data.access_token;
}

router.get('/podcasts', async (req, res, next) => {
  try {
    const { search = 'technology' } = req.query;
    const token = await getSpotifyToken();

    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(search)}&type=show&limit=5&market=FR`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    res.json(response.data.shows.items);
  } catch (err) {
    console.log('Erreur complète:', err.response?.data);
    next(err);
  }
});

router.get('/podcasts/:id', async (req, res, next) => {
  try {
    const token = await getSpotifyToken();
    const response = await axios.get(
      `https://api.spotify.com/v1/shows/${req.params.id}?market=FR`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    res.json(response.data);
  } catch (err) {
    console.log('Erreur complète:', err.response?.data);
    next(err);
  }
});

router.get('/export', async (req, res, next) => {
  try {
    const token = await getSpotifyToken();
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=technology&type=show&limit=5&market=FR`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    res.json({
      exportDate: new Date().toISOString(),
      totalItems: response.data.shows.total,
      topResults: response.data.shows.items.map(show => ({
        id: show.id,
        name: show.name,
        publisher: show.publisher,
        episodes: show.total_episodes,
      }))
    });
  } catch (err) {
    console.log('Erreur complète:', err.response?.data);
    next(err);
  }
});

module.exports = router;