
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.newsletterLeft}>
          <input
            type="email"
            placeholder="Sign Up For Fashion Reads"
            className={styles.emailInput}
          />
          <button className={styles.subscribeButton}>SUBSCRIBE</button>
        </div>

        <div className={styles.socialSection}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h4>Shopping Services</h4>
          <ul>
            <li><a href="">Schedule Consultation</a></li>
            <li><a href="/">Showrooms</a></li>
            <li><a href="/">Trade Program</a></li>
            <li><a href="/">Outlet</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>About</h4>
          <ul>
            <li><a href="/">Our Story</a></li>
            <li><a href="/">Reviews</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Financing</a></li>
            <li><a href="/">Patents</a></li>
            <li><a href="/">Our Blog</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Resources</h4>
          <ul>
            <li><a href="/">Look Up Order Status</a></li>
            <li><a href="/">Assembly Instructions</a></li>
            <li><a href="/">Returns</a></li>
            <li><a href="/">Shipping & Delivery</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Refer a Friend</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Contact Customer Experience</h4>
          <ul>
            <li>Email: support@template.com</li>
            <li>Text: 224-628-7769</li>
            <li>Hours: Mon - Fri, 10a to 8p EST</li>
            <li>Sat - Sun, 10a to 2p EST</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2023 Template | Terms - Accessibility - Sitemap - Privacy</p>
        <p className={styles.footerAddress}>15 W 27th Street, 9th Floor New York, NY, 10001</p>
      </div>
    </footer>
  );
};

export default Footer;
