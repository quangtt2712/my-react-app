import CssBaseline from "@mui/material/CssBaseline";
import FormWeb from "./FormWeb";
import "./ListItem.css";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Select({ value, onChange, options }) {
  return (
    <div className="custom-select">
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

const ListItem = () => {
  const [searchInput, setSearchInput] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [materialFilter, setMaterialFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Số lượng items mỗi trang

  const allItems = [
    {
      id: 1,
      price: 100000,
      champions: 50,
      skins: 30,
      rank: "Thách đấu",
      winRate: "60%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 2,
      price: 200000,
      champions: 60,
      skins: 35,
      rank: "Kim cương",
      winRate: "70%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 3,
      price: 300000,
      champions: 70,
      skins: 40,
      rank: "Bạch kim",
      winRate: "80%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 4,
      price: 400000,
      champions: 80,
      skins: 45,
      rank: "Vàng",
      winRate: "90%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 5,
      price: 500000,
      champions: 90,
      skins: 50,
      rank: "Bạc",
      winRate: "50%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 6,
      price: 600000,
      champions: 100,
      skins: 55,
      rank: "Đồng",
      winRate: "40%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 7,
      price: 700000,
      champions: 110,
      skins: 60,
      rank: "Sắt",
      winRate: "30%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 8,
      price: 800000,
      champions: 120,
      skins: 65,
      rank: "Thách đấu",
      winRate: "20%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 9,
      price: 900000,
      champions: 130,
      skins: 70,
      rank: "Kim cương",
      winRate: "10%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 10,
      price: 1000000,
      champions: 140,
      skins: 75,
      rank: "Bạch kim",
      winRate: "100%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 11,
      price: 1100000,
      champions: 150,
      skins: 80,
      rank: "Vàng",
      winRate: "95%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 12,
      price: 1200000,
      champions: 160,
      skins: 85,
      rank: "Bạc",
      winRate: "85%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 13,
      price: 1300000,
      champions: 170,
      skins: 90,
      rank: "Đồng",
      winRate: "75%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 14,
      price: 1400000,
      champions: 180,
      skins: 95,
      rank: "Sắt",
      winRate: "65%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 15,
      price: 1500000,
      champions: 190,
      skins: 100,
      rank: "Thách đấu",
      winRate: "55%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 16,
      price: 1600000,
      champions: 200,
      skins: 105,
      rank: "Kim cương",
      winRate: "45%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 17,
      price: 1700000,
      champions: 210,
      skins: 110,
      rank: "Bạch kim",
      winRate: "35%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 18,
      price: 1800000,
      champions: 220,
      skins: 115,
      rank: "Vàng",
      winRate: "25%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 19,
      price: 1900000,
      champions: 230,
      skins: 120,
      rank: "Bạc",
      winRate: "15%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 20,
      price: 2000000,
      champions: 240,
      skins: 125,
      rank: "Đồng",
      winRate: "5%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 21,
      price: 2100000,
      champions: 250,
      skins: 130,
      rank: "Sắt",
      winRate: "95%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 22,
      price: 2200000,
      champions: 260,
      skins: 135,
      rank: "Thách đấu",
      winRate: "85%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 23,
      price: 2300000,
      champions: 270,
      skins: 140,
      rank: "Kim cương",
      winRate: "75%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
    {
      id: 24,
      price: 2400000,
      champions: 280,
      skins: 145,
      rank: "Bạch kim",
      winRate: "65%",
      description: "nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm",
    },
  ]; // Dữ liệu mẫu cho tất cả items

  const totalItems = allItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleMaterialFilterChange = (e) => {
    setMaterialFilter(e.target.value);
  };

  const formatAmount = (amount) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const handlePageChange = (value) => {
    if (value === "" || isNaN(value)) {
      setCurrentPage("");
    } else {
      const pageNumber = Math.max(1, Math.min(totalPages, Number(value)));
      setCurrentPage(pageNumber);
      localStorage.setItem("currentPage", pageNumber); // Lưu trạng thái trang vào local storage
    }
  };
  React.useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, []);

  const renderPagination = () => (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Trước
      </button>
      <span>{`Trang ${currentPage} trong số ${totalPages}`}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Sau
      </button>
      <input
        type="number"
        value={currentPage}
        onChange={(e) => handlePageChange(e.target.value)}
        min={1}
        max={totalPages}
      />
    </div>
  );

  const displayedItems = allItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const priceOptions = [
    { value: "all", label: "Tất cả" },
    { value: "", label: "Dưới 100.000đ" },
    { value: "100-300", label: "100.000đ đến 300.000đ" },
    { value: "300-500", label: "300.000đ đến 500.000đ" },
    { value: "500-1000", label: "500.000đ đến 1.000.000đ" },
    // Add more options as needed
  ];

  const materialOptions = [
    { value: "all", label: "Tất cả" },
    { value: "", label: "Chưa có" },
    { value: "iron", label: "Sắt" },
    { value: "copper", label: "Đồng" },
    { value: "silver", label: "Bạc" },
    // Add more options as needed
  ];

  return (
    <>
      <FormWeb>
        <div className="background-body">
          <h1 className="title">Danh sách các nick Li Qi</h1>
          <p>DANH MỤC</p>
          <div className="title-description">NICK LIÊN QUÂN SALE</div>
          <div className="list-item-background-filter">
            <div className="text-loc-tim-kiem">Lọc tìm kiếm</div>
            <div className="buttons-filter-list-item">
              <input
                type="text"
                value={searchInput}
                onChange={handleInputChange}
                placeholder="Nhập id nick..."
              />
              <Select
                value={priceFilter}
                onChange={handlePriceFilterChange}
                options={priceOptions}
              />
              <Select
                label="Chất liệu"
                value={materialFilter}
                onChange={handleMaterialFilterChange}
                options={materialOptions}
              />
              <div>Áp dụng</div>
            </div>
            <div className="filter-of-button">
              <div className="text-filter-of-button">Nổi bật</div>
              <div className="text-filter-of-button">Nick Mới</div>
              <div className="text-filter-of-button">Giá &#9650; </div>
              <div className="text-filter-of-button">Giá &#9660;</div>
            </div>
          </div>
          <div className="body-list">
            {displayedItems.map((item) => (
              <Link to="/item-detail" key={item.id}>
                <div className="body-list-item">
                  <img
                    src="https://sys.tmso1.co/images/s3ph895jqSpcrj9.png"
                    alt=""
                    className="body-list-item-img"
                  ></img>
                  <div className="id-and-sale-price-item">
                    <div>
                      <div className="flex-sale-price-item">
                        <div className="sale-price-item">
                          {formatAmount(item.price)}
                        </div>
                        <span>-50%</span>
                      </div>

                      <div className="price-item">
                        {formatAmount(item.price)}
                      </div>
                    </div>
                    <div>
                      <div className="id-item">ID 12345</div>
                    </div>
                  </div>

                  <div className="infor-nick-item">
                    <div className="number-char-item">
                      <div className="title-number-char-item">Tướng:</div>
                      <div className="description-number-char-item">
                        {item.champions}{" "}
                      </div>
                    </div>
                    <div className="number-char-item">
                      <div className="title-number-char-item">Trang phục:</div>
                      <div className="description-number-char-item">
                        {item.skins}{" "}
                      </div>
                    </div>
                    <div className="number-char-item">
                      <div className="title-number-char-item">Rank:</div>
                      <div className="description-number-char-item">
                        {item.rank}
                      </div>
                    </div>
                    <div className="number-char-item">
                      <div className="title-number-char-item">
                        Tỉ lệ thắng:{" "}
                      </div>
                      <div className="description-number-char-item">
                        {" "}
                        {item.winRate}{" "}
                      </div>
                    </div>
                    <div className="number-char-item">
                      <div className="title-number-char-item">Ngọc: </div>
                      <div className="description-number-char-item"> 90</div>
                    </div>
                  </div>
                  <div>
                    <div className="description-item">
                      <div>XEM CHI TIẾT</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {renderPagination()}
        </div>
      </FormWeb>
    </>
  );
};

export default ListItem;
