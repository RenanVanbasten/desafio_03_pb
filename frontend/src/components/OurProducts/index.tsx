import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContainer } from "./styles";
import Card from "../Card";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price?: number;
  is_new: boolean;
  image_link: string;
}

function OurProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ products: Product[] }>(
          "http://localhost:3000/products",
          {
            params: {
              has_discount: true,
              is_new: true,
              limit: 8,
            },
          }
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleShowMore = () => {
    navigate("/shop");
  };

  return (
    <ProductsContainer>
      <div className="container">
        <div className="container-title">
          <h1>Our Products</h1>
        </div>
        <div className="container-card">
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              discountPrice={product.discount_price}
              isNew={product.is_new}
              imageLink={product.image_link}
            />
          ))}
        </div>
        <button className="show-more" onClick={handleShowMore}>
          Show More
        </button>
      </div>
    </ProductsContainer>
  );
}

export default OurProducts;
