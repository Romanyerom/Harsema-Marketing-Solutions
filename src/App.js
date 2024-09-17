import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Subscription from './pages/Subscription';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';  // Import Footer component

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        {/* Navigation Menu */}
        <nav style={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/subscribe">Subscribe</Link>
        </nav>

        {/* Define Routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribe" element={<Subscription />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    backgroundColor: '#4B0082',
    padding: '10px',
    textAlign: 'center',
  },
};

export default App;

