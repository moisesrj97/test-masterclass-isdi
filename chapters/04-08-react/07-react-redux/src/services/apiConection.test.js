import axios from 'axios';
import { getTasks } from './apiConection';

jest.mock('axios');

describe('Given apiConnection', () => {
  describe('When getTasks is called', () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: 'Mocked response' });
      /* axios.get.mockImplementation((url) => {
        switch (url) {
          case 'localhost:3000/users/':
            return Promise.resolve('USERS');
          case 'localhost:3000/tasks/':
            return Promise.resolve('TASKS');
          default:
            return;
        }
      }); */
    });
    test('It should return mocked data', async () => {
      expect(await getTasks({ id: 1 })).toBe('Mocked response');
    });
  });
});
