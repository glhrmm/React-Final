import styles from './Mission.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faLeaf, faStar } from '@fortawesome/free-solid-svg-icons';

const Mission = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionContent}>
        <h2>Our Mission</h2>
        <p>
          We strive to offer high-quality, eco-friendly products with free delivery, making shopping 
          as convenient and sustainable as possible.
        </p>
        <div className={styles.missionIcons}>
          <div className={styles.iconBox}>
            <FontAwesomeIcon icon={faTruck} size="3x" className={styles.icon} />
            <p>Free Delivery</p>
          </div>
          <div className={styles.iconBox}>
            <FontAwesomeIcon icon={faLeaf} size="3x" className={styles.icon} />
            <p>Sustainability</p>
          </div>
          <div className={styles.iconBox}>
            <FontAwesomeIcon icon={faStar} size="3x" className={styles.icon} />
            <p>Top Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;