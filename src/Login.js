import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Register from "./Register";
const Login = ({ onRegisterClick }) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
  };

  return (
    <div>
      {!showRegisterForm ? (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="text-login">ĐĂNG NHẬP TÀI KHOẢN</h2>
          <div className="login-fb">
            <FacebookIcon />
            <div> Đăng nhập bằng Facebook </div>
          </div>
          <div className="header-logo">
            <img
              src="https://sys.tmso1.co/images/image-5d36a956-a557-457a-97c2-f5eec632d41e.png"
              alt="logo"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Tên đăng nhập"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Mật khẩu"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            ĐĂNG NHẬP
          </button>
          <button type="button" className="btn" onClick={handleRegisterClick}>
            Đăng kí
          </button>
        </form>
      ) : (
        <Register />
      )}
    </div>
  );
};

export default Login;
