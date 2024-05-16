import CssBaseline from "@mui/material/CssBaseline";
import FormWeb from "./FormWeb";
import "./ListItem.css";
import * as React from "react";
import { useState } from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Link } from "react-router-dom";

const ListItem = () => {
  const [searchInput, setSearchInput] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [materialFilter, setMaterialFilter] = useState("");
  const [showDefaultOptions, setShowDefaultOptions] = useState(true);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
    setShowDefaultOptions(false); // Ẩn các lựa chọn mặc định khi chọn
  };

  const handleMaterialFilterChange = (e) => {
    setMaterialFilter(e.target.value);
    setShowDefaultOptions(false); // Ẩn các lựa chọn mặc định khi chọn
  };
  const formatAmount = (amount) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <>
      <FormWeb>
        <div>
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
              <div>
                <select
                  className="select-filter-list-item"
                  value={priceFilter}
                  onChange={handlePriceFilterChange}
                >
                  <option value="">Dưới 100.000đ</option>
                  <option value="100-300">100.000đ đến 300.000đ</option>
                  <option value="300-500">300.000đ đến 500.000đ</option>
                  <option value="500-1000">500.000đ đến 1.000.000đ</option>
                </select>
              </div>
              <div>
                <select
                  className="select-filter-list-item"
                  value={materialFilter}
                  onChange={handleMaterialFilterChange}
                >
                  <option value="">Chưa có</option>
                  <option value="iron">Sắt</option>
                  <option value="copper">Đồng</option>
                  <option value="silver">Bạc</option>
                </select>
              </div>
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
            <Link to="">
              <div class="body-list-item">
                <img
                  src="https://sys.tmso1.co/images/s3ph895jqSpcrj9.png"
                  alt=""
                  className="body-list-item-img"
                ></img>
                <div className="price-item">
                  <div>{formatAmount(800000)}</div>
                </div>
                <div className="infor-nick-item">
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tướng:</div>
                    <div className="description-number-char-item">144 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Trang phục:</div>
                    <div className="description-number-char-item">144 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Rank:</div>
                    <div className="description-number-char-item">
                      Thách đấu{" "}
                    </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tỉ lệ thắng: </div>
                    <div className="description-number-char-item"> 100% </div>
                  </div>
                </div>
                <div>
                  <div className="description-item">
                    <LocalFireDepartmentIcon className="description-item-icon" />
                    <div className="description-text-container">
                      <div className="description-text">
                        {" "}
                        nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="">
              <div class="body-list-item">
                <img
                  src="https://sys.tmso1.co/images/vBzli8ljqoIGPEN.jpeg"
                  alt=""
                  className="body-list-item-img"
                ></img>
                <div className="price-item">
                  <div>{formatAmount(3000000)}</div>
                </div>
                <div className="infor-nick-item">
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tướng:</div>
                    <div className="description-number-char-item">102 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Trang phục:</div>
                    <div className="description-number-char-item">148 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Rank:</div>
                    <div className="description-number-char-item">
                      Thách đấu{" "}
                    </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tỉ lệ thắng: </div>
                    <div className="description-number-char-item"> 100% </div>
                  </div>
                </div>
                <div>
                  <div className="description-item">
                    <LocalFireDepartmentIcon className="description-item-icon" />
                    <div className="description-text-container">
                      <div className="description-text">
                        {" "}
                        nak lôi lavi sshh cực hiếm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="">
              <div class="body-list-item">
                <img
                  src="https://sys.tmso1.co/images/16k4jGYYInMN376.png"
                  alt=""
                  className="body-list-item-img"
                ></img>
                <div className="price-item">
                  <div>{formatAmount(800000)}</div>
                </div>
                <div className="infor-nick-item">
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tướng:</div>
                    <div className="description-number-char-item">144 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Trang phục:</div>
                    <div className="description-number-char-item">144 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Rank:</div>
                    <div className="description-number-char-item">
                      Thách đấu{" "}
                    </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tỉ lệ thắng: </div>
                    <div className="description-number-char-item"> 100% </div>
                  </div>
                </div>
                <div>
                  <div className="description-item">
                    <LocalFireDepartmentIcon className="description-item-icon" />
                    <div className="description-text-container">
                      <div className="description-text">
                        {" "}
                        nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="">
              <div class="body-list-item">
                <img
                  src="https://sys.tmso1.co/images/UIsy85sdsSkz74y.png"
                  alt=""
                  className="body-list-item-img"
                ></img>
                <div className="price-item">
                  <div>{formatAmount(800000)}</div>
                </div>
                <div className="infor-nick-item">
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tướng:</div>
                    <div className="description-number-char-item">144 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Trang phục:</div>
                    <div className="description-number-char-item">144 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Rank:</div>
                    <div className="description-number-char-item">
                      Thách đấu{" "}
                    </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tỉ lệ thắng: </div>
                    <div className="description-number-char-item"> 100% </div>
                  </div>
                </div>
                <div>
                  <div className="description-item">
                    <LocalFireDepartmentIcon className="description-item-icon" />
                    <div className="description-text-container">
                      <div className="description-text">
                        {" "}
                        nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="">
              <div class="body-list-item">
                <img
                  src="https://sys.tmso1.co/images/image-65a1807a-dd64-402b-bc58-09aade6f209c.png"
                  alt=""
                  className="body-list-item-img"
                ></img>
                <div className="price-item">
                  <div>{formatAmount(1234511)}</div>
                </div>
                <div className="infor-nick-item">
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tướng:</div>
                    <div className="description-number-char-item">144 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Trang phục:</div>
                    <div className="description-number-char-item">144 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Rank:</div>
                    <div className="description-number-char-item">
                      Thách đấu{" "}
                    </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tỉ lệ thắng: </div>
                    <div className="description-number-char-item"> 100% </div>
                  </div>
                </div>
                <div>
                  <div className="description-item">
                    <LocalFireDepartmentIcon className="description-item-icon" />
                    <div className="description-text-container">
                      <div className="description-text">
                        {" "}
                        nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="">
              <div class="body-list-item">
                <img
                  src="https://sys.tmso1.co/images/image-3cfe7f31-aba9-413e-972f-f02250a6e833.jpeg"
                  alt=""
                  className="body-list-item-img"
                ></img>
                <div className="price-item">
                  <div>{formatAmount(800000)}</div>
                </div>
                <div className="infor-nick-item">
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tướng:</div>
                    <div className="description-number-char-item">144 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Trang phục:</div>
                    <div className="description-number-char-item">144 </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Rank:</div>
                    <div className="description-number-char-item">
                      Thách đấu{" "}
                    </div>
                  </div>
                  <div className="number-char-item">
                    <div className="title-number-char-item">Tỉ lệ thắng: </div>
                    <div className="description-number-char-item"> 100% </div>
                  </div>
                </div>
                <div>
                  <div className="description-item">
                    <LocalFireDepartmentIcon className="description-item-icon" />
                    <div className="description-text-container">
                      <div className="description-text">
                        {" "}
                        nata ss ,rick ss,val ss,lau qs,lavi ss,tulem đông êm đềm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </FormWeb>
    </>
  );
};

export default ListItem;
