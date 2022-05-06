// Importation des configurations
const mongoose = require('mongoose');

// Le model d'Argonaute contiendra obligatoirement un nom de type "string" pour être valide
const ArgonauteSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true, lowercase: true },
	},
	{ timestamps: true },
);

// Exportation du model
module.exports = mongoose.model('Argonaute', ArgonauteSchema);
