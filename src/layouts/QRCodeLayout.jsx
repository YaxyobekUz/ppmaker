import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// antd
import { Tooltip } from "antd";

// images
import qrCodeIcon from "../assets/images/icons/qr-code.svg";
import scannerIcon from "../assets/images/icons/scanner.svg";
import infoIcon from "../assets/images/icons/info-square.svg";

const QRCodeLayout = () => {
  return (
    <div className="pt-4 pb-16">
      <div className="container">
        <div className="border border-brand-darkblue-300/15 rounded-lg sm:rounded-xl">
          {/* nav */}
          <nav className="flex items-center justify-between border-b border-brand-darkblue-300/15">
            <ul className="flex items-center w-full xs:w-auto">
              <li className="w-full h-11 border-r border-brand-darkblue-300/15 xs:w-20 xs:h-12">
                <Tooltip title="QR-kod yaratish">
                  <NavLink
                    title="generator"
                    aria-label="generator"
                    to="/services/qr-code/generator"
                    className="qr-code-page-nav-link rounded-tl-xl"
                  >
                    <img
                      width={28}
                      height={28}
                      src={qrCodeIcon}
                      alt="qr code icon"
                      className="size-7"
                    />
                  </NavLink>
                </Tooltip>
              </li>

              {/* scaner */}
              <li className="w-full h-11 border-r border-brand-darkblue-300/15 xs:w-20 xs:h-12">
                <Tooltip title="QR-kodni skanerlash">
                  <NavLink
                    title="scanner"
                    aria-label="scanner"
                    to="/services/qr-code/scanner"
                    className="qr-code-page-nav-link"
                  >
                    <img
                      width={28}
                      height={28}
                      src={scannerIcon}
                      alt="scanner icon"
                      className="size-7"
                    />
                  </NavLink>
                </Tooltip>
              </li>

              {/* to complain */}
              <li className="w-full h-11 xs:hidden xs:w-20 xs:h-12">
                <Tooltip color="red" title="Shikoyat qilish">
                  <NavLink
                    title="complaint"
                    aria-label="complaint"
                    to="/services/qr-code/complaint"
                    className="qr-code-page-nav-link !bg-transparent rounded-tr-xl transition-colors hover:!bg-brand-danger-500/5"
                  >
                    <img
                      width={28}
                      height={28}
                      src={infoIcon}
                      alt="info icon"
                      className="size-7"
                    />
                  </NavLink>
                </Tooltip>
              </li>
            </ul>

            {/* complaint */}
            <Tooltip color="red" title="Shikoyat qilish">
              <NavLink
                title="complaint"
                aria-label="complaint"
                to="/services/qr-code/complaint"
                className="qr-code-page-nav-link hidden items-center justify-center w-20 h-12 !bg-transparent rounded-tr-xl transition-colors hover:!bg-brand-danger-500/5 xs:flex xs:border-l xs:border-brand-darkblue-300/15"
              >
                <img
                  width={28}
                  height={28}
                  src={infoIcon}
                  alt="info icon"
                  className="size-7"
                />
              </NavLink>
            </Tooltip>
          </nav>

          {/* pages */}
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeLayout;
