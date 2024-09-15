import styles from './ProductInfo.module.css';

const ProductInfo = () => {
  return (
    <section className={styles.productInfoContainer}>
      <div className={styles.infoBlock}>
        <h2>Product information</h2>
        <p>
          Clean and fashionable soft hoodie, perfect for a day you feel like being comfortable and cool all at the same time. 
          A spacious hoodie and cool prints at both the back and front. The kangaroo pockets make it easy for you to bring whatever you need during the day.
        </p>
        <ul>
          <li>Drawstring in hood</li>
          <li>Kangaroo pocket</li>
          <li>Ribbed cuffs</li>
          <li>Long sleeves</li>
          <li>Print</li>
          <li>GOTS (Global Organic Textile Standard)</li>
        </ul>
        <p>100% Organic cotton</p>
        <p>Style: 7363167-831 hoodie</p>
      </div>

      <div className={styles.infoBlock}>
        <h2>Production</h2>
        <p> Our hoodies are made with eco-friendly materials and ethical practices, using organic cotton and recycled fibers. We focus on reducing waste and ensuring fair labor conditions, so you can feel good about your purchase.</p>
      </div>

      <div className={styles.infoBlock}>
        <h2>Delivery</h2>
        <ul>
          <li>Free delivery.</li>
          <li>The normal delivery time is 1–6 workdays.</li>
          <li>Big sales days can lead to somewhat longer delivery times.</li>
        </ul>
        <a href="#">Read more about delivery</a>
        <h2>Exchange and return</h2>
        <p>30 Days Full Refund.</p>
        <a href="#">Read more about exchange and return</a>
      </div>
    </section>
  );
};

export default ProductInfo;