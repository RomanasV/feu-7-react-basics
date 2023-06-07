import { useState } from "react";
import Container from "../../Components/Container/Container";

import './ShoppingListPage.css';
import ShoppingItem from "../../Components/ShoppingItem/ShoppingItem";

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

  const itemInputHandler = (event) => setNewItem(event.target.value);


  let shoppingListSection = <h3>Your shopping list is empty.</h3>;

  if (shoppingList && shoppingList.length > 0) {
    shoppingListSection = (
      <ul>
        {shoppingList.map((item, index) => <ShoppingItem key={index} index={index} data={item} onTaskDone={itemDoneHandler} />)}
      </ul>
    )
  }

  return (
    <Container>
      {/* <button onClick={() => itemDoneHandler(0)}>Click</button> */}

      <form onSubmit={newItemHandler}>
        <label htmlFor="shopping-item">New Item:</label>
        <input type="text" id="shopping-item" name="shopping-item" value={newItem} onChange={itemInputHandler} />

        <input type="submit" value="Create" />
      </form>

      {shoppingListSection}
    </Container>
  )
}

export default ShoppingList;