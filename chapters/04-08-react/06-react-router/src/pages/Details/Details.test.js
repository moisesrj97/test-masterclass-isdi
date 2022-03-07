import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Details from './Details';

describe('Given details component', () => {
  describe('When it loads in details/:id', () => {
    test('It should render id', () => {
      render(
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes location='/details/1'>
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText(/Details of 1/)).toBeInTheDocument();
    });
  });
});
