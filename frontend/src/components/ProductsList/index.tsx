import { ProductsContainer } from "./styles";
import Card from "../Card";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price?: number;
  is_new: boolean;
  image_link: string;
}

interface ProductsListProps {
  products: Product[];
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

function ProductsList({ products, currentPage, totalPages, onPageChange }: ProductsListProps) {
  

  return (
    <ProductsContainer>
      <div className="container">
        <div className="container-content">
          <div className="container-card">
            {products.length > 0 ? (
              products.map((product) => (
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
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
          <div className="container-buttons">
            {currentPage > 1 && (
              <button className="button-control" onClick={() => onPageChange(currentPage - 1)} style={{ width: "100px" }}>
                Previous
              </button>
            )}
            {Array.from({ length: totalPages }, (_, index) => (
              <button className="button-control"
                key={index + 1}
                onClick={() => onPageChange(index + 1)}
                style={{
                  fontWeight: currentPage === index + 1 ? "bold" : "normal",
                }}
              >
                {index + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button className="button-control" onClick={() => onPageChange(currentPage + 1)} style={{ width: "100px" }}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </ProductsContainer>
  );
}

export default ProductsList;
