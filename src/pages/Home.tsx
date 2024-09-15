import NavBar from '../components/NavBar/Navbar';
import Hero from '../components/Hero/Hero';
import ProductCategories from '../components/ProductCategories/ProductCategories';
import Mission from '../components/Mission/Mission';
import Inspiration from '../components/Inspiration/Inspiration';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct'
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer/Footer';


const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductCategories />
      <Mission />
      <Inspiration/>
      <FeaturedProduct />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;