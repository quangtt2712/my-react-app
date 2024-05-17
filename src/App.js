import "./App.css";

import React, { useEffect } from "react";


import Swipers from "./swiper";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./header";
import FormWeb from "./FormWeb";
import ListItem from "./ListItem";
import Testcomponent from "./testcomponent";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/swiper" element={<Swipers />} />
      <Route path="/" element={<Header />} />
      <Route path="/FormWeb" element={<FormWeb />} />
      <Route path="/list-item" element={<ListItem />} />
      <Route path="/test-component" element={<Testcomponent/>}></Route>
    </Routes>
  );
}

export default App;
