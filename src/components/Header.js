import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo-1.JPG';

const Header = () => {
  return (
    <header style={styles.header}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="Harsema Marketing Logo" style={styles.logo} />
      </div>

      {/* Navigation Links */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/services" style={styles.navLink}>Services</Link>
        <Link to="/contact" style={styles.navLink}>Contact</Link>
        <Link to="/subscribe" style={styles.navLink}>Subscribe</Link>
      </nav>
    </header>
  );
};

// Styles for the header
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#56265c', // Dark purple background
    color: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Add a slight shadow
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '60px',
    width: 'auto',
  },
  nav: {
    display: 'flex',
    gap: '20px', // Space between each nav link
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    padding: '5px 10px',
    transition: 'background-color 0.3s ease',
  },
  navLinkHover: {
    backgroundColor: '#56265c', // Darker purple on hover
  },
};

export default Header;

