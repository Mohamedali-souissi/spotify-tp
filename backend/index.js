const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware CORS
app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware Rate Limiting
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { error: 'Trop de requêtes, réessaie dans une minute.' }
});
app.use(limiter);

app.use(express.json());

// Routes
const spotifyRoutes = require('./routes/spotify');
app.use('/api', spotifyRoutes);

// Middleware erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Erreur serveur' });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});