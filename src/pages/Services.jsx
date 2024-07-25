import React from "react";

import { Link } from "react-router-dom";
// data
import { services } from "../data/main";

// images
import imageIcon from "../assets/images/icons/image.svg";

const Services = () => {
  return (
    <div className="pb-16">
      <div className="container">
        <h1 className="mb-12">Barcha xizmatlar</h1>

        {/* services list */}

        {/* section body */}
        <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
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
      </div>
    </div>
  );
};

export default Services;
