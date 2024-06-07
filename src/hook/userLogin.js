import { useState } from "react";
import { login } from "../service/loginService.js";

export const useUserLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [notFoundError, setNotFoundError] = useState(null);
  const [badRequestError, setBadRequestError] = useState(null);

  const loginUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await login(userData);
      setLoggedInUser(response.data);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
        setError(err.response.data.errors);
      } else if (err.response.status === 404) {
        setNotFoundError(
          err.response.data.Message || "Sai tài khoản hoặc mật khẩu."
        );
        console.log({
          general: [err.response.data.Message || "Conflict occurred."],
        });
      } else if (err.response.status === 400) {
        setBadRequestError(
          err.response.data.Message || "Tài khoản của bạn đã bị khóa vui lòng liên hệ admin để mở khóa."
        );
        console.log({
          general: [err.response.data.Message || "Tài khoản của bạn đã bị khóa vui lòng liên hệ admin để mở khóa."],
        });
      } else {
        setError({ general: "An error occurred while logging in." });
      }
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error, loggedInUser, notFoundError, badRequestError };
};
