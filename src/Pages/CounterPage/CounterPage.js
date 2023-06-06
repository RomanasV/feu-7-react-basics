import { useState } from 'react';
import Container from '../../Components/Container/Container';
import './CounterPage.css';

const CounterPage = () => {
  const initialValue = 5;

  const [count, setCount] = useState(initialValue);
  const [grades, setGrades] = useState([]);

  const countButtonHandler = num => setCount(prevState => prevState + num);
  const resetHandler = () => setCount(initialValue);

  const inputHandler = (event) => {
    const inputValue = Number(event.target.value);
    
    if (inputValue > 10) {
      setCount(10);
    } else if (inputValue < 1) {
      setCount(1);
    } else {
      setCount(inputValue)
    }
  }

  const addGradeHandler = () => {
    setGrades(prevState => {
      const newState = [...prevState];
      newState.push(count);
      return newState;
    });
  }

  const getDisplayClass = () => {
    let displayClassName = ''; 
    
    if (count < 4) {
      displayClassName = 'red';
    } else if (count < 7) {
      displayClassName = 'orange';
    } else {
      displayClassName = 'green';
    }

    return displayClassName;
  }

  const gradesList = grades && grades.length > 0 && (
    <ul>
      {grades.map((grade, index) => <li key={index}>{grade}</li>)}
    </ul>
  );

  return (
    <Container>
      <div className="grades-form">
        <h3 className={getDisplayClass()}>{count}</h3>

        <input value={count} type="number" max="10" min="1" onChange={inputHandler} />

        <button onClick={() => countButtonHandler(-1)} disabled={count <= 1}>-1</button>
        <button onClick={() => countButtonHandler(-2)} disabled={count <= 2}>-2</button>
        <button onClick={() => countButtonHandler(-5)} disabled={count <= 5}>-5</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={() => countButtonHandler(5)} disabled={count >= 6}>+5</button>
        <button onClick={() => countButtonHandler(2)} disabled={count >= 9}>+2</button>
        <button onClick={() => countButtonHandler(1)} disabled={count >= 10}>+1</button>

        <button onClick={addGradeHandler}>Add Grade</button>
      </div>
      
      <div className="grades-list-wrapper">
        <h4>{grades && grades.length > 0 ? 'Grades:' : 'No grades'}</h4>
        {gradesList}
      </div>
    </Container>
  )
}

export default CounterPage;