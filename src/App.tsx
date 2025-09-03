import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import TimelinePage from "./pages/TimelinePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
      </Routes>
    </Router>
  );
};

export default App;