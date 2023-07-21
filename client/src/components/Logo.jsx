import { Link } from "react-router-dom";
import logo from "../assets/images/doc.svg";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="cursor-pointer flex items-center justify-between sm:items-stretch sm:justify-start">
        <div className="flex justify-center items-center">
          <img
            className="block rounded-full h-8 w-auto lg:hidden"
            src={logo}
            alt="Your Company"
          />
          <img
            className="hidden rounded-full h-8 w-auto lg:block"
            src={logo}
            alt="Your Company"
          />
          <h1 className="font-medium lg:font-semibold ml-1 text-md lg:text-lg">STORYHUB</h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
