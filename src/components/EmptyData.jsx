import React from "react";

import emptyDataImg from "../assets/images/others/empty-data.svg";
const EmptyData = ({ className = "size-96", size = 384 }) => (
  <img
    width={size}
    height={size}
    alt="empty data"
    src={emptyDataImg}
    className={className}
    aria-label="empty data"
    title="Ma'lumotlar mavjud emas!"
  />
);

export default EmptyData;
