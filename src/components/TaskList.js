import React, {useState} from "react";
import Task from './Task'
function TaskList({activeButton, tasks}) {
  
  const [taskList, setTaskList] = useState(tasks)
  
  function deleteTask(taskText) {
    const updatedList = taskList.filter(task => task.text !== taskText)
    setTaskList(updatedList)
  }

  const filterTask = tasks.filter(task => {
    if(activeButton === 'All'){
      return true
    } else {
      return task.category.includes(activeButton);
    }
  })



  const renderTask = filterTask.map((taskObj) => (
    <Task 
      key={taskObj.text} 
      {...taskObj} 
      onDelete={() => deleteTask(taskObj.text)}
      />
  ))


  return (
    <div className="tasks">
        {renderTask}
    </div>
  );
}

export default TaskList;
