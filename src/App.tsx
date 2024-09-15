import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductGrid from './pages/ProductGrid';
import OfferProduct from './pages/OfferProduct';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductGrid />} />
          <Route path="/specialoffer" element={<OfferProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
