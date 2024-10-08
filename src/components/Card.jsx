import React from "react";
import { Link } from "react-router-dom";

// components
import Badge from "./Badge";

// images
import eyeIcon from "../assets/images/icons/eye-filled.svg";
import shareIcon from "../assets/images/icons/share-filled.svg";

const Card = ({ card }) => {
  return (
    <li className="group">
      {/* content top */}
      <div className="relative w-full h-auto aspect-square overflow-hidden bg-brand-violet-200 mb-2.5 rounded-xl md:mb-3.5">
        {/* card image */}
        <img
          width={292}
          height={292}
          alt="boy image"
          src={card.image.original.src}
          className="w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-105 sm:rounded-xl"
        />

        {/* card badges */}
        <div className="absolute left-3.5 top-3.5">
          <ul className="flex items-start gap-2.5 xs:flex-col xs:sm:flex-row">
            {card.badges.map((badge) => (
              <Badge badge={badge} key={badge.id} />
            ))}
          </ul>
        </div>

        {/* card actions wrapper */}
        <div className="flex flex-col justify-between gap-2 absolute inset-y-0 right-3.5 py-3.5 h-full">
          <div className="flex flex-col gap-3.5 xs:gap-2.5">
            {/* toggle like btn */}
            <button
              title="like"
              aria-label="like"
              className="flex items-center justify-center size-9 bg-white/30 backdrop-blur rounded-full transition-colors hover:bg-white/50 xs:size-10 md:size-[42px]"
            >
              <svg
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 md:size-[26px]"
              >
                <path
                  d="M12.831 6.99757L13.9045 7.91778C13.9597 7.96506 14.0411 7.96506 14.0963 7.91778L15.1698 6.99757C18.1727 4.42366 22.7838 5.26945 24.6777 8.74158C26.0431 11.2448 25.5314 14.3559 23.4361 16.29L14.301 24.7224C14.1312 24.8791 13.8696 24.8791 13.6998 24.7224L4.56467 16.29C2.46943 14.3559 1.95772 11.2448 3.32314 8.74158C5.21703 5.26945 9.82807 4.42366 12.831 6.99757Z"
                  fill="white"
                  stroke="#7A08FA"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            {/* view image btn */}
            <button
              title="view image"
              aria-label="view image"
              className="flex items-center justify-center size-9 bg-white/30 backdrop-blur rounded-full transition-colors hover:bg-white/50 xs:size-10 md:size-[42px]"
            >
              <img
                width={26}
                height={26}
                src={eyeIcon}
                alt="eye icon"
                className="size-6 md:size-[26px]"
              />
            </button>
          </div>

          {/* share image btn */}
          <button
            title="share"
            aria-label="share"
            className="flex items-center justify-center size-9 bg-white/30 backdrop-blur rounded-full transition-colors hover:bg-white/50 xs:size-10 md:size-[42px]"
          >
            <img
              width={26}
              height={26}
              src={shareIcon}
              alt="share icon"
              className="size-6 md:size-[26px]"
            />
          </button>
        </div>
      </div>

      {/* card title */}
      <h3 className="font-semibold text-lg sm:mb-0.5 md:mb-1.5 sm:text-xl">
        {card.title}
      </h3>

      {/* hashtags */}
      <ul className="flex flex-wrap gap-x-2.5 gap-y-1 sm:gap-y-0.5">
        {card.hashtags.map((hashtag) => (
          <li key={hashtag.id}>
            <Link
              title={hashtag.value}
              to={"/search/hash:" + hashtag.value}
              className="text-sm text-brand-violet-500 xs:text-base"
            >
              #{hashtag.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Card;
