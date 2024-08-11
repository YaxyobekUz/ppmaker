import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

// toaster
import { Toaster } from "react-hot-toast";

// components
import Top from "../components/Top";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((i) => i !== "");

  // scroll to top
  useEffect(() => {
    const scrollToTop = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // enable scroll to top
    if (paths[0] !== "services" || paths[1] !== "profile-images") {
      scrollToTop();
    }
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
