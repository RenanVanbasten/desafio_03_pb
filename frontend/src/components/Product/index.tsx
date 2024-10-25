import { useState, useEffect } from "react";
import axios from "axios";
import FbIcon from "../../assets/icons/facebook.png";
import LdIcon from "../../assets/icons/linkedin.png";
import TtIcon from "../../assets/icons/twitter.png";
import { ProductContainer } from "./styles";

interface ProductProps {
  product: {
    name: string;
    sku: string;
    category_id: number;
    description: string;
    large_description: string;
    price: number;
    discount_price?: number;
    is_new: boolean;
    image_link: string;
    other_images_link: string[];
  };
}

interface CategoryResponse {
  name: string;
}

function Product({ product }: ProductProps) {
  const [mainImage, setMainImage] = useState<string>(product.image_link);
  const [categoryName, setCategoryName] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const otherImages = Array.isArray(product.other_images_link)
    ? product.other_images_link
    : [];

  useEffect(() => {
    setMainImage(product.image_link);

    const fetchCategoryName = async () => {
      try {
        const response = await axios.get<CategoryResponse>(
          `http://localhost:3000/categories/${product.category_id}`
        );
        setCategoryName(response.data.name);
      } catch (error) {
        console.error("Erro ao buscar a categoria:", error);
        setCategoryName("Unknown");
      }
    };

    fetchCategoryName();
  }, [product]);

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <ProductContainer>
      <div className="container">
        <div className="container-images">
          <div className="thumbnail">
            {otherImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Miniatura ${index + 1}`}
                onClick={() => handleImageClick(image)}
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  width: "76px",
                  height: "80px",
                }}
              />
            ))}
          </div>
          <img className="main-image" src={mainImage} alt="Main product" />
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
            <div className="button-size-style">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "size-selected" : ""}
                  onClick={() => handleSizeSelection(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="color">
            <span>Color</span>
            <div className="button-color-style">
              <button
                className={`bt-1 ${
                  selectedColor === "bt-1" ? "color-selected" : ""
                }`}
                onClick={() => handleColorSelection("bt-1")}
              />
              <button
                className={`bt-2 ${
                  selectedColor === "bt-2" ? "color-selected" : ""
                }`}
                onClick={() => handleColorSelection("bt-2")}
              />
              <button
                className={`bt-3 ${
                  selectedColor === "bt-3" ? "color-selected" : ""
                }`}
                onClick={() => handleColorSelection("bt-3")}
              />
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
              <span className="value">{product.sku}</span>
            </div>
            <div className="category">
              <span className="label">Category :</span>
              <span className="value">{categoryName || "Loading..."}</span>{" "}
            </div>
            <div className="tags">
              <span className="label">Tags :</span>
              <span className="value">Sofa, Chair, Home, Shop</span>
            </div>
            <div className="share">
              <span className="label">Share :</span>
              <div className="icons">
                <button
                  className="icon facebook"
                  aria-label="Share on Facebook"
                >
                  <img src={FbIcon} alt="Facebook" />
                </button>
                <button
                  className="icon linkedin"
                  aria-label="Share on LinkedIn"
                >
                  <img src={LdIcon} alt="LinkedIn" />
                </button>
                <button className="icon twitter" aria-label="Share on Twitter">
                  <img src={TtIcon} alt="Twitter" />
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <hr />
      <div className="description">
        <div className="description-title">
          <h5>Description</h5>
          <h5 style={{ fontWeight: "400px", color: "#9f9f9f" }}>
            Additional Information
          </h5>
        </div>
        <div className="description-text">
          <p>{product.large_description}</p>
        </div>
      </div>
    </ProductContainer>
  );
}

export default Product;
