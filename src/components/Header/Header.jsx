const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 flex justify-center items-center py-[20px] bg-white z-50 shadow-md">
      <div className="flex absolute left-[40px]">
        <img src="/logo/Logo.svg" alt="logo" />
      </div>
      <div className="">
        <ul className="flex gap-[16px]">
          <li>A/B Test</li>
          <li>History</li>
          <li>My Profile</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
