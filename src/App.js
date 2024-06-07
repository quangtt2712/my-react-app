import "./App.css";

import React, { useEffect, useState } from "react";

import Swipers from "./swiper";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./header";
import FormWeb from "./FormWeb";
import ListItem from "./ListItem";
import Testcomponent from "./testcomponent";
import ItemDetail from "./ItemDetail";
import InforNick from "./InforNick";
import { AuthProvider } from "./AuthContext";
import BodyAdmin from "./pages/BodyAdmin.js"
import Body from "./Body.js";

function App() {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Lưu vị trí cuộn khi chuyển từ trang danh sách sang trang chi tiết sản phẩm
    if (pathname === "/item-detail") {
      setScrollPosition(window.scrollY);
      window.scrollTo(0, 0);
    } else {
      // Nếu không phải là trang chi tiết sản phẩm, đặt vị trí cuộn về đầu trang
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    // Thiết lập lại vị trí cuộn khi quay lại từ trang chi tiết sản phẩm
    if (pathname === "/list-item") {
      window.scrollTo(0, scrollPosition);
    }
  }, [pathname, scrollPosition]);

  return (
    <>

      <Routes>
        <Route path="/swiper" element={<Swipers />} />
        <Route path="/" element={<Header />} />
        <Route path="/FormWeb" element={<FormWeb />} />
        <Route path="/list-item" element={<ListItem />} />
        <Route path="/test-component" element={<Testcomponent />}></Route>
        <Route path="/item-detail" element={<ItemDetail />}></Route>
        <Route path="/profile" element={<InforNick />} />
        <Route path="/body-admin" element={<BodyAdmin />} />
      </Routes>
    </>
  );
}

export default App;
