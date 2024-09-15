import { useState } from 'react';
import styles from './Product.module.css';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState('src/assets/OfferProduct-images/offerproduct1.jpeg');
  const [selectedSize, setSelectedSize] = useState('');

  const productImages = [
    'src/assets/OfferProduct-images/offerproduct2.jpeg',
    'src/assets/OfferProduct-images/offerproduct3.jpeg',
    'src/assets/OfferProduct-images/offerproduct4.jpeg',
    'src/assets/OfferProduct-images/offerproduct5.jpeg',
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <section className={styles.productPage}>
      <div className={styles.imageGallery}>
        <img src={selectedImage} alt="Main Product" className={styles.mainImage} />
        <div className={styles.thumbnailContainer}>
          {productImages.map((image, index) => (
            <img 
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className={styles.thumbnail}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      <div className={styles.productInfo}>
        <h1>Block Nomad Hoodie</h1>
        <p>$59.99 + Free Shipping</p>

        <div className={styles.colorOptions}>
          <p>Fabric Color - Navy Blue</p>
          <div className={styles.colorSwatches}>
            <span className={styles.colorSwatch} style={{ backgroundColor: '#4b7fab' }}></span>
            <span className={styles.colorSwatch} style={{ backgroundColor: 'green' }}></span>
            <span className={styles.colorSwatch} style={{ backgroundColor: 'red' }}></span>
            <span className={styles.colorSwatch} style={{ backgroundColor: 'black' }}></span>
          </div>
        </div>

        <div className={styles.sizeOptions}>
          <p>Select size:</p>
          <div className={styles.sizeSelection}>
            {sizes.map((size) => (
              <button
                key={size}
                className={`${styles.sizeButton} ${selectedSize === size ? styles.selectedSize : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <p className={styles.sizeGuide}>Size guide</p>
        </div>

        <button className={styles.addToCart}>Add to Cart</button>
      </div>
    </section>
  );
};

export default Product;