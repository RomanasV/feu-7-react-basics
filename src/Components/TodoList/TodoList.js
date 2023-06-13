const TodoList = ({ data }) => {
  return (
    <div className='todo-list'>
      {data.map((todo, index) => (
          <div key={todo.id} className='todo-item'>
            <h3 className='todo-title'>{todo.title}</h3>
            <span className='todo-created-date'>Task created: {todo.date}</span>
            {todo.description && <p className='todo-description'>{todo.description}</p>}
            <span className='todo-due-date'>Due date: {todo.dueDate}</span>
            
            <div className='form-control'>
              <input 
                className='todo-done' 
                checked={todo.done} 
                type='checkbox' 
                id={`done-${index}`}
                name='done' 
                onChange={() => console.log(todo.id)} 
              />
              <label htmlFor={`done-${index}`}>Task done</label>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default TodoList