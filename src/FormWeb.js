import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import CloseIcon from "@mui/icons-material/Close";
import Payment from "./component/payment";
import React, { useEffect, useState, useRef } from "react";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import BodyTopUp from "./BodyTopUp";
import BodyTopUpBottom from "./BodyTopUpBottom";
import Footer from "./Footer";
import ClearIcon from "@mui/icons-material/Clear";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Login from "./Login";
import { Skeleton } from "@mui/material";
import * as signalR from "@microsoft/signalr";
import { jwtDecode } from "jwt-decode";
import { useGetUserById } from "./hook/userHook";

export default function FormWeb({ children }) {
  const { loading1, error, notFoundError, getInforUser, inforUser } =
    useGetUserById();
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSearchListOpen, setIsSearchListOpen] = useState(false); // Thêm state cho SearchList
  const [selectedButton, setSelectedButton] = useState(0);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registerUserName, setRegisterUserName] = useState("");
  const [showProfileNavBar, setShowProfileNavBar] = useState(false);

  const [moneyUser, setMoneyUser] = useState(0);
  const [idUser, setIdUser] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refesh, setRefesh] = useState(false);

  const checkAccessToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(accessToken ? true : false);
  };

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://shopaccduyanh.azurewebsites.net/api/balanceHub")
      .build();

    connection.on("ReceiveBalance", (balance) => {
      setLoading(true);
      setBalance(balance);
      setLoading(false);
      console.log('balance",balance: ', balance);
    });

    connection
      .start()
      .then(() => {
        setLoading(true);
        console.log("Connection established");
        console.log(idUser);
        setLoading(false);

        return connection.invoke("ListenForBalanceChanges", idUser);
      })
      .catch((err) => {
        console.error("Connection error: ", err.toString());
      });

    // Cleanup on component unmount
    return () => {
      connection
        .stop()
        .catch((err) => console.error("Error stopping connection:", err));
    };
  }, [idUser, showLoginForm, isLoggedIn, refesh]);

  const handleLogoutButtonClick = () => {
    localStorage.clear();
    setRefesh((b) => !b);
    setBalance(0);
    setShowLoginForm(!showLoginForm);
  };
  const handleProfileButtonClick = () => {
    setShowProfileNavBar(!showProfileNavBar);
  };
  useEffect(() => {
    checkAccessToken();
    if (isLoggedIn) {
      handleFormUser();
    }
  }, [isLoggedIn, refesh]);
  useEffect(() => {
    // Đảm bảo chỉ log khi inforUser thay đổi
    if (inforUser) {
      console.log(inforUser);
      setIdUser(inforUser.id);
      setMoneyUser(inforUser.wallet.balance);
      setRegisterUserName(inforUser.userName);
    }
  }, [inforUser]);

  const handleFormUser = (accessToken) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      const id = parseInt(decodedToken.id);
      getInforUser(id);
    }

    // fetch(
    //   "https://shopaccduyanh.azurewebsites.net/api/User/Information-user-by-token",
    //   {
    //     method: "GET",
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setIdUser(data.id);
    //     setMoneyUser(data.wallet.balance);
    //     setRegisterUserName(data.userName);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  const handleRegisterSuccess = (accessToken) => {
    setShowLoginForm(false);
    handleFormUser(accessToken);
  };
  const useOutsideClick = (ref, callback) => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const loginFormRef = useRef(null);
  const paymentFormRef = useRef(null);
  useOutsideClick(loginFormRef, () => setShowLoginForm(false));
  useOutsideClick(paymentFormRef, () => setShowPaymentForm(false));

  const handlePaymentButtonClick = () => {
    setShowPaymentForm(!showPaymentForm);
  };
  const handleLoginButtonClick = (username) => {
    setShowLoginForm(!showLoginForm);
  };
  const formatAmount = (amount) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const handleButtonClick = (index) => {
    if (index === 1) {
      toggleSearchList();
      setSelectedButton(index);
    } else if (index === 3) {
      handleLoginButtonClick();
      setSelectedButton(index);
    } else {
      setSelectedButton(index);
      setIsSearchListOpen(false);
    }

    // Thêm bất kỳ logic nào bạn muốn thực hiện khi nhấn vào các nút ở đây
  };

  const toggleSearchList = () => {
    setIsSearchListOpen(!isSearchListOpen); // Thêm hàm để toggle SearchList
  };

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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cập nhật state khi thay đổi kích thước màn hình
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
                    <Link to="/">
                      <li className="nav-bar-item-mobile">
                        <a href="#">Trang chủ</a>
                      </li>
                    </Link>
                    <Link to="/list-item">
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
                  <img src="/lgo.png" alt="logo" />
                </div>
              </Link>

              {!isMobile && <SearchList />}
            </div>
            <div className="user-controls">
              <div
                className="top-up-and-icon"
                type="button"
                onClick={handlePaymentButtonClick}
              >
                <MonetizationOnIcon className="icon-top-up" />
                <div className="top-up">Nạp tiền</div>
              </div>

              <div className="notification" type="button">
                <NotificationsNoneIcon className="notification-icon" />
              </div>
              {!isMobile && (
                <div>
                  {localStorage.getItem("accessToken") ? (
                    // Hiển thị nút đăng kí với tên người dùng từ JSON của API
                    <div
                      className="user-controls btn-profile"
                      onClick={handleProfileButtonClick}
                    >
                      <img
                        src="https://shopmailk.com/unknown-avatar.jpeg"
                        alt="avatar"
                      ></img>
                      <div>
                        <div className="name-user-navbar">
                          {registerUserName}
                        </div>
                        <div className="name-user-navbar wallet-user">
                          {loading ? "Loading..." : formatAmount(balance)}
                        </div>
                      </div>
                      {showProfileNavBar && (
                        <div className="information-me">
                          <div>
                            <strong>ID: {idUser}</strong>
                          </div>
                          <div>
                            <strong>
                              Số dư:{" "}
                              {loading ? "Loading..." : formatAmount(balance)}
                            </strong>
                          </div>
                          <Link to="/profile">
                            <div className="btn-profile-me padding-5px">
                              Quản lí tài khoản
                            </div>
                          </Link>
                          <div
                            className="btn-profile-me"
                            onClick={handleLogoutButtonClick}
                          >
                            Đăng xuất
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className="login"
                      type="button"
                      onClick={handleLoginButtonClick}
                    >
                      <PersonIcon className="login-icon" />
                      {console.log("rerender")}
                      <div className="login-text">Đăng nhập/ Đăng kí</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </header>
          <Navbar />

          {/* <Link to="/swiper">Login</Link> */}
        </div>
      </div>
      <div className="display-body">{children}</div>
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
          <diV className="background-searchlist-bottom">
            <SearchList className="bottom-bar-search-list" />
          </diV>
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

          {isMobile &&
            (localStorage.getItem("accessToken") ? (
              // Hiển thị nút đăng kí với tên người dùng từ JSON của API
              <div
                className="user-controls btn-profile"
                onClick={handleProfileButtonClick}
              >
                <img
                  src="https://shopmailk.com/unknown-avatar.jpeg"
                  alt="avatar"
                ></img>
                <div>
                  <div className="name-user-navbar">{registerUserName}</div>
                  <div className="name-user-navbar wallet-user">
                    {loading ? "Loading..." : formatAmount(balance)}
                  </div>
                </div>
                {showProfileNavBar && (
                  <div className="information-me">
                    <div>
                      <strong>ID: {idUser}</strong>
                    </div>
                    <div>
                      <strong>
                        Số dư: {loading ? "Loading..." : formatAmount(balance)}
                      </strong>
                    </div>
                    <Link to="/profile">
                      <div className="btn-profile-me padding-5px">
                        Quản lí tài khoản
                      </div>
                    </Link>{" "}
                    <div
                      className="btn-profile-me"
                      onClick={handleLogoutButtonClick}
                    >
                      Đăng xuất
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={`grid-item ${
                  selectedButton === 3 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(3)}
              >
                <AccountCircleIcon className="icon-bottom-bar" />
                <div className="text-icon-bottom-bar">Tài khoản</div>
              </div>
            ))}
        </div>
      </div>
      {showLoginForm && (
        <div className="login-form-overlay">
          <div className="login-form-container">
            <ClearIcon
              onClick={handleLoginButtonClick}
              className="login-clear-icon"
            />
            <Login handleDataFromChild={handleRegisterSuccess} />
          </div>
        </div>
      )}
      {showPaymentForm && (
        <div className="login-form-overlay">
          <div className="payment-form-container" ref={paymentFormRef}>
            <Payment />
            <CloseIcon
              className="icon-payment-form-container"
              onClick={handlePaymentButtonClick}
            />
          </div>
        </div>
      )}
    </>
  );
}
