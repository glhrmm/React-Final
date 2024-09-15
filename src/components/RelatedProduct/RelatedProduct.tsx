import { useEffect, useState } from 'react';
import styles from './RelatedProduct.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const RelatedProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5') 
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <section className={styles.relatedProducts}>
      <h2>Related Products You Might Love</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.productPrice}>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProduct;