import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileLayout from './components/MobileLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BookNow from './pages/BookNow';
import { useScreenSize } from './hooks/useScreenSize';

function App() {
  const { isMobile } = useScreenSize();

  return (
    <Router>
      <div className="App">
        <Header />
        {isMobile ? (
          <Routes>
            <Route path="/" element={<MobileLayout />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/about" element={<MobileLayout />} />
            <Route path="/services" element={<MobileLayout />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book-now" element={<BookNow />} />
          </Routes>
        )}
        {!isMobile && <Footer />}
      </div>
    </Router>
  );
}

export default App;
