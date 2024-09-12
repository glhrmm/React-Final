import styles from './ProductCategories.module.css'; // Import CSS module

// Placeholder images and categories
const categories = [
  { name: 'Shirts', imgSrc: 'src/assets/Categories-Image/shirts.jpg' },
  { name: 'Jeans', imgSrc: 'src/assets/Categories-Image/jeans.jpg' },
  { name: 'Jackets', imgSrc: 'src/assets/Categories-Image/jackets.jpg' },
  { name: 'Shoes', imgSrc: 'src/assets/Categories-Image/shoes.jpg' },
  { name: 'Pants', imgSrc: 'src/assets/Categories-Image/pants.jpg' },
  { name: 'Accessories', imgSrc: 'src/assets/Categories-Image/accessories.jpg' }
];

const ProductCategories = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2>Categories</h2>
      <div className={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <img src={category.imgSrc} alt={category.name} className={styles.categoryImage} />
          <div className={styles.categoryOverlay}>
            <p>{category.name}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;