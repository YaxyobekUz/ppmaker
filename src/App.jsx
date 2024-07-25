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
import Services from "./pages/Services";
import QrCodeGenerator from "./pages/QrCodeGenerator";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="services" element={<Outlet />}>
          <Route index element={<Services />} />

          <Route path="qr-code" element={<QRCodeLayout />}>
            <Route index path="generate" element={<QrCodeGenerator />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
