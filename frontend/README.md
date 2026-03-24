# 🎙️ Spotify Podcast Explorer

> **Application Fullstack développée dans le cadre du module "Développement Front-End & Architecture".**
> Ce projet sert de socle technique pour l'intégration de services externes (Python) et la mise en place d'une pipeline CI/CD.

## 📝 Description du Projet

Spotify Podcast Explorer est une plateforme web permettant de rechercher, filtrer et explorer les meilleurs podcasts disponibles sur Spotify.

Le projet est divisé en deux parties :
1. **Frontend (React / Redux Toolkit) :** L'interface utilisateur interactive. La gestion d'état est centralisée via un store Redux unique.
2. **Backend (Proxy Node.js / Express) :** Une API intermédiaire sécurisée (CORS, Rate Limiting) chargée de masquer les clés secrètes et d'interroger l'API publique de Spotify.

---

## 🔧 Stack Technique

* **Frontend :** React.js, Redux Toolkit, React-Redux
* **Backend :** Node.js, Express.js
* **Qualité & Tests :** Jest / React Testing Library
* **Déploiement :** Vercel pour le Front, Render pour le Back

---

## ⚙️ Installation & Lancement (Local)

### Prérequis
* Node.js (v16 ou supérieur)
* L'extension navigateur **Redux DevTools** installée pour le débogage

### 1. Configuration du Backend (Proxy)
```bash
cd backend
npm install
```

Créez un fichier `.env` à la racine du dossier `backend` :
```env
PORT=5000
SPOTIFY_CLIENT_ID=votre_client_id
SPOTIFY_CLIENT_SECRET=votre_client_secret
```

Lancez le serveur :
```bash
node index.js
```

### 2. Configuration du Frontend
```bash
cd frontend
npm install
npm start
```

L'application sera accessible sur `http://localhost:3000`.

---

## 🗂️ Architecture du State Redux
```javascript
{
  podcasts: {
    items: [],        // Liste des podcasts récupérés depuis l'API
    loading: false,   // État de chargement
    error: null,      // Gestion des erreurs
    searchQuery: "",  // Requête de recherche
    category: "all"   // Catégorie sélectionnée
  }
}
```

---

## 🔌 API Reference (Pour l'équipe Python)

### `GET /api/podcasts`
* **Description :** Récupère les podcasts depuis l'API Spotify.
* **Paramètres :** `?search=technology`

### `GET /api/export`
* **Description :** Renvoie un résumé JSON structuré pour l'automatisation Python.
* **Exemple de réponse :**
```json
{
  "exportDate": "2026-03-24T12:00:00Z",
  "totalItems": 42,
  "topResults": []
}
```