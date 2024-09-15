import NavBar from '../components/NavBar/Navbar';
import Product from '../components/Product/Product';
import ProductInfo from '../components/ProductInfo/ProductInfo'
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';
import Footer from '../components/Footer/Footer';

const OfferProduct = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Product />
      <ProductInfo/>
      <RelatedProduct />
      <Footer />
    </div>
  );
};

export default OfferProduct;