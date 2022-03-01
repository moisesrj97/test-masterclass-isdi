const initialState = {
  userInfo: {
    name: '',
    id: '',
  },
  tasks: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        userInfo: action.payload.userData,
        tasks: action.payload.tasksData,
      };
    case 'LOGOUT_USER':
      return { ...state, userInfo: { name: '', id: '' } };
    case 'GET_TASKS':
      return { ...state, tasks: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
