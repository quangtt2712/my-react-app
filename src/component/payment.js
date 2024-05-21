import { useState } from "react";
import React from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export default function PaymentLayout() {
  const ComponentMomo = () => {
    const [inputLeft, setInputLeft] = useState("");
    const [inputRight, setInputRight] = useState("");
    const MAX_VALUE = 1000000000;
    const handleInputChangeLeft = (value) => {
      if (value === "" || isNaN(value)) {
        setInputLeft("");
        setInputRight("");
      } else {
        const inputValue = Math.max(1, Math.min(Number(value), MAX_VALUE));
        setInputLeft(inputValue);
        const bonusValue = Math.floor(inputValue / 10000) * 1000; // Calculate bonus based on every 10,000 units
        setInputRight(inputValue + bonusValue);
      }
    };
    const formatAmount = (amount) => {
      return amount.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    };

    const copyToClipboard = (text) => {
      navigator.clipboard
        .writeText(text)
        .then(() => {})
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    };

    return (
      <div className="back-ground-money-momo">
        <div>Chuyển khoản MOMO - Tự động</div>
        <div>
          <div className="display-qr">
            <div className="infor-display-qr">
              <div>
                <strong>Thông tin tài khoản momo</strong>
              </div>
              <div>
                <strong>
                  Số điện thoại: <span>09876554123</span>
                </strong>
              </div>

              <div>
                <strong>
                  Chủ tài khoản: <span>Nguyễn Duy Anh</span>
                </strong>{" "}
              </div>
              <div
                className="btn-cp-phone"
                onClick={() => copyToClipboard("09876554123")}
              >
                <strong>Copy số điện thoại</strong>
              </div>
            </div>
            <div className="main-display-qr">
              <img src="/qr.png" alt="a"></img>
            </div>
          </div>
          <p className="p-qr">Nội dung chuyển khoản</p>
          <div className="content-payment-qr-momo">
            <div>sp1081271</div>
            <div
              className="btn-cp-id"
              onClick={() => copyToClipboard("sp1081271")}
            >
              Copy nội dung
            </div>
          </div>
          <div className="description-content-momo">
            <div>
              {" "}
              Khi chuyển khoản qua MoMo bạn cần ghi nội dung
              <b className="id-qr-decription"> sp1081271 </b>
              bên trên.
            </div>
            <div></div>
          </div>
          <div className="id-qr-decription">
            Lưu ý:<br></br>- Sau khi chuyển khoản xong, hãy chờ "vài phút" hệ
            thống sẽ tự động xử lý giao dịch.
            <br></br>- Giao dịch chuyển sai "Nội dung chuyển khoản" sẽ không
            được xử lý tự động. Hãy liên hệ Fanpage để được hỗ trợ.
          </div>
        </div>
        <div className="text-swap-money waring-etx">
          Vui lòng chuyển trên 10.000đ để được xử lý tự động.
        </div>
        <div>
          <div className="text-swap-money">Quy Đổi Tiền Nạp</div>
          <div className="swap-money">
            <div className="display-swap-money">
              <div>Số tiền bạn chuyển</div>
              <input
                type="number"
                value={inputLeft}
                onChange={(event) => handleInputChangeLeft(event.target.value)}
                className="ip-swap-money"
              />
            </div>
            <SwapHorizIcon />
            <div className="display-swap-money">
              <div>Số tiền bạn nhận</div>
              <input
                type="text"
                value={formatAmount(inputRight)}
                className="ip-swap-money id-qr-decription"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [showMomoForm, setShowMomoForm] = useState(false);
  const [showMainForm, setShowMainForm] = useState(true);

  const handlePaymentClick = () => {
    setShowMomoForm(true);
    setShowMainForm(false);
  };
  return (
    <div>
      {showMainForm && (
        <div>
          <div className="header-payment">Chọn phương thức nạp tiền</div>
          <div className="display-payment">
            <img src="https://shopmailk.com/card2.png" alt="ảnh card"></img>
            <div className="text-payment">
              <div className="title-text-payment">Nạp thẻ cào (Card)</div>
              <div>Viettel, Vinaphone, Mobifone.</div>
            </div>
          </div>
          <div className="display-payment">
            <img src="https://shopmailk.com/bank.png" alt="ảnh card"></img>
            <div className="text-payment">
              <div className="title-text-payment">
                Ngân hàng (Bank ATM) - Tự động
              </div>
              <div>Khuyến mãi 10% khi nạp.</div>
            </div>
          </div>
          <div className="display-payment" onClick={handlePaymentClick}>
            <img src="https://shopmailk.com/momo.png" alt="ảnh card"></img>
            <div className="text-payment">
              <div className="title-text-payment">Ứng dụng MOMO - Tự động</div>
              <div>Khuyến mãi 10% khi nạp.</div>
            </div>
          </div>
        </div>
      )}

      {showMomoForm && <ComponentMomo />}
    </div>
  );
}
