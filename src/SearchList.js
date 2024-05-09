import WhatshotIcon from "@mui/icons-material/Whatshot";
import "./App.css";
import React, { useState, useEffect } from "react";

export default function SearchList() {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    setShowSuggestions(false);
  };
  
  return (
    <div className="search-box">
      <input
        className="search-input-header"
        type="text"
        placeholder="Chạm vào đây tìm acc nhanh"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <div className="search-icon" type="button">
        Tìm kiếm
      </div>
      {showSuggestions && (
        <div className="list-search">
          <div className="list-search-text">
            <WhatshotIcon className="icon-hot" />
            <div className="icon-hot-text">TÌM KIẾM PHỔ BIẾN NHẤT</div>
          </div>
          <div className="list-search-popular">
            <div className="list-search-popular-text">acc dưới 100k</div>
            <div className="list-search-popular-text">acc dưới 200k</div>
            <div className="list-search-popular-text">acc xả kho</div>
            <div className="list-search-popular-text">acc top tướng</div>
            <div className="list-search-popular-text">acc skin hot</div>
            <div className="list-search-popular-text">cao thủ giá rẻ</div>
            <div className="list-search-popular-text">acc trắng thông tin</div>
            <div className="list-search-popular-text">acc REG</div>
            <div className="list-search-popular-text">
              acc giảm giá &gt; 50%
            </div>
            <div className="list-search-popular-text">
              acc tỉ lệ thắng &gt; 50%
            </div>
            <div className="list-search-popular-text">acc mác chiến tướng </div>
            <div className="list-search-popular-text">acc có thẻ đổi tên </div>
            <div className="list-search-popular-text">acc có đá quý</div>
            <div className="list-search-popular-text">acc trên 5k trận</div>
            <div className="list-search-popular-text">acc trên 20k vàng</div>
            <div className="list-search-popular-text">raz thai</div>
            <div className="list-search-popular-text">nak lôi</div>
            <div className="list-search-popular-text">skin vệ thần</div>
            <div className="list-search-popular-text">tulen đặc cầu</div>
          </div>
        </div>
      )}
    </div>
  );
}
