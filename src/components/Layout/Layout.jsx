import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="w-screen flex flex-col">
      <Header />
      <div className="w-full h-full min-h-screen flex items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
