import { fireEvent, screen } from '@testing-library/react';
import Main from '../components//main/Main';
import MemberList from '../components/memberList/MemberList';

// Importation de la fonction permetant de faire des tests avec redux
import { renderWithRedux } from '../helpers/testHelpers/renderWithRedux';

test('names should be rendered after fetching', async () => {
  renderWithRedux(<MemberList />);
  renderWithRedux(<Main />);
	const buttonEl = screen.getByRole('button');
	const nameInputEl = screen.getByTestId('name');

	const testValue = 'test';

	fireEvent.change(nameInputEl, { target: { value: testValue } });
	fireEvent.click(buttonEl);

	const userItem = await screen.findByText('Test');

	expect(userItem).toBeInTheDocument();
});
