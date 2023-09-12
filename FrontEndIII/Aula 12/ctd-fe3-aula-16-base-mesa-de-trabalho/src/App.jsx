import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Home from './Home';
import Contact from './Contact';
import Beer from './Beer'; 

function App() {
  return (
    <div>
      <h1>Mais do que bebidas, vamos celebrar o encontro!!</h1>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/beer/:id" element={<Beer />} /> 
      </Routes>
    </div>
  );
}

export default App;
