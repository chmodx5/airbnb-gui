import React from "react";
import { HiOutlineCurrencyDollar, HiUser, HiMenu } from "react-icons/hi";

const NavItems = () => {
  return (
    <div className="flex items-center space-x-2">
      <a href="" className="font-semibold hover:text-gray-700">
        Become a Host
      </a>
      <a href="" className="text-2xl hover:text-gray-700">
        <HiOutlineCurrencyDollar />
      </a>
      <button className="flex items-center border rounded-full h-10 border-gray-300 px-3 space-x-2 text-2xl hover:text-gray-700">
        <HiMenu />
        <HiUser />
      </button>
      {/* <NavDropDownMenu /> */}
    </div>
  );
};

export default NavItems;
