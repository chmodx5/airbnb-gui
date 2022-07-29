import React from "react";
import NavDropDownMenu from "./../components/navbar/NavDropDownMenu";
import Search from "./../components/navbar/Search";
import {
  HiOutlineHome,
  HiOutlineCurrencyDollar,
  HiUser,
  HiMenu,
} from "react-icons/hi";
import Logo from "./../components/navbar/Logo";
import NavItems from "./../components/navbar/NavItems";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center  py-3">
        {/* logo */}
        <Logo />

        <Search />

        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;
