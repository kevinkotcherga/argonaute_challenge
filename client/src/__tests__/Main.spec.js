import { screen } from '@testing-library/react';
import Main from '../components/main/Main';

// Importation de la fonction permetant de faire des tests avec redux
import { renderWithRedux } from '../helpers/testHelpers/renderWithRedux';

test('usernam input should be rendered', () => {
	renderWithRedux(<Main />);
	const userInputEl = screen.getByTestId('name');
	expect(userInputEl).toBeInTheDocument();
});
