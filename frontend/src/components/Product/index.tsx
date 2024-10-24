import { useState, useEffect } from "react";
import axios from "axios"; // Para fazer a requisição da categoria
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
  const [categoryName, setCategoryName] = useState<string | null>(null); // Estado para o nome da categoria
  const otherImages = Array.isArray(product.other_images_link)
    ? product.other_images_link
    : [];

  useEffect(() => {
    setMainImage(product.image_link);

    // Fazer a requisição para obter o nome da categoria
    const fetchCategoryName = async () => {
      try {
        const response = await axios.get<CategoryResponse>(`http://localhost:3000/categories/${product.category_id}`);
        setCategoryName(response.data.name); // Supondo que o nome da categoria esteja no campo 'name'
      } catch (error) {
        console.error("Erro ao buscar a categoria:", error);
        setCategoryName("Unknown"); // Caso ocorra um erro, exibe 'Unknown'
      }
    };

    fetchCategoryName();
  }, [product]);

  const handleImageClick = (image: string) => {
    setMainImage(image);
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
                style={{ cursor: "pointer", borderRadius: "10px", width: "76px", height: "80px" }}
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
            <div className="button-style">
              {["L", "XL", "XS"].map((size) => (
                <button key={size}>
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="color">
            <span>Color</span>
            <div className="button-style">
              <button className="bt-1" />
              <button className="bt-2" />
              <button className="bt-3" />
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
              <span className="value">{categoryName || "Loading..."}</span> {/* Exibe o nome da categoria */}
            </div>
            <div className="tags">
              <span className="label">Tags :</span>
              <span className="value">Sofa, Chair, Home, Shop</span>
            </div>
            <div className="share">
              <span className="label">Share :</span>
              <div className="icons">
                <a href="#" className="icon facebook" aria-label="Share on Facebook">
                  <img src={FbIcon} alt="Facebook" />
                </a>
                <a href="#" className="icon linkedin" aria-label="Share on LinkedIn">
                  <img src={LdIcon} alt="LinkedIn" />
                </a>
                <a href="#" className="icon twitter" aria-label="Share on Twitter">
                  <img src={TtIcon} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <hr />
      <div className="description">
        <h4>Description</h4>
        <p>{product.large_description}</p>
      </div>
    </ProductContainer>
  );
}

export default Product;
