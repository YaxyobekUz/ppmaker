import React, { useState } from "react";

// qr scanner
import QrScanner from "qr-scanner";

// components
import CopyBtn from "../components/CopyBtn";
import SplitText from "../components/SplitText";

const QrCodeScanner = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [scanResult, setScanResult] = useState("");

  // handle file change
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      // create object URL from file
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);

      // set scanned image result
      const result = await QrScanner.scanImage(file);
      if (result) {
        setScanResult(result);
      } else {
        setScanResult("QR-kod mavjud emas!");
      }
    }
  };

  return (
    <>
      {/* page header, title wrapper */}
      <div className="flex items-center justify-between py-3.5 border-b border-brand-darkblue-300/15">
        <h1 className="line-clamp-1 ml-4 text-xl font-semibold sm:ml-5">
          QR-kodni skanerlash
        </h1>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-5 lg:grid-cols-3">
        {/* file input */}
        <div className="w-full">
          <label
            title="upload qr code image"
            aria-label="upload qr code image"
            className="btn-primary inline-block w-full text-center rounded-lg cursor-pointer"
          >
            <span className="text-base">Rasm yuklash</span>
            <input
              name="image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* uploaded file */}
        <div className="flex items-center justify-center w-full h-auto aspect-square bg-brand-darkblue-300/5 p-2 rounded-lg">
          {imageUrl ? (
            <img src={imageUrl} alt="" aria-hidden={true} className="" />
          ) : (
            <span className="text-center text-sm opacity-70">
              Hali hech qanday <br /> rasm yuklanmadi!
            </span>
          )}
        </div>

        {/* ads */}
        <aside className="w-full h-auto aspect-square sm:col-start-2 sm:col-end-3 lg:col-start-auto lg:col-end-auto">
          <div className="flex items-center justify-center w-full h-auto aspect-square bg-brand-darkblue-300/5 rounded-lg">
            <span className="text-center text-sm opacity-70">
              Siz uchun reklama <br /> mavjud emas 😊
            </span>
          </div>
        </aside>
      </div>

      {/* scanned result */}
      <div className="p-4 space-y-3.5 border-t border-brand-darkblue-300/15 sm:p-5">
        {/* title */}
        <strong className="font-medium to-brand-darkblue-300 text-base xs:text-lg">
          Skaner natijasi:
        </strong>

        {/* result wrapper */}
        <div className="flex items-center gap-4 p-4 border border-brand-darkblue-300/15 rounded-lg sm:gap-5 sm:p-5">
          {/* result */}
          <SplitText text={scanResult} />

          {/* copy btn */}
          <CopyBtn
            size={20}
            timeout={3000}
            text={scanResult}
            tooltip="Nusxa olish"
          />
        </div>
      </div>
    </>
  );
};

export default QrCodeScanner;
