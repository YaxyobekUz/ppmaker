import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import Card from "../components/Card";
import MainLoader from "../components/MainLoader";

// swiper
import "swiper/css";
import "../css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// data
import { faq, homepageHeroSlides, services } from "../data/main";
import { profileImagesForBoysData } from "../data/profile-images-for-boys";

// images
import pcImg from "../assets/images/others/pc.png";
import imageIcon from "../assets/images/icons/image.svg";
import manualImg from "../assets/images/others/manual.png";
import downArrowIcon from "../assets/images/icons/down-arrow.svg";
import megaphoneImg from "../assets/images/others/megaphone.webp";
import rightArrowIcon from "../assets/images/icons/right-arrow.svg";
import aboutFaviconSectionImg from "../assets/images/others/about-favicon-section-img.png";

const Home = () => {
  const [activeFaqListItemIndex, setActiveFaqListItemIndex] = useState(null);
  const changeActiveFaqListItem = (index) => {
    if (activeFaqListItemIndex !== index) {
      setActiveFaqListItemIndex(index);
    } else {
      setActiveFaqListItemIndex(null);
    }
  };

  return (
    <>
      {/* hero */}
      <div className="w-full pb-12 sm:pb-16">
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
      <section className="py-12 sm:py-16">
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
      <section className="bg-brand-violet-200 py-12 sm:py-16">
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
              <h2>
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

      {/* profile images for boys */}
      <section className="py-12 sm:py-16">
        <div className="container section-content">
          <div className="section-header">
            <h2>Bollar uchun profil rasmlari</h2>
          </div>

          {/* profile images list */}
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {profileImagesForBoysData.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </ul>

          {/* service link */}
          <div className="flex items-center w-full">
            <div className="divider grow w-auto"></div>
            <Link
              className="btn-secondary"
              to="/services/create/profile-picture/for-boys/1"
            >
              <span>Barchasini ko'rsatish</span>
            </Link>
            <div className="divider grow w-auto"></div>
          </div>
        </div>
      </section>

      {/* about favicon section */}
      <section className="py-12 sm:py-16">
        <div className="container section-content !max-w-2xl md:!max-w-7xl">
          <div className="grid grid-cols-1 gap-5 xs:gap-6 md:grid-cols-2 lg:gap-12">
            {/* image wrapper */}
            <div className="flex justify-center w-full h-full">
              <img
                width={596}
                height={428}
                alt="website favicon"
                title="website favicon"
                src={aboutFaviconSectionImg}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* section details */}
            <div className="flex flex-col items-center justify-center gap-5 text-center xs:gap-6 md:items-start md:text-start">
              <h2>Veb-saytlar uchun favikon</h2>

              {/* description */}
              <p className="text-base xs:text-lg">
                Sizning veb loyihangiz uchun bepul favikon kerakmi? Ha bo'lsa
                hoziroq favikon yaratish sahifasiga tashrif buyurib yangicha
                formatlarda favikonlar yarating!
              </p>

              {/* buttons wrapper */}
              <div className="flex items-center gap-3.5">
                <Link to="/services/create/favicon" className="btn-primary">
                  Favikon yaratish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* profile images for girls */}
      <section className="py-12 sm:py-16">
        <div className="container section-content">
          <div className="section-header">
            <h2>Qizlar uchun profil rasmlari</h2>
          </div>

          {/* profile images list */}
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {profileImagesForBoysData.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </ul>

          {/* service link */}
          <div className="flex items-center w-full">
            <div className="divider grow w-auto"></div>
            <Link
              className="btn-secondary"
              to="/services/create/profile-picture/for-girls/1"
            >
              <span>Barchasini ko'rsatish</span>
            </Link>
            <div className="divider grow w-auto"></div>
          </div>
        </div>
      </section>

      {/* telegram section */}
      <section className="py-12 sm:py-16">
        <div className="container section-content">
          <div className="w-full bg-brand-darkblue-300/10 bg-right bg-[url(./assets/images/others/telegram-bg.jpg)] bg-cover rounded-lg sm:rounded-full">
            <div className="flex items-center max-w-4xl h-full p-4 xs:p-8 sm:pl-5 sm:py-0 sm:pr-12">
              {/* megaphone */}
              <img
                src={megaphoneImg}
                alt=""
                className="hidden sm:inline-block w-60 md:w-72 lg:w-80"
              />

              {/* section details */}
              <div className="space-y-3 md:space-y-5">
                <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  Telegram kanalimizga obuna bo'ling
                </h2>
                <p className="text-sm font-normal text-white sm:text-base md:text-lg">
                  Saytning so'nggi yangiliklaridan xabardor bo'lish uchun
                  bizning rasmiy telegram kanalimizga obuna bo'ling!
                </p>

                <a
                  target="_blank"
                  href="https://t.me/ppmaker_uz"
                  className="btn-primary inline-block bg-white py-1.5 px-4 rounded-md text-brand-darkblue-300 text-sm sm:py-2.5 sm:px-6 sm:rounded-full md:text-base lg:text-lg hover:bg-white/70"
                >
                  Obuna bo'lish
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* profile images for games */}
      <section className="py-12 sm:py-16">
        <div className="container section-content">
          <div className="section-header">
            <h2>O'yinlar uchun profil rasmlari</h2>
          </div>

          {/* profile images list */}
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {profileImagesForBoysData.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </ul>

          {/* service link */}
          <div className="flex items-center w-full">
            <div className="divider grow w-auto"></div>
            <Link
              className="btn-secondary"
              to="/services/create/profile-picture/for-games/1"
            >
              <span>Barchasini ko'rsatish</span>
            </Link>
            <div className="divider grow w-auto"></div>
          </div>
        </div>
      </section>

      {/* create special profile image info section */}
      <section className="py-12 sm:py-16">
        <div className="container section-content !max-w-2xl md:!max-w-7xl">
          <div className="grid grid-cols-1 gap-5 xs:gap-6 md:grid-cols-2 lg:gap-12">
            {/* image wrapper */}
            <div className="flex justify-center w-full h-full">
              <img
                src={pcImg}
                width={596}
                height={325}
                alt="computer image"
                title="computer image"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* section details */}
            <div className="flex flex-col items-center justify-center gap-5 text-center xs:gap-6 md:items-start md:text-start">
              <h2>Maxsus profil rasmini yaratish</h2>

              {/* description */}
              <p className="text-base xs:text-lg">
                Siz o'zingiz yoqtirgandek qilib profil rasmini yarata
                olmadingizmi? Havotir olmang, hoziroq maxus profil rasmini
                yaratish sahifasiga tashrif buyurib o'zingiz yoqtirgandek qilib
                rasm yarating!
              </p>

              {/* buttons wrapper */}
              <div className="flex items-center gap-3.5">
                <Link
                  to="/services/create/special-profile-picture"
                  className="btn-primary"
                >
                  Maxsus profil rasmini yaratish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section id="faq" className="py-12 sm:py-16">
        <div className="container section-content">
          <h2 className="mb-10">Tez tez so'raladigan savollar</h2>

          {/* faq list */}
          <ul className="space-y-3.5">
            {faq.map((item, index) => (
              <li
                key={item.id}
                className={`${
                  activeFaqListItemIndex === index ? "active-faq-list-item" : ""
                } faq-list-item`}
              >
                <button
                  onClick={() => changeActiveFaqListItem(index)}
                  className="faq-list-item-btn"
                >
                  {/* question */}
                  <h3 className="faq-list-item-question">{item.question}</h3>

                  {/* arrow icon */}
                  <img
                    width={24}
                    height={24}
                    src={downArrowIcon}
                    alt="down arrow icon"
                    className="faq-list-item-icon"
                  />
                </button>

                {/* answer */}
                <p className="faq-list-item-answer">{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
