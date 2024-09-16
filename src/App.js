import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Subscription from './pages/Subscription';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/subscribe">Subscribe</a>
        </nav>

        {/* Routes is now used instead of Switch */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route path="*" element={<NotFound />} /> {/* Wildcard route for 404 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

