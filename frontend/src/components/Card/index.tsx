import { useNavigate } from "react-router-dom";
import ShareIcon from "../../assets/icons/gridicons_share.png";
import CompareIcon from "../../assets/icons/compare-svgrepo-com 1.png";
import LikeIcon from "../../assets/icons/like.png";
import { Cards } from "./styles";

// Definindo a interface para as props de Card
interface CardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  isNew: boolean;
  imageLink: string;
}

function Card({ id, name, description, price, discountPrice, isNew, imageLink }: CardProps) {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/product/${id}`);
  };

  // Calculando a porcentagem de desconto
  const discountPercentage = discountPrice ? Math.round(((price - discountPrice) / price) * 100) : null;

  return (
    <Cards>
      <div className="card">
        <div className="tag-container">
          {isNew && <span className="new-tag">New</span>}
          {discountPercentage !== null && <span className="discount-tag">-{discountPercentage}%</span>}
        </div>
        <img src={imageLink} alt={name} />
        <div className="card-text">
          <h4>{name}</h4>
          <h6 style={{ color: "#9F9F9F", margin: "10px 0px" }}>{description}</h6>
          <div className="price">
            <h5>{`$ ${price}`}</h5>
            {discountPrice && (
              <h6 style={{ color: "#9F9F9F", marginTop: "10px", textDecoration: "line-through" }}>
                {`$ ${discountPrice}`}
              </h6>
            )}
          </div>
        </div>
        <div className="overlay">
          <button className="see-details" onClick={handleSeeDetails}>
            See Details
          </button>
          <div className="icon-container">
            <div className="icon-item">
              <img src={ShareIcon} alt="Share" />
              <span>Share</span>
            </div>
            <div className="icon-item">
              <img src={CompareIcon} alt="Compare" />
              <span>Compare</span>
            </div>
            <div className="icon-item">
              <img src={LikeIcon} alt="Like" />
              <span>Like</span>
            </div>
          </div>
        </div>
      </div>
    </Cards>
  );
}

export default Card;
