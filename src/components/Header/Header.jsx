import CarWidget from "../CarWidget/CarWidget";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center flex-wrap justify-between w-7xl px-2 sm:px-6 lg:px-8 bg-blue-950">
      <div className="flex item ">
        <img src={logo} className="m-1 ml-3 mr-3 p-2"  />
        <Link className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-gray-400" to="/">Inicio</Link>
        <Link className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-gray-400" to="/products">Products</Link>
        <Link className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-gray-400" to="/blog">Blog</Link>
        <Link className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-gray-400" to="/about">About</Link>
        <Link className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-gray-400" to="/contact">Contact</Link>

      </div>
        <CarWidget />

    </nav>
  );
};

export default Nav;
