import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../redux/action-creators';

const List = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((e) => (
        <li key={e.id}>
          {e.name}
          <button type='button' onClick={() => dispatch(deleteTask(e.id))}>
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
