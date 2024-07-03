import React from "react";
import { Link, NavLink } from "react-router-dom";

// images
import heartIcon from "../assets/images/icons/heart.svg";
import searchIcon from "../assets/images/icons/search.svg";
import walletIcon from "../assets/images/icons/wallet.svg";
import downArrowIcon from "../assets/images/icons/down-arrow.svg";

const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 w-full py-4 mb-12 border-b border-brand-darkblue-300/15">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link
            to="/"
            title="profile picture maker logo"
            className="font-semibold text-3xl text-brand-violet-500"
          >
            ppmaker
          </Link>

          {/* main content */}
          <div className="flex items-center gap-6">
            {/* nav */}
            <nav>
              <ul className="flex items-center gap-6">
                <li className="">
                  <NavLink to="/" className="header-nav-link">
                    Bosh sahifa
                  </NavLink>
                </li>

                {/* services & services dropdown */}
                <li className="group relative">
                  <NavLink to="/services" className="header-nav-link">
                    <span>Xizmatlar</span>
                    <img
                      width={16}
                      height={16}
                      src={downArrowIcon}
                      alt="down arrow icon"
                      className="size-4 transition-transform group-hover:rotate-180"
                    />
                  </NavLink>

                  {/* dropdown */}
                  <div className="hidden absolute top-full left-0 z-10 min-w-max bg-white p-1.5 rounded-xl border border-brand-darkblue-300/15 group-hover:block">
                    <nav>
                      <ul className="space-y-1">
                        <li>
                          <Link
                            to="/services/"
                            className="block py-2 px-3 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                          >
                            Profi rasm yaratish
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/services/"
                            className="block py-2 px-3 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                          >
                            Favikon yaratish
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/services/"
                            className="block py-2 px-3 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                          >
                            Maxsus profil rasmi yaratish
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </li>

                {/* manual */}
                <li className="">
                  <NavLink to="/manual" className="header-nav-link">
                    Qo'llanma
                  </NavLink>
                </li>

                {/* contact */}
                <li className="">
                  <NavLink to="/contact" className="header-nav-link">
                    Bog'lanish
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* actions */}
            <div className="flex items-center gap-4">
              {/* open search box btn */}
              <button
                className="p-2"
                title="open search box"
                aria-label="open search box"
              >
                <img
                  width={24}
                  height={24}
                  src={searchIcon}
                  alt="search icon"
                  className="size-6"
                />
              </button>

              {/* favorites page link */}
              <Link
                to="/favorites"
                title="favorites"
                aria-label="favorites"
                className="relative p-2"
              >
                <img
                  width={24}
                  height={24}
                  src={heartIcon}
                  alt="heart icon"
                  className="size-6"
                />

                {/* active circle shape */}
                {/* <div className="absolute top-2 right-0.5 size-3 bg-brand-violet-500 rounded-full border-2 border-white"></div> */}
              </Link>

              {/* open donate modal btn */}
              <button
                className="p-2"
                title="open donate modal"
                aria-label="open donate modal"
              >
                <img
                  width={24}
                  height={24}
                  src={walletIcon}
                  alt="wallet icon"
                  className="size-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
