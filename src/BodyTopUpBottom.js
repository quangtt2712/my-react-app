import "./App.css";
import React, { useState } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function BodyTopUpBottom() {
  return (
    <div className="background-body-top-up-bottom">
      <div className="body-top-up-bottom">
        <LocalMallIcon className="icon-top-up-bottom" />
        <div className="text-body-top-up-bottom">
          Sản phẩm, dịch vụ đa dạng, cập nhật liên tục.
        </div>
      </div>
      <div className="body-top-up-bottom">
        <VerifiedUserIcon className="icon-top-up-bottom" />
        <div className="text-body-top-up-bottom">
          Đảm bảo thông tin tài khoản, mua bán an toàn.
        </div>
      </div>
      <div className="body-top-up-bottom">
        <PhoneInTalkIcon className="icon-top-up-bottom" />
        <div className="text-body-top-up-bottom">Hỗ trợ nhanh chóng, 24/7.</div>
      </div>
      <div className="body-top-up-bottom">
        <ThumbUpIcon className="icon-top-up-bottom" />
        <div className="text-body-top-up-bottom">
          Chính sách hoàn tiền linh hoạt, nhanh chóng.
        </div>
      </div>
    </div>
  );
}
