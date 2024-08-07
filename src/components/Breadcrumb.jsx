import React from "react";
import { Link } from "react-router-dom";

// images
import downArrowIcon from "../assets/images/icons/down-arrow.svg";

const Breadcrumb = ({ items = [], className = "" }) => {
  const lastItemIndex = items.length;
  const allItems = [{ name: "Bosh sahifa" }, ...items];

  return (
    <div className={`container ${className}`}>
      <ul className="flex flex-wrap items-center gap-1.5 sm:gap-3.5">
        {allItems.map((item, index) => {
          if (lastItemIndex !== index) {
            return (
              <li key={index}>
                <Link
                  to={item.href ? "/" + item.href : "/"}
                  className="flex items-center gap-1.5 sm:gap-3.5"
                >
                  {/* item body */}
                  <span className="text-xs xs:text-sm">{item.name}</span>

                  {/* down arrow icon */}
                  <img
                    width={16}
                    height={16}
                    src={downArrowIcon}
                    alt="down arrow icon"
                    className="size-3.5 -rotate-90 xs:size-4"
                  />
                </Link>
              </li>
            );
          } else {
            return (
              <li key={index} className="text-xs opacity-75 xs:text-sm">
                {item.name}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
