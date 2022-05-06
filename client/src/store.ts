import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Argonaute contient 'name' qui ne sera que de type string, ça permet de ne pas envoyer
// n'importe quoi à la db
export type argonaute = {
	name: string
};

// ArgonautesSliceState est un tableau de argonaute à éxécuter
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
			// Quand l'action est appelée, le state est récupéré (la data, de base Argonaute[] vide)
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

// 4) EXPORT
// Les reducers sont exportés pour être utilisé dans les composants
export const { addArgonaute, setArgonautesData } = ArgonautesSlice.actions;

// STORE
// Tous les reducers sont stockés ici dans le store
const store = configureStore({
  reducer: {
    argonautes: ArgonautesSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

// selectArgonautes récupère la data du state dans redux
export const selectArgonautes = (state: RootState) => state.argonautes.argonautes;

export default store;
