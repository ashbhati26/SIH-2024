import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Eyes from "./components/Eyes";
import Footer from "./components/Footer";
import Box from "./components/Box";
import LoginLanding from "./LoginPage/LoginLanding";
import LocomotiveScroll from 'locomotive-scroll';

function App(){

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="w-full min-h-screen bg-[#fff] text-[#050206] font-['Gilroy']">
            <NavBar />
            <LandingPage />
            <About />
            <Products />
            <Featured />
            <Box />
            <Eyes />
            <Footer />
          </div>
        } />
        <Route path="/login" element={<LoginLanding />} /> 
      </Routes>
    </Router>
  );
}

export default App;
