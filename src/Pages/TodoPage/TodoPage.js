import React, { useState } from 'react'
import Container from '../../Components/Container/Container';
import TodoList from '../../Components/TodoList/TodoList';
import TodoForm from '../../Components/TodoForm/TodoForm';

const TodoPage = () => {
  const todosList = [
    {
      id: Math.random(),
      date: '2023-06-13',
      title: 'Task 1',
      description: 'Description 1',
      done: false,
      dueDate: '2023-07-10',
    },
    {
      id: Math.random(),
      date: '2023-06-14',
      title: 'Task 2',
      description: 'Description 2',
      done: true,
      dueDate: '2023-07-01',
    },
    {
      id: Math.random(),
      date: '2023-06-20',
      title: 'Task 3',
      description: 'Description 3',
      done: false,
      dueDate: '2023-10-10',
    },
  ];

  const [todos, setTodos] = useState(todosList);
  const [editTodo, setEditTodo] = useState(null);
  
  const newTodoHandler = todo => {
    if (editTodo) {
      console.log(todo);

      setEditTodo(null)
    } else {
      setTodos(prevState => [todo, ...prevState]);
    }
  };

  const doneTodoHandler = (id) => {
    const clickedTodoIndex = todos.findIndex((todo) => todo.id === id);

    setTodos(prevState => {
      const newState = [...prevState];
      const clickedTodo = newState[clickedTodoIndex];
      const updatedClickedTodo = {...clickedTodo};
      updatedClickedTodo.done = !updatedClickedTodo.done;

      newState[clickedTodoIndex] = updatedClickedTodo;

      return newState;
    });
  }

  const removeTodoHandler = (idToRemove) => {
    setTodos(prevState => {
      const newState = prevState.filter((todo) => todo.id !== idToRemove);
      
      return newState;
    });
  }

  const editTodoHandler = (idToEdit) => {
    const selectedEditTodo = todos.find(todo => todo.id === idToEdit);

    setEditTodo(selectedEditTodo);
  }

  return (
    <Container>
      <h1>Todos:</h1>
      <TodoForm editData={editTodo} onNewTask={newTodoHandler} />

      <TodoList data={todos} onTaskDone={doneTodoHandler} onTaskRemove={removeTodoHandler} onTaskEdit={editTodoHandler} />
    </Container>
  )
}

export default TodoPage