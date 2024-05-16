import React, { useState } from "react";
import Login from "./Login";

const Register = ({ onLoginClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  const [showLoginForm, setLoginForm] = useState(false);

  const handleonLoginClick = () => {
    setLoginForm(true);
  };

  return (
    <>
      {!showLoginForm ? (
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="text-login">ĐĂNG KÝ TÀI KHOẢN</h2>
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
            ĐĂNG KÝ
          </button>
          <button type="button" className="btn"
            onClick={handleonLoginClick}
          >
            Đã có tài khoản? Đăng nhập
          </button>
        </form>
      ) : 
      <Login />}
    </>
  );
};

export default Register;
