import { useState } from 'react';
import Container from '../../Components/Container/Container';


const CounterPage = () => {
  const [count, setCount] = useState(5);

  const plus1Handler = () => setCount(count + 1);

  return (
    <Container>
      <h3>{count}</h3>

      <button>-1</button>
      <button>-2</button>
      <button>Reset</button>
      <button>+2</button>
      <button onClick={plus1Handler} disabled={count >= 10}>+1</button>

      {/* <button onClick={() => setCount(count + 1)}>+1</button> */}
      {/* <button onClick={() => plus1Handler()}>+1</button> */}

      {/* <button onClick={() => {
        console.log(count);
        count++;
        console.log(count);
      }}>+1</button> */}
    
    </Container>
  )
}

export default CounterPage;