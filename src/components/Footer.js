// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} Harsema Marketing Solutions. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#56265c', // Dark purple background
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',  // Sticks the footer at the bottom
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '1rem',
  },
};

export default Footer;

