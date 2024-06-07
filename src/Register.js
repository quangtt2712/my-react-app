import React, { useEffect, useState } from "react";
import Login from "./Login";
import useRegister from "../src/hook/registerHook.js"; // Ensure the correct path to your hook
import ReCAPTCHA from "react-google-recaptcha";
import { useUserLogin } from "../src/hook/userLogin.js";


const Register = ({ onRegisterSuccess }) => {
  const [username, setUsername] = useState(""); // State để lưu username
  const [password, setPassword] = useState("");
  const {
    loginUser,
    loggedInUser,
    notFoundError,
    badRequestError,
  } = useUserLogin();
  const {
    registerUser,
    loading,
    error,
    conflictError,
    registeredUser,
    resetErrors,
  } = useRegister();
  useEffect(() => {
    // Đảm bảo chỉ log khi inforUser thay đổi
    if (registeredUser || loggedInUser) {
      
      console.log(registeredUser);
      if (registeredUser) {
        console.log("a");
        const userData = {
          username: username,
          password: password,
        };
        loginUser(userData);
  
        onRegisterSuccess(loggedInUser); // Call the onRegisterSuccess callback if provided
      }

    }
  }, [registeredUser, loggedInUser]);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [submitted, setSubmitted] = useState(false); // State để theo dõi xem đã nhấn nút đăng ký chưa

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetErrors(); // Reset errors on form submission

    if (!recaptchaToken) {
      setSubmitted(true);
      setRecaptchaToken(false);
      return;
    }

    const formData = new FormData(e.target);
    const userData = {
      username: formData.get("username"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"), // Add this field if required
    };
    userData.recaptchaToken = recaptchaToken;

    setUsername(userData.username); // Lưu username vào state
    setPassword(userData.password);
    await registerUser(userData);
  
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
            {error?.UserName &&
              error.UserName.map((msg, idx) => (
                <p key={idx} className="error-message">
                  {msg}
                </p>
              ))}
            {conflictError && <p className="error-message">{conflictError}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Mật khẩu"
            />
            {error?.Password &&
              error.Password.map((msg, idx) => (
                <p key={idx} className="error-message">
                  {msg}
                </p>
              ))}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
            />
            {error?.ConfirmPassword &&
              error.ConfirmPassword.map((msg, idx) => (
                <p key={idx} className="error-message">
                  {msg}
                </p>
              ))}
          </div>
          <ReCAPTCHA
            sitekey="6LcmRfIpAAAAAGO85QbPxEZ5z0YsReegvi-g9vOv"
            onChange={(val) => setRecaptchaToken(val)}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          ></ReCAPTCHA>
          {submitted && !recaptchaToken && (
            <p className="error-message">
              Vui lòng xác minh reCAPTCHA trước khi đăng ký.
            </p>
          )}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            ĐĂNG KÝ
          </button>
          <button type="button" className="btn" onClick={handleonLoginClick}>
            Đã có tài khoản? Đăng nhập
          </button>
          {error?.general && <p className="error-message">{error.general}</p>}
        </form>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Register;
