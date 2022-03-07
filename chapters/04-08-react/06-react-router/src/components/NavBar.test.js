import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('Given NavBar', () => {
  describe('When it renders', () => {
    test('It should show links', () => {
      render(
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      );

      expect(screen.getAllByRole('link')).toHaveLength(4);
    });
  });
});
