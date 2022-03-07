import { loginUser } from './action-creators';
import * as ACTIONS from './action-types';

jest.mock('../services/apiConection', () => ({
  loginUser: () => Promise.resolve({ test: 'test' }),
}));

describe('Given actions creators', () => {
  describe('When loginUser is called', () => {
    test('Dispatch is called with successful action', async () => {
      const dispatchMock = jest.fn();
      await loginUser({ test: 'test' })(dispatchMock);
      expect(dispatchMock).toHaveBeenCalledWith({
        type: ACTIONS.LOGIN_USER,
        payload: { test: 'test' },
      });
    });
  });
});
