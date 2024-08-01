import React from "react";
import { Outlet } from "react-router";

// toaster
import { Toaster } from "react-hot-toast";

// components
import Top from "../components/Top";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Top />
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />

      {/* toaster notification container */}
      <Toaster />
    </div>
  );
};

export default MainLayout;
