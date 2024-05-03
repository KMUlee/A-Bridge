import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigator = useNavigate();
  return (
    <header className="w-full sticky top-0 left-0 flex justify-center items-center py-[20px] bg-white z-50 shadow-md">
      <div className="flex absolute left-[40px]">
        <img src="/logo/Logo.svg" alt="logo" />
      </div>
      <div className="">
        <ul className="flex gap-[16px]">
          <li className="cursor-pointer" onClick={() => navigator("/test")}>
            <Typography variant="subtitle1">Test</Typography>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
