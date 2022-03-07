import axios from 'axios';
import { useApiGet } from './useApiGet';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('axios');

describe('Given useApiGet hook', () => {
  const DummyComponent = () => {
    const { data, loading, error, apiGet } = useApiGet();

    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && !loading && <p>Error: {error.message}</p>}
        {data && !loading && <p>{JSON.stringify(data)}</p>}
        <button type='button' onClick={() => apiGet('www.pikachu.com')}>
          Search pikachu
        </button>
      </div>
    );
  };

  describe('When component looks for pikachu', () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: "Hello I'm Pikachu" });
    });

    test('It renders pikachu:', async () => {
      render(<DummyComponent />);
      userEvent.click(screen.getByRole('button'));
      expect(await screen.findByText(/Hello I'm Pikachu/i)).toBeInTheDocument();
    });
  });
  describe('When component looks for pikachu but dont await', () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: "Hello I'm Pikachu" });
    });

    test('It renders pikachu:', () => {
      render(<DummyComponent />);
      userEvent.click(screen.getByRole('button'));
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
  });
  describe('When component looks for pikachu but axios throw some error', () => {
    beforeEach(() => {
      axios.get.mockRejectedValue({ message: 'No pikachu for you' });
    });

    test('It renders pikachu:', async () => {
      render(<DummyComponent />);
      userEvent.click(screen.getByRole('button'));
      expect(
        await screen.findByText('Error: No pikachu for you')
      ).toBeInTheDocument();
    });
  });
});
