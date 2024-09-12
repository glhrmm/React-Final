import NavBar from '../components/NavBar/Navbar';
import Hero from '../components/Hero/Hero';
import ProductCategories from '../components/ProductCategories/ProductCategories';
import Mission from '../components/Mission/Mission';
import Inspiration from '../components/Inspiration/Inspiration';


const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductCategories />
      <Mission />
      <Inspiration/>
    </div>
  );
};

export default Home;