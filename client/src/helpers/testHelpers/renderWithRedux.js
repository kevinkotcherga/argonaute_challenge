import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { configureStore } from '@reduxjs/toolkit';
import argonautesReducer from '../../features/argonaute/argonautesSlice';

// Cette fonction permet de faire des tests avec le store de redux
export function renderWithRedux(renderedComponent) {
	const store = configureStore({
		reducer: {
			argonautes: argonautesReducer,
		},
	});
	return render(<Provider store={store}>{renderedComponent}</Provider>);
}
