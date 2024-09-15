import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;  
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);  
  const [visibleProducts, setVisibleProducts] = useState(6); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data: Product[]) => {
        const clothingItems = data.filter(
          (product) =>
            product.category === "men's clothing" || product.category === "women's clothing"
        );
        setProducts(clothingItems);  
      });
  }, []);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 6);  
  };

  return (
    <section className={styles.productsPage}>
      <h1 className={styles.heading}>All Products</h1>
      <p className={styles.description}>
      Discover thoughtfully designed pieces to bring style and comfort to your home. Each product is carefully crafted to inspire and create a space that's uniquely yours.      </p>

      <div className={styles.productGrid}>
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productPrice}>${product.price}</p>

            <div className={styles.productOverlay}>
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>          
          </div>
        ))}
      </div>

      {visibleProducts < products.length && (
        <button onClick={loadMoreProducts} className={styles.loadMoreButton}>
          See More
        </button>
      )}
    </section>
  );
};

export default ProductList;