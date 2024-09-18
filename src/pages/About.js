import React from 'react';

// Import the images
import picture1 from '../assets/Picture-1.jpg';
import picture2 from '../assets/Picture-2.jpg';
import teamMember1 from '../assets/Team-member-1.jpg';
import teamMember2 from '../assets/Team-member-2.jpg';
import teamMember3 from '../assets/Team-member-3.jpg';

const About = () => {
  return (
    <div style={styles.container}>
      {/* Company History Section */}
      <section style={styles.historySection}>
        <div style={styles.imageSection}>
          {/* Two images on the left */}
          <img src={picture1} alt="Company Picture 1" style={styles.image} />
          <img src={picture2} alt="Company Picture 2" style={styles.image} />
        </div>
        <div style={styles.textSection}>
          <h2 style={styles.heading}>Company History</h2>
          <p style={styles.text}>
            Welcome to Harsema Marketing Solutions, your trusted partner in innovative marketing strategies.
            Founded in 2015 by a group of passionate marketing professionals, Harsema Marketing Solutions has grown
            from a small startup into a leading provider of comprehensive marketing services. Our journey began
            with a mission to help businesses of all sizes harness the power of digital marketing to achieve their goals.
          </p>
          <p style={styles.text}>
            Over the years, we have expanded our services, honed our expertise, and built a team of dedicated professionals
            who are committed to delivering exceptional results. From our humble beginnings in a shared office space to our
            current state-of-the-art headquarters, our growth story is a testament to our unwavering commitment to excellence
            and client satisfaction.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Vision</h2>
        <p style={styles.text}>
          We envision a world where businesses of all sizes can compete on a level playing field through the power of effective marketing.
          Our vision is to be the go-to marketing partner for businesses looking to achieve sustainable growth and make a positive impact in their industries.
        </p>
      </section>

      {/* Mission Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Mission</h2>
        <p style={styles.text}>
          At Harsema Marketing Solutions, our mission is to empower businesses to thrive in the digital age. We strive to provide cutting-edge marketing
          solutions that are tailored to meet the unique needs of each client. Our goal is to build lasting partnerships based on trust, innovation, and measurable results.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section style={styles.teamSection}>
        <h2 style={styles.heading}>Meet the Team</h2>
        <div style={styles.teamGrid}>
          <div style={styles.teamMember}>
            {/* CEO */}
            <img src={teamMember1} alt="Roman Zerihun" style={styles.teamImage} />
            <h3 style={styles.teamName}>Roman Zerihun</h3>
            <p style={styles.teamPosition}>CEO</p>
          </div>
          <div style={styles.teamMember}>
            {/* Chief Marketing Officer */}
            <img src={teamMember2} alt="Sinework Adnew" style={styles.teamImage} />
            <h3 style={styles.teamName}>Sinework Zerihun</h3>
            <p style={styles.teamPosition}>Chief Marketing Officer</p>
          </div>
          <div style={styles.teamMember}>
            {/* Head of Strategy */}
            <img src={teamMember3} alt="Bethelihem Erena" style={styles.teamImage} />
            <h3 style={styles.teamName}>Bethelihem Erena</h3>
            <p style={styles.teamPosition}>Head of Strategy</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
    padding: '20px',
  },
  historySection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  imageSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '400px',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  textSection: {
    flex: 1,
    paddingLeft: '20px',
    textAlign: 'justify', // Justified text alignment
  },
  section: {
    marginBottom: '40px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#4B0082', // Dark purple
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    color: '#333',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
  },
  teamSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  teamGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  teamMember: {
    textAlign: 'center',
    maxWidth: '200px',
  },
  teamImage: {
    maxWidth: '100%',
    borderRadius: '50%',
    height: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  teamName: {
    fontSize: '1.2rem',
    margin: '10px 0 5px',
  },
  teamPosition: {
    color: '#777',
  },
};

export default About;

