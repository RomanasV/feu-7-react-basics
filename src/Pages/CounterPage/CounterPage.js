import { useState } from 'react';
import Container from '../../Components/Container/Container';
import './CounterPage.css';

const CounterPage = () => {
  const initialValue = 5;

  const [count, setCount] = useState(initialValue);
  const [grades, setGrades] = useState([1, 5, 6, 7, 8]);

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
      // const newState = [...prevState];
      // newState.unshift(count);

      const newState = [count, ...prevState];
      return newState;
    });

    setCount(initialValue);
  }

  const removeGradeHandler = (index) => {
    setGrades(prevState => {
      // const newState = [...prevState];
      // newState.splice(index, 1);
      // return newState;

      return prevState.toSpliced(index, 1);
    })
  }

  const getDisplayClass = (item) => {
    let displayClassName = ''; 
    
    if (item < 4) {
      displayClassName = 'red';
    } else if (item < 7) {
      displayClassName = 'orange';
    } else {
      displayClassName = 'green';
    }

    return displayClassName;
  }

  const gradesList = grades && grades.length > 0 && (
    <ul>
      {grades.map((grade, index) => (
        <li key={index} className={getDisplayClass(grade)}>
          {grade}
          <button onClick={() => removeGradeHandler(index)}>x</button>
        </li>
      ))}
    </ul>
  );

  return (
    <Container>
      <div className="grades-form">
        <h3 className={getDisplayClass(count)}>{count}</h3>

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