import TrophyIcon from "../../assets/icons/trophy 1.png";
import GaranteeIcon from "../../assets/icons/guarantee.png";
import ShippingIcon from "../../assets/icons/shipping.png";
import SupportIcon from "../../assets/icons/customer-support.png";
import { FeatureContainer } from "./styles";

function Features() {
  return (
    <FeatureContainer>
      <div className="container-content">
        <div className="content-features">
          <img src={TrophyIcon} alt="High Quality" />
          <div className="text-features">
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="content-features">
          <img src={GaranteeIcon} alt="Warranty Protection" />
          <div className="text-features">
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="content-features">
          <img src={ShippingIcon} alt="Free Shipping" />
          <div className="text-features">
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="content-features">
          <img src={SupportIcon} alt="24/7 Support" />
          <div className="text-features">
            <h3>24/7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </FeatureContainer>
  );
}

export default Features;