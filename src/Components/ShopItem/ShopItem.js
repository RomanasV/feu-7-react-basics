import './ShopItem.css';

function ShopItem({ title, email, phone, address, addressLink }) {
  console.log(title)

  // const title = props.title;
  // const email = props.email;
  // const phone = props.phone;
  // const address = props.address;
  // const addressLink = props.addressLink;

  // const { title, email, phone, address, addressLink } = props;
  
  if (!title) {
    return '';
  }

  // const emailElement = email ? <li>Email: <a href={`mailto:${email}`}>{email}</a></li> : ''
  const emailElement = email && <li>Email: <a href={`mailto:${email}`}>{email}</a></li>;

  let addressElement = '';

  if (address) {
    if (addressLink) {
      addressElement = <li>Address: <a href={addressLink} target="_blank" rel="noreferrer">{address}</a></li>;
    } else {
      addressElement = <li>Address: {address}</li>;
    }
  }

  return (
    <div className="shop-item">
      <h2 className="shop-title">{title}</h2>

      <ul className="shop-address-list">
        {/* {phone ? <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li> : ''} */}

        {phone ? (
          <li>
            Phone: <a href={`tel:${phone}`}>{phone}</a>
          </li> 
        ) : (
          <li>No phone</li>
        )}

        {emailElement}
        {addressElement}
      </ul>
    </div>
  )
}

export default ShopItem;