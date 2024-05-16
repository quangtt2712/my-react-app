import "./App.css";
import React, { useState, useEffect } from "react";
import Swipers from "./swiper";

export default function Body() {
  const [selectedButton, setSelectedButton] = useState(0); // State để lưu trữ button được chọn
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Hàm để xử lý sự kiện khi button được nhấn
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex); // Cập nhật state với index của button được chọn
  };

  return (
    <div className="body">
      <div className="back-ground-main">
      {isMobile ? (
          <Swipers />
        ) : (
          <>
            <img
              src="https://lienquan.garena.vn/files/posts/341b96ef575a01182f0f52170c4b82866555cc7c928e4.png"
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
          </>
        )}
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
            {(selectedButton === 0 || selectedButton === 1) && (
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
            )}
            {selectedButton === 2 && (
              <div className="list-top-coin-background">
                <div className="background-text-give-list-top-coin-display">
                  <div className="text-background-text-give-list-top-coin-display">
                    <p>TOP Nạp Thẻ Chốt Vào Ngày Cuối Tháng:</p>
                    <p className="description-background-text-give-list-top-coin-display">
                      TOP 1: 5.000 QUÂN HUY
                    </p>
                    <p className="description-background-text-give-list-top-coin-display">
                      TOP 2: 4.000 QUÂN HUY
                    </p>
                    <p className="description-background-text-give-list-top-coin-display">
                      TOP 3: 3.000 QUÂN HUY
                    </p>
                    <p className="description-background-text-give-list-top-coin-display">
                      TOP 4: 2.000 QUÂN HUY
                    </p>
                    <p className="description-background-text-give-list-top-coin-display">
                      TOP 5: 1.000 QUÂN HUY
                    </p>
                    <p>Shop Sẽ Chọn Thêm 30 Bạn Ngẫu Nhiên:</p>
                    <p className="description-background-text-give-list-top-coin-display">
                      10 Bạn Nạp Trên 200k Sẽ Nhận Được: 500 QH
                    </p>
                    <p className="description-background-text-give-list-top-coin-display">
                      10 Bạn Nạp Trên 100k Sẽ Nhận Được: 300 QH
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
