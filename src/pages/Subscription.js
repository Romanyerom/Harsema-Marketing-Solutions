import React, { useState } from 'react';

const Subscription = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Full Name: ${fullName}, Email: ${email}`);
  };

  return (
    <div style={styles.container}>
      {/* Subscription Box */}
      <div style={styles.box}>
        <h2 style={styles.heading}>Subscribe for our news</h2>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

// Styles for the Subscription Page
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',  // Full viewport height to center the box vertically
    backgroundColor: '#f7f7f7',
    padding: '20px',
  },
  box: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Softer shadow
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '15px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '15px',
    fontSize: '1rem',
    backgroundColor: '#4B0082',  // Dark purple for the button
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',  // Full width for responsiveness
    maxWidth: '200px',  // Limit width on larger screens
    margin: '0 auto',   // Center the button horizontally
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#3A006A', // Darker shade on hover
  },
};

export default Subscription;

