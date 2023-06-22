import { useState } from "react";
import Container from "../../Components/Container/Container";

import './ShoppingListPage.scss';
import ShoppingItem from "../../Components/ShoppingItem/ShoppingItem";

import styled from 'styled-components';

const Button = styled.button`
  background-color: bisque;
  font-size: 20px;
  border: 2px solid chocolate;
  padding: 10px 15px;
  border-radius: 10px;
  color: chocolate;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: chocolate;
    color: bisque;
  }
`;

const FormControl = styled.div`
  border: 2px solid ${props => props.invalid ? 'red' : props.colorTheme};
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.611);
  border-radius: 20px;

  & label {
    font-size: 25px;
    color: ${props => props.invalid ? 'red' : props.colorTheme};
  }

  & input {
    background-color: ${props => props.invalid ? 'pink' : 'beige'};
    border-color: ${props => props.invalid ? 'red' : props.colorTheme};
    font-size: 20px;

    &:focus {
      background-color: bisque;
    }
  }
`;

const ShoppingList = () => {
  const initialShoppingList = [
    {
      title: 'Pirkinys 1',
      done: false,
    },
    {
      title: 'Pirkinys 2',
      done: true,
    },
    {
      title: 'Pirkinys 3',
      done: false,
    },
    {
      title: 'Pirkinys 4',
      done: true,
    },
    {
      title: 'Pirkinys 5',
      done: false,
    },
  ];

  const [shoppingList, setShoppingList] = useState(initialShoppingList);
  const [newItem, setNewItem] = useState('');

  const [isValid, setIsValid] = useState(true);
  
  const itemDoneHandler = (index) => {
    if (index === undefined) {
      return;
    }

    setShoppingList(prevState => {
      const prevShoppingItem = prevState[index];
      const newEditItem = {...prevShoppingItem};
      newEditItem.done = !newEditItem.done;

      // const newState = [...prevState];
      // newState.splice(index, 1, newEditItem);

      // return newState;

      return prevState.toSpliced(index, 1, newEditItem);
    })
  }

  const newItemHandler = (event) => {
    event.preventDefault();

    if (newItem.trim().length === 0) {
      setIsValid(false);
      return;
    }

    // setShoppingList(prevState => [{ title: newItem, done: false }, ...prevState]);

    setShoppingList(prevState => {
      const newShoppingItem = {
        title: newItem,
        done: false,
      };

      const newState = [newShoppingItem, ...prevState];
      return newState;
    });
    
    setNewItem('');
  }

  const itemInputHandler = (event) => {
    setNewItem(event.target.value)
    
    if (newItem.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };


  let shoppingListSection = <h3>Your shopping list is empty.</h3>;

  if (shoppingList && shoppingList.length > 0) {
    shoppingListSection = (
      <ul>
        {shoppingList.map((item, index) => <ShoppingItem key={index} index={index} data={item} onTaskDone={itemDoneHandler} />)}
      </ul>
    )
  }

  return (
    <div id="shopping-list-page">
      <Container>
        {/* <button onClick={() => itemDoneHandler(0)}>Click</button> */}

        <form onSubmit={newItemHandler}>
          
          
          <FormControl colorTheme='chocolate' invalid={!isValid}>
            <label htmlFor="shopping-item">New Item:</label>
            <input type="text" id="shopping-item" name="shopping-item" value={newItem} onChange={itemInputHandler} />
          </FormControl>

          <div>
            <Button className="button" type="submit">Create</Button>
          </div>
        </form>

        {/* <input type="checkbox" onClick={(e) => console.log(e.target.value)}></input> */}

        {shoppingListSection}
      </Container>
    </div>
  )
}

export default ShoppingList;