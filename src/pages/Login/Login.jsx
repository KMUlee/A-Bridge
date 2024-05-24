import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    Cookies.set("code", code);
    console.log(code);
    nav("/test");
  }, [location]);

  return <div className="w-full h-full flex justify-center items-center"></div>;
};

export default Login;
