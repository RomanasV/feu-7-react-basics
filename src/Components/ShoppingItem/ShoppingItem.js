const ShoppingItem = ({ data }) => {
  return (
    <li className={data.done ? 'done' : ''}>{data.title}</li>
  )
}

export default ShoppingItem;