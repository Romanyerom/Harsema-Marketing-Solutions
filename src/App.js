import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Subscription from './pages/Subscription';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        {/* Include the Header component */}
        <Header />

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
};

export default App;

