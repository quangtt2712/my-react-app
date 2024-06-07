import React, { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Register from "./Register";
import ReCAPTCHA from "react-google-recaptcha";
import { useUserLogin } from "../src/hook/userLogin.js";
//6LcKF-opAAAAADCf2x3QTQWkEZrWDHYuv86bPpOb
const Login = ({ handleDataFromChild }) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    loginUser,
    loading,
    error,
    loggedInUser,
    notFoundError,
    badRequestError,
  } = useUserLogin();

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!recaptchaToken) {
      setSubmitted(true);
      setRecaptchaToken(false);
      return;
    }

    const formData = new FormData(e.target);
    const userData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    userData.recaptchaToken = recaptchaToken;
    setSubmitted(true);

    await loginUser(userData);
  
  };
  useEffect(() => {
    if (submitted && loggedInUser) {
      console.log(loggedInUser);
      handleRegisterSuccess(loggedInUser); // Call the onRegisterSuccess callback if provided
      setSubmitted(false);
    }
  }, [loggedInUser, submitted]);
  const handleRegisterSuccess = (data) => {
    if (data === null) {
      console.log("null");
    } else {
      console.log(data);
      localStorage.setItem('accessToken', data.accessToken);

      handleDataFromChild(data);
    }
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
                        {error?.UserName &&
              error.UserName.map((msg, idx) => (
                <p key={idx} className="error-message">
                  {msg}
                </p>
              ))}
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
            {notFoundError && <p className="error-message">{notFoundError}</p>}
            {badRequestError && (
              <p className="error-message">{badRequestError}</p>
            )}
          </div>
          <ReCAPTCHA
            sitekey="6LcmRfIpAAAAAGO85QbPxEZ5z0YsReegvi-g9vOv"
            onChange={(val) => setRecaptchaToken(val)}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          ></ReCAPTCHA>{" "}
          {submitted && !recaptchaToken && (
            <p className="error-message">Vui lòng xác minh reCAPTCHA.</p>
          )}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            ĐĂNG NHẬP
          </button>
          <button type="button" className="btn" onClick={handleRegisterClick}>
            Đăng kí
          </button>
          {error?.general && <p className="error-message">{error.general}</p>}
        </form>
      ) : (
        <Register onRegisterSuccess={handleRegisterSuccess} />
      )}
    </div>
  );
};

export default Login;
