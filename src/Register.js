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
