import FbIcon from "../../assets/icons/facebook.png";
import LdIcon from "../../assets/icons/linkedin.png";
import TtIcon from "../../assets/icons/twitter.png";
import { ProductContainer } from "./styles";

interface ProductProps {
  product: {
    name: string;
    description: string;
    price: number;
    discount_price?: number;
    is_new: boolean;
    image_link: string;
    other_images_link: string[]; // Supondo que sempre seja um array
  };
}

function Product({ product }: ProductProps) {
  // Verifica se other_images_link é um array antes de tentar usar o map
  const otherImages = Array.isArray(product.other_images_link) ? product.other_images_link : [];

  return (
    <ProductContainer>
      <div className="container">
        <div className="container-images">
          <div className="thumbnail">
            {/* Renderiza as imagens adicionais */}
            {otherImages.map((image, index) => (
              <img key={index} src={image} alt={`Miniatura ${index + 1}`} />
            ))}
          </div>
          <img className="main-image" src={product.image_link} alt="Imagem Principal" />
        </div>
        <aside>
          <h2>{product.name}</h2>
          <p className="price">{`$${product.price}`}</p>
          <div className="rate">
            <span>⭐⭐⭐⭐⭐ | 5 customers review</span>
            <p>{product.description}</p>
          </div>
          <div className="size">
            <span>Size</span>
            <div className="button-style">
              <button>L</button>
              <button>XL</button>
              <button>XS</button>
            </div>
          </div>
          <div className="color">
            <span>Color</span>
            <div className="button-style">
              <button className="bt-1"> </button>
              <button className="bt-2"> </button>
              <button className="bt-3"> </button>
            </div>
          </div>
          <div className="product-controls">
            <button>- 1 +</button>
            <button>Add To Cart</button>
            <button>+ Compare</button>
          </div>
          <hr />
          <div className="product-details">
            <div className="sku">
              <span className="label">SKU :</span>
              <span
                className="value"
                style={{
                  marginLeft: "5px",
                  display: "inline-block",
                  width: "100px",
                }}
              >
                SS01
              </span>
            </div>
            <div className="category">
              <span className="label">Category :</span>
              <span
                className="value"
                style={{
                  marginLeft: "5px",
                  display: "inline-block",
                  width: "100px",
                }}
              >
                Sofas
              </span>
            </div>
            <div className="tags">
              <span className="label">Tags :</span>
              <span
                className="value"
                style={{
                  marginLeft: "5px",
                  display: "inline-block",
                  width: "200px",
                }}
              >
                Sofa, Chair, Home, Shop
              </span>
            </div>
            <div className="share">
              <span className="label">Share :</span>
              <div className="icons">
                <a
                  href="#"
                  className="icon facebook"
                  aria-label="Share on Facebook"
                >
                  <img src={FbIcon} alt="" />
                </a>
                <a
                  href="#"
                  className="icon linkedin"
                  aria-label="Share on LinkedIn"
                >
                  <img src={LdIcon} alt="" />
                </a>
                <a
                  href="#"
                  className="icon twitter"
                  aria-label="Share on Twitter"
                >
                  <img src={TtIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <hr />
      <div className="description">
        <h4>Description</h4>
        <p>{product.description}</p>
      </div>
    </ProductContainer>
  );
}

export default Product;
