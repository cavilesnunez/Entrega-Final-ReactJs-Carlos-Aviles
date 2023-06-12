import CarWidget from "../CarWidget/CarWidget";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-950">
      <div className="flex items-center font-medium justify-around ">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={logo} alt="logo" className="md:cursor-pointer h-9" />
          <div
            className="text-3x1 md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8 font-[Poppins] text-white  ">
          <li>
            <Link to="/" className="py-7 px-3 inline-block hover:text-gray-600">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <CarWidget />
        </div>
        {/* Mobile nav */}
        <ul
          className={`md:hidden bg-slate-950 text-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block hover:text-gray-600">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <CarWidget />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
