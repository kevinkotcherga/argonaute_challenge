import { createSlice } from '@reduxjs/toolkit';

export const argonautesSlice = createSlice({
	// 1) UN NOM
	name: 'argonautes',
	// 2) STATE DE BASE
	initialState: {
    // Le state de base est nul, il sera ensuite incrémenté avec la base de donnée
    argonautes: null,
  },
	// 3) REDUCERS
	reducers: {
		// GET
		setArgonautesData: (state, action) => {
			// Quand l'action est appelée, le state est récupéré (la data, au début de base nul)
			// action.payload sont les données que l'on récupère en paramètre
			state.argonautes = action.payload;
		},
		// CREATE
		addArgonaute: (state, action) => {
			// push ajoute l'action que l'on récupère en paramètre au state
			state.argonautes.push(action.payload);
		},
	},
});

// 4) EXPORT
// Les reducers sont exportés pour être utilisé dans les composants
export const { setArgonautesData, addArgonaute } =
	argonautesSlice.actions;

export default argonautesSlice.reducer;
