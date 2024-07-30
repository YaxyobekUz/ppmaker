import React, { useEffect, useState } from "react";

// antd
import "../css/antd.css";
import { ColorPicker, Tooltip } from "antd";

// components
import QrCode from "../components/QrCode";
import CollapsePanel from "../components/CollapsePanel";

// images
import listIcon from "../assets/images/icons/list.svg";
import crossIcon from "../assets/images/icons/cross.svg";
import deleteIcon from "../assets/images/icons/delete.svg";
import downloadIcon from "../assets/images/icons/download.svg";
import dotsQrCodeImg from "../assets/images/others/dots-qr-code.jpg";
import classyQrCodeImg from "../assets/images/others/classy-qr-code.jpg";
import squareQrCodeImg from "../assets/images/others/square-qr-code.jpg";
import roundedQrCodeImg from "../assets/images/others/rounded-qr-code.jpg";
import extraRoundedQrCodeImg from "../assets/images/others/extra-rounded-qr-code.jpg";
import classyRoundedQrCodeImg from "../assets/images/others/classy-rounded-qr-code.jpg";
import cornersDotTypeDotQrCodeImg from "../assets/images/others/corners-dot-type-dot-qr-code.jpg";
import cornersDotTypeSquareQrCodeImg from "../assets/images/others/corners-dot-type-square-qr-code.jpg";
import cornersSquareTypeDotQrCodeImg from "../assets/images/others/corners-square-type-dot-qr-code.jpg";
import cornersSquareTypeSquareQrCodeImg from "../assets/images/others/corners-square-type-square-qr-code.jpg";
import cornersSquareTypeExtraRoundedQrCodeImg from "../assets/images/others/corners-square-type-extra-rounded-qr-code.jpg";

// qr types
const qrDotsTypes = [
  {
    id: 0,
    value: "square",
    img: squareQrCodeImg,
  },
  {
    id: 1,
    value: "dots",
    img: dotsQrCodeImg,
  },
  {
    id: 2,
    value: "classy",
    img: classyQrCodeImg,
  },
  {
    id: 4,
    value: "classy-rounded",
    img: classyRoundedQrCodeImg,
  },
  {
    id: 5,
    value: "rounded",
    img: roundedQrCodeImg,
  },
  {
    id: 6,
    value: "extra-rounded",
    img: extraRoundedQrCodeImg,
  },
];

const qrCornersDotTypes = [
  {
    id: 0,
    value: "square",
    img: cornersDotTypeSquareQrCodeImg,
  },
  {
    id: 1,
    value: "dots",
    img: cornersDotTypeDotQrCodeImg,
  },
];

const qrCornersSquareTypes = [
  {
    id: 0,
    value: "square",
    img: cornersSquareTypeSquareQrCodeImg,
  },
  {
    id: 1,
    value: "dots",
    img: cornersSquareTypeDotQrCodeImg,
  },
  {
    id: 2,
    value: "extra-rounded",
    img: cornersSquareTypeExtraRoundedQrCodeImg,
  },
];

// page
const QrCodeGenerator = () => {
  const [qrImage, setQrImage] = useState(null);
  const [qrDotsType, setQrDotsType] = useState("square");
  const [qrDotsColor, setQrDotsColor] = useState("#2D3250");
  const [qrValue, setQrValue] = useState("https://ppmaker.uz");
  const [qrCornersDotType, setQrCornersDotType] = useState("square");
  const [qrCornersDotColor, setQrCornersDotColor] = useState("#2D3250");
  const [qrBackgroundColor, setQrBackgroundColor] = useState("#ffffff");
  const [latestDownloadQrCodes, setLatestDownloadQrCodes] = useState([]);
  const [qrCornersSquareType, setQrCornersSquareType] = useState("square");
  const [openLatestQrCodesList, setOpenLatestQrCodesList] = useState(false);
  const [qrCornersSquareColor, setQrCornersSquareColor] = useState("#2D3250");

  // qr code options
  const qrCodeOptions = {
    data: qrValue,
    type: "canvas",
    image: qrImage,
    shape: "square",
    dotsOptions: {
      type: qrDotsType,
      color: qrDotsColor,
    },
    cornersDotOptions: {
      type: qrCornersDotType,
      color: qrCornersDotColor,
    },
    cornersSquareOptions: {
      type: qrCornersSquareType,
      color: qrCornersSquareColor,
    },
    backgroundOptions: {
      color: qrBackgroundColor,
    },
    imageOptions: {
      margin: 4,
    },
  };

  const [downloadOptions, setDownloadOptions] = useState({
    type: "png",
    isApproved: false,
    setLocaleStorage: true,
    qrOptions: qrCodeOptions,
  });

  // download qr code
  const downloadQrCode = (type, qrOptions, setLocaleStorage) => {
    setDownloadOptions({ isApproved: true, type, qrOptions, setLocaleStorage });
  };

  // change qr image
  const handleQrImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setQrImage(imageUrl);
    }
  };

  // set latest download qr codes
  useEffect(() => {
    const getSavedQrCodes = localStorage.getItem("qrCodes");
    if (getSavedQrCodes) {
      const savedQrCodes = JSON.parse(getSavedQrCodes);
      setLatestDownloadQrCodes(savedQrCodes);
    }
  }, [downloadOptions]);

  return (
    <>
      {/* page header, title wrapper */}
      <div className="flex items-center justify-between border-b">
        <h1 className="line-clamp-1 ml-4 text-xl font-semibold sm:ml-5">
          QR-kod yaratish
        </h1>

        {/* toggle open latest qr codes list btn */}
        <Tooltip
          title={
            openLatestQrCodesList
              ? "QR-kodni ko'rsatish"
              : "Oxirgi yuklab olingaan QR-kodlar"
          }
        >
          <button
            className="shrink-0 px-4 py-4 text-base sm:px-5"
            onClick={() => setOpenLatestQrCodesList((state) => !state)}
            aria-label={
              openLatestQrCodesList
                ? "Show QR code"
                : "Last downloaded QR codes"
            }
          >
            {!openLatestQrCodesList ? (
              <img
                width={24}
                height={24}
                src={listIcon}
                alt="list icon"
                className="size-6"
              />
            ) : (
              <img
                width={24}
                height={24}
                src={crossIcon}
                alt="cross icon"
                className="size-6"
              />
            )}
          </button>
        </Tooltip>
      </div>

      {/* page body */}
      <div className="flex flex-col-reverse w-full h-full md:flex-row">
        {/* responsive download qr code & ads wrapper */}
        <div className="space-y-4 p-4 sm:hidden">
          {/* ads */}
          <aside className="w-full h-auto aspect-square">
            <div className="flex items-center justify-center size-full bg-brand-darkblue-300/5 rounded-lg">
              <span className="text-center text-sm opacity-70">
                Siz uchun reklama <br /> mavjud emas 😊
              </span>
            </div>
          </aside>

          {/* download btn wrapper */}
          <div className="flex bg-brand-gold-500 rounded-lg">
            {/* main download btn */}
            <button
              title="download qr code"
              className="grow opacity-85 text-base"
              onClick={() => downloadQrCode("png", qrCodeOptions, true)}
            >
              Yuklab olish
            </button>

            {/* download all types dropdown wrapper */}
            <div className="group relative">
              <div className="py-3.5 px-4 bg-brand-gold-600 rounded-r-lg cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 transition-transform group-hover:rotate-180"
                >
                  <path
                    stroke="#2D3250"
                    strokeWidth="2"
                    d="M5 9L12 16L19 9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* download all types dropdown */}
              <div className="hidden absolute min-w-max w-full top-full right-0 bg-white p-1.5 rounded-xl border border-brand-darkblue-300/15 group-hover:block">
                <ul className="space-y-1.5">
                  {/* svg download */}
                  <li>
                    <button
                      onClick={() => downloadQrCode("svg", qrCodeOptions, true)}
                      className="flex items-center justify-between gap-5 w-52 shrink-0 p-3.5 py-2.5 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                    >
                      <span className="text-sm">SVG</span>
                      <img
                        width={20}
                        height={20}
                        src={downloadIcon}
                        alt="dowload icon"
                        className="size-5"
                      />
                    </button>
                  </li>

                  {/* jpg download */}
                  <li>
                    <button
                      onClick={() => downloadQrCode("jpg", qrCodeOptions, true)}
                      className="flex items-center justify-between gap-5 w-52 shrink-0 p-3.5 py-2.5 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                    >
                      <span className="text-sm">JPG</span>
                      <img
                        width={20}
                        height={20}
                        src={downloadIcon}
                        alt="dowload icon"
                        className="size-5"
                      />
                    </button>
                  </li>

                  {/* png download */}
                  <li>
                    <button
                      onClick={() => downloadQrCode("png", qrCodeOptions, true)}
                      className="flex items-center justify-between gap-5 w-52 shrink-0 p-3.5 py-2.5 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                    >
                      <span className="text-sm">PNG</span>
                      <img
                        width={20}
                        height={20}
                        src={downloadIcon}
                        alt="dowload icon"
                        className="size-5"
                      />
                    </button>
                  </li>

                  {/* webp download */}
                  <li>
                    <button
                      onClick={() =>
                        downloadQrCode("webp", qrCodeOptions, true)
                      }
                      className="flex items-center justify-between gap-5 w-52 shrink-0 p-3.5 py-2.5 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                    >
                      <span className="text-sm">WEBP</span>
                      <img
                        width={20}
                        height={20}
                        src={downloadIcon}
                        alt="dowload icon"
                        className="size-5"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* qr code generator options, collapses */}
        <div className="w-full pb-5 border-t border-b border-brand-darkblue-300/15 sm:rounded-bl-xl sm:border-b-0 md:border-r md:border-t-0 md:max-w-96">
          {/* prompt */}
          <CollapsePanel
            open
            header="QR-kod matni"
            className="w-full border-b border-brand-darkblue-300/15"
          >
            <textarea
              id="prompt"
              maxLength={144}
              onInput={(e) => {
                if (e.target.value !== "") {
                  setQrValue(e.target.value);
                } else {
                  setQrValue("https://ppmaker.uz");
                }
              }}
              placeholder="Bu yerga siz istagan matn yoki havolani kiriting..."
              className="w-full h-36 bg-brand-darkblue-300/[0.03] resize-none scroll-primary-small text-base placeholder:text-base"
            />
          </CollapsePanel>

          {/* change image */}
          <CollapsePanel
            header="QR-kod rasmi"
            className="w-full border-b border-brand-darkblue-300/15"
          >
            <div className="flex gap-3.5">
              <label
                title="upload qr code image"
                aria-label="upload qr code image"
                className="btn-primary w-full text-center rounded-lg cursor-pointer"
              >
                <span className="text-base">Rasm yuklash</span>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleQrImageChange}
                />
              </label>

              {/* delete image */}
              <button
                title="delete qr code image"
                onClick={() => setQrImage(null)}
                aria-label="delete qr code image"
                className="flex items-center justify-center size-12 shrink-0 rounded-lg border-2 border-brand-danger-500 transition-colors hover:bg-brand-danger-500/5"
              >
                <img
                  width={24}
                  height={24}
                  src={deleteIcon}
                  alt="delete icon"
                  className="size-6"
                />
              </button>
            </div>
          </CollapsePanel>

          {/* corners square type */}
          <CollapsePanel
            header="Chegara katakchalar turi"
            className="w-full border-b border-brand-darkblue-300/15"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {qrCornersSquareTypes.map((type) => (
                <button
                  key={type.id}
                  title={type.value}
                  aria-label={type.label}
                  onClick={() => setQrCornersSquareType(type.value)}
                  className={`${
                    qrCornersSquareType === type.value
                      ? "border-brand-violet-500"
                      : "border-brand-darkblue-300/15"
                  } size-24 p-1.5 border-2 rounded-lg transition-colors duration-200`}
                >
                  <img
                    width={80}
                    height={96}
                    src={type.img}
                    className="size-20"
                    alt="qr code corners square type image"
                  />
                </button>
              ))}
            </div>
          </CollapsePanel>

          {/* corners dot type */}
          <CollapsePanel
            header="Chegara nuqtalar turi"
            className="w-full border-b border-brand-darkblue-300/15"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {qrCornersDotTypes.map((type) => (
                <button
                  key={type.id}
                  title={type.value}
                  aria-label={type.label}
                  onClick={() => setQrCornersDotType(type.value)}
                  className={`${
                    qrCornersDotType === type.value
                      ? "border-brand-violet-500"
                      : "border-brand-darkblue-300/15"
                  } size-24 p-1.5 border-2 rounded-lg transition-colors duration-200`}
                >
                  <img
                    width={80}
                    height={80}
                    src={type.img}
                    className="size-20"
                    alt="qr code corners dot image"
                  />
                </button>
              ))}
            </div>
          </CollapsePanel>

          {/* dots type */}
          <CollapsePanel
            header="Nuqtalar turi"
            className="w-full border-b border-brand-darkblue-300/15"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {qrDotsTypes.map((type) => (
                <button
                  key={type.id}
                  title={type.value}
                  aria-label={type.label}
                  onClick={() => setQrDotsType(type.value)}
                  className={`${
                    qrDotsType === type.value
                      ? "border-brand-violet-500"
                      : "border-brand-darkblue-300/15"
                  } size-24 p-1.5 border-2 rounded-lg transition-colors duration-200`}
                >
                  <img
                    width={80}
                    height={96}
                    src={type.img}
                    className="size-20"
                    alt="qr code dots type image"
                  />
                </button>
              ))}
            </div>
          </CollapsePanel>

          {/* bg color */}
          <CollapsePanel
            header="Orqa fon rangi"
            className="w-full border-b border-brand-darkblue-300/15"
          >
            <ColorPicker
              className="block"
              defaultValue="#ffffff"
              onChangeComplete={(color) =>
                setQrBackgroundColor(color.toHexString())
              }
            />
          </CollapsePanel>

          {/* dots color */}
          <CollapsePanel
            header="Nuqtalar rangi"
            className="w-full border-b border-brand-darkblue-300/15"
          >
            <ColorPicker
              className="block"
              defaultValue="#2D3250"
              onChangeComplete={(color) => setQrDotsColor(color.toHexString())}
            />
          </CollapsePanel>

          {/* corners square color */}
          <CollapsePanel
            header="Chegara katakchalar rangi"
            className="w-full border-b border-brand-darkblue-300/15"
          >
            <ColorPicker
              className="block"
              defaultValue="#2D3250"
              onChangeComplete={(color) =>
                setQrCornersSquareColor(color.toHexString())
              }
            />
          </CollapsePanel>

          {/* corners dot color */}
          <CollapsePanel
            header="Chegara nuqtalar rangi"
            className="w-full border-b border-brand-darkblue-300/15"
          >
            <ColorPicker
              className="block"
              defaultValue="#2D3250"
              onChangeComplete={(color) =>
                setQrCornersDotColor(color.toHexString())
              }
            />
          </CollapsePanel>
        </div>

        {/* result & ads & qr code cards */}
        <div className="w-full h-auto">
          {/* current qr code & ads */}
          <div className={!openLatestQrCodesList ? "block h-full" : "hidden"}>
            <div className="flex flex-col justify-between gap-5 top-24 w-full pb-5 sm:pb-0 sm:flex-row md:sticky md:flex-col lg:static lg:h-full lg:pl-5 lg:flex-row">
              {/* qr code */}
              <QrCode
                size={240}
                options={qrCodeOptions}
                className="lg:sticky top-24 mt-5 mx-auto lg:my-5"
              />

              {/* ads wrapper */}
              <div className="hidden max-w-96 min-w-72 w-full h-full p-5 mx-auto sm:block lg:m-0 lg:border-l lg:border-brand-darkblue-300/15">
                <div className=" sticky top-24 space-y-5">
                  {/* ads */}
                  <aside className="w-full h-auto aspect-square">
                    <div className="flex items-center justify-center size-full bg-brand-darkblue-300/5 rounded-lg">
                      <span className="text-center text-sm opacity-70">
                        Siz uchun reklama <br /> mavjud emas 😊
                      </span>
                    </div>
                  </aside>

                  {/* download btn wrapper */}
                  <div className="flex bg-brand-gold-500 rounded-lg">
                    {/* main download btn */}
                    <button
                      title="download qr code"
                      className="grow opacity-85 text-base"
                      onClick={() => downloadQrCode("png", qrCodeOptions, true)}
                    >
                      Yuklab olish
                    </button>

                    {/* download all types dropdown wrapper */}
                    <div className="group relative">
                      <div className="py-3.5 px-4 bg-brand-gold-600 rounded-r-lg cursor-pointer">
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5 transition-transform group-hover:rotate-180"
                        >
                          <path
                            stroke="#2D3250"
                            strokeWidth="2"
                            d="M5 9L12 16L19 9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* download all types dropdown */}
                      <div className="hidden absolute min-w-max w-full top-full right-0 bg-white p-1.5 rounded-xl border border-brand-darkblue-300/15 group-hover:block">
                        <ul className="space-y-1.5">
                          {/* svg download */}
                          <li>
                            <button
                              onClick={() =>
                                downloadQrCode("svg", qrCodeOptions, true)
                              }
                              className="flex items-center justify-between gap-5 w-52 shrink-0 p-3.5 py-2.5 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                            >
                              <span className="text-sm">SVG</span>
                              <img
                                width={20}
                                height={20}
                                src={downloadIcon}
                                alt="dowload icon"
                                className="size-5"
                              />
                            </button>
                          </li>

                          {/* jpg download */}
                          <li>
                            <button
                              onClick={() =>
                                downloadQrCode("jpg", qrCodeOptions, true)
                              }
                              className="flex items-center justify-between gap-5 w-52 shrink-0 p-3.5 py-2.5 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                            >
                              <span className="text-sm">JPG</span>
                              <img
                                width={20}
                                height={20}
                                src={downloadIcon}
                                alt="dowload icon"
                                className="size-5"
                              />
                            </button>
                          </li>

                          {/* png download */}
                          <li>
                            <button
                              onClick={() =>
                                downloadQrCode("png", qrCodeOptions, true)
                              }
                              className="flex items-center justify-between gap-5 w-52 shrink-0 p-3.5 py-2.5 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                            >
                              <span className="text-sm">PNG</span>
                              <img
                                width={20}
                                height={20}
                                src={downloadIcon}
                                alt="dowload icon"
                                className="size-5"
                              />
                            </button>
                          </li>

                          {/* webp download */}
                          <li>
                            <button
                              onClick={() =>
                                downloadQrCode("webp", qrCodeOptions, true)
                              }
                              className="flex items-center justify-between gap-5 w-52 shrink-0 p-3.5 py-2.5 rounded-lg transition-colors hover:bg-brand-darkblue-300/5"
                            >
                              <span className="text-sm">WEBP</span>
                              <img
                                width={20}
                                height={20}
                                src={downloadIcon}
                                alt="dowload icon"
                                className="size-5"
                              />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* qr code cards */}
          {latestDownloadQrCodes.length > 0 ? (
            <ul
              className={`${
                openLatestQrCodesList ? "flex" : "hidden"
              } flex-wrap justify-center gap-5 grow p-4 sm:p-5`}
            >
              {latestDownloadQrCodes.map((qr, index) => {
                return (
                  <li
                    key={index}
                    className="flex flex-col items-center w-40 h-56 bg-white py-2 rounded-lg border border-brand-darkblue-300/15 group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden mb-2.5">
                      <QrCode size={140} options={qr} />

                      {/* download qr code btn */}
                      <button
                        onClick={() => downloadQrCode("png", qr, false)}
                        className="absolute z-1 scale-0 bg-white p-2 rounded-full transition-transform duration-500 group-hover:scale-100"
                      >
                        <img
                          width={24}
                          height={24}
                          className="size-6"
                          src={downloadIcon}
                          alt="download qr code icon"
                        />
                      </button>

                      {/* overlay */}
                      <div className="absolute inset-0 w-full h-full scale-0 bg-black/15 backdrop-blur-xl rounded-lg transition-transform group-hover:scale-100"></div>
                    </div>

                    {/* qr code name */}
                    <div className="w-full px-2.5">
                      <h3 className="w-full line-clamp-2 text-base text-center">
                        {qr.data}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <strong className="p-4 sm:p-5">
              Hali hech qanday QR-kod yuklab olmadingiz!
            </strong>
          )}
        </div>
      </div>

      {/* download qr code with high quality */}
      <QrCode
        size={2048}
        className="!hidden"
        download={downloadOptions}
        options={downloadOptions.qrOptions}
      />
    </>
  );
};

export default QrCodeGenerator;
