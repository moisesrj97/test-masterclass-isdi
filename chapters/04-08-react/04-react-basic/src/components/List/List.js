import React from "react";

export const List = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.id}. {task.text}
          <button
            onClick={() => {
              removeTask(task);
            }}
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};
