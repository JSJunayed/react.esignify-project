import React from "react";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return ( <Router>
    <GlobalStyle />
    <Navbar />

    <Routes>
    <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
    
  </Router>
    
  );
}

export default App;
