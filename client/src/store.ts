import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Argonaute contient 'name' qui ne sera que de type string
export type argonaute = {
	name: string
};

// ArgonautesSliceState est un tableau à éxécuter
interface ArgonautesSliceState {
  argonautes: argonaute[];
}

// initialState a un nombre vide d'argonautes
const initialState: ArgonautesSliceState = {
  argonautes: [],
};

// SLICE
export const ArgonautesSlice = createSlice({
  // 1) UN NOM
  name: "argonautes",
  // 2) STATE DE BASE, Argonaute[] vide
  initialState,
  // 3) REDUCERS
  reducers: {
    // GET
		setArgonautesData: (state, action) => {
			// Quand l'action est appelée, le state est récupéré (la data, au début de base nul)
			// action.payload sont les données que l'on récupère en paramètre
			state.argonautes = action.payload;
		},
    // CREATE
    addArgonaute: (state, action: PayloadAction<string>) => {
      state.argonautes = [
        ...state.argonautes,
        {
          name: action.payload,
        },
      ];
    },
  },
});
