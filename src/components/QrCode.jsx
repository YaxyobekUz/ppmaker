import React, { useEffect, useRef, useState } from "react";

// components
import MainLoader from "./MainLoader";

// qr code
import QRCodeStyling from "qr-code-styling";

const QrCode = ({
  size = 144,
  image = null,
  className = "",
  color = "black",
  type = "canvas",
  shape = "square",
  download = false,
  dotsType = "square",
  dotsColor = "black",
  cornersDotType = "square",
  cornersDotColor = "black",
  backgroundColor = "white",
  cornersSquareColor = "black",
  cornersSquareType = "square",
  value = "https://ppmaker.uz",
}) => {
  const qrCode = useRef(null);
  const qrContainerRef = useRef(null);
  const [loader, setLoader] = useState(true);

  // set qr code
  useEffect(() => {
    setLoader(true);
    qrContainerRef.current.innerHTML = "";

    // qr options
    qrCode.current = new QRCodeStyling({
      type,
      image,
      shape,
      data: value,
      width: size,
      height: size,
      dotsOptions: {
        type: dotsType,
        color: dotsColor,
      },
      cornersDotOptions: {
        type: cornersDotType,
        color: cornersDotColor,
      },
      cornersSquareOptions: {
        type: cornersSquareType,
        color: cornersSquareColor,
      },
      backgroundOptions: {
        color: backgroundColor,
      },
      imageOptions: {
        margin: 4,
      },
    });

    qrCode.current.append(qrContainerRef.current);

    // remove loader
    setTimeout(() => setLoader(false), 200);
  }, [
    size,
    type,
    image,
    value,
    color,
    shape,
    dotsType,
    dotsColor,
    cornersDotType,
    cornersDotColor,
    backgroundColor,
    cornersSquareType,
    cornersSquareColor,
  ]);

  // download qr code
  useEffect(() => {
    if (download) {
      if (download.isApproved) {
        qrCode.current.download({ extension: download.type });
      }
    }
  }, [download]);

  return (
    <div
      className={className}
      style={{ width: size + "px", height: size + "px" }}
    >
      {/* qr code container */}
      <div
        className={loader ? "hidden" : "smooth-opening"}
        ref={qrContainerRef}
      ></div>

      {/* loader */}
      <div
        className={`${
          loader ? "flex" : "hidden"
        } items-center justify-center w-full h-full bg-brand-darkblue-300/5 rounded-md`}
      >
        <MainLoader />
      </div>
    </div>
  );
};

export default QrCode;
