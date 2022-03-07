//! Test normal function, mocking axios/fetch

import axios from 'axios';
import { gimmePikachu } from './03-functions-async';

jest.mock('axios');

const resolvedValueMocked = 'test';

//! Test errors
describe('Given gimmePikachu', () => {
  describe('When it receives data without errors', () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: resolvedValueMocked });
    });
    test('Returned value should be resolvedValueMocked', async () => {
      expect(await gimmePikachu()).toBe(resolvedValueMocked);
    });
  });
  describe('When axios throws an error', () => {
    beforeEach(() => {
      axios.get.mockRejectedValue('Test error');
    });
    test('It should throw', async () => {
      try {
        await gimmePikachu();
      } catch (e) {
        expect(e).toEqual(new Error('Test error'));
      }
    });
  });
});
