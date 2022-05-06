import { configureStore } from '@reduxjs/toolkit';
import argonautesReducer from '../features/argonaute/argonautesSlice';

export default configureStore({
	// Tous les reducers sont stockés ici
	reducer: {
		// picturesReducer est récupé depuis le slice
		argonautes: argonautesReducer,
	},
});
