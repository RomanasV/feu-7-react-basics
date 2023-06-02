import ShopItem from '../ShopItem/ShopItem';
import './ShopsList.css';

function ShopsList(props) {
  const shopsData = [
    {
      title: "Parduotuve 1",
      phone: "+370456453131",
      email: "info2@parduotuve.lt",
      address: "Vilniaus g. 20, Vilnius",
      addressLink: "/#",
    },
    {
      title: "Parduotuve 2",
      email: "info2@parduotuve.lt",
    },
    {
      title:"Parduotuve 3",
      phone:"+370456555555",
      email:"info3@parduotuve.lt",
      address:"Vilniaus g. 21, Vilnius",
    },
    {
      title: "Parduotuve 4",
      phone: "+370456666666",
      email: "info4@parduotuve.lt",
      addressLink: "/#",
    }
  ];

  const shopListElements = shopsData.map((shop, index) => (
    <ShopItem 
      key={index}
      title={shop.title} 
      phone={shop.phone}
      email={shop.email}
      address={shop.address}
      addressLink={shop.addressLink}
    />
  ))

  return (
    <div className="shops-wrapper">
      <h1 className="shops-section-title">{props.title}</h1>

      <div className="shops-list">
        {shopListElements}
      </div>
    </div>
  )
}

export default ShopsList;