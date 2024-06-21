import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import { Link } from "react-router-dom";

function App() {
  return (
      <div id="container">
        <Navbar />
        <MainSection />
        <footer>
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        </footer>
      </div>
  );
}

export default App;
