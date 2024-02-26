import React, {useState} from "react";

function NewTaskForm({categories, onAddTask}) {

  const [details, setDetails] = useState('')
  const [selectedOption, setSelectedOption] = useState('Code')
  
  function handleDropDown(e) {
    setSelectedOption(e.target.value)
  }
  
  function handleDetailChange(e) {
    setDetails(e.target.value)
  }

  const categoryDropDown = categories.slice(1).map(category => {
    return <option key={category}>{category}</option>
  })

  function handleSubmit(e) {
    e.preventDefault()

    const newTask = {
      text: details,
      category: selectedOption
    }
    onAddTask(newTask)
    setDetails('')
    setSelectedOption('')
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name={details} value={details} onChange={handleDetailChange}/>
      </label>
      <label>
        Category
        <select name={selectedOption} value={selectedOption} onChange={handleDropDown}>
          {categoryDropDown}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
