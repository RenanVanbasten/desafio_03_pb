import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../Card";
import { ProductsContainer } from "./styles";

interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price?: number;
  is_new: boolean;
  image_link: string;
}

interface RelatedProductsResponse {
  products: ProductType[];
  page: number;
  total: number;
  totalPages: number;
}

function RelatedProducts({ categoryId, currentProductId }: { categoryId: number; currentProductId: number }) {
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get<RelatedProductsResponse>(
          `http://localhost:3000/products?category_id=${categoryId}`
        );

        if (response.data && Array.isArray(response.data.products)) {
          const filteredProducts = response.data.products.filter(
            (product) => product.id !== currentProductId
          );
          setRelatedProducts(filteredProducts);
        } else {
          console.error("A API não retornou um array válido na chave 'products'.");
          setRelatedProducts([]);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos relacionados:", error);
        setRelatedProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [categoryId, currentProductId]);

  if (loading) {
    return <div>Carregando produtos relacionados...</div>;
  }

  if (relatedProducts.length === 0) {
    return <div>Não foram encontrados produtos relacionados.</div>;
  }

  const handleShowMore = () => {
    if (visibleProducts < 8) {
      setVisibleProducts(8); 
    } else {
      navigate("/shop"); 
    }
  };

  return (
    <ProductsContainer>
      <div className="container">
        <div className="container-content">
          <div className="container-title">
            <h1>Related Products</h1>
          </div>
          <div className="container-card">
            {relatedProducts.slice(0, visibleProducts).map((product) => (
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
            {visibleProducts < 8 ? "Show More" : "Go to Shop"}
          </button>
          <hr />
        </div>
      </div>
    </ProductsContainer>
  );
}

export default RelatedProducts;
