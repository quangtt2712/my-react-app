import "./App.css";
import React, { useState } from "react";

export default function Body() {
  const [selectedButton, setSelectedButton] = useState(0); // State để lưu trữ button được chọn

  // Hàm để xử lý sự kiện khi button được nhấn
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex); // Cập nhật state với index của button được chọn
  };

  return (
    <div className="body">
      <div className="back-ground-main">
        <img
          src="https://sys.tmso1.co/images/w7YkpCKrrhCU33Z.png"
          alt="background"
          className="background-main"
        />
        <img
          src="https://sys.tmso1.co/images/3MWk1eA8gNDxBXt.jpeg"
          alt="background"
          className="background-sub-main"
        />
        <img
          src="https://sys.tmso1.co/images/hnV2QAWJDslY7zk.jpeg"
          alt="background"
          className="background-cover-main"
        />
        <div className="background-top-coin">
          <div>
            <div className="background-top-coin-display">
              <img src="https://shopmailk.com/top.png" alt="Cúp"></img>
              <div>TOP NẠP T.05</div>
            </div>
          </div>
          <div className="background-button-top-coin-display">
            <div className="background-button-top-coin">
              <div
                className={`button-top-coin ${
                  selectedButton === 0 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(0)}
              >
                Tuần này
              </div>
              <div
                className={`button-top-coin ${
                  selectedButton === 1 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(1)}
              >
                Tháng này
              </div>
              <div
                className={`button-top-coin ${
                  selectedButton === 2 ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(2)}
              >
                Phần thưởng
              </div>
            </div>
          </div>
          <div className="list-top-coin-background">
            <div className="list-top-coin-display">
              <div className="list-top-coin">
                <img
                  src="https://shopmailk.com/1.svg"
                  alt="số 1"
                  className="img-top-coin"
                ></img>
                <div className="id-top-coin">ID 1081006</div>
                <div className="many-top-coin">1,540,000đ</div>
              </div>
              <div className="list-top-coin">
              <img
                  src="https://shopmailk.com/2.svg"
                  alt="số 1"
                  className="img-top-coin"
                ></img>
                <div className="id-top-coin">ID 1081006</div>
                <div className="many-top-coin">1,540,000đ</div>
              </div>
              <div className="list-top-coin">
              <img
                  src="https://shopmailk.com/3.svg"
                  alt="số 1"
                  className="img-top-coin"
                ></img>
                <div className="id-top-coin">ID 1081006</div>
                <div className="many-top-coin">1,540,000đ</div>
              </div>
              <div className="list-top-coin">
              <img
                  src="https://shopmailk.com/4.svg"
                  alt="số 1"
                  className="img-top-coin"
                ></img>
                <div className="id-top-coin">ID 1081006</div>
                <div className="many-top-coin">1,540,000đ</div>
              </div>
              <div className="list-top-coin">
              <img
                  src="https://shopmailk.com/5.svg"
                  alt="số 1"
                  className="img-top-coin"
                ></img>
                <div className="id-top-coin">ID 1081006</div>
                <div className="many-top-coin">1,540,000đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
