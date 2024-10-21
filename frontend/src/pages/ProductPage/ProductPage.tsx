import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { NavigationTrail } from "./styles";
import Product from "../../components/Product";
import RelatedProducts from "../../components/RelatedProducts";
import Footer from "../../components/Footer";
import axios from "axios";

// Definindo o tipo ProductType
interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price?: number;
  is_new: boolean;
  image_link: string;
  other_images_link: string[];
  category_id: number; // Adicionando o campo category_id
}

function ProductPage() {
  const { id } = useParams<{ id: string }>(); // Garantindo que o ID seja uma string
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) {
          console.error("ID do produto não foi encontrado na URL.");
          return;
        }

        console.log(`Fetching product with ID: ${id}`); // Debug para verificar o ID

        const response = await axios.get<ProductType>(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
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
      <Header />
      <NavigationTrail>
        <div className="navigationTrail-container">
          <span>Home</span>
          <span style={{ color: "black" }}>&gt;</span>
          <span>Shop</span>
          <span style={{ color: "black" }}>&gt;</span>
          <div className="vertical-line" />
          <span style={{ color: "black" }}>{product.name}</span> {/* Exibindo o nome do produto dinamicamente */}
        </div>
      </NavigationTrail>
      <Product product={product} /> {/* Passando os detalhes do produto como prop */}
      {/* Passando o categoryId do produto atual para renderizar os produtos relacionados */}
      <RelatedProducts categoryId={product.category_id} />
      <Footer />
    </div>
  );
}

export default ProductPage;
