import { Link } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

export default function BodyLQ() {
  return (
    <div>
      <div className="body-lq">
        <div className="display-nick-lien-quan">
          <div className="text-nick-lien-quan">NICK LIÊN QUÂN TỰ CHỌN</div>
          <Link to="/kham-pha" className="link-kham-pha-nick-lien-quan">
            Khám phá{" "}
          </Link>
        </div>
        <div>
          <p className="text-gioi-thieu-nick-lien-quan">
            Đây là kho nick Liên Quân ngon và khủng nhất Việt Nam, giá cả hợp
            lý, bảo hành vĩnh viễn !!!
          </p>
        </div>
        <div className="menu-list-acc-lien-quan">
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/XJeJWwSMXqqH2F9.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">NICK LIÊN QUÂN SALE</div>
            <div className="description-list-acc-lien-quan">
              XẢ BẰNG GIÁ NHẬP - GIÁ RẺ NHƯ CHO
            </div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/LLoVETNK4cZrYPA.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">NICK LIÊN QUÂN GIÁ RẺ</div>
            <div className="description-list-acc-lien-quan">
              NICK DƯỚI 1 TRIỆU
            </div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/bci761hdYIG9RjG.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">NICK LIÊN QUÂN VIP</div>
            <div className="description-list-acc-lien-quan">
              NICK TRÊN 1 TRIỆU
            </div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/h5GMEF8578WfNbl.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">
              NICK LIÊN QUÂN VIP PRO
            </div>
            <div className="description-list-acc-lien-quan">
              NICK TRÊN 3 TRIỆU
            </div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/sdFYsCSjG9TDhtH.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">NICK LIÊN QUÂN REG</div>
            <div className="description-list-acc-lien-quan">
              XẢ BẰNG GIÁ NHẬP - GIÁ RẺ NHƯ CHO
            </div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/nQEIqRxrOG2LiGZ.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">
              NICK LIÊN QUÂN LIÊN KẾT SỐNG
            </div>
            <div className="description-list-acc-lien-quan">
              BẢO HÀNH VĨNH VIỄN - LỖI HOÀN 100%
            </div>
          </Link>
        </div>
      </div>
      <div className="body-lq thu-van-may-body">
        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
        <div className="display-nick-lien-quan">
          <div className="text-nick-lien-quan">
            THỬ VẬN MAY NICK - SĂN QUÂN HUY
          </div>
          <Link to="/kham-pha" className="link-kham-pha-nick-lien-quan">
            Khám phá{" "}
          </Link>
        </div>
        <div>
          <p className="text-gioi-thieu-nick-lien-quan">
            Chỉ từ 10K, bạn sẽ có cơ hội trúng ngay những nick Liên Quân cực
            khủng, rank cao, nhiều skin xịn xò. Và nổ hũ hàng ngàn Quân Huy !!!
          </p>
        </div>
        <div className="menu-list-acc-lien-quan">
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/EbH5zbUAxgj5pP8.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">THỬ VẬN MAY SƠ CẤP</div>
            <div className="description-list-acc-lien-quan">10.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/UC0rppRlTUaDZI9.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">THỬ VẬN MAY VIP 1</div>
            <div className="description-list-acc-lien-quan">15.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/bpXH4cAHlcAqDZ6.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">THỬ VẬN MAY VIP 2</div>
            <div className="description-list-acc-lien-quan">50.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/riny5QJkPAaawJT.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">THỬ VẬN MAY VIP 3</div>
            <div className="description-list-acc-lien-quan">70.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/GYeTXuHnM6F3HbY.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">THỬ VẬN MAY VIP 4</div>
            <div className="description-list-acc-lien-quan">99.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/RwKJvIxS1eFYnTY.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">THỬ VẬN MAY VIP 5</div>
            <div className="description-list-acc-lien-quan">150.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/GyL6SKI2YQEtXfZ.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">THỬ VẬN MAY VIP 6</div>
            <div className="description-list-acc-lien-quan">199.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/sHi90m7sZIW3nZY.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">THỬ VẬN MAY VIP 7</div>
            <div className="description-list-acc-lien-quan">300.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/e1u4r7JsiC9RiGj.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">THỬ VẬN MAY SIÊU CẤP</div>
            <div className="description-list-acc-lien-quan">350.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/h1Acoj5BWCCyAHZ.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">
              RƯƠNG QUÂN HUY GIỜ VÀNG
            </div>
            <div className="description-list-acc-lien-quan">9.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/17xjDU5yLyOyJ43.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">RƯƠNG QUÂN HUY VIP 2</div>
            <div className="description-list-acc-lien-quan">19.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/QSEYls8xMOTPRN3.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">VÒNG QUAY SKIN SSS</div>
            <div className="description-list-acc-lien-quan">19.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/b0qDX6KCkTMOWfx.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">VÒNG QUAY QUÂN HUY</div>
            <div className="description-list-acc-lien-quan">10.000 VNĐ</div>
          </Link>
          <Link to="#" className="list-acc-lien-quan">
            <img
              src="https://sys.tmso1.co/images/Nb1lFLDiWUw3j2a.gif"
              alt=""
              className="img-list-acc-lien-quan"
            ></img>
            <div className="text-list-acc-lien-quan">
              VÒNG QUAY MÙA S1 - 2024
            </div>
            <div className="description-list-acc-lien-quan">15.000 VNĐ</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
