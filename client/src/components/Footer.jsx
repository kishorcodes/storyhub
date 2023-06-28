import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="h-[165px] bg-black flex flex-col lg:flex-row justify-between items-center py-4 px-2 md:px-20">
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-shrink-0 items-center justify-center lg:justify-start">
          <img className="block h-11 w-auto" src={logo} alt="Your Company" />
          <h1 className="font-bold text-white ml-1">STORYHUB</h1>
        </div>

        <ul className="flex text-white gap-2.5 md:gap-6 no-underline">
          {["Write", "About Us", "Contact Us", "Bookmark", "Stories"].map(
            (link, index) => {
              return (
                <li key={index}>
                  <p className="text-sm">{link}</p>
                </li>
              );
            }
          )}
        </ul>
      </div>

      <p className="text-white text-sm lg:text-lg">
        Made with 💙 in India by{" "}
        <a href="https://github.com/kishorcodes">Kishor</a>{" "}
      </p>
    </div>
  );
};

export default Footer;
