import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Para pegar o parâmetro da URL
import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price?: number;
  is_new: boolean;
  image_link: string;
  category_id: number; // Adicionando o campo category_id para associar os produtos à categoria
}

function Category() {
  const { categoryName } = useParams<{ categoryName: string }>(); // Obtendo o nome da categoria da URL
  const [products, setProducts] = useState<Product[]>([]); // Para armazenar todos os produtos
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Para armazenar os produtos filtrados

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:3000/products"); // Substitua pela URL correta da API
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (categoryName) {
      // Filtrar os produtos pela categoria
      const categoryId = categoryName.toLowerCase() === "dining" ? 7 :
                        categoryName.toLowerCase() === "living" ? 8 :
                        categoryName.toLowerCase() === "bedroom" ? 9 : null;

      if (categoryId !== null) {
        const filtered = products.filter((product) => product.category_id === categoryId);
        setFilteredProducts(filtered);
      }
    }
  }, [categoryName, products]);

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1>{categoryName} Products</h1>
      </div>

      <ProductsList products={filteredProducts} /> {/* Passando apenas os produtos filtrados */}
      <Features />
      <Footer />
    </div>
  );
}

export default Category;
