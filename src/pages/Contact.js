import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      {/* Main Heading */}
      <h1 style={styles.heading}>Interested in our services?</h1>
      <p style={styles.subheading}>
        Contact us today to learn how we can help your business grow!
      </p>

      {/* Contact Information Section */}
      <div style={styles.contactSection}>
        <p style={styles.contactItem}>
          <strong>Phone:</strong>{' '}
          <a href="tel:+251938005791" style={styles.link}>
            +251 938 005 791
          </a>
        </p>
        <p style={styles.contactItem}>
          <strong>Website:</strong>{' '}
          <a href="https://harsemamarketing.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            harsemamarketing.com
          </a>
        </p>
        <p style={styles.contactItem}>
          <strong>Email:</strong>{' '}
          <a href="mailto:contact@harsemamarketing.com" style={styles.link}>
            contact@harsemamarketing.com
          </a>
        </p>
        <p style={styles.contactItem}>
          <strong>Address:</strong> Bole Road, Addis Ababa, Ethiopia
        </p>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
    padding: '40px 20px',
    textAlign: 'center',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#4B0082', // Dark purple
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '40px',
  },
  contactSection: {
    marginTop: '20px',
    display: 'inline-block',
    textAlign: 'left',
  },
  contactItem: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '15px',
  },
  link: {
    color: '#4B0082',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};

export default Contact;

