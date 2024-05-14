import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import Body from "./Body";
import BodyLQ from "./BodyLQ";
import { Helmet } from "react-helmet";
import BodyTopUp from "./BodyTopUp";
import BodyTopUpBottom from "./BodyTopUpBottom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Footer from "./Footer";
import ClearIcon from "@mui/icons-material/Clear";

export default function Header() {
  const [openSubMenus, setOpenSubMenus] = useState({});
  const toggleSubMenu = (index) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Shop acc Duy Anh</title> {/* Thay đổi title */}
        <link rel="icon" type="image/png" href="#" sizes="16x16" />{" "}
        {/* Thay đổi favicon */}
      </Helmet>

      <div className={`header-main ${scrolled ? "scrolled" : ""}`}>
        <div className="container-main">
          <header className="header">
            <div className="logo-and-search">
              <div className="toogle-display-menu">
                <div
                  class="menu-toggle"
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
                    <li className="nav-bar-item-mobile">
                      <a href="#">Trang chủ</a>
                    </li>
                    <li className="nav-bar-item-mobile">
                      <a href="#">Tổng acc</a>
                    </li>
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
