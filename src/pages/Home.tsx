import NavBar from '../components/NavBar/Navbar';
import Hero from '../components/Hero/Hero';
import ProductCategories from '../components/ProductCategories/ProductCategories';
import Mission from '../components/Mission/Mission';


const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductCategories />
      <Mission />
    </div>
  );
};

export default Home;