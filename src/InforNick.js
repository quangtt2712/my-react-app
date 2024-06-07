import React, { useEffect, useState } from "react";
import FormWeb from "./FormWeb";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaidIcon from "@mui/icons-material/Paid";
import PaymentsIcon from "@mui/icons-material/Payments";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RedeemIcon from "@mui/icons-material/Redeem";
import NearMeIcon from "@mui/icons-material/NearMe";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import CategoryIcon from "@mui/icons-material/Category";
import DiamondIcon from "@mui/icons-material/Diamond";
import PetsIcon from "@mui/icons-material/Pets";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useGetUserById } from "./hook/userHook";
import { jwtDecode } from "jwt-decode";
const InforNick = () => {
  const [userName, setUserName] = useState(null);
  const [idUser, setIdUser] = useState(null);
  const [coin, setCoin] = useState(null);
  const [createDateNick, setCreateDateNick] = useState("");
  const { loading1, error, notFoundError, getInforUser, inforUser } =
    useGetUserById();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const id = parseInt(decodedToken.id);
      getInforUser(id);
    }
  }, []);
  function formatDate(dateTimeString) {
    // Kiểm tra nếu dateTimeString không tồn tại hoặc là undefined
    if (!dateTimeString) {
      return ""; // hoặc giá trị mặc định khác bạn muốn đặt
    }

    // Tiếp tục xử lý nếu dateTimeString tồn tại
    const datePart = dateTimeString.split("T")[0];
    const [year, month, day] = datePart.split("-");
    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    if (inforUser) {
      console.log(inforUser);
      setIdUser(inforUser.id);
      setCoin(inforUser.wallet.balance);
      setUserName(inforUser.userName);
      const formattedDate = formatDate(inforUser.createdDate);
      console.log(inforUser.createDate);
      setCreateDateNick(formattedDate);
    }
  }, [inforUser]);
  return (
    <>
      <FormWeb>
        <div className="background-body-profile">
          <div className="background-profile">
            <div>
              <div className="background-avatar">
                <img
                  src="https://shopmailk.com/unknown-avatar.jpeg"
                  alt="avatar"
                ></img>
                <div>
                  <div>{userName}</div>
                  <div>
                    <strong>ID: {idUser}</strong>
                  </div>
                </div>
              </div>
              <div className="background-content-avatar">
                <div className="margin-flex-background-content-avatar">
                  <div className="flex-background-content-avatar">
                    <PersonIcon />
                    <div>Thông tin tài khoản</div>
                  </div>
                  <div className="flex-background-content-avatar">
                    <NotificationsIcon />
                    <div>Thông báo</div>
                  </div>
                  <div className="flex-background-content-avatar">
                    <PaidIcon />
                    <div>Nạp tiền (Tự động)</div>
                  </div>
                  <div className="flex-background-content-avatar">
                    <PaymentsIcon className="id-qr-decription" />
                    <div>Lịch sử nạp tiền</div>
                  </div>
                </div>
                <div className="margin-flex-background-content-avatar">
                  <div className="flex-background-content-avatar">
                    <SportsEsportsIcon />
                    <div>Minigame đã chơi</div>
                  </div>
                  <div className="flex-background-content-avatar">
                    <RedeemIcon className="id-qr-decription" />
                    <div>Tài khoản đã mua</div>
                  </div>
                  <div className="flex-background-content-avatar">
                    <DiamondIcon />
                    <div>Giỏ hàng đã thêm</div>
                  </div>
                  <div className="flex-background-content-avatar">
                    <NearMeIcon />
                    <div>Rút vật phẩm</div>
                  </div>
                  <div className="flex-background-content-avatar">
                    <PetsIcon />
                    <div>Hòm vật phẩm</div>
                  </div>
                </div>
                <div className="margin-flex-background-content-avatar">
                  <div className="flex-background-content-avatar">
                    <VideogameAssetIcon />
                    <div>Dịch vụ cày thuê</div>
                  </div>
                  <div className="flex-background-content-avatar">
                    <CategoryIcon />
                    <div>Dịch vụ vật phẩm</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-back-profile-customer">
                Thông tin tài khoản
              </div>
              <div className="back-profile-customer">
                <div className="description-profile-customer">
                  <div className="flex-description-profile-customer-vn">
                    {" "}
                    <PersonIcon /> Thông tin cá nhân
                  </div>
                  <div className="flex-description-profile-customer">
                    <div className="title-flex-description-profile-customer">
                      Facebook
                    </div>
                    <div className="title-flex-description-profile-customer">
                      ---
                    </div>
                  </div>
                  <div className="flex-description-profile-customer">
                    <div className="title-flex-description-profile-customer">
                      ID
                    </div>
                    <div className="title-flex-description-profile-customer">
                      {idUser}
                    </div>
                  </div>
                  <div className="flex-description-profile-customer">
                    <div className="title-flex-description-profile-customer">
                      Tên tài khoản
                    </div>
                    <div className="title-flex-description-profile-customer">
                      {userName}
                    </div>
                  </div>
                  <div className="flex-description-profile-customer">
                    <div className="title-flex-description-profile-customer">
                      Số điện thoại
                    </div>
                    <div className="title-flex-description-profile-customer">
                      ---
                    </div>
                  </div>
                  <div className="flex-description-profile-customer">
                    <div className="title-flex-description-profile-customer">
                      Ví chính
                    </div>
                    <div className="title-flex-description-profile-customer">
                      {coin} đ
                    </div>
                  </div>
                  <div className="flex-description-profile-customer">
                    <div className="title-flex-description-profile-customer">
                      Ví Coin
                    </div>
                    <div className="title-flex-description-profile-customer">
                      0
                    </div>
                  </div>
                  <div className="flex-description-profile-customer">
                    <div className="title-flex-description-profile-customer">
                      Ngày tham gia
                    </div>
                    <div className="title-flex-description-profile-customer">
                      {createDateNick}
                    </div>
                  </div>
                  <div>
                    <div className="flex-description-profile-customer dash-customeser">
                      <MailOutlineIcon />
                      <div>Email (Backup)</div>
                    </div>
                    <div className="display-flex">
                      <input type="text" className="input-customer"></input>
                      <div className="btn-customer">Cập nhật</div>
                    </div>
                  </div>
                </div>
                <div className="description-profile-customer ">
                  <div className="change-password">
                    <div>Đổi mật khẩu</div>
                    <div>Mật khẩu hiện tại</div>
                    <input
                      type="password"
                      className="btn-change-password"
                    ></input>

                    <div>Mật khẩu mới</div>
                    <input
                      type="password"
                      className="btn-change-password"
                    ></input>

                    <div>Mật khẩu hiện tại</div>
                    <input
                      type="password"
                      className="btn-change-password"
                    ></input>
                    <div className="btn-pass-customer">Cập nhật</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="text-back-profile-customer">
                Thông tin tài khoản
              </div>
              <div className="no-data-profile-customer">Chưa có dữ liệu</div>
            </div> */}
          </div>
        </div>
      </FormWeb>
    </>
  );
};
export default InforNick;
