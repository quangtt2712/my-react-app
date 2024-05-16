import "./App.css";

import React from "react";

import Swipers from "./swiper";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import FormWeb from "./FormWeb";
import ListItem from "./ListItem";
function App() {
  return (
    <Routes>
      <Route path="/swiper" element={<Swipers />} />
      <Route path="/" element={<Header />} />
      <Route path="/FormWeb" element={<FormWeb />} />
      <Route path="/list-item" element={<ListItem />} />
    </Routes>
  );
}

export default App;
