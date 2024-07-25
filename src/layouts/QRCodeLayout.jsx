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
        <div className="border border-brand-darkblue-300/15 rounded-xl">
          {/* top */}
          <div className="flex items-center justify-between gap-5 border-b border-brand-darkblue-300/15">
            {/* nav */}
            <nav>
              <ul className="flex items-center gap-">
                <li className="w-20 h-12 border-r border-brand-darkblue-300/15">
                  <Tooltip title="QR-kod yaratish">
                    <NavLink
                      to="/services/qr-code/generator"
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
                <li className="w-20 h-12 border-r border-brand-darkblue-300/15">
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
                <li className="w-20 h-12 border-r border-brand-darkblue-300/15">
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
              </ul>
            </nav>

            {/* favorites */}
            <Tooltip color="red" title="Shikoyat qilish">
              <button
                aria-label="to complain"
                className="flex items-center justify-center w-20 h-12 bg-brand-danger-500/5 rounded-tr-xl border-l border-brand-darkblue-300/15"
              >
                <img
                  width={28}
                  height={28}
                  src={infoIcon}
                  alt="info icon"
                  className="size-7"
                />
              </button>
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
