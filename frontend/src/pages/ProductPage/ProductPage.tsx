import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NavigationTrail } from "./styles";
import Product from "../../components/Product";
import RelatedProducts from "../../components/RelatedProducts";
import axios from "axios";

interface ProductType {
  id: number;
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
}

function ProductPage() {
  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) {
          console.error("ID do produto não foi encontrado na URL.");
          return;
        }

        const response = await axios.get<ProductType>(
          `http://localhost:3000/products/${id}`
        );

        if (response.data) {
          setProduct(response.data);
        } else {
          console.error("Produto não encontrado.");
        }
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Carregando produto...</div>;
  }

  if (!product) {
    return <div>Produto não encontrado. Verifique se o ID está correto.</div>;
  }

  return (
    <div>
      <NavigationTrail>
        <div className="navigationTrail-container">
          <Link to="/" style={{ textDecoration: "none", color: "#9f9f9f"}}>
            Home
          </Link>
          <span style={{ color: "black" }}>&gt;</span>
          <Link to="/shop" style={{ textDecoration: "none", color: "#9f9f9f"}}>
            Shop
          </Link>
          <span style={{ color: "black" }}>&gt;</span>
          <div className="vertical-line" />
          <span style={{ color: "black" }}>{product.name}</span>{" "}
        </div>
      </NavigationTrail>
      <Product product={product} />
      <RelatedProducts categoryId={product.category_id} currentProductId={product.id} />
    </div>
  );
}


export default ProductPage;
