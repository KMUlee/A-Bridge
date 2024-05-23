import { Button } from "@mui/material";

const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 flex justify-between items-center py-[20px] px-10 bg-[#ECF1F5] z-50">
      <div className="flex h-[30px]">
        <img className="h-full" src="/logo/Logo.svg" alt="logo" height={30} />
      </div>
      <Button>log in</Button>
    </header>
  );
};

export default Header;
