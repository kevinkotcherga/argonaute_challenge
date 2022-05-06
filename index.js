// Importation des configurations
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
// dotenv permet de récupérer les informations inscritent dans .env
const dotenv = require('dotenv');
dotenv.config();

// Connexion au serveur
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!")
})
