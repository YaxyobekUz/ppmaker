import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// hamburger btn styles
import "../css/hamburger.css";

// images
import heartIcon from "../assets/images/icons/heart.svg";
import searchIcon from "../assets/images/icons/search.svg";
import walletIcon from "../assets/images/icons/wallet.svg";
import downArrowIcon from "../assets/images/icons/down-arrow.svg";

const Header = () => {
  const [openResponsiveNavbar, setOpenResponsiveNavbar] = useState(false);
  const [openResponsiveNavbarItemMenu, setOpenResponsiveNavbarItemMenu] =
    useState(false);
  const [responsiveNavbarStyles, setResponsiveNavbarStyles] = useState({
    display: "none",
    opacity: 0,
  });

  // close responsive navbar modal function
  const closeResponsiveNavbar = () => {
    setOpenResponsiveNavbar(false);
    setOpenResponsiveNavbarItemMenu(false);
  };

  // change responsive navbar styles with animation
  useEffect(() => {
    if (openResponsiveNavbar) {
      setResponsiveNavbarStyles({
        display: "block",
        opacity: 0,
      });

      if (openResponsiveNavbar) {
        setTimeout(() => {
          setResponsiveNavbarStyles({
            display: "block",
            opacity: 1,
          });
        }, 100);
      }
    } else {
      setResponsiveNavbarStyles({
        display: "block",
        opacity: 0,
      });

      if (!openResponsiveNavbar) {
        setTimeout(() => {
          setResponsiveNavbarStyles({
            display: "none",
            opacity: 0,
          });
        }, 100);
      }
    }
  }, [openResponsiveNavbar]);

  // close responsive navbar modal with esacpe key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeResponsiveNavbar();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 inset-x-0 z-1 w-full bg-white py-4 mb-12 border-b border-brand-darkblue-300/15">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* logo & hamburger btn wrapper */}
            <div className="flex items-center gap-3 xs:gap-5">
              {/* hamburger btn */}
              <button
                className="hamburger py-2 xs:p-1 lg:hidden"
                onClick={() => setOpenResponsiveNavbar(true)}
              >
                <span className="hamburger-content">
                  <span className="hamburger-content-item"></span>
                  <span className="hamburger-content-item"></span>
                  <span className="hamburger-content-item"></span>
                </span>
              </button>

              {/* logo */}
              <Link
                to="/"
                title="profile picture maker logo"
                className="font-semibold !leading-none text-2xl text-brand-violet-500 xs:text-3xl"
              >
                ppmaker
              </Link>
            </div>

            {/* main content */}
            <div className="flex items-center gap-5">
              {/* nav */}
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-6">
                  <li>
                    <NavLink to="/" className="header-nav-link">
                      Bosh sahifa
                    </NavLink>
                  </li>

                  {/* services & services dropdowns */}
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
                    <div className="dropdown-content group-hover:block">
                      <ul className="space-y-1">
                        <li className="group/item relative">
                          <div className="dropdown-item group-hover/item:bg-brand-darkblue-300/5">
                            <span>Profil rasmini yaratish</span>
                            <img
                              width={16}
                              height={16}
                              src={downArrowIcon}
                              alt="down arrow icon"
                              className="size-4 -rotate-90"
                            />
                          </div>

                          {/* dropdown item dropdown */}
                          <div className="dropdown-content !left-full !top-0  group-hover/item:block">
                            <ul className="space-y-1">
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="/services/create/profile-picture/for-boys/1"
                                >
                                  Bollar uchun
                                </Link>
                              </li>

                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="/services/create/profile-picture/for-girls/1"
                                >
                                  Qizlar uchun
                                </Link>
                              </li>

                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="/services/create/profile-picture/for-games/1"
                                >
                                  O'yinlar uchun
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <Link
                            className="dropdown-item"
                            to="/services/create/favicon"
                          >
                            Favikon yaratish
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="dropdown-item"
                            to="/services/create/special-profile-picture"
                          >
                            Maxsus profil rasmini yaratish
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* manual */}
                  <li>
                    <NavLink to="/manual" className="header-nav-link">
                      Qo'llanma
                    </NavLink>
                  </li>

                  {/* contact */}
                  <li>
                    <NavLink to="/contact" className="header-nav-link">
                      Bog'lanish
                    </NavLink>
                  </li>
                </ul>
              </nav>

              {/* actions */}
              <div className="flex items-center">
                {/* open search box btn */}
                <button
                  className="p-2 mr-0.5 xs:mr-3"
                  title="open search box"
                  aria-label="open search box"
                >
                  <img
                    width={24}
                    height={24}
                    src={searchIcon}
                    alt="search icon"
                    className="size-5 xs:size-6"
                  />
                </button>

                {/* favorites page link */}
                <Link
                  to="/favorites"
                  title="favorites"
                  aria-label="favorites"
                  className="relative p-2 mr-3 xs:mr-5"
                >
                  <img
                    width={24}
                    height={24}
                    src={heartIcon}
                    alt="heart icon"
                    className="size-5 xs:size-6"
                  />

                  {/* active circle shape */}
                  {/* <div className="absolute top-2 right-0.5 size-3 bg-brand-violet-500 rounded-full border-2 border-white"></div> */}
                </Link>

                {/* open donate modal btn */}
                <button
                  title="open donate modal"
                  aria-label="open donate modal"
                  className="bg-brand-violet-500/5 p-2 rounded-lg transition-colors hover:bg-brand-violet-500/10"
                >
                  <img
                    width={24}
                    height={24}
                    src={walletIcon}
                    alt="wallet icon"
                    className="size-5 xs:size-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* responsive navbar modal */}
      <div
        style={responsiveNavbarStyles}
        className="fixed inset-0 z-2 w-full h-full transition-opacity bg-brand-darkblue-300/50"
        onClick={(e) => {
          const elModalContent =
            e.currentTarget.querySelector(".modal-content");
          if (
            e.target.contains(elModalContent) &&
            e.target.contains(e.currentTarget)
          ) {
            closeResponsiveNavbar();
          }
        }}
      >
        {/* modal content */}
        <div className="inline-block relative z-1 w-full h-full bg-white p-5 xs:w-auto xs:min-w-80">
          <div className="modal-content">
            {/* modal header */}
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-brand-darkblue-300/15">
              {/* logo */}
              <Link
                to="/"
                onClick={closeResponsiveNavbar}
                title="profile picture maker logo"
                className="font-semibold !leading-none text-2xl text-brand-violet-500 xs:text-3xl"
              >
                ppmaker
              </Link>

              {/* close modal btn */}
              <button
                onClick={closeResponsiveNavbar}
                className="hamburger active p-1"
              >
                <span className="hamburger-content">
                  <span className="hamburger-content-item"></span>
                  <span className="hamburger-content-item"></span>
                  <span className="hamburger-content-item"></span>
                </span>
              </button>
            </div>

            {/* modal body (main content) */}
            <nav>
              <ul className="space-y-1">
                {/* homepage */}
                <li>
                  <NavLink to="/" className="header-nav-link">
                    Bosh sahifa
                  </NavLink>
                </li>

                {/* services & services menu*/}
                <li>
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

                  {/* menu */}
                  <ul className="border-l border-brand-darkblue-300/15">
                    <li>
                      {/* toggle open item menu */}
                      <button
                        onClick={() =>
                          setOpenResponsiveNavbarItemMenu(
                            !openResponsiveNavbarItemMenu
                          )
                        }
                        className="header-responsive-navbar-menu-item"
                      >
                        <span>Profil rasmini yaratish</span>
                        <img
                          width={16}
                          height={16}
                          src={downArrowIcon}
                          alt="down arrow icon"
                          className={`${
                            openResponsiveNavbarItemMenu ? "" : "-rotate-90"
                          } size-4 transition-transform`}
                        />
                      </button>

                      {/* item menu */}
                      <div
                        className={`${
                          openResponsiveNavbarItemMenu ? "block" : "hidden"
                        }`}
                      >
                        <ul className="border-l border-brand-darkblue-300/15 ml-6">
                          <li>
                            <Link
                              className="header-responsive-navbar-menu-item"
                              to="/services/create/profile-picture/for-boys/1"
                            >
                              Bollar uchun
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header-responsive-navbar-menu-item"
                              to="/services/create/profile-picture/for-girls/1"
                            >
                              Qizlar uchun
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header-responsive-navbar-menu-item"
                              to="/services/create/profile-picture/for-games/1"
                            >
                              O'yinlar uchun
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <Link
                        to="/services/create/favicon"
                        className="header-responsive-navbar-menu-item"
                      >
                        Favikon yaratish
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="header-responsive-navbar-menu-item"
                        to="/services/create/special-profile-picture"
                      >
                        Maxsus profil rasmini yaratish
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* manual */}
                <li>
                  <NavLink to="/manual" className="header-nav-link">
                    Qo'llanma
                  </NavLink>
                </li>

                {/* contact */}
                <li>
                  <NavLink to="/contact" className="header-nav-link">
                    Bog'lanish
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
