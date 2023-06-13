import TodoItem from "../TodoItem/TodoItem"

const TodoList = ({ data, onTaskDone, onTaskRemove }) => {
  if (!data || data.length === 0) {
    return '';
  }

  return (
    <div className='todo-list'>
      {data.map(todo => <TodoItem key={todo.id} todoData={todo} onTaskDone={onTaskDone} onTaskRemove={onTaskRemove} />)}
    </div>
  )
}

export default TodoList