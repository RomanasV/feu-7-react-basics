import ShopItem from '../ShopItem/ShopItem';
import './ShopsList.css';

function ShopsList() {
  return (
    <div className="shops-wrapper">
      <h1 className="shops-section-title">Find Us</h1>

      <div className="shops-list">
        <ShopItem title="Parduotuve 1" phone="+370456453131" email="info1@parduotuve.lt" />
        <ShopItem title="Parduotuve 2" phone="+370456444444" email="info2@parduotuve.lt" />
        <ShopItem title="Parduotuve 3" phone="+370456555555" email="info3@parduotuve.lt" />
        <ShopItem title="Parduotuve 4" phone="+370456666666" email="info4@parduotuve.lt" />
      </div>
    </div>
  )
}

export default ShopsList;