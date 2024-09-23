import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CarService from "./pages/CarService";
import HomePage from "./pages/HomePage";
import { VerifyParts } from "./pages/VerifyParts";

const App: React.FC = () => {
  return (
    <Router>
      {/* <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/new-page">New Page</Link>
      </nav> */}
      <Routes>
        <Route path="/car-service" element={<CarService />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/verify-parts" element={<VerifyParts />} />
      </Routes>
    </Router>
  );
};
export default App;
