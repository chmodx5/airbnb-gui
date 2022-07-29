import React from "react";
import { HiOutlineHome } from "react-icons/hi";

const Logo = () => {
  return (
    <a href="/" className="flex items-center text-primary space-x-2">
      <span className="text-4xl hidden md:block">
        <HiOutlineHome />
      </span>
      <span className="font-bold text-xl">airgng</span>
    </a>
  );
};

export default Logo;
