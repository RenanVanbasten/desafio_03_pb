import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate para navegação
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
  const navigate = useNavigate(); // Inicializando o hook useNavigate

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:3000/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleShowMore = () => {
    navigate("/shop"); // Redireciona para a página ProductList
  };

  return (
    <ProductsContainer>
      <div className="container">
        <div className="container-title">
          <h1>Our Products</h1>
        </div>
        <div className="container-card">
          {products.slice(0, 8).map((product) => ( // Exibindo apenas 8 produtos
            <Card
              key={product.id}
              id={product.id} // Passando o ID para o Card
              name={product.name}
              description={product.description}
              price={product.price}
              discountPrice={product.discount_price}
              isNew={product.is_new}
              imageLink={product.image_link}
            />
          ))}
        </div>
        <button onClick={handleShowMore}>Show More</button> {/* Evento de clique para redirecionar */}
      </div>
    </ProductsContainer>
  );
}

export default OurProducts;
