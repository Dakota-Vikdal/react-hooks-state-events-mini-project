import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [activeButton, setActiveButton] = useState('All')
  const [addTask, setAddTask] = useState(TASKS)

  function onAddTask(newTask) {
    setAddTask([...addTask, newTask])
  }

  function handleClick(category) {
    setActiveButton(category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        activeButton={activeButton} 
        categories={CATEGORIES}
        handleClick={handleClick}
      />
      <NewTaskForm 
        onAddTask={onAddTask} 
        categories={CATEGORIES}/>
      <TaskList 
        activeButton={activeButton} 
        tasks={addTask}
      />
    </div>
  );
}

export default App;
