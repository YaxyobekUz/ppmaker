import React, { useEffect, useRef, useState } from "react";

// images
import downArrowIcon from "../assets/images/icons/down-arrow.svg";

const CollapsePanel = ({ header, children, open = false, className = "" }) => {
  const panelContentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(open);
  const [contentHeight, setContentHeight] = useState("0px");

  // set panel content height
  useEffect(() => {
    if (isOpen) {
      setContentHeight(`${panelContentRef.current.scrollHeight}px`);
    } else {
      setContentHeight("0px");
    }
  }, [isOpen]);

  // togggle panel
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className} w-full`}>
      {/* panel header */}
      <button
        onClick={togglePanel}
        className="flex items-center justify-between w-full p-5"
      >
        <span className="text-base">{header}</span>

        {/* arrow icon */}
        <img
          width={20}
          height={20}
          src={downArrowIcon}
          alt="down arrow icon"
          className={`size-5 transition-transform ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>

      {/* panel main content */}
      <div
        ref={panelContentRef}
        style={{
          height: contentHeight,
        }}
        className={`w-full overflow-hidden transition-[height] duration-200`}
      >
        <div className="pt-0 p-5">{children}</div>
      </div>
    </div>
  );
};

export default CollapsePanel;
