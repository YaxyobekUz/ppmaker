import React, { useEffect, useState } from "react";

// data
import { badgeColorsData } from "../data/badge-colors";

const Badge = ({ badge }) => {
  const [color, setColor] = useState({
    background: "#ffffff",
    color: "#2D3250",
  });

  // set badge color by type
  useEffect(() => {
    const badgeValue = badge.value.trim().toLowerCase();

    const findBadgeColor = badgeColorsData.find(
      (color) => color.value.toLowerCase() === badgeValue
    );

    if (findBadgeColor) setColor(findBadgeColor);
  }, []);

  return (
    <li
      style={color}
      title={badge.value}
      className="px-1.5 py-0.5 rounded text-xs font-normal xs:px-2 sm:rounded-lg sm:gap-2 sm:text-sm"
    >
      {badge.label}
    </li>
  );
};

export default Badge;
