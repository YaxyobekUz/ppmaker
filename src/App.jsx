import React from "react";
import {
  Route,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";
import QRCodeLayout from "./layouts/QRCodeLayout";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Complaint from "./pages/Complaint";
import QrCodeScanner from "./pages/QrCodeScanner";
import ProfileImages from "./pages/ProfileImages";
import QrCodeGenerator from "./pages/QrCodeGenerator";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Outlet />}>
          <Route index element={<Services />} />
          <Route path="qr-code" element={<QRCodeLayout />}>
            <Route index path="generator" element={<QrCodeGenerator />} />
            <Route path="scanner" element={<QrCodeScanner />} />
            <Route path="complaint" element={<Complaint />} />
          </Route>

          <Route
            index
            path="profile-images/:profileImagesType"
            element={<ProfileImages />}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
