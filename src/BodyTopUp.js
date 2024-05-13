import "./App.css";
import React, { useState } from "react";

export default function BodyTopUp() {
  return (
    <div>
      <div className="background-body-lq-top-up">
        <div className="body-lq-top-up-sub">
          <div className="text-body-lq-top-up-sub">
            Hỗ trợ các phương thức nạp:
          </div>
          <div className="content-body-lq-top-up-sub">
            <img src="https://shopmailk.com/card2.png" alt=""></img>
            <div>Thẻ cào</div>
          </div>
          <div className="content-body-lq-top-up-sub">
            <img src="https://shopmailk.com/bank.png" alt=""></img>
            <div>Ngân hàng</div>
          </div>
          <div className="content-body-lq-top-up-sub">
            <img src="https://shopmailk.com/momo.png" alt=""></img>
            <div>MOMO</div>
          </div>
        </div>
      </div>
    </div>
  );
}
