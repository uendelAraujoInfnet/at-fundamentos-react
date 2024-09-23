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
          <Route path="/at-fundamentos-react/" element={<HotelList />} />
          <Route path="/at-fundamentos-react/add-new-hotel" element={<AddHotel />} />
          <Route path="/at-fundamentos-react/hotel/:id" element={<HotelDetails />} />
          <Route path="/at-fundamentos-react/edit-hotel/:id" element={<EditHotel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
