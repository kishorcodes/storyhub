import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import close from "../assets/images/close.svg";

export default function Submitbar({ showDraftSaved, setPublishMode, action }) {
  const navigate = useNavigate();

  return (
    <Disclosure as="nav" className="font-arial">
      {({ open }) => (
        <>
          <div className="px-3 lg:px-28 py-1.5">
            <div className="flex h-16 items-center justify-between">
              <div className="cursor-pointer flex items-center justify-between sm:items-stretch sm:justify-start">
                <div
                  className="flex flex-shrink-0 items-center"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <img
                    className="block h-10 sm:h11 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden   h-10 sm:h11 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />

                  <h1 className="font-bold ml-1 text-sm">STORYHUB</h1>
                </div>
              </div>
              <h2 className={"text-[#A3A3A3] text-sm lg:text-md"}>
                {showDraftSaved ? "Draft Saved" : ""}
              </h2>
              {action === "submit" ? (
                <div className="">
                  <button
                    type="button"
                    className="scale-100 hover:scale-105  transition-all duration-75 ease-in inline-flex justify-center items-center space-x-2 font-semibold rounded-xl px-4 py-2 leading-5 text-sm bg-green-600 text-white hover:text-white"
                    id="tk-dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={() => {
                      setPublishMode(true);
                    }}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <img
                  src={close}
                  className="h-[20px] w-[20px] lg:h-[28px] lg:w-[28px] cursor-pointer"
                  alt="close"
                  onClick={() => {
                    setPublishMode(false);
                  }}
                />
              )}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
