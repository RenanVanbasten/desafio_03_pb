import { useEffect, useState } from "react";
import Icon01 from "../../assets/icons/Vector (1).png";
import Icon02 from "../../assets/icons/Vector (2).png";
import Icon03 from "../../assets/icons/Vector (3).png";
import HeroImage from "../../assets/images/hero-shop.png";
import axios from "axios";
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

interface FiltersState {
  category_ids: number[];
  is_new: boolean;
  has_discount: boolean;
  sort_by: string;
}

function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FiltersState>({
    category_ids: [],
    is_new: false,
    has_discount: false,
    sort_by: "default",
  });
  const [productsToShow, setProductsToShow] = useState<number>(16);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:3000/products"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

 
  const toggleFilters = () => {
    setShowFilters((prevState) => !prevState);
  };

  const handleFilterChange = (e: any) => {
    const { name, value, checked } = e.target;

    if (name === "is_new" || name === "has_discount") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked,
      }));
    } else if (name === "category") {
      const categoryId = parseInt(value, 10);
      setFilters((prevFilters) => {
        let updatedCategories = [...prevFilters.category_ids];
        if (checked) {
          updatedCategories.push(categoryId);
        } else {
          updatedCategories = updatedCategories.filter(
            (id) => id !== categoryId
          );
        }
        return {
          ...prevFilters,
          category_ids: updatedCategories,
        };
      });
    } else if (name === "sort_by") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        sort_by: value,
      }));
    }
  };

  const handleShowChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 16) {
      setProductsToShow(value);
    }
  };

  useEffect(() => {
    let filtered = [...products];
  
    if (filters.category_ids.length > 0) {
      filtered = filtered.filter((product) =>
        filters.category_ids.includes(product.category_id)
      );
    }
  
    if (filters.is_new) {
      filtered = filtered.filter((product) => product.is_new);
    }
  
    if (filters.has_discount) {
      filtered = filtered.filter(
        (product) =>
          product.discount_price !== null &&
          product.discount_price !== undefined
      );
    }
  
    if (filters.sort_by === "ascending") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort_by === "descending") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
  
   
  
    setFilteredProducts(filtered.slice(0, productsToShow));
  }, [filters, products, productsToShow]);
  

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
            <span>
              Showing {filteredProducts.length} of {products.length} results
            </span>
          </div>
          <div>
            <label htmlFor="show">Show</label>
            <input
              type="number"
              name="show"
              value={productsToShow}
              onChange={handleShowChange}
              min="1"
              max="16"
              placeholder="16"
            />
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

      {showFilters && (
        <FiltersSection>
          <h3>Filter Products By:</h3>
          <div className="filter-group">
            <label>
              <input
                type="checkbox"
                name="category"
                value="7"
                onChange={handleFilterChange}
              />
              Dining
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="8"
                onChange={handleFilterChange}
              />
              Living
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="9"
                onChange={handleFilterChange}
              />
              Bedroom
            </label>
            <label>
              <input
                type="checkbox"
                name="is_new"
                onChange={handleFilterChange}
              />
              New Products
            </label>
            <label>
              <input
                type="checkbox"
                name="has_discount"
                onChange={handleFilterChange}
              />
              Products with Discount
            </label>
          </div>
        </FiltersSection>
      )}

      <ProductsList products={filteredProducts} />
      <Features />
      <Footer />
    </div>
  );
}

export default Shop;
