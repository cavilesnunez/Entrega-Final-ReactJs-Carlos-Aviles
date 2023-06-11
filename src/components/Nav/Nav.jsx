import CarWidget from "../CarWidget/CarWidget";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <nav className="flex items-center flex-wrap bg-blue-950">
      <div className="flex items-center">
        <img src={logo} className="w-16 py-4 px-2 ml-5" />
        <div className="pl-4">
          {[["KeebMx", "/home"]].map(([title, url]) => (
            <a
              href={url}
              className=" px-3 py-2 text-white font-black hover:text-blue-400 text-xl"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div>
        {[
          ["Products", "/products"],
          ["Blog", "/blog"],
          ["About", "/about"],
          ["Contact", "/contact"],
        ].map(([title, url]) => (
          <a
            href={url}
            className=" px-3 py-2 text-white font-medium hover:text-blue-400"
          >
            {title}
          </a>
        ))}
      </div>
      <CarWidget />
    </nav>
  );
};

export default Nav;
