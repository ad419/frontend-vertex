import React from "react";
import logo from "../components/images/logo.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Hire a developer", href: "/hire-developer" },
    { name: "Find Work", href: "/find-work" },
    { name: "Types of developers", href: "/types-of/developers" },
  ];
  return (
    <>
      <div className="lg:flex">
        <div className="lg:absolute lg:mt-8 d-none lg:right-0">
          <NavLink
            className="mr-6 hover:border-b-stone-800 hover:border-b-2 transition-all ease-in"
            to="/login"
          >
            LogIn
          </NavLink>
          <a
            className="text-bold mr-8 border-2 border-black p-2 px-7 rounded-full hover:bg-black hover:text-white transition-all ease-in"
            href="/register"
          >
            Join
          </a>
        </div>
        <div className="relative bg-bg1 z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-nav transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative bg-bg1 pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex bg-bg1 items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 lg:ml-56 w-auto sm:h-10" src={logo} />
                    </a>
                    <div className="-mr-2 bg-bg1 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>

                <div className="hidden  md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={(navData) =>
                        navData.isActive
                          ? "border-b-stone-800 font-pop text-lg space-x-6 border-b-2"
                          : "text-lg space-x-6 font-pop hover:border-b-stone-800 hover:border-b-2 transition-all ease-in text-gray-500 hover:text-gray-900"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src={logo} alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Navbar;
