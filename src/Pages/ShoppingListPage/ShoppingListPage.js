import { useState } from "react";
import Container from "../../Components/Container/Container";

import './ShoppingListPage.scss';
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
    setIsValid(true);
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
    <div id="shopping-list-page">
      <Container>
        {/* <button onClick={() => itemDoneHandler(0)}>Click</button> */}

        <form onSubmit={newItemHandler}>
          <label htmlFor="shopping-item" style={{ color: isValid ? 'black' : 'red' }}>New Item:</label>
          <input style={{ 
            borderColor: isValid ? 'black' : 'red',
            // backgroundColor: isValid ? 'white' : 'pink', 
          }} type="text" id="shopping-item" name="shopping-item" value={newItem} onChange={itemInputHandler} />

          <div>
            <button className="button" type="submit">Create</button>
          </div>
        </form>

        {/* <input type="checkbox" onClick={(e) => console.log(e.target.value)}></input> */}

        {shoppingListSection}
      </Container>
    </div>
  )
}

export default ShoppingList;