import React, { useContext } from "react";
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" key="home">
        <NavLink to="/" className="text-lg font-normal">
          Home
        </NavLink>
      </Typography>
      <Typography as="li" key="about">
        <NavLink to="/about" className="text-lg font-normal">
          About
        </NavLink>
      </Typography>
      {user?.email ? (
        <>
          <Typography as="li" key="about">
            <NavLink to="/bookings" className="text-lg font-normal">
              My Bookings
            </NavLink>
          </Typography>
          <Typography as="li" key="logout">
            <Button
              size="sm"
              onClick={handleLogout}
              className="text-lg font-normal"
            >
              LogOut
            </Button>
          </Typography>
        </>
      ) : (
        <Typography as="li" key="login">
          <NavLink to="/login" className="text-lg font-normal">
            Login
          </NavLink>
        </Typography>
      )}
    </ul>
  );

  return (
    <div className="lg:max-w-[1140px] lg:mx-auto mx-5">
      <div className="sticky top-0 z-10 h-max rounded-none py-2 lg:py-4 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-20" />
          </Link>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div>
              <Button
                variant="outlined"
                size="md"
                className="text-[#FF3811] border-[#FF3811] rounded-none"
              >
                <span>Appointment</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav
          className="mt-2 p-4 lg:p-0 text-white bg-red-500 text-center"
          open={openNav}
        >
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="md" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="md" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </div>
    </div>
  );
};

export default NavBar;
