const ShoppingItem = ({ data, onTaskDone, index }) => {
  const itemDoneHandler = () => {
    onTaskDone(index);
  }

  return (
    <li onClick={itemDoneHandler} className={`shopping-item ${data.done ? 'done' : ''}`}>{data.title}</li>
  )
}

export default ShoppingItem;