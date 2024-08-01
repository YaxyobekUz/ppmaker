import React from "react";

// styles
import "../css/dots-loader.css";

const DotsLoader = ({ className = "" }) => (
  <div className={className}>
    <div className="dots">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </div>
);

export default DotsLoader;
