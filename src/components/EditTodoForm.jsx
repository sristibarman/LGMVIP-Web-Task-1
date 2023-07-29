import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
        setValue("")
      };
  return (
  <form  className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={value} 
      placeholder='Update task'
      onChange={(e) => setValue(e.target.value)} 
        />
      <button type='submit' 
      className='todo-btn'>Update Task</button>
  </form>
  )
}
export default EditTodoForm