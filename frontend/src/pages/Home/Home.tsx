import Header from "../../components/Header";
import HeroImage from '../../assets/images/hero-home.jpg';
import Categories from "../../components/Categories";
import Products from "../../components/OurProducts";
import Features from "../../components/Features";
import Footer from "../../components/Footer";

function Home() {
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
        <Categories />  {/* Componente de categorias */}
        <Products />    {/* Componente de produtos */}
        <Features />    {/* Seção de features */}
        <Footer />      {/* Rodapé */}
      </div>
    );
  }
  
export default Home;
