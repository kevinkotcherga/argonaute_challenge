import { screen } from '@testing-library/react';
import Main from '../components/main/Main';

// Importation de la fonction permetant de faire des tests avec redux
import { renderWithRedux } from '../helpers/testHelpers/renderWithRedux';

test('username input should be exist', () => {
	renderWithRedux(<Main />);
	const userInputEl = screen.getByTestId('name');
	expect(userInputEl).toBeInTheDocument();
});

test('button should be exist', () => {
  renderWithRedux(<Main />);
	const buttonEl = screen.getByRole('button');
	expect(buttonEl).toBeInTheDocument();
});

test('username input should be empty', () => {
	renderWithRedux(<Main />);
	const usernameInputEl = screen.getByTestId('name');
	expect(usernameInputEl.value).toBe('');
});
