import { Button } from "@mui/material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLogin = Cookies.get("code");
  const callBackUrl = process.env.REACT_APP_CALLBACK_URL;
  const nav = useNavigate();
  const handleOnClick = () => {
    if (!isLogin) {
      window.location.href = `https://a-bridge.auth.us-west-1.amazoncognito.com/login?client_id=6ahblt66ascvj6v3nk7k9s5rn3&response_type=code&scope=email+openid+phone&redirect_uri=${callBackUrl}`;
    } else {
      Cookies.remove("code");
      nav("/");
    }
  };
  return (
    <header className="w-full sticky top-0 left-0 flex justify-between items-center py-[20px] px-10 bg-[#ECF1F5] z-50">
      <div className="flex h-[30px]">
        <img className="h-full" src="/logo/Logo.svg" alt="logo" height={30} />
      </div>
      <Button onClick={handleOnClick}>{`${
        isLogin ? "Log Out" : "Log In"
      }`}</Button>
    </header>
  );
};

export default Header;
