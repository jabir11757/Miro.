import React from "react";
import Logo from "../../../assets/Logo.png";
import { HiChevronDown } from "react-icons/hi2";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container py-2 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <a href="/">
                <img className="w-auto h-4 sm:h-6" src={Logo} alt="logo" />
              </a>
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <a
                  href="/"
                  className="flex py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Products
                  <HiChevronDown className="mt-1 ml-2" />
                </a>
                <a
                  href="/"
                  className="flex py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Solutions
                  <HiChevronDown className="mt-1 ml-2" />
                </a>
                <a
                  href="/"
                  className="flex py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Resources
                  <HiChevronDown className="mt-1 ml-2" />
                </a>
                <a
                  href="/"
                  className="flex py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Enterprise
                </a>
                <a
                  href="/"
                  className="flex py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Pricing
                </a>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div className="absolute inset-x-0 z-20 w-full px-4 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
              <div className="flex items-center mt-4 lg:mt-0">
                <div className="flex flex-col -mx-2 lg:flex-row lg:items-center lg:mx-8">
                  <a
                    href="/"
                    className="flex px-1 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <HiOutlineGlobeAlt className="mr-1 h-6 w-6" />
                    EN
                  </a>
                  <a
                    href="/"
                    className="px-1 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Contact Sales
                  </a>
                  <a
                    href="/"
                    className="py-2 mx-3 mr-6 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Login
                  </a>
                  <button className="bg-[#4262FF] px-1 py-2 -mr-10 rounded-3xl">
                    <a
                      href="/"
                      className="flex px-4 py-1 mt-2 text-[#FFFFFF] transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Sign up free
                      <HiArrowLongRight className="mt-1 ml-1" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
