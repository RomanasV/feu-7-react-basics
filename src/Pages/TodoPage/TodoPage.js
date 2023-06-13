import React, { useState } from 'react'
import Container from '../../Components/Container/Container';
import TodoList from '../../Components/TodoList/TodoList';
import TodoForm from '../../Components/TodoForm/TodoForm';

const TodoPage = () => {
  const todosList = [
    {
      id: 1,
      date: '2023-06-13',
      title: 'Task 1',
      description: 'Description 1',
      done: false,
      dueDate: '2023-07-10',
    },
    {
      id: 2,
      date: '2023-06-14',
      title: 'Task 2',
      description: 'Description 2',
      done: true,
      dueDate: '2023-07-01',
    },
    {
      id: 3,
      date: '2023-06-20',
      title: 'Task 3',
      description: 'Description 3',
      done: false,
      dueDate: '2023-10-10',
    },
  ];

  const [todos, setTodos] = useState(todosList);
  const newTodoHandler = newTodo => setTodos(prevState => [newTodo, ...prevState]);

  return (
    <Container>
      <h1>Todos:</h1>
      <TodoForm onNewTask={newTodoHandler} />

      <TodoList data={todos} />
    </Container>
  )
}

export default TodoPage