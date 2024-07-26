import React from "react";

const SplitText = ({ text }) => {
  return (
    <span className="flex flex-wrap gap-x-0 gap-y-0.5 w-full text-base">
      {text.split("").map((word, index) => {
        return (
          <span key={index} className={word === " " ? "w-1.5" : ""}>
            {word}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;
