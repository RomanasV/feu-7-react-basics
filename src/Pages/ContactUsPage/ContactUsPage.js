import ShopsList from "../../Components/ShopsList/ShopsList";
import ShopsMap from "../../Components/ShopsMap/ShopsMap";
import Container from "../../Components/Container/Container.js";
import './ContactUsPage.css';

function ContactUsPage() {
  return (
    <Container>
      <div className="content">
        <ShopsList title="Find Us" />
        <ShopsMap />
      </div>
    </Container>
  )
}

export default ContactUsPage;