import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/action-creators';

const Form = () => {
  const [newTaskInput, setNewTaskInput] = useState('');

  const user = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(newTaskInput, user));
    setNewTaskInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='task-input'>Enter new task:</label>
      <input
        id='task-input'
        type='text'
        onChange={(e) => setNewTaskInput(e.target.value)}
        value={newTaskInput}
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default Form;
