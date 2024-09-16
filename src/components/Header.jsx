import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logo from '../assets/logos/logo.svg';
import { navigation } from "../constants";
import Button from "./button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const { hash } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-10 backdrop-blur-lg`}>
      <nav className="min-w-full flex items-center justify-between px-5 py-4 container">
        <Link to="/" className="block">
          <img src={logo} width={90} height={40} alt="logo" />
        </Link>

        {/* Hamburger Button for Mobile */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>

        {/* Navigation Links */}
        <ul
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:bg-transparent space-x-4 list-none text-base text-n-1`}
        >
          {navigation.map((item) => (
            <li
              key={item.id}
              className={`block uppercase transition-colors hover:text-color-1 px-4 py-4 lg:py-2 lg:text-sm lg:font-semibold ${
                item.url === hash ? "lg:text-color-1" : "lg:text-n-1/50"
              }`}
            >
              <Link to={item.url} onClick={handleClick}>
                {item.title}
              </Link>
            </li>
          ))}
          
        </ul>

        <HamburgerMenu />
      </nav>
    </div>
  );
};

export default Header;
