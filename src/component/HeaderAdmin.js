import React from "react";
import "../Css/Admin.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Header = () => {
  return (
    <div className="background-header-admin">
      <div className="navbar-menu-wrapper-icon">
        <img
          src="https://themewagon.github.io/purple-react/static/media/logo-mini.d16823d3.svg"
          alt="logo"
        ></img>
      </div>
      <div className="navbar-menu-wrapper">
        <div className="navbar-menu-wrapper-header">
          <DehazeIcon />
          <div className="navbar-menu-wrapper-header-icon-and-input">
            <SearchIcon />
            <input
              type="text"
              className="navbar-menu-wrapper-header-input"
            ></input>
          </div>
          <div className="navbar-menu-wrapper-header-user">
            <div className="navbar-menu-wrapper-header-user-avatar-name">
              <img
                src="https://themewagon.github.io/purple-react/static/media/face1.42d41e61.jpg"
                className="nav-profile-img"
                alt="avatar"
              ></img>
              <div>David Greymaax</div>

                <EmailIcon />
<NotificationsIcon />
<PowerSettingsNewIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
