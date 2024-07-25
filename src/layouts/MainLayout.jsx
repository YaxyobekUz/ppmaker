import React from "react";
import { Outlet } from "react-router";

// components
import Top from "../components/Top";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Top />
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
