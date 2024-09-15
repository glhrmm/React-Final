import styles from "./Carousel.module.css";

const Carousel = () => {
  const carouselImages = [
    "src/assets/Carousel-Images/carousel1.jpg",
    "src/assets/Carousel-Images/carousel2.jpg",
    "src/assets/Carousel-Images/carousel3.jpg",
    "src/assets/Carousel-Images/carousel4.jpg",
    "src/assets/Carousel-Images/carousel5.jpg",
    "src/assets/Carousel-Images/carousel6.jpg",
    "src/assets/Carousel-Images/carousel7.jpg",
    "src/assets/Carousel-Images/carousel8.jpg",
    "src/assets/Carousel-Images/carousel9.jpg",
  ];

  return (
    <section className={styles.realLifeOutfit}>
      <div className={styles.carouselSection}>
        <h2>For every moment, a different style</h2>
        <div className={styles.carousel}>
          {carouselImages.map((image, index) => (
            <div key={index} className={styles.carouselItem}>
              <img src={image} alt={`Real Life ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.imageSection}>
        <h2>Easy-to-love design</h2>
        <div className={styles.imageWithButton}>
          <img src="src/assets/TryOutImage.jpg" alt=""/>
          <a href="/products" className={styles.ctaButton}>
            Shop Our Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
