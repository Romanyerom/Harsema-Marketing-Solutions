import React from 'react';

// Import the image (you can replace 'marketing-image.jpg' with the path to your image)
import marketingImage from '../assets/marketing-image.jpg';

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Main Heading */}
      <header style={styles.header}>
        <h1 style={styles.title}>Harsema Marketing Solution</h1>
      </header>

      {/* Image and Text Section */}
      <div style={styles.contentSection}>
        {/* Image */}
        <img src={marketingImage} alt="Marketing Strategy" style={styles.image} />
        
        {/* Text Section */}
        <div style={styles.textSection}>
          <h2 style={styles.subheading}>Our Promise To You</h2>
          <p style={styles.text}>
            Our clients' success is at the heart of what we do, so we work to understand
            client needs in a responsive and proactive manner, and concentrate our efforts
            to create results that add value to your bottom line.
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    padding: '20px',
    backgroundColor: '#4B0082',  // Dark Purple
    color: 'white',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    margin: 0,
  },
  contentSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
  },
  image: {
    maxWidth: '400px',
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  textSection: {
    maxWidth: '600px',
    textAlign: 'left',
  },
  subheading: {
    fontSize: '2rem',
    color: '#4B0082',  // Dark Purple
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.2rem',
    color: '#333',
    lineHeight: '1.6',
  },
};

export default Home;

