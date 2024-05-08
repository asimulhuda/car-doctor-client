import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="lg:max-w-[1140px] lg:mx-auto mx-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
