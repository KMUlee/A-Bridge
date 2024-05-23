import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header />
      <div className="w-full h-full min-h-full flex items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
