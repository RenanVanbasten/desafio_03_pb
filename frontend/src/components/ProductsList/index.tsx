import { ProductsContainer } from "./styles"; // O seu styled-component já fornecido
import Card from "../Card"; // O componente de Card para renderizar os produtos

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
  products: Product[]; // Receber a lista de produtos via props
}

function ProductsList({ products }: ProductsListProps) {
  return (
    <ProductsContainer>
      <div className="container">
        <div className="container-content">
          <div className="container-card">
            {products.length > 0 ? (
              products.map((product) => (
                <Card
                  key={product.id}
                  id={product.id} // Certifique-se de passar o id
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
            <button> 1 </button>
            <button> 2 </button>
            <button> 3 </button>
            <button style={{ width: "100px" }}> Next </button>
          </div>
        </div>
      </div>
    </ProductsContainer>
  );
}

export default ProductsList;
