import React from "react";
import NavBar from "./NavBar";
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from "./FooterComponent";
import FlightFlowComponent from "./FlightFlowComponent";

function App() {

  return (
    <Router>
      <div className="w-full h-auto content">
        < NavBar />
        <div className="subContent">
          <Routes>
            < Route path="/" element={ < Home /> } />
            < Route path="/flight-flow" element={ < FlightFlowComponent /> } />
          </Routes>
        </div>
        < FooterComponent />
      </div>
    </Router>
  )
}

export default App;
