import React from 'react'; // Add this line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Subscription from './Subscription';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

