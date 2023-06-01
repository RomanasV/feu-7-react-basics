import './ShopItem.css';

function ShopItem(props) {
  return (
    <div className="shop-item">
      <h2 className="shop-title">{props.title}</h2>

      <ul className="shop-address-list">
        <li>Phone: <a href={`tel:${props.phone}`}>{props.phone}</a></li>
        <li>Email: <a href={`mailto:${props.email}`}>{props.email}</a></li>
        <li>Address: <a href="/#" target="_blank">Vilniaus g. 20, Vilnius</a></li>
      </ul>
    </div>
  )
}

export default ShopItem;