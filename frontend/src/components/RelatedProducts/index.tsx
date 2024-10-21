import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card"; // O componente Card já foi implementado
import { ProductsContainer } from "./styles";

// Definindo o tipo para os produtos
interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price?: number;
  is_new: boolean;
  image_link: string;
}

function RelatedProducts({ categoryId }: { categoryId: number }) {
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get<ProductType[]>(`http://localhost:3000/products?category_id=${categoryId}`);
        setRelatedProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching related products:", error);
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [categoryId]);

  if (loading) {
    return <div>Loading related products...</div>;
  }

  if (relatedProducts.length === 0) {
    return <div>No related products found.</div>;
  }

  return (
    <ProductsContainer>
      <div className="container">
        <div className="container-content">
          <div className="container-title">
            <h1>Related Products</h1>
          </div>
          <div className="container-card">
            {relatedProducts.slice(0, 4).map((product) => (
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
        </div>
      </div>
    </ProductsContainer>
  );
}

export default RelatedProducts;
