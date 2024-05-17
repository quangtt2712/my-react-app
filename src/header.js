import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ClearIcon from "@mui/icons-material/Clear";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import Navbar from "./Navbar";
import SearchList from "./SearchList";
import Body from "./Body";
import BodyLQ from "./BodyLQ";
import BodyTopUp from "./BodyTopUp";
import BodyTopUpBottom from "./BodyTopUpBottom";
import Footer from "./Footer";
import Login from "./Login";

export default function Header() {
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSearchListOpen, setIsSearchListOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleButtonClick = (index) => {
    if (index === 1) {
      toggleSearchList();
    } else if (index === 3) {
      handleLoginButtonClick();
    } else {
      setIsSearchListOpen(false);
    }
    setSelectedButton(index);
  };

  const toggleSearchList = () => {
    setIsSearchListOpen(!isSearchListOpen);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Shop acc Duy Anh</title>
        <link
          rel="icon"
          type="image/png"
          href="../public/favicon.ico"
          sizes="16x16"
        />
      </Helmet>

      <div className={`header-main ${scrolled ? "scrolled" : ""}`}>
        <div className="container-main">
          <header className="header">
            <div className="logo-and-search">
              <div className="toggle-display-menu">
                <div
                  className="menu-toggle"
                  onClick={toggleMenu}
                  role="button"
                  tabIndex={0}
                >
                  ☰
                </div>
                {isMenuOpen && (
                  <div className="nav__overlay" onClick={closeMenu}></div>
                )}
                <div className={`nav-mobile ${isMenuOpen ? "open" : ""}`}>
                  <ClearIcon className="icon-clear" onClick={closeMenu} />
                  <ul className="nav-bar-mobile">
                    <Link to="/">
                      <li className="nav-bar-item-mobile">
                        <a href="#">Trang chủ</a>
                      </li>
                    </Link>
                    <Link to="list-item">
                      <li className="nav-bar-item-mobile">
                        <a href="#">Tổng acc</a>
                      </li>
                    </Link>

                    <li className="nav-bar-item-mobile">
                      <a href="#">Skin hot</a>
                    </li>
                    <li className="nav-bar-item-mobile">
                      <a href="#">acc vip</a>
                    </li>
                    <li className="nav-bar-item-mobile">
                      <a href="#">Acc trắng</a>
                    </li>
                    <li className="nav-bar-item-mobile">
                      <a href="#">Acc giá rẻ</a>
                    </li>
                    <li className="nav-bar-item-mobile">
                      <a href="#">Reg</a>
                    </li>
                    <li className="nav-bar-item-mobile">
                      <a href="#" onClick={() => toggleSubMenu(1)}>
                        acc theo giá &#9660;
                      </a>
                      {openSubMenus[1] && (
                        <div className="mega-content-menu-mobile">
                          <ul className="mega-nav-bar-mobile">
                            <li className="nav-bar-item-sub-item-mega-mobile">
                              <a
                                href="#"
                                onClick={() => toggleSubMenu("1-1")}
                                className="text-display-item-mobile"
                              >
                                GIÁ HỌC SINH &#9660;
                              </a>
                              {openSubMenus["1-1"] && (
                                <ul className="mega-nav-bar-sub-mobile">
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc dưới 50k</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 50K đến 100K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                </ul>
                              )}
                            </li>
                            <li className="nav-bar-item-sub-item-mega-mobile">
                              <a
                                href="#"
                                onClick={() => toggleSubMenu("1-2")}
                                className="text-display-item-mobile"
                              >
                                GIÁ SINH VIÊN&#9660;
                              </a>
                              {openSubMenus["1-2"] && (
                                <ul className="mega-nav-bar-sub-mobile">
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc dưới 50k</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 50K đến 100K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                </ul>
                              )}
                            </li>
                            <li className="nav-bar-item-sub-item-mega-mobile">
                              <a
                                href="#"
                                onClick={() => toggleSubMenu("1-3")}
                                className="text-display-item-mobile"
                              >
                                GIÁ ACC VIP&#9660;
                              </a>
                              {openSubMenus["1-3"] && (
                                <ul className="mega-nav-bar-sub-mobile">
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc dưới 50k</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 50K đến 100K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                </ul>
                              )}
                            </li>
                            <li className="nav-bar-item-sub-item-mega-mobile">
                              <a
                                href="#"
                                onClick={() => toggleSubMenu("1-4")}
                                className="text-display-item-mobile"
                              >
                                GIÁ CÀY THUÊ&#9660;
                              </a>
                              {openSubMenus["1-4"] && (
                                <ul className="mega-nav-bar-sub-mobile">
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc dưới 50k</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 50K đến 100K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                  <li className="nav-bar-item-sub-item-mobile">
                                    <a href="#">acc 100K đến 200K</a>
                                  </li>
                                </ul>
                              )}
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li className="nav-bar-item-mobile">
                      <a href="#" onClick={() => toggleSubMenu(2)}>
                        acc theo rank &#9660;
                      </a>
                      {openSubMenus[2] && (
                        <ul className="nav-bar-sub-mobile">
                          <li className="nav-bar-item-sub-mobile">
                            <a
                              href="#"
                              onClick={() => toggleSubMenu("2-1")}
                              className="nav-bar-item-hover-thach-dau-mobile"
                            >
                              <div className="text-display-item-mobile">
                                Thách Đấu &#9660;
                              </div>
                            </a>
                            {openSubMenus["2-1"] && (
                              <ul className="nav-bar-item-thach-dau-mobile">
                                <li className="nav-bar-item-sub-thach-dau-mobile">
                                  <a href="#" className="">
                                    rank thách đấu
                                  </a>
                                </li>
                                <li className="nav-bar-item-sub-thach-dau-mobile">
                                  <a href="#" className="">
                                    mác thách đấu
                                  </a>
                                </li>
                              </ul>
                            )}
                          </li>
                          <li className="nav-bar-item-sub-mobile">
                            <a
                              href="#"
                              onClick={() => toggleSubMenu("2-2")}
                              className="nav-bar-item-hover-chien-tuong-mobile"
                            >
                              <div className="text-display-item-mobile">
                                Chiến Tướng &#9660;
                              </div>
                            </a>
                            {openSubMenus["2-2"] && (
                              <ul className="nav-bar-item-chien-tuong-mobile">
                                <li className="nav-bar-item-sub-chien-tuong-mobile">
                                  <a href="#" className="">
                                    rank chiến tướng
                                  </a>
                                </li>
                                <li className="nav-bar-item-sub-chien-tuong-mobile">
                                  <a href="#" className="">
                                    mác chiến tướng
                                  </a>
                                </li>
                              </ul>
                            )}
                          </li>
                          <li className="nav-bar-item-sub-mobile">
                            <a href="#" className="text-display-item-mobile">
                              cao thủ
                            </a>
                          </li>
                          <li className="nav-bar-item-sub-mobile">
                            <a href="#" className="text-display-item-mobile">
                              tinh anh
                            </a>
                          </li>
                          <li className="nav-bar-item-sub-mobile">
                            <a href="#" className="text-display-item-mobile">
                              kim cương
                            </a>
                          </li>
                          <li className="nav-bar-item-sub-mobile">
                            <a href="#" className="text-display-item-mobile">
                              bạch kim
                            </a>
                          </li>
                          <li className="nav-bar-item-sub-mobile">
                            <a href="#" className="text-display-item-mobile">
                              vàng
                            </a>
                          </li>
                          <li className="nav-bar-item-sub-mobile">
                            <a href="#" className="text-display-item-mobile">
                              bạc
                            </a>
                          </li>
                          <li className="nav-bar-item-sub-mobile">
                            <a href="#" className="text-display-item-mobile">
                              đồng
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="nav-bar-item-mobile">
                      <a href="#">Góc liên quân &#9660;</a>
                    </li>
                    <li className="nav-bar-item-mobile">
                      <a href="#">Nạp tiền &#9660;</a>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to="/">
                <div className="header-logo">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/mindmasterminds.appspot.com/o/images%2FYena%20huy%E1%BB%81n%20c%E1%BB%ADu%20thi%C3%AAn.lafthanh.png?alt=media&token=9cbc8e34-20c3-42dd-a011-50dbefa14f04"
                    alt="logo"
                  />
                </div>
              </Link>
              {!isMobile && <SearchList />}
            </div>
            <div className="user-controls">
              <div className="top-up-and-icon" type="button">
                <MonetizationOnIcon className="icon-top-up" />
                <div className="top-up">Nạp tiền</div>
              </div>
              <div className="notification" type="button">
                <NotificationsNoneIcon className="notification-icon" />
              </div>
              <div
                className="login"
                type="button"
                onClick={handleLoginButtonClick}
              >
                <PersonIcon className="login-icon" />
                <div className="login-text">Đăng nhập/ Đăng kí</div>
              </div>
            </div>
          </header>
          <Navbar />
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

      <div className="bottom-bar">
        {isSearchListOpen && (
          <div className="background-searchlist-bottom">
            <SearchList className="bottom-bar-search-list" />
          </div>
        )}
        <div className="grid-container">
          <div
            className={`grid-item ${selectedButton === 0 ? "selected" : ""}`}
            onClick={() => handleButtonClick(0)}
          >
            <HomeIcon className="icon-bottom-bar" />
            <div className="text-icon-bottom-bar">Trang chủ</div>
          </div>
          <div
            className={`grid-item ${selectedButton === 1 ? "selected" : ""}`}
            onClick={() => handleButtonClick(1)}
          >
            <SearchIcon className="icon-bottom-bar" />
            <div className="text-icon-bottom-bar">Tìm kiếm</div>
          </div>
          <div
            className={`grid-item ${selectedButton === 2 ? "selected" : ""}`}
            onClick={() => handleButtonClick(2)}
          >
            <AccountBalanceWalletIcon className="icon-bottom-bar" />
            <div className="text-icon-bottom-bar">Nạp tiền</div>
          </div>
          <div
            className={`grid-item ${selectedButton === 3 ? "selected" : ""}`}
            onClick={() => handleButtonClick(3)}
          >
            <AccountCircleIcon className="icon-bottom-bar" />
            <div className="text-icon-bottom-bar">Tài khoản</div>
          </div>
        </div>
      </div>
      {showLoginForm && (
        <div className="login-form-overlay">
          <div className="login-form-container">
            <ClearIcon
              onClick={handleLoginButtonClick}
              className="login-clear-icon"
            />
            <Login />
          </div>
        </div>
      )}
    </>
  );
}
