import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
const navigation = [
  { name: "Write Your Story", href: "#", current: true },
  { name: "About Us", href: "#", current: false },
  { name: "Stories", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ auth }) {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      auth.setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    localStorage.removeItem("userProfile");
    auth.setProfile(null);
  };

  return (
    <Disclosure as="nav" className="bg-yellow-400 border-b border-black">
      {({ open }) => (
        <>
          <div></div>
          <div className="sticky mx-auto max-w-8xl px-3 py-1.5 sm:px-6 lg:px-20">
            <div className="relative flex h-16 items-center justify-between">
              <div className="cursor-pointer flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                <div
                  className="flex flex-shrink-0 items-center"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <img
                    className="block h-11 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-11 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />

                  <h1 className="font-bold ml-1">STORYHUB</h1>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

                    {auth.loggedIn ? (
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex hover:scale-105 duration-75 transition-all rounded-full bg-gray-800 text-sm focus:outline-none">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={auth.profile.picture}
                              alt="user"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/profile"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => {
                                    logOut();
                                    auth.setLoggedIn(false);
                                  }}
                                  href="/"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <a
                        onClick={() => {
                          login();
                        }}
                        href={"/"}
                        className={classNames(
                          "text-white bg-[dodgerblue] hover:bg-[#E040FB] hover:text-white",

                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={undefined}
                      >
                        Login
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black-300 hover:bg-[#E040FB] hover:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
