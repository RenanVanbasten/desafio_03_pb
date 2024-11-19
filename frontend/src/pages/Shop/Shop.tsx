import { useEffect, useState } from "react";
import axios from "axios";
import Icon01 from "../../assets/icons/Vector (1).png";
import Icon02 from "../../assets/icons/Vector (2).png";
import Icon03 from "../../assets/icons/Vector (3).png";
import HeroImage from "../../assets/images/hero-shop.png";
import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import { FilterContainer, FiltersSection } from "./styles";

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
  total: number;
}


interface FiltersState {
  category_ids: number[];
  is_new: boolean;
  has_discount: boolean;
  sort_by: string;
}

function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FiltersState>({
    category_ids: [],
    is_new: false,
    has_discount: false,
    sort_by: "default",
  });
  const [productsPerPage, setProductsPerPage] = useState<number>(16);

  useEffect(() => {
    console.log("Filtros Atualizados:", filters);
  }, [filters]);

  const fetchFilteredProducts = async () => {
    try {
      const response = await axios.get<ProductsResponse>(
        "http://localhost:3000/products",
        {
          params: {
            category_ids:
              filters.category_ids.length > 0
                ? filters.category_ids.join(",")
                : undefined,
            is_new: filters.is_new || undefined,
            has_discount: filters.has_discount || undefined,
            sort_by:
              filters.sort_by !== "default" ? filters.sort_by : undefined,
            page: currentPage,
            limit: productsPerPage,
          },
        }
      );

      const { products, total, totalPages } = response.data;
      setProducts(Array.isArray(products) ? products : []);
      setTotalProducts(total || 0);
      setTotalPages(totalPages || 1);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setProducts([]);
      setTotalProducts(0);
      setTotalPages(1);
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, [filters, currentPage, productsPerPage]);

  const toggleFilters = () => {
    setShowFilters((prevState) => !prevState);
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement) {
      const { checked } = e.target;

      if (name === "is_new" || name === "has_discount") {
        setFilters((prevFilters) => {
          const updatedFilters = { ...prevFilters, [name]: checked };
          console.log("Filtro Atualizado", updatedFilters);
          return updatedFilters;
        });
      } else if (name === "category") {
        const categoryId = parseInt(value);
        setFilters((prevFilters) => {
          const updatedCategoryIds = prevFilters.category_ids.includes(
            categoryId
          )
            ? prevFilters.category_ids.filter((id) => id !== categoryId)
            : [...prevFilters.category_ids, categoryId];
          const updatedFilters = {
            ...prevFilters,
            category_ids: updatedCategoryIds,
          };
          console.log("Filtro Atualizado", updatedFilters);
          return updatedFilters;
        });
      }
    } else if (e.target instanceof HTMLSelectElement) {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters, [name]: value };
        console.log("Filtro Atualizado", updatedFilters);
        return updatedFilters;
      });
    }
  };

  const handleShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setProductsPerPage(value);
      setCurrentPage(1);
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <img
          src={HeroImage}
          alt="Hero"
          style={{ width: "1440px", height: "500px" }}
        />
      </div>
      <FilterContainer>
        <div className="filter-container">
          <div className="filter-icons">
            <img src={Icon01} alt="Filter" onClick={toggleFilters} />
            <span>Filter</span>
            <img src={Icon02} alt="" />
            <img src={Icon03} alt="" />
            <div className="vertical-line"></div>
            <p>
              Showing {products.length} of {totalProducts} results
            </p>
          </div>
          <div>
            <label htmlFor="show">Show</label>
            <select
              name="show"
              value={productsPerPage}
              onChange={handleShowChange}
              style={{
                width: "150px",
                height: "55px",
                border: "none",
                textAlign: "center",
                lineHeight: "55px",
              }}
            >
              <option value={4}>4 products</option>
              <option value={8}>8 products</option>
              <option value={12}>12 products</option>
              <option value={16}>16 products</option>
            </select>

            <label htmlFor="sort_by">Sort by</label>
            <select
              name="sort_by"
              id="sort_by"
              onChange={handleFilterChange}
              value={filters.sort_by}
              style={{
                width: "288px",
                height: "55px",
                border: "none",
                textAlign: "center",
                lineHeight: "55px",
              }}
            >
              <option value="default">Default</option>
              <option value="ascending">Price: Low to High</option>
              <option value="descending">Price: High to Low</option>
            </select>
          </div>
        </div>
      </FilterContainer>
      <div>
        {showFilters && (
          <FiltersSection>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="is_new"
                  checked={filters.is_new}
                  onChange={handleFilterChange}
                />
                New Products
              </label>
              <label>
                <input
                  type="checkbox"
                  name="has_discount"
                  checked={filters.has_discount}
                  onChange={handleFilterChange}
                />
                Has discount
              </label>
              <div>
                <label>
                  Categories:
                  <input
                    type="checkbox"
                    name="category"
                    value="1"
                    checked={filters.category_ids.includes(1)}
                    onChange={handleFilterChange}
                  />
                  Dining
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="category"
                    value="2"
                    checked={filters.category_ids.includes(2)}
                    onChange={handleFilterChange}
                  />
                  Living
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="category"
                    value="3"
                    checked={filters.category_ids.includes(3)}
                    onChange={handleFilterChange}
                  />
                  Bedroom
                </label>
              </div>
            </div>
          </FiltersSection>
        )}
      </div>

      <ProductsList
        products={products}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page: number) => setCurrentPage(page)}
      />

      <Features />
      <Footer />
    </div>
  );
}

export default Shop;
