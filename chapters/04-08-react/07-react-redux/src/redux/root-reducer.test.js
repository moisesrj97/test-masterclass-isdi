import { mainReducer } from './root-reducer';

describe('Given reducer', () => {
  describe('When action is LOGIN_USER', () => {
    test('It should return state with user data', () => {
      let state;
      state = mainReducer(
        { userInfo: { name: '', id: '' }, tasks: [] },
        {
          type: 'LOGIN_USER',
          payload: {
            userData: { id: '1', name: 'John' },
            tasksData: [
              { id: '1', name: 'Task 1', user_id: '1' },
              { user_id: '1', name: 'Task 2', id: 'pjXR48b' },
              { user_id: '1', name: 'Task 2.1', id: 'RGDFtJF' },
            ],
          },
        }
      );
      expect(state).toEqual({
        userInfo: { id: '1', name: 'John' },
        tasks: [
          { id: '1', name: 'Task 1', user_id: '1' },
          { user_id: '1', name: 'Task 2', id: 'pjXR48b' },
          { user_id: '1', name: 'Task 2.1', id: 'RGDFtJF' },
        ],
      });
    });
  });
  describe('When action is LOGOUT_USER', () => {
    let state;
    state = mainReducer(
      {
        userInfo: { id: '1', name: 'John' },
        tasks: [
          { id: '1', name: 'Task 1', user_id: '1' },
          { user_id: '1', name: 'Task 2', id: 'pjXR48b' },
          { user_id: '1', name: 'Task 2.1', id: 'RGDFtJF' },
        ],
      },
      { type: 'LOGOUT_USER' }
    );
    expect(state).toEqual({
      userInfo: { name: '', id: '' },
      tasks: [
        { id: '1', name: 'Task 1', user_id: '1' },
        { user_id: '1', name: 'Task 2', id: 'pjXR48b' },
        { user_id: '1', name: 'Task 2.1', id: 'RGDFtJF' },
      ],
    });
  });
});
