import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '/src/assets/logo.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.NavBar}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Logo" /> 
        </a>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li><Link to="/">Home <FontAwesomeIcon icon={faChevronDown} /></Link></li>
          <li><Link to="/products">Products List <FontAwesomeIcon icon={faChevronDown} /></Link></li>
          <li><Link to="/specialoffer">Special Offer <FontAwesomeIcon icon={faChevronDown} /></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;