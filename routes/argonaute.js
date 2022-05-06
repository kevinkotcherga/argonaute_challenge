// Importation des configurations
const express = require('express');
const router = express.Router();

// Importation du model Argonaute
const Argonaute = require('../models/Argonaute');

// GET ALL ARGONAUTES
router.get('/', async (req, res) => {
  // try est l'instruction à éxécuter
	try {
		const argonautes = await Argonaute.find();
    // Le resultat est affiché en format json
		res.status(200).json(argonautes);
    // catch est l'instruction à éxécuter si une exeption est levée dans le bloc try
	} catch (err) {
		res.status(500).json(err);
	}
});

// CREATE ARGONAUTE
router.post('/', async (req, res) => {
	const newArgonaute = new Argonaute(req.body);
	// try est l'instruction à éxécuter
	try {
		const savedArgonaute = await newArgonaute.save();
		// Le resultat est affiché en format json
		res.status(200).json(savedArgonaute);
		// catch est l'instruction à éxécuter si une expetion est levée dans le bloc try
	} catch (err) {
		res.status(500).json(err);
	}
});

// Exportation des routes
module.exports = router;
