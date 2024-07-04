import React, { useState } from "react";
import { Link } from "react-router-dom";

// data
import { homepageHeroSlides } from "../data/main";

// components
import MainLoader from "../components/MainLoader";

// swiper
import "swiper/css";
import "../css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
                        {!loader && (
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
    </>
  );
};

export default Home;
