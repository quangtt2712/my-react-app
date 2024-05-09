import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Navbar from "./Navbar";
import React, { useState } from "react";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import Body from "./Body";
import BodyLQ from "./BodyLQ";
export default function Header() {
  return (
    <>
      <div style={{ background: "#fff" }}>
        <div className="container-main">
          <header className="header">
            <div className="logo-and-search">
              <div className="header-logo">
                <img
                  src="https://sys.tmso1.co/images/image-5d36a956-a557-457a-97c2-f5eec632d41e.png"
                  alt="logo"
                />
              </div>
              <SearchList />
            </div>
            <div className="user-controls">
              <div className="top-up-and-icon" type="button">
                <MonetizationOnIcon className="icon-top-up" />
                <div className="top-up">Nạp tiền</div>
              </div>

              <div className="notification" type="button">
                <NotificationsNoneIcon className="notification-icon" />
              </div>

              <div className="login" type="button">
                <PersonIcon className="login-icon" />
                <div className="login-text">Đăng nhập/ Đăng kí</div>
              </div>
            </div>
          </header>
          <Navbar />

          {/* <Link to="/swiper">Login</Link> */}
        </div>
      </div>
      <div className="display-body">
        <Body />
        <BodyLQ />
      </div>
    </>
  );
}
