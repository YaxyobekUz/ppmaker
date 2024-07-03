import React from "react";
import { Outlet } from "react-router";

// components
import Top from "../components/Top";

const MainLayout = () => {
  return (
    <>
      <Top />

      <Outlet />
    </>
  );
};

export default MainLayout;
