import React, { useState } from "react";

// antd
import { Tooltip } from "antd";

const CopyBtn = ({
  children,
  size = 24,
  className = "",
  timeout = 1500,
  title = "Copy",
  tooltip = null,
  ariaLabel = "Copy",
  text = "https://ppmaker.uz",
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    if (!isCopied) {
      setIsCopied(true);
      navigator.clipboard.writeText(text);
      setTimeout(() => setIsCopied(false), timeout);
    }
  };

  return (
    <Tooltip title={tooltip}>
      <button
        type="button"
        title={title}
        onClick={copy}
        disabled={isCopied}
        aria-label={ariaLabel}
        className={`${className} transition-opacity disabled:opacity-70`}
      >
        {/* icon wrapper */}
        <span>
          {!isCopied ? (
            // copy icon
            <svg
              fill="none"
              width={size}
              height={size}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#13181F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
              />
              <path
                stroke="#13181F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
              />
            </svg>
          ) : (
            // copy success icon
            <svg
              fill="none"
              width={size}
              height={size}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#13181F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z"
              />
              <path
                stroke="#13181F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z"
              />
              <path
                stroke="#13181F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.08008 15L8.03008 16.95L11.9201 13.05"
              />
            </svg>
          )}
        </span>

        {/* children */}
        {children}
      </button>
    </Tooltip>
  );
};

export default CopyBtn;
