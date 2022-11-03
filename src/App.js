import React, { useEffect } from 'react';
import $ from 'jquery';

import './App.css';

import Home from './pages/home.js'
import About from './pages/about.js';
import Services from './pages/services.js';
import Portfolio from './pages/portfolio.js';
import Team from './pages/team.js';
import Blog from './pages/blog.js';
import Header from './components/header.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  


  return ( 

    <>    
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
