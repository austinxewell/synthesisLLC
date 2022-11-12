import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/home';
import About from './pages/about';
import OurWork from './pages/ourWork';
import Contact from './pages/contact';
import RequestBid from './pages/requestBid';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, handlePageChange] = useState('Home');

  return (
    <body>
        <Router>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} sticky="top" />
          <div>
            <Routes>
              <Route exact path = "/" element ={<Home />} />
              <Route exact path = "/about" element ={<About />} />
              <Route exact path = "/ourWork" element ={<OurWork />} />
              <Route exact path = "/contact" element ={<Contact />} />
              <Route exact path = "/requestBid" element ={<RequestBid />} />
            </Routes>
          </div>
        </Router>
        <Footer />
    </body>
  );
}


