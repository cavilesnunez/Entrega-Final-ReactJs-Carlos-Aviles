import CarWidget from "../CarWidget/CarWidget";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap w-7xl px-2 sm:px-6 lg:px-8 bg-blue-950 ">
      <div className="flex items-center flex-no-shrink text-white mr-6">
      <Link className="" to="/">
        <img src={logo} className="m-0.5 ml-1.5 mr-1.5 p-1" />
        </Link>
        
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        <Link className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-gray-400" to="/">Inicio</Link>
        <Link className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-gray-400" to="/products">Products</Link>
        <Link className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-gray-400" to="/blog">Blog</Link>
        <Link className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-gray-400" to="/about">About</Link>
        <Link className="inline-flex items-center justify-center p-2 text-gray-200 hover:text-gray-400" to="/contact">Contact</Link>
        </div>
      </div>
        <CarWidget />

    </nav>
  );
};

export default Nav;
