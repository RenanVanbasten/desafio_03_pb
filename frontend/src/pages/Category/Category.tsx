import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  category_id: number;
}

function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:3000/products");
        const categoryMap: { [key: string]: number } = {
          Dining: 7,
          Living: 8,
          Bedroom: 9,
        };

        if (categoryName && categoryName in categoryMap) {
          const categoryId = categoryMap[categoryName as keyof typeof categoryMap];
          const filtered = response.data.filter(product => product.category_id === categoryId);
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts([]);
        }
      } catch (error) {
        console.error("Erro ao buscar os produtos da categoria:", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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

      <ProductsList
        products={currentProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <Features />
      <Footer />
    </div>
  );
}

export default Category;
