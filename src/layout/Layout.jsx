import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Categories from "./../components/Categories";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Categories />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
