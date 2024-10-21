import DiningImage from "../../assets/images/Mask Group.png";
import LivingImage from "../../assets/images/Image-living room.png";
import BedroomImage from "../../assets/images/Mask Group (1).png";
import { Link } from "react-router-dom";
import { CategoriesContainer } from "./styles";

function Categories() {
  return (
    <CategoriesContainer>
      <div className="container">
        <div className="container-content">
          <div className="container-title">
            <h1>Browse The Range</h1>
          </div>
          <div className="container-card">
            <div className="card-image">
              <Link to="/category/Dining"> {/* Link para a página da categoria */}
                <img src={DiningImage} alt="Dining" />
              </Link>
              <h4>Dining</h4>
            </div>
            <div className="card-image">
              <Link to="/category/Living"> {/* Link para a página da categoria */}
                <img src={LivingImage} alt="Living" />
              </Link>
              <h4>Living</h4>
            </div>
            <div className="card-image">
              <Link to="/category/Bedroom"> {/* Link para a página da categoria */}
                <img src={BedroomImage} alt="Bedroom" />
              </Link>
              <h4>Bedroom</h4>
            </div>
          </div>
        </div>
      </div>
    </CategoriesContainer>
  );
}

export default Categories;
