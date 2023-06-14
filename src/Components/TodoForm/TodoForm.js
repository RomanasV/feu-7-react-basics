import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

const TodoForm = ({ onNewTask, editData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setDescription(editData.description);
      setDueDate(editData.dueDate);
    }
  }, [editData]);

  const titleInputHandler = event => setTitle(event.target.value);
  const descriptionInputHandler = (event) => setDescription(event.target.value);
  const dateInputHandler = (event) => setDueDate(event.target.value);

  const newTaskHandler = (event) => {
    event.preventDefault();

    const date = new Date();

    // const day = date.getDate().toString().padStart(2, '0');
    // const month = (date.getMonth() + 1).toString().padStart(2, '0');
    // const year = date.getFullYear();

    // const fullDate = `${year}-${month}-${day}`;

    const fullDate = date.toISOString().slice(0, 10);

    let newTodo = {};

    if (editData) {
      newTodo = {
        id: editData.id,
        date: editData.date,
        title,
        description,
        done: editData.done,
        dueDate,
        updateDate: fullDate
      }
    } else {
      newTodo = {
        id: uuid(),
        date: fullDate,
        title,
        description,
        done: false,
        dueDate,
        updateDate: null
      }
    }

    onNewTask(newTodo);
    setTitle('');
    setDescription('');
    setDueDate('');
  }
  
  return (
    <form onSubmit={newTaskHandler}>
      <div className='form-control'>
        <label htmlFor='todo-title'>Title:</label>
        <input type='text' id='todo-title' name='todo-title' value={title} onChange={titleInputHandler} />
      </div>
      <div className='form-control'>
        <label htmlFor='todo-description'>Description:</label>
        <textarea id='todo-description' name='todo-description' value={description} onChange={descriptionInputHandler} />
      </div>
      <div className='form-control'>
        <label htmlFor='todo-due-date'>Due date:</label>
        <input type='date' id='todo-due-date' name='todo-due-date' value={dueDate} onChange={dateInputHandler} />
      </div>
      
      <div className='form-control'>
        <button type='submit' id='todo-submit' name='todo-submit'>{editData ? 'Edit task' : 'Create new task'}</button>
      </div>
    </form>
  )
}

export default TodoForm