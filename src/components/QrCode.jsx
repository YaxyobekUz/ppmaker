import React, { useEffect, useRef, useState } from "react";

// components
import MainLoader from "./MainLoader";

// qr code
import QRCodeStyling from "qr-code-styling";

const QrCode = ({
  size = 144,
  className = "",
  download = false,
  options = {
    type: "canvas",
    image: null,
    shape: "square",
    data: "https://ppmaker.uz",
    dotsOptions: {
      type: "square",
      color: "#2D3250",
    },
    cornersDotOptions: {
      type: "square",
      color: "#2D3250",
    },
    cornersSquareOptions: {
      type: "square",
      color: "#2D3250",
    },
    backgroundOptions: {
      color: "#2D3250",
    },
    imageOptions: {
      margin: 4,
    },
  },
}) => {
  const qrCode = useRef(null);
  const qrContainerRef = useRef(null);
  const [loader, setLoader] = useState(true);

  // display qr code
  useEffect(() => {
    // add loader
    setLoader(true);

    // set qr code options
    qrContainerRef.current.innerHTML = "";
    qrCode.current = new QRCodeStyling({
      width: size,
      height: size,
      ...options,
    });
    qrCode.current.append(qrContainerRef.current);

    // remove loader
    setTimeout(() => setLoader(false), 200);
  }, [
    size,
    options.data,
    options.type,
    options.image,
    options.shape,
    options.dotsOptions.type,
    options.dotsOptions.type,
    options.dotsOptions.color,
    options.dotsOptions.color,
    options.cornersDotOptions.type,
    options.backgroundOptions.color,
    options.cornersDotOptions.color,
    options.cornersSquareOptions.type,
    options.cornersSquareOptions.color,
  ]);

  // download qr code
  useEffect(() => {
    const savedQrCodes = JSON.parse(localStorage.getItem("qrCodes"));
    if (download && download.isApproved) {
      // download qr code
      qrCode.current.download({ extension: download.type });

      // save new qr code to local storage
      if (download.setLocaleStorage && !options.image) {
        if (savedQrCodes) {
          const slicedQrCodes = [options, ...savedQrCodes].slice(0, 8);
          localStorage.setItem("qrCodes", JSON.stringify(slicedQrCodes));
        } else {
          localStorage.setItem("qrCodes", JSON.stringify([options]));
        }
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
