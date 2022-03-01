import React, { useState } from "react";

export const Form = ({ addTask }) => {
  const [formState, setFormState] = useState({ task: "" });
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formState.task);
    setFormState({ task: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-input">Enter new task:</label>
      <input
        id="task-input"
        type="text"
        name="task"
        value={formState.task}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};
