// Importation des configurations
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
// dotenv permet de récupérer les informations inscritent dans .env
const dotenv = require('dotenv');
dotenv.config();

// Importation de la DB mongodb avec mongoose
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DBconnextion Successfull!'))
	.catch(err => console.log(err));

// Connexion au serveur
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!")
})
