import { render } from '../../utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Auth from './Auth';
import { loginUser } from '../../services/apiConection';

jest.mock('../../services/apiConection');

describe('Given Auth', () => {
  describe('When user is logged in', () => {
    test('It should show logout', () => {
      render(<Auth />, {
        preloadedState: { userInfo: { name: 'moises', id: '1' } },
      });
      // screen.debug() --> Print current screen

      expect(screen.getByText('Logout')).toBeInTheDocument();
    });
  });
  describe('When user is not logged in', () => {
    test('It should show login', () => {
      render(<Auth />, {
        preloadedState: { userInfo: { name: '', id: '' } },
      });
      // screen.debug() --> Print current screen

      expect(screen.getByText('Login')).toBeInTheDocument();
    });
  });
  describe('When user is not logged in and logs in', () => {
    beforeEach(() => {
      loginUser.mockResolvedValue({ userData: { id: 1, name: 'Test' } });
    });
    test('It should show login', async () => {
      render(<Auth />, {
        preloadedState: { userInfo: { name: '', id: '' } },
      });
      // screen.debug() --> Print current screen

      expect(screen.getByText('Login')).toBeInTheDocument();

      userEvent.click(screen.getByRole('textbox'));
      userEvent.keyboard('TEST');
      userEvent.keyboard('{Enter}');

      expect(await screen.findByText('Logout')).toBeInTheDocument();
    });
  });
});
