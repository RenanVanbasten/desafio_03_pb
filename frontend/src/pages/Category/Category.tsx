import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList";
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

interface ProductsResponse {
  products: Product[];
  totalPages: number;
}

function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const productsPerPage = 16;

  const categoryMap: Record<string, number> = {
    Dining: 1,
    Living: 2,
    Bedroom: 3,
  };

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const categoryId = categoryMap[categoryName || ""];
      if (!categoryId) {
        console.error("Categoria inválida:", categoryName);
        setProducts([]);
        return;
      }

      try {
        const response = await axios.get<ProductsResponse>("http://localhost:3000/products", {
          params: {
            category_ids: categoryId,
            page: currentPage,
            limit: productsPerPage,
          },
        });

        setProducts(response.data.products || []);
        setTotalPages(response.data.totalPages || 1);
      } catch (error) {
        console.error("Erro ao buscar produtos da categoria:", error);
        setProducts([]);
      }
    };

    fetchProductsByCategory();
  }, [categoryName, currentPage]);

  return (
    <div>
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
        products={products}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Category;
