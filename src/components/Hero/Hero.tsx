import styles from './Hero.module.css'; // CSS module for Hero section

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Clever Designs, Delivered Free</h1> {/* Main headline */}
        <p>Explore our unique collection of furniture that suits every room.</p> {/* Supporting text */}
        <button className={styles.ctaButton}>Shop Now</button> {/* Call-to-action button */}
      </div>
    </section>
  );
};

export default Hero;