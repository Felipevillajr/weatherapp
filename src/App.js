import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./component/header/header";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
