import { useState } from "react";
import { getUserById } from "../service/userService";

export const useGetUserById = () => {
  const [loading1, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inforUser, setInforUser] = useState(null);
  const [notFoundError, setNotFoundError] = useState(null);

  const getInforUser = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getUserById(id);
      setInforUser(response.data);
    } catch (err) {
        if (err.response && err.response.data && err.response.data.errors) {
          setError(err.response.data.errors);
        } else if (err.response.status === 404) {
          setNotFoundError(
            err.response.data.Message || "Không tìm thấy tài khoản."
          );
        } else {
            setError({ general: "Lỗi server" });
          }
        } finally {
          setLoading(false);
        }
  };
  return {loading1, error, notFoundError, getInforUser, inforUser};
};
