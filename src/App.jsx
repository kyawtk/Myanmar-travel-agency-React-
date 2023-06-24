import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Places from "./pages/Places";
import Services from './pages/Services'
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/places" element={<Places/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
