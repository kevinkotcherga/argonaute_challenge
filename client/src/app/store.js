import { configureStore } from '@reduxjs/toolkit';
import argonautesReducer from '../feature/argonautesSlice';

export default configureStore({
	// Tous les reducers sont stockés ici
	reducer: {
		// picturesReducer est récupé depuis le slice
		argonautes: argonautesReducer,
	},
});
