import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Given App', () => {
  describe('When delete button is clicked', () => {
    test('Task should be deleted', () => {
      render(<App />);

      const initialListLength = screen.getAllByRole('listitem').length;
      userEvent.click(screen.getAllByRole('button', { name: '🗑️' })[0]);
      expect(screen.getAllByRole('listitem')).toHaveLength(
        initialListLength - 1
      );
    });
  });
  describe('When form is filled and submitted', () => {
    test('New task should be added', () => {
      render(<App />);

      userEvent.click(screen.getByLabelText('Enter new task:'));
      userEvent.keyboard('This is a test task');
      /* userEvent.click(screen.getByRole('button', { name: 'Add' })); */
      userEvent.keyboard('{Enter}');

      expect(screen.getByText(/This is a test task/i)).toBeInTheDocument();
    });
  });
});
