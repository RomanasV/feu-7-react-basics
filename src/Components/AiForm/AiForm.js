import { useState } from "react";

const AiForm = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const nameHandler = event => setName(event.target.value);

  const formSubmitHandler = event => {
    event.preventDefault();
    onNameSubmit(name);
    setName('');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="search-name">Name:</label>
        <input type="text" id="search-name" value={name} onChange={nameHandler} />
      </div>

      <button type="submit">Search</button>
    </form>
  )
}

export default AiForm;