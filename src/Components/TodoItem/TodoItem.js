import React from 'react'

const TodoItem = ({ todoData, onTaskDone, onTaskRemove, onTaskEdit }) => {
  const { date, description, done, dueDate, id, title, updateDate } = todoData;

  return (
    <div className='todo-item'>
      <h3 className='todo-title'>{title}</h3>
      <span className='todo-created-date'>Task created: {date} {updateDate ? `(updated ${updateDate})` : ''}</span>
      {description && <p className='todo-description'>{description}</p>}
      <span className='todo-due-date'>Due date: {dueDate}</span>
      
      <div className='form-control'>
        <input 
          className='todo-done' 
          checked={done} 
          type='checkbox' 
          id={`done-${id}`}
          name='done' 
          onChange={() => onTaskDone(id)} 
        />
        <label htmlFor={`done-${id}`}>{done ? 'Task done' : 'Task is not completed yet'}</label>
      </div>

      <button onClick={() => onTaskRemove(id)}>Remove</button>
      <button onClick={() => onTaskEdit(id)}>Edit a task</button>
    </div>
  )
}

export default TodoItem