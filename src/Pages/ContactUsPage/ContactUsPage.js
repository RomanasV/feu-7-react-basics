import ShopsList from "../../Components/ShopsList/ShopsList";
import ShopsMap from "../../Components/ShopsMap/ShopsMap";
import './ContactUsPage.css';

function ContactUsPage() {
  return (
    <div className="container">
      <div className="content">
        <ShopsList />
        <ShopsMap />
      </div>
    </div>
  )
}

export default ContactUsPage;