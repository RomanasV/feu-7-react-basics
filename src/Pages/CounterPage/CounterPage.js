import { useState } from 'react';
import Container from '../../Components/Container/Container';
import './CounterPage.css';

const CounterPage = () => {
  const initialValue = 5;

  const [count, setCount] = useState(initialValue);

  const plus1Handler = () => setCount(count + 1);
  const plus2Handler = () => setCount(count + 2);
  const plus5Handler = () => setCount(count + 5);
  const minus1Handler = () => setCount(count - 1);
  const minus2Handler = () => setCount(count - 2);
  const minus5Handler = () => setCount(count - 5);
  const resetHandler = () => setCount(initialValue);

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

  return (
    <Container>
      <h3 className={getDisplayClass()}>{count}</h3>

      <input type="number" max="10" min="1" />

      <button onClick={minus1Handler} disabled={count <= 1}>-1</button>
      <button onClick={minus2Handler} disabled={count <= 2}>-2</button>
      <button onClick={minus5Handler} disabled={count <= 5}>-5</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={plus5Handler} disabled={count >= 6}>+5</button>
      <button onClick={plus2Handler} disabled={count >= 9}>+2</button>
      <button onClick={plus1Handler} disabled={count >= 10}>+1</button>
    </Container>
  )
}

export default CounterPage;