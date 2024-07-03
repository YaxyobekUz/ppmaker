import React, { useState } from "react";
import { Link } from "react-router-dom";

// swiper
import "swiper/css";
import "../css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { homepageHeroSlides } from "../data/main";

// images
import MainLoader from "../components/MainLoader";

const Home = () => {
  return (
    <>
      {/* hero */}
      <div className="">
        <div className="container">
          <div className="flex gap-5 w-full">
            {/* main swiper */}
            <div className="w-[calc(100%-320px)] z-0">
              <Swiper
                loop={true}
                pagination={true}
                navigation={true}
                spaceBetween={16}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="homepage-hero-main-swiper default-pagination w-full h-96 rounded-xl"
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
                          } w-full h-full bg-brand-darkblue-300/10 object-cover object-center rounded-xl`}
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
            <div className="min-w-80 p-1.5 rounded-xl border-2 border-brand-violet-500">
              <Swiper
                loop={true}
                pagination={true}
                spaceBetween={16}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
