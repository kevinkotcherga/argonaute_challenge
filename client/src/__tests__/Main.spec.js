import { fireEvent, screen } from '@testing-library/react';
import Main from '../components/main/Main';

// Importation de la fonction permetant de faire des tests avec redux
import { renderWithRedux } from '../helpers/testHelpers/renderWithRedux';

test('name input should be exist', () => {
	renderWithRedux(<Main />);
	const nameInputEl = screen.getByTestId('name');
	expect(nameInputEl).toBeInTheDocument();
});

test('button should be exist', () => {
  renderWithRedux(<Main />);
	const buttonEl = screen.getByRole('button');
	expect(buttonEl).toBeInTheDocument();
});

test('name input should be empty', () => {
	renderWithRedux(<Main />);
	const nameInputEl = screen.getByTestId('name');
	expect(nameInputEl.value).toBe('');
});

test('error message should not be visible', () => {
	renderWithRedux(<Main />);
	const errorEl = screen.getByTestId('error');
	expect(errorEl).not.toBeVisible();
});

test('name input should change', () => {
	renderWithRedux(<Main />);
	const nameInputEl = screen.getByTestId('name');
	const testValue = 'test';

	fireEvent.change(nameInputEl, { target: { value: testValue } });
	expect(nameInputEl.value).toBe(testValue);
});
