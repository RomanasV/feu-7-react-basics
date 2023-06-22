const ShoppingItem = ({ data, onTaskDone, index, classes }) => {
  const itemDoneHandler = () => {
    onTaskDone(index);
  }

  return (
    <li onClick={itemDoneHandler} className={classes}>{data.title}</li>
  )
}

export default ShoppingItem;