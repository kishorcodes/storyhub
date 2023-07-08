import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default function Submitbar({ showDraftSaved, setPublishMode }) {
  const navigate = useNavigate();

  return (
    <Disclosure as="nav" className="font-arial">
      {({ open }) => (
        <>
          <div
            className="px-3 py-1.5"
            onClick={() => {
              console.log(showDraftSaved);
            }}
          >
            <div className="flex h-16 items-center justify-between lg:justify-around">
              <div className="cursor-pointer flex items-center justify-between sm:items-stretch sm:justify-start">
              <div
                  className="flex justify-center items-center gap-1"
                  onClick={() => {
                    navigate("/");
                  }}
                >
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

                  <h1 className="font-bold ml-1 text-md">STORYHUB</h1>
                </div>
              </div>
              <h2 className={"text-[#A3A3A3] text-sm lg:text-md"}>
                {showDraftSaved ? "Draft Saved" : ""}
              </h2>
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
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
