import React from "react";

const Contact = () => {
  return (
    <div className="pt-4 pb-12 sm:pb-16">
      {/* contact list */}
      <div className="container space-y-12">
        {/* page description */}
        <div className="space-y-5">
          <h1 className="text-center">Biz bilan bog'lanish</h1>

          <p className="text-center text-lg md:text-xl">
            Bizga qanday yordam berishimiz mumkin ekanligini ayting
          </p>
        </div>

        {/* contact list */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {/* email */}
          <li className="flex flex-col gap-4 p-4 rounded-xl border border-brand-darkblue-300/15 sm:gap-5 sm:p-5">
            {/* item icon */}
            <svg
              width="48"
              height="48"
              fill="none"
              title="email icon"
              viewBox="0 0 24 24"
              aria-label="email icon"
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 xs:size-10 sm:size-12"
            >
              <path
                stroke="#7A08FA"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
              />
              <path
                stroke="#7A08FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
              />
            </svg>

            {/* item details */}
            <div className="flex flex-col justify-between gap-2 grow">
              <div className="space-y-2">
                <h3
                  title="email"
                  aria-label="email"
                  className="text-lg font-semibold sm:text-xl"
                >
                  E-pochta
                </h3>

                <p className="opacity-70 text-brand-darkblue-300 text-base sm:text-lg">
                  E-pochta orqali savollarni yuborish
                </p>
              </div>

              {/* link */}
              <a
                title="email link"
                aria-label="email link"
                href="mailto:pubgn9642@gmail.com"
                className="inline-block underline font-semibold text-base text-brand-darkblue-700 opacity-80 transition-colors hover:text-brand-violet-500"
              >
                pubgn9642@gmail.com
              </a>
            </div>
          </li>

          {/* telegram */}
          <li className="flex flex-col gap-4 p-4 rounded-xl border border-brand-darkblue-300/15 sm:gap-5 sm:p-5">
            {/* item icon */}
            <svg
              width="48"
              height="48"
              fill="none"
              title="telegram"
              viewBox="0 0 24 24"
              aria-label="telegram"
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 xs:size-10 sm:size-12"
            >
              <path
                d="M2.88399 11.0165C2.88399 11.0165 11.0662 7.66872 13.904 6.48997C14.9917 6.01847 18.6809 4.5096 18.6809 4.5096C18.6809 4.5096 20.3835 3.8496 20.2416 5.4526C20.1942 6.11272 19.8159 8.4231 19.4375 10.9221C18.87 14.4585 18.2551 18.3247 18.2551 18.3247C18.2551 18.3247 18.1606 19.4092 17.3566 19.5978C16.5525 19.7865 15.2282 18.9377 14.9917 18.7491C14.8026 18.6076 11.4446 16.4858 10.215 15.4486C9.88386 15.1657 9.50549 14.5998 10.2622 13.9397C11.9649 12.3838 13.9986 10.4506 15.2282 9.22472C15.7957 8.65885 16.3634 7.3386 13.9986 8.94172C10.6406 11.2521 7.32986 13.4211 7.32986 13.4211C7.32986 13.4211 6.57324 13.8926 5.15436 13.4682C3.73549 13.0438 2.08011 12.4781 2.08011 12.4781C2.08011 12.4781 0.945114 11.7707 2.88424 11.0165H2.88399Z"
                stroke="#7A08FA"
                stroke-width="1.5"
              />
            </svg>

            {/* item details */}
            <div className="flex flex-col justify-between gap-2 grow">
              <div className="space-y-2">
                <h3
                  title="telegram"
                  aria-label="telegram"
                  className="text-lg font-semibold sm:text-xl"
                >
                  Telegram
                </h3>

                <p className="opacity-70 text-brand-darkblue-300 text-base sm:text-lg">
                  Telegram bot orqali savollarni yuborish
                </p>
              </div>

              {/* link */}
              <a
                target="_blank"
                title="telegram bot link"
                aria-label="telegram bot link"
                href="https://t.me/ppmaker_support_bot"
                className="inline-block underline font-semibold text-base text-brand-darkblue-700 opacity-80 transition-colors hover:text-brand-violet-500"
              >
                @ppmaker_support_bot
              </a>
            </div>
          </li>

          {/* phone number */}
          <li className="flex flex-col gap-5 col-span-1 sm:col-span-2 md:col-span-1 p-5 rounded-xl border border-brand-darkblue-300/15">
            {/* item icon */}
            <svg
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 40 40"
              title="phone number"
              aria-label="phone number"
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 xs:size-10 sm:size-12"
            >
              <path
                fill="#7A08FA"
                d="M11.3087 6.65652C11.1906 6.50465 11.0416 6.37964 10.8715 6.28978C10.7014 6.19993 10.5142 6.1473 10.3222 6.13538C10.1302 6.12346 9.93785 6.15254 9.75795 6.22066C9.57806 6.28879 9.41471 6.39442 9.27878 6.53053L7.21084 8.60048C6.24487 9.56845 5.88888 10.9384 6.31087 12.1404C8.06229 17.1154 10.9113 21.6324 14.6466 25.3561C18.3703 29.0913 22.8872 31.9404 27.8622 33.6919C29.0642 34.1139 30.4341 33.7579 31.4021 32.7919L33.47 30.7239C33.6061 30.588 33.7118 30.4247 33.7799 30.2448C33.848 30.0649 33.8771 29.8725 33.8652 29.6805C33.8532 29.4885 33.8006 29.3013 33.7108 29.1312C33.6209 28.9611 33.4959 28.8121 33.344 28.694L28.7302 25.1061C28.5679 24.9802 28.3792 24.8929 28.1783 24.8506C27.9773 24.8083 27.7694 24.8123 27.5702 24.8621L23.1903 25.9561C22.6057 26.1022 21.9932 26.0944 21.4125 25.9335C20.8317 25.7727 20.3026 25.4642 19.8764 25.0381L14.9646 20.1242C14.5381 19.6983 14.2293 19.1692 14.0681 18.5884C13.9068 18.0077 13.8988 17.3951 14.0446 16.8103L15.1406 12.4304C15.1904 12.2312 15.1943 12.0233 15.1521 11.8223C15.1098 11.6214 15.0224 11.4327 14.8966 11.2704L11.3087 6.65652ZM7.76882 5.02256C8.1188 4.67247 8.53926 4.40084 9.00226 4.22571C9.46527 4.05057 9.96024 3.97594 10.4543 4.00678C10.9484 4.03761 11.4302 4.17319 11.8679 4.40453C12.3055 4.63587 12.6889 4.95767 12.9927 5.34856L16.5805 9.96044C17.2385 10.8064 17.4705 11.9084 17.2105 12.9484L16.1166 17.3283C16.06 17.5551 16.0631 17.7927 16.1254 18.0181C16.1878 18.2434 16.3074 18.4488 16.4726 18.6142L21.3864 23.5281C21.5521 23.6936 21.7578 23.8134 21.9835 23.8758C22.2092 23.9382 22.4472 23.941 22.6744 23.8841L27.0522 22.7901C27.5654 22.6618 28.1011 22.6518 28.6187 22.761C29.1364 22.8701 29.6224 23.0955 30.0401 23.4201L34.652 27.008C36.3099 28.298 36.4619 30.7479 34.978 32.2299L32.91 34.2978C31.4301 35.7778 29.2182 36.4278 27.1562 35.7018C21.8787 33.8449 17.0871 30.8236 13.1367 26.862C9.17536 22.9122 6.15409 18.1212 4.29693 12.8444C3.57296 10.7844 4.22293 8.57048 5.70289 7.09051L7.77082 5.02256H7.76882Z"
              />
            </svg>

            {/* item details */}
            <div className="flex flex-col justify-between gap-2 grow">
              <div className="space-y-2">
                <h3
                  title="phone number"
                  aria-label="phone number"
                  className="text-lg font-semibold sm:text-xl"
                >
                  Telefon raqam
                </h3>

                <p className="opacity-70 text-brand-darkblue-300 text-base sm:text-lg">
                  9:00 dan 18:00 gacha barcha qo'ng'iroqlar qabul qilinadi
                </p>
              </div>

              {/* link */}
              <a
                title="phone number"
                href="tel:+998200077729"
                aria-label="phone number"
                className="inline-block underline font-semibold text-base text-brand-darkblue-700 opacity-80 transition-colors hover:text-brand-violet-500"
              >
                +998 (20) 007-77-29
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
