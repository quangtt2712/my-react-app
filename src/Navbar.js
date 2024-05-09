import "./App.css";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Navbar() {
  return (
    <div className="nav-bar-main">
      <ul className="nav-bar">
        <li className="nav-bar-item">
          <a href="#">Trang chủ</a>
        </li>
        <li className="nav-bar-item">
          <a href="#">Tổng acc</a>
        </li>
        <li className="nav-bar-item">
          <a href="#">Skin hot</a>
        </li>
        <li className="nav-bar-item">
          <a href="#">acc vip</a>
        </li>
        <li className="nav-bar-item">
          <a href="#">Acc trắng</a>
        </li>
        <li className="nav-bar-item">
          <a href="#">Acc giá rẻ</a>
        </li>
        <li className="nav-bar-item">
          <a href="#">Reg</a>
        </li>
        <li className="nav-bar-item-acc-theo-gia">
          <a href="#">acc theo giá &#9660;</a>
          <div className="mega-content-menu">
            <ul className="mega-nav-bar">
              <li className="nav-bar-item-sub-item-mega">
                <a href="#">GIÁ HỌC SINH</a>
                <ul className="mega-nav-bar-sub">
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc dưới 50k</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 50K đến 100K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                </ul>
              </li>
              <li className="nav-bar-item-sub-item-mega">
                <a href="#">GIÁ SINH VIÊN</a>
                <ul className="mega-nav-bar-sub">
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc dưới 50k</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 50K đến 100K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                </ul>
              </li>
              <li className="nav-bar-item-sub-item-mega">
                <a href="#">GIÁ ACC VIP</a>
                <ul className="mega-nav-bar-sub">
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc dưới 50k</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 50K đến 100K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                </ul>
              </li>
              <li className="nav-bar-item-sub-item-mega">
                <a href="#">GIÁ CÀY THUÊ</a>
                <ul className="mega-nav-bar-sub">
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc dưới 50k</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 50K đến 100K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                  <li className="nav-bar-item-sub-item">
                    <a href="#">acc 100K đến 200K</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-bar-item-acc-theo-rank">
          <a href="#">acc theo rank &#9660;</a>
          <ul className="nav-bar-sub">
            <li className="nav-bar-item-sub">
              <a href="#" className="nav-bar-item-hover-thach-dau">
                <div>Thách Đấu</div>
                <ChevronRightIcon className="icon-mui-ten-ben-phai" />
              </a>
    
              <ul className="nav-bar-item-thach-dau">
                <li className="nav-bar-item-sub-thach-dau">
                  <a href="#" className="">
                    rank thách đấu
                  </a>
                </li>
                <li className="nav-bar-item-sub-thach-dau">
                  <a href="#" className="">
                    mác thách đấu
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-bar-item-sub">
              <a href="#" className="nav-bar-item-hover-chien-tuong">
                <div>Chiến Tướng</div>
                <ChevronRightIcon className="icon-mui-ten-ben-phai" />
              </a>
              <ul className="nav-bar-item-chien-tuong">
                <li className="nav-bar-item-sub-chien-tuong">
                  <a href="#" className="">
                    rank chiến tướng
                  </a>
                </li>
                <li className="nav-bar-item-sub-chien-tuong">
                  <a href="#" className="">
                    mác chiến tướng
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-bar-item-sub">
              <a href="#">cao thủ</a>
            </li>
            <li className="nav-bar-item-sub">
              <a href="#">tinh anh</a>
            </li>
            <li className="nav-bar-item-sub">
              <a href="#">kim cương</a>
            </li>
            <li className="nav-bar-item-sub">
              <a href="#">bạch kim</a>
            </li>
            <li className="nav-bar-item-sub">
              <a href="#">vàng</a>
            </li>
            <li className="nav-bar-item-sub">
              <a href="#">bạc</a>
            </li>
            <li className="nav-bar-item-sub">
              <a href="#">đồng</a>
            </li>
          </ul>
        </li>
        <li className="nav-bar-item">
          <a href="#">Góc liên quân &#9660;</a>
        </li>
        <li className="nav-bar-item">
          <a href="#">Nạp tiền &#9660;</a>
        </li>
      </ul>
    </div>
  );
}
