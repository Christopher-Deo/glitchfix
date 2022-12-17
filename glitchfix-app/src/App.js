// React imports
import React from 'react';
import { Route, Routes } from "react-router-dom"
//Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
// Material UI imports

// Local imports
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Instructions from './Pages/Instructions'; 
import Home from './Pages/Home';
import Contact from './Pages/Contact';


function App() {
  

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructions/*" element={<Instructions />} />
          <Route path="/contact/*" element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
