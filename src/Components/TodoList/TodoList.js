const TodoList = ({ data }) => {
  console.log(data)
  return (
    <div className='todo-list'>
      {data.map(todo => (
          <div key={todo.id} className='todo-item'>
            <h3 className='todo-title'>{todo.title}</h3>
            <span className='todo-created-date'>Task created: {todo.date}</span>
            {todo.description && <p className='todo-description'>{todo.description}</p>}
            <span className='todo-due-date'>Due date: {todo.dueDate}</span>
            
            <div className='form-control'>
              {/* <input className='todo-done' checked={todo.done} type='checkbox' id='done' name='done' onChange={() => taskDoneHandler(todo.id)} /> */}
              <label htmlFor='done'>Task done</label>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default TodoList