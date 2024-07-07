import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MemberList from "./components/MemberList";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";

// Dummy components for routing
const Home = () => <h2>Home Page</h2>;
const Events = () => <h2>Events Page</h2>;
const AboutMission = () => <h2>Mission Page</h2>;

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us/mission" element={<AboutMission />} />
        <Route path="/about-us/members" element={<MemberList />} />
      </Routes>
    </Router>
  );
}

export default App;
