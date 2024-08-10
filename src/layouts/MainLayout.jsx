import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

// toaster
import { Toaster } from "react-hot-toast";

// components
import Top from "../components/Top";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  // scroll to top
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0,behavior:"smooth" });
  }, [location]);

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
