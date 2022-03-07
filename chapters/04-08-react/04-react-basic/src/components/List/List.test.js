import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { List } from './List';

describe('Given List', () => {
  let mockTasks;
  let removeTaskMock;

  beforeEach(() => {
    mockTasks = [
      { id: 1, text: 'Test Task 1' },
      { id: 2, text: 'Test Task 2' },
      { id: 3, text: 'Test Task 3' },
      { id: 4, text: 'Test Task 4' },
      { id: 5, text: 'Test Task 5' },
    ];

    removeTaskMock = jest.fn();
  });
  describe('When it receives tasks', () => {
    test('It should render them', () => {
      render(<List tasks={mockTasks} removeTask={removeTaskMock} />);

      // Esto también es correcto

      expect(1).toBe(1);

      // Esto es correcto
      expect(screen.getByText(/Test Task 1/i)).toBeInTheDocument();

      // Esto es más correcto
      expect(screen.getAllByRole('listitem')).toHaveLength(mockTasks.length);

      mockTasks.forEach((e) => {
        expect(screen.getByText(`${e.id}. ${e.text}`)).toBeInTheDocument();
      });
    });
  });
  describe('When delete button is clicked', () => {
    test('It should call parent function', () => {
      render(<List tasks={mockTasks} removeTask={removeTaskMock} />);

      userEvent.click(screen.getAllByRole('button')[0]);

      expect(removeTaskMock).toHaveBeenCalledWith(mockTasks[0]);
    });
  });
});
