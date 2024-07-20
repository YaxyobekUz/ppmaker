import React from "react";
import { Outlet } from "react-router";

// components
import Top from "../components/Top";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Top />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
