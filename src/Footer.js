import "./App.css";
import React, { useState } from "react";

export default function Footer() {
  return (
    <div className="footer-background">
      <div className="footer">
        <img
          src="https://sys.tmso1.co/images/image-5d36a956-a557-457a-97c2-f5eec632d41e.png"
          alt=""
          className="footer-logo"
        ></img>
        <div className="footer-text-shop-game">
          Shop Game Liên Quân Uy Tín - Chất Lượng Số 1 Việt Nam. Chuyên Cung Cấp
          Acc Giá Rẻ Nhất Thị Trường. Đội Ngũ Chăm Sóc Khách Hàng Hỗ Trợ 24/7.
        </div>
        <div className="footer-text-he-thong">
          HỆ THỐNG BÁN ACC TỰ ĐỘNG ĐẢM BẢO UY TÍN VÀ CHẤT LƯỢNG.
        </div>
        <div className="footer-text-chung-toi">
          Chúng tôi luôn lấy uy tín đặt trên hàng đầu đối với khách hàng, hy
          vọng chúng tôi sẽ được phục vụ các bạn. Cám ơn!
        </div>
        <div>
          <div> Privacy Policy</div>
        </div>
        <div>
          <div>Terms of Service</div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-thong-tin">THÔNG TIN CHUNG</div>
        <div className="footer-body-thong-tin">
          <div>{">"} Chính Sách Bảo Hành</div>
          <div> {">"} Hướng Dẫn Nạp Tiền Tại Shop</div>
          <div>{">"} Hướng Dẫn Tạo Tài Khoản Shop</div>
          <div> {">"} Hướng Dẫn Đổi Thông Tin Nick Liên Quân Mobile</div>
        </div>
        <div className="footer-thong-tin">THỜI GIAN HỖ TRỢ:</div>
        <div className="footer-text-chung-toi">
          Sáng: 8h00 -{">"} 11h30 | Chiều: 13h00 -{">"} 21h00
        </div>
      </div>
      <div className="footer">
        <div className="footer-thong-tin">SẢN PHẨM</div>
        <div className="footer-body-thong-tin">
          <div>{">"} Nick Liên Quân Giảm Giá Sập Sàn</div>
          <div> {">"} Thử Vận May Nick & Săn Quân Huy</div>
          <div>{">"} Nick Free Fire & Nổ Hũ Kim Cương</div>
          <div> {">"} Nick Blox Fruits & Trái Ác Quỷ Siêu Rẻ</div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-thong-tin">HỖ TRỢ KHÁCH HÀNG</div>
        <img src="https://shopmailk.com/messenger-01.png" alt="" className="img-lien-he"></img>
      </div>
    </div>
  );
}
