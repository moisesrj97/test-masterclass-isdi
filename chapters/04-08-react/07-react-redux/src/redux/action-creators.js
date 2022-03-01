import * as API from '../services/apiConection';
import * as ACTIONS from './action-types';

export const loginUser = (user) => (dispatch) => {
  API.loginUser(user).then((userAndTasksData) =>
    dispatch({ type: ACTIONS.LOGIN_USER, payload: userAndTasksData })
  );
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: ACTIONS.LOGOUT_USER });
};

export const getTasks = (user) => (dispatch) => {
  API.getTasks(user).then((tasks) =>
    dispatch({ type: ACTIONS.GET_TASKS, payload: tasks })
  );
};

export const addTask = (task, user) => (dispatch) => {
  API.addTask(task, user).then((task) =>
    dispatch({ type: ACTIONS.ADD_TASK, payload: task })
  );
};

export const deleteTask = (taskId) => (dispatch) => {
  API.deleteTask(taskId).then((task) =>
    dispatch({ type: ACTIONS.DELETE_TASK, payload: taskId })
  );
};
