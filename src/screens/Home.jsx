import Cards from "../Cards";
import Filters from "../components/Filters";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Hero />
      <Filters />
      <Cards />
    </div>
  );
};

export default Home;
