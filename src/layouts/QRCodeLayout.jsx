import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// antd
import { Tooltip } from "antd";

// images
import starIcon from "../assets/images/icons/star.svg";
import qrCodeIcon from "../assets/images/icons/qr-code.svg";
import scannerIcon from "../assets/images/icons/scanner.svg";
import infoIcon from "../assets/images/icons/info-square.svg";

const QRCodeLayout = () => {
  return (
    <div className="pt-4 pb-16">
      <div className="container">
        <div className="border border-brand-darkblue-300/15 rounded-lg sm:rounded-xl">
          {/* top */}
          <div className="flex items-center justify-between border-b border-brand-darkblue-300/15">
            {/* nav */}
            <nav className="w-full xs:w-auto">
              <ul className="flex items-center gap-">
                <li className="w-full h-11 border-r border-brand-darkblue-300/15 xs:w-20 xs:h-12">
                  <Tooltip title="QR-kod yaratish">
                    <NavLink
                      to="/services/qr-code/generate"
                      aria-label="QR code generator page link"
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
                      to="/services/qr-code/scanner"
                      aria-label="QR code scanner page link"
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

                {/* favorites */}
                <li className="w-full h-11 border-r border-brand-darkblue-300/15 xs:w-20 xs:h-12">
                  <Tooltip title="Saralangan QR-kodlar">
                    <NavLink
                      to="/services/qr-code/favorites"
                      aria-label="favorite QR codes page link"
                      className="qr-code-page-nav-link"
                    >
                      <img
                        width={28}
                        height={28}
                        src={starIcon}
                        alt="star icon"
                        className="size-7"
                      />
                    </NavLink>
                  </Tooltip>
                </li>

                {/* to complain */}
                <li className="w-full h-11 xs:hidden xs:w-20 xs:h-12">
                  <Tooltip color="red" title="Shikoyat qilish">
                    <NavLink
                      to="/services/qr-code/to-complain"
                      aria-label="to complain page link"
                      className="qr-code-page-nav-link rounded-tr-xl transition-colors hover:bg-brand-danger-500/5"
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
            </nav>

            {/* to complain */}
            <Tooltip color="red" title="Shikoyat qilish">
              <NavLink
                aria-label="to complain"
                to="/services/qr-code/to-complain"
                className="hidden items-center justify-center w-20 h-12 rounded-tr-xl transition-colors hover:bg-brand-danger-500/5 xs:flex xs:border-l xs:border-brand-darkblue-300/15"
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
          </div>

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
