import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Navbar from "./Navbar";
import React, { useEffect, useState } from 'react';
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import Body from "./Body";
import BodyLQ from "./BodyLQ";
import { Helmet } from "react-helmet";
import  BodyTopUp  from "./BodyTopUp";
import BodyTopUpBottom from './BodyTopUpBottom';
import Footer from "./Footer";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <>
      <Helmet>
        <title>Shop acc Duy Anh</title> {/* Thay đổi title */}
        <link rel="icon" type="image/png" href="#" sizes="16x16" />{" "}
        {/* Thay đổi favicon */}
      </Helmet>
      
      <div className={`header-main ${scrolled ? 'scrolled' : ''}`}>
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
      <div className="header-body-top-up">
        <BodyTopUp />
      </div>
      <div className="display-body display-body-top-up-bottom">
        <BodyTopUpBottom />
      </div>
      <div className="display-background-footer">
      <Footer />
      </div>
    </>
  );
}
