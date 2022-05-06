// Importation des configurations
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
// dotenv permet de récupérer les informations inscrits dans .env
const dotenv = require('dotenv');
dotenv.config();

// Importation des routes
const argonauteRoute = require('./routes/argonaute');

// Importation de la DB mongoDB avec mongoose
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DBconnextion Successfull!'))
	.catch(err => console.log(err));

// Connexion aux routes
app.use(cors());
app.use(express.json());
app.use('/argonautes', argonauteRoute);

// Connexion au serveur
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!")
})

// Configuration pour heroku
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});
