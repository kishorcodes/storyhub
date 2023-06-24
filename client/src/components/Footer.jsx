import logo from "../logo.svg";

const Footer = () => {
  return (
    <div className="h-[140px] bg-black flex justify-between items-center px-8">
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-shrink-0 items-center">
          <img className="block h-11 w-auto" src={logo} alt="Your Company" />
          <h1 className="font-bold text-white ml-1">STORYHUB</h1>
        </div>

        <ul className="flex text-white gap-6">
          <li>
            <a href="">Write</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>

          <li>
            <a href="">Bookmark</a>
          </li>
          <li>
            <a href="">Stories</a>
          </li>
        </ul>
      </div>

      <p className="text-white">
        Made with 💙 in India by{" "}
        <a href="https://github.com/kishorcodes">Kishor</a>{" "}
      </p>
    </div>
  );
};

export default Footer;
