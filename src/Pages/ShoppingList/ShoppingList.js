import { useState } from "react";
import Container from "../../Components/Container/Container";

import './ShoppingList.css';
import ShoppingItem from "../../Components/ShoppingItem/ShoppingItem";

const ShoppingList = () => {
  const initialShoppingList = [
    {
      title: 'Pirkinys 1',
      done: false,
    },
    {
      title: 'Pirkinys 2',
      done: false,
    },
    {
      title: 'Pirkinys 3',
      done: true,
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

  // const shoppingListSection = shoppingList && shoppingList.length > 0 ? (
  //   <ul>
  //     {shoppingList.map((item, index) => <ShoppingItem key={index} data={item} />)}
  //   </ul>
  // ) : (
  //   <h3>Your shopping list is empty.</h3>
  // )

  let shoppingListSection = <h3>Your shopping list is empty.</h3>;

  if (shoppingList && shoppingList.length > 0) {
    shoppingListSection = (
      <ul>
        {shoppingList.map((item, index) => <ShoppingItem key={index} data={item} />)}
      </ul>
    )
  }

  const newItemHandler = (event) => {
    event.preventDefault();
    console.log(newItem)

    setNewItem('');
  }

  const itemInputHandler = (event) => setNewItem(event.target.value);

  return (
    <Container>
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