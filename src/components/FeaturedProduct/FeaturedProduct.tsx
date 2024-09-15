import styles from './FeaturedProduct.module.css';

const FeaturedProduct = () => {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.textSection}>
        <h2>S I N S</h2>
        <p>
          <strong>The Goretex</strong> system works beautifully. It's comfortable, absolutely solid, and looks great.
        </p>
        <a href="products" className={styles.ctaButton}>Shop Now</a>
      </div>
      <div className={styles.imageSection}>
        <img src="src/assets/featuredProductImage.png" alt="Featured Product" />
      </div>
    </section>
  );
};

export default FeaturedProduct;