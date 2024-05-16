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
              src="https://firebasestorage.googleapis.com/v0/b/mindmasterminds.appspot.com/o/images%2FYena%20huy%E1%BB%81n%20c%E1%BB%ADu%20thi%C3%AAn.lafthanh.png?alt=media&token=9cbc8e34-20c3-42dd-a011-50dbefa14f04"
              alt="logo"
              className="logo-login"
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
