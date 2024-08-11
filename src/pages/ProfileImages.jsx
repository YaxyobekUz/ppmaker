import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

// antd
import "../css/antd.css";
import { Select } from "antd";

// components
import Card from "../components/Card";
import Search from "../components/Search";
import Breadcrumb from "../components/Breadcrumb";

// swiper
import "swiper/css";
import "../css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// data
import { profileImagesForBoysData } from "../data/profile-images-for-boys";

// images
import toonBoyBg from "../assets/images/others/toon-boy-bg.jpg";
import toonGirlBg from "../assets/images/others/toon-girl-bg.jpg";
import allApplicationBg from "../assets/images/others/all-application-bg.jpg";
import toonPubgGameCharactersBg from "../assets/images/others/toon-pubg-game-characters-bg.jpg";

const ProfileImages = () => {
  const { profileImagesType } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [imagesBadgeValue, setImagesBadgeValue] = useState("all");
  const [profileImages, setProfileImages] = useState(profileImagesForBoysData);
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { name: "Xizmatlar", href: "services" },
    { name: "Profil rasmlari", href: "services/profile-images/all" },
  ]);

  // update breadcurmb items
  useEffect(() => {
    if (profileImagesType === "for-boys") {
      setBreadcrumbItems([
        { name: "Xizmatlar", href: "services" },
        { name: "Profil rasmlari", href: "services/profile-images/all" },
        { name: "Bollar uchun", href: "services/profile-images/for-boys" },
      ]);
    } else if (profileImagesType === "for-girls") {
      setBreadcrumbItems([
        { name: "Xizmatlar", href: "services" },
        { name: "Profil rasmlari", href: "services/profile-images/all" },
        { name: "Qizlar uchun", href: "services/profile-images/for-girls" },
      ]);
    } else if (profileImagesType === "for-games") {
      setBreadcrumbItems([
        { name: "Xizmatlar", href: "services" },
        { name: "Profil rasmlari", href: "services/profile-images/all" },
        { name: "O'yinlar uchun", href: "services/profile-images/for-games" },
      ]);
    } else {
      setBreadcrumbItems([
        { name: "Xizmatlar", href: "services" },
        { name: "Profil rasmlari", href: "services/profile-images/all" },
      ]);
    }
  }, [profileImagesType]);

  // select options
  const selectOptions = [
    {
      value: "all",
      label: "Barchasi",
    },
    {
      value: "top",
      label: "Top",
    },
    {
      value: "premium",
      label: "Premium",
    },
    {
      value: "trending",
      label: "Trendda",
    },
    {
      value: "wonderful",
      label: "Ajoyib",
    },
    {
      value: "normal",
      label: "Yaxshi",
    },
  ];

  // filter profile images by search, level & type
  useEffect(() => {
    const filteredImages = profileImagesForBoysData.filter((profileImage) => {
      // filter image by search
      const filterImageBySearch = profileImage.title
        .toLowerCase()
        .includes(searchQuery);

      // filter image by badge
      const filterImageByBadge = () => {
        if (imagesBadgeValue.toLowerCase() === "all") {
          return true;
        } else {
          return profileImage.badges.some(
            (badge) =>
              badge.value.toLowerCase() === imagesBadgeValue.toLowerCase()
          );
        }
      };

      // filter image by type
      const filterImageByType = () => {
        if (
          profileImagesType !== "for-boys" &&
          profileImagesType !== "for-girls" &&
          profileImagesType !== "for-games"
        ) {
          return true;
        } else {
          return profileImage.type.toLowerCase() === profileImagesType;
        }
      };

      return filterImageBySearch && filterImageByBadge() && filterImageByType();
    });

    // set profile images
    setProfileImages(filteredImages);
  }, [searchQuery, imagesBadgeValue, profileImagesType]);

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb className="mb-8 sm:mb-10" items={breadcrumbItems} />

      {/* main */}
      <div className="pb-12 sm:pb-16">
        <div className="container">
          {/* title */}
          <div className="section-header mb-8 sm:mb-10">
            <h1>Profil rasmlari</h1>
          </div>

          {/* nav link cards */}
          <nav className="mb-3 sm:mb-5">
            <Swiper
              navigation={true}
              spaceBetween={16}
              autoplay={
                window.innerWidth <= 768
                  ? { delay: 4500, pauseOnMouseEnter: true }
                  : false
              }
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="swiper-default-buttons rounded-lg sm:rounded-2xl"
            >
              {/* item 1 */}
              <SwiperSlide>
                <NavLink
                  title="barcha profil rasmlari"
                  to="/services/profile-images/all"
                  className="profile-images-page-nav-link"
                  style={{ backgroundImage: `url(${allApplicationBg})` }}
                >
                  {/* title */}
                  <h3 className="z-1 text-lg leading-5 font-semibold text-white xs:text-xl sm:text-2xl">
                    Barcha rasmlar
                  </h3>

                  {/* shadow */}
                  <div className="card-shadow"></div>
                </NavLink>
              </SwiperSlide>

              {/* item 1 */}
              <SwiperSlide>
                <NavLink
                  title="bollar uchun profil rasmlari"
                  to="/services/profile-images/for-boys"
                  className="profile-images-page-nav-link"
                  style={{ backgroundImage: `url(${toonBoyBg})` }}
                >
                  {/* title */}
                  <h3 className="z-1 text-lg leading-5 font-semibold text-white xs:text-xl sm:text-2xl">
                    Bollar uchun
                  </h3>

                  {/* shadow */}
                  <div className="card-shadow"></div>
                </NavLink>
              </SwiperSlide>

              {/* item 2 */}
              <SwiperSlide>
                <NavLink
                  title="qizlar uchun profil rasmlari"
                  to="/services/profile-images/for-girls"
                  className="profile-images-page-nav-link"
                  style={{ backgroundImage: `url(${toonGirlBg})` }}
                >
                  {/* title */}
                  <h3 className="z-1 text-lg leading-5 font-semibold text-white xs:text-xl sm:text-2xl">
                    Qizlar uchun
                  </h3>

                  {/* shadow */}
                  <div className="card-shadow"></div>
                </NavLink>
              </SwiperSlide>

              {/* item 3 */}
              <SwiperSlide>
                <NavLink
                  to="/services/profile-images/for-games"
                  title="o'yinlar uchun profil rasmlari"
                  className="profile-images-page-nav-link"
                  style={{
                    backgroundImage: `url(${toonPubgGameCharactersBg})`,
                  }}
                >
                  {/* title */}
                  <h3 className="z-1 text-lg leading-5 font-semibold text-white xs:text-xl sm:text-2xl">
                    O'yinlar uchun
                  </h3>

                  {/* shadow */}
                  <div className="card-shadow"></div>
                </NavLink>
              </SwiperSlide>
            </Swiper>
          </nav>

          {/* search & filter */}
          <div className="flex flex-col gap-5 sticky top-[68px] z-1 bg-white py-5 mb-3 xs:top-[72px] xs:flex-row sm:mb-5  lg:top-20">
            {/* search */}
            <Search
              placeholder="Rasmlarni qidirish..."
              onChange={(value) => setSearchQuery(value)}
            />

            {/* images badge select */}
            <Select
              defaultValue="all"
              options={selectOptions}
              className="!w-full xs:!w-auto"
              onChange={(value) => setImagesBadgeValue(value)}
            />
          </div>

          {/* profile images list */}
          <ul className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {profileImages.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileImages;
