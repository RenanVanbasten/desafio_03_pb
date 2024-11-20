import HeroImage from "../../assets/images/hero-home.jpg";
import Categories from "../../components/Categories";
import Products from "../../components/OurProducts";

function Home() {
  return (
    <div>
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
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
