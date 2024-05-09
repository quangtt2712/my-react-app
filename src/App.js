import "./App.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Navbar from "./Navbar";
import React, { useState } from "react";
import SearchList from "./SearchList";
import Swipers from "./swiper";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./header";
function App() {

  return (
    
    <>
    <Routes>
      <Route path="/swiper" element={<Swipers />} />
      <Route path="/" element={<Header />} />
    </Routes>
  
    </>
  );
}

export default App;
