import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    { id: 3, text: "Task 3" },
    { id: 4, text: "Task 4" },
    { id: 5, text: "Task 5" },
  ]);

  const addTask = (taskText) => {
    const newId = tasks[tasks.length - 1].id + 1;
    setTasks([...tasks, { id: newId, text: taskText }]);
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div className="App">
      <Form addTask={addTask} />
      <List tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
