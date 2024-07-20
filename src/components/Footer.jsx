import React from "react";
import { Link } from "react-router-dom";

// images
import emailIcon from "../assets/images/icons/email.svg";
import telegramIcon from "../assets/images/icons/telegram.svg";
import telephoneIcon from "../assets/images/icons/telephone.svg";
import instagramIcon from "../assets/images/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-brand-violet-500">
      <div className="container py-16">
        {/* main content */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-12 text-white md:grid-cols-2 lg:grid-cols-4">
          {/* logo */}
          <div>
            <Link
              to="/"
              title="profile picture maker logo"
              className="font-semibold !leading-none text-2xl text-white xs:text-3xl"
            >
              ppmaker
            </Link>
          </div>

          {/* company */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">Kompaniya</h3>

            {/* list */}
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-base opacity-80 transition-opacity hover:opacity-100"
                >
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  to="/manual"
                  className="text-base opacity-80 transition-opacity hover:opacity-100"
                >
                  Qo'llanma
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base opacity-80 transition-opacity hover:opacity-100"
                >
                  Bog'lanish
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="text-base opacity-80 transition-opacity hover:opacity-100"
                >
                  Yoqtirilinganlar
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-base opacity-80 transition-opacity hover:opacity-100"
                >
                  Ehson qilish
                </Link>
              </li>
            </ul>
          </div>

          {/* services */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">Xizmatlar</h3>

            {/* services list */}
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/services/create/favicon"
                  className="text-base opacity-80 transition-opacity hover:opacity-100"
                >
                  Favikon yaratish
                </Link>
              </li>
              <li>
                <Link
                  className="text-base opacity-80 transition-opacity hover:opacity-100"
                  to="/services/create/special-profile-picture"
                >
                  Maxsus profil rasmini yaratish
                </Link>
              </li>
              <li>
                <Link
                  className="text-base opacity-80 transition-opacity hover:opacity-100"
                  to="/services/create/profile-picture/for-boys/1"
                >
                  Bollar uchun profil rasmini yaratish
                </Link>
              </li>
              <li>
                <Link
                  className="text-base opacity-80 transition-opacity hover:opacity-100"
                  to="/services/create/profile-picture/for-girls/1"
                >
                  Qizlar uchun profil rasmini yaratish
                </Link>
              </li>
              <li>
                <Link
                  className="text-base opacity-80 transition-opacity hover:opacity-100"
                  to="/services/create/profile-picture/for-games/1"
                >
                  O'yinlar uchun profil rasmini yaratish
                </Link>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">Bog'lanish</h3>

            {/* details */}
            <div className="space-y-5">
              {/* telephone number */}
              <div className="flex gap-3.5">
                <img
                  width={24}
                  height={24}
                  className="size-6"
                  src={telephoneIcon}
                  alt="telephone icon"
                />

                <a
                  href="tel:+998200077729"
                  className="text-base transition-opacity hover:opacity-80"
                >
                  +998 (20) 007-77-29
                </a>
              </div>

              {/* email */}
              <div className="flex gap-3.5">
                <img
                  width={24}
                  height={24}
                  src={emailIcon}
                  alt="email icon"
                  className="size-6"
                />

                <a
                  href="mailto:pubgn9642@gmail.com"
                  className="text-base transition-opacity hover:opacity-80"
                >
                  pubgn9642@gmail.com
                </a>
              </div>

              {/* social */}
              <div className="flex flex-wrap gap-3.5">
                {/* instagram */}
                <a
                  target="_blank"
                  href="https://instagram.com/"
                  className=" transition-opacity hover:opacity-80"
                >
                  <img
                    width={32}
                    height={32}
                    className="size-8"
                    src={instagramIcon}
                    alt="instagram icon"
                  />
                </a>

                {/* telegram */}
                <a
                  target="_blank"
                  href="https://"
                  className=" transition-opacity hover:opacity-80"
                >
                  <img
                    width={32}
                    height={32}
                    className="size-8"
                    src={telegramIcon}
                    alt="telegram icon"
                  />
                </a>

                {/* form */}
                <Link
                  to="/contact#form"
                  className="flex items-center justify-center px-3.5 text-base font-normal bg-white rounded-md text-brand-violet-500 transition-colors hover:bg-white/80"
                >
                  Savol yuborish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="border-t border-white/80 py-8 px-4">
        <p className="text-sm text-white text-center xs:text-base">
          &copy; 2024 ppmaker. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
