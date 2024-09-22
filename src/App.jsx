import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelList from "./pages/HotelList";
import HotelDetails from "./pages/HotelDetails";
import EditHotel from "./pages/EditHotel";
import AddHotel from "./pages/AddHotel";

import "./App.module.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HotelList />} />
          <Route path="/add-new-hotel" element={<AddHotel />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/edit-hotel/:id" element={<EditHotel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
