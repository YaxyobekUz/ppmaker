import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import MainLoader from "../components/MainLoader";

// data
import { homepageHeroSlides, services } from "../data/main";

// swiper
import "swiper/css";
import "../css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// images
import imageIcon from "../assets/images/icons/image.svg";
import manualImg from "../assets/images/others/manual.png";
import rightArrowIcon from "../assets/images/icons/right-arrow.svg";

const Home = () => {
  return (
    <>
      {/* hero */}
      <div className="w-full pb-12">
        <div className="container">
          <div className="flex gap-5">
            {/* main swiper */}
            <div className="w-full h-auto z-0 aspect-video lg:aspect-auto lg:w-[calc(100%-340px)]">
              <Swiper
                loop={true}
                navigation={true}
                spaceBetween={16}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="homepage-hero-main-swiper default-pagination w-full h-full rounded-lg sm:rounded-xl lg:h-96"
              >
                {homepageHeroSlides.map((slide) => {
                  const [loader, setLoader] = useState(true);
                  return (
                    <SwiperSlide key={slide.id} className="w-full">
                      <Link
                        to={slide.link}
                        title={slide.title}
                        aria-label={slide.title}
                      >
                        <img
                          width={920}
                          height={384}
                          src={slide.image}
                          alt={slide.title}
                          onLoad={() => setLoader(false)}
                          className={`${
                            !loader ? "block" : "hidden"
                          } w-full h-full bg-brand-darkblue-300/10 object-cover object-center rounded-lg sm:rounded-xl`}
                        />

                        {/* loader */}
                        {loader && (
                          <div className="flex items-center justify-center w-full h-full bg-brand-darkblue-300/10">
                            <MainLoader className="size-6 sm:size-7" />
                          </div>
                        )}
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* ads swiper */}
            <aside className="hidden min-w-80 z-0 p-1.5 rounded-xl border-2 border-brand-violet-500 lg:block">
              <Swiper
                loop={true}
                spaceBetween={16}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: true,
                }}
                modules={[Pagination, Autoplay]}
                className="default-pagination w-full h-full rounded-lg"
              >
                {homepageHeroSlides.map((slide) => {
                  return (
                    <SwiperSlide key={slide.id} className="w-full h-full">
                      <Link
                        to={slide.link}
                        title={slide.title}
                        aria-label={slide.title}
                      >
                        <img
                          width={304}
                          height={368}
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full bg-brand-darkblue-300/10 object-cover object-center rounded-lg"
                        />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </aside>
          </div>
        </div>
      </div>

      {/* services */}
      <section className="py-12">
        <div className="container section-content">
          {/* section header */}
          <div className="section-header">
            <div className="section-header-details">
              <h2>Xizmatlar</h2>
              <p>
                O'zingiz uchun kerakli bo'lgan xizmat turini tanlab bepul
                foydalaning!
              </p>
            </div>
          </div>

          {/* section body */}
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <li key={service.id} className="w-full h-auto aspect-[59/80]">
                <Link
                  to={service.link}
                  title={service.name}
                  style={{ backgroundImage: `url(${service.image})` }}
                  className="flex items-start flex-col justify-between relative w-full h-full overflow-hidden bg-brand-darkblue-300/10 bg-cover bg-center bg-no-repeat p-2.5 rounded-lg xs:p-3.5 sm:rounded-xl sm:p-5"
                >
                  {/* number of images badge */}
                  <div
                    title="number of images"
                    aria-label="number of images"
                    className="flex items-center gap-1 bg-white px-1 py-0.5 rounded sm:rounded-lg sm:gap-2"
                  >
                    <img
                      width={20}
                      height={20}
                      src={imageIcon}
                      alt="image icon"
                      className="size-4 xs:size-5"
                    />
                    <span className="text-sm xs:text-base">
                      {service.numberOfImages}
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="z-1 text-base leading-5 font-semibold text-white xs:leading-normal xs:text-lg sm:text-xl">
                    {service.title}
                  </h3>

                  {/* shadow */}
                  <div className="card-shadow"></div>
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/services" className="btn-secondary">
            <span>Barcha xizmatlar</span>
            <img
              width={24}
              height={24}
              src={rightArrowIcon}
              alt="arrow right icon"
            />
          </Link>
        </div>
      </section>

      {/* manual section */}
      <section className="py-12 bg-brand-violet-200">
        <div className="container section-content !max-w-2xl md:!max-w-6xl">
          <div className="grid grid-cols-1 gap-5 xs:gap-6 md:grid-cols-2 lg:gap-12">
            {/* image wrapper */}
            <div className="flex justify-center w-full">
              <img
                width={610}
                height={610}
                title="manual"
                src={manualImg}
                alt="manual image"
                className="w-5/6 h-auto aspect-square xs:w-3/4  md:w-full"
              />
            </div>

            {/* section details */}
            <div className="flex flex-col items-center justify-center gap-5 text-center xs:gap-6 md:items-start md:text-start">
              <h2 className="">
                Xizmatlardan foydalanish <br /> uchun qo'llanma
              </h2>

              {/* description */}
              <p className="text-base xs:text-lg">
                Siz xizmatlarimizdan qanday foydalanishni bila olmayapsizmi?
                Hoziroq xizmatlardan foydalanish uchun qo'llanma sahifasiga
                tashrif buyuring!
              </p>

              {/* buttons wrapper */}
              <div className="flex items-center gap-3.5">
                <Link to="/manual" className="btn-primary">
                  Qo'llanmadan foydalanish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
