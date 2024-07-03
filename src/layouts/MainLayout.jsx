import React from "react";
import { Outlet } from "react-router";

// components
import Top from "../components/Top";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Top />
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
