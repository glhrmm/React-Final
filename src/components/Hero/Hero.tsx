import styles from './Hero.module.css'; 

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Clever Designs, Delivered Free</h1> 
        <p>Explore our unique collection of outfits and choose the one that suits you.</p> 
        <a href='products' className={styles.heroButton}>Shop Now</a> 
      </div>
    </section>
  );
};

export default Hero;