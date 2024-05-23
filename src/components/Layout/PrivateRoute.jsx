import Cookies from "js-cookie";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const nav = useNavigate();
  useEffect(() => {
    console.log(Cookies.get("code"));
    if (
      !Cookies.get("code") ||
      Cookies.get("code") === "" ||
      Cookies.get("code") === null
    ) {
      console.log(Cookies.get("code"));
      console.log(typeof Cookies.get("code"));
      nav("/");
      //   window.location.href = "/";
      //   return <Navigate to={"/"} />;
    }
  }, []);

  return children;
};

export default PrivateRoute;
