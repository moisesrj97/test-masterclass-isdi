import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

describe('Given Form component', () => {
  let addTaskMock;
  beforeEach(() => {
    addTaskMock = jest.fn();
  });
  describe('When form is submitted', () => {
    test("It call's parent function", () => {
      render(<Form addTask={addTaskMock} />);
      const testInputValue = 'Test task from input';

      userEvent.click(screen.getByLabelText('Enter new task:'));
      userEvent.keyboard(testInputValue);
      userEvent.click(screen.getByRole('button', { name: 'Add' }));

      expect(addTaskMock).toHaveBeenCalledWith(testInputValue);
      expect(screen.getByLabelText('Enter new task:').value).toBe('');
    });
  });
});
