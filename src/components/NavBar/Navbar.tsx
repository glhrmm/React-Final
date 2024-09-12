import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Ensure correct CSS import
import logo from '/Users/guilherme/Documents/Full Stack Final Projects/React-Final/src/assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.NavBar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        <ul className={styles.navLinks}>
          <li><Link to="/">Home <FontAwesomeIcon icon={faChevronDown} /></Link></li>
          <li><Link to="/products">Products <FontAwesomeIcon icon={faChevronDown} /></Link></li>
          <li><Link to="/about">About <FontAwesomeIcon icon={faChevronDown} /></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;