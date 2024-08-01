import React, { useState } from "react";

const Complaint = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [complaintMsg, setComplaintMsg] = useState("");

  return (
    <>
      {/* page header */}
      <div className="flex items-center justify-between py-3.5 border-b border-brand-darkblue-300/15">
        <h1 className="line-clamp-1 ml-4 text-xl font-semibold sm:ml-5">
          Shikoyat qilish
        </h1>
      </div>

      {/* page body */}
      <div className="flex flex-col gap-4 p-4 sm:gap-5 sm:p-5 md:flex-row">
        {/* submit form */}
        <form className="grow col-span-2 space-y-4 sm:space-y-5">
          {/* name */}
          <div className="space-y-2.5 sm:space-y-3.5">
            <label htmlFor="name1" className="text-base">
              Ismingiz*
            </label>

            <input
              id="name1"
              name="name"
              type="text"
              title="name"
              value={name}
              maxLength={256}
              autoComplete="off"
              placeholder="Yaxyobek Habibulloyev"
              className="text-base placeholder:text-base"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* email */}
          <div className="space-y-2.5 sm:space-y-3.5">
            <label htmlFor="email" className="text-base">
              E-pochta yoki telegram foydalanuvchi nomingiz*
            </label>

            <input
              id="email"
              type="text"
              name="email"
              value={email}
              maxLength={112}
              autoComplete="off"
              title="email or telegram username"
              className="text-base placeholder:text-base"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="foydalanuvchi@gmail.com yoki @foydalanuvchi"
            />
          </div>

          {/* complaint */}
          <div className="space-y-2.5 sm:space-y-3.5">
            <label htmlFor="complaint" className="text-base">
              Shikoyatingiz*
            </label>

            <textarea
              id="complaint"
              name="complaint"
              maxLength={1200}
              title="complaint"
              value={complaintMsg}
              onChange={(e) => setComplaintMsg(e.target.value)}
              placeholder="Shikoyatingizni tushunarli qilib yozing..."
              className="scroll-primary-small min-h-40 max-h-96 text-base placeholder:text-base"
            />
          </div>

          {/* submit btn */}
          <button className="btn-primary w-full rounded-lg text-base xs:w-56 sm:rounded-xl">
            Yuborish
          </button>
        </form>

        {/* telegram */}
        <div className="w-full md:min-w-80 md:max-w-80 lg:min-w-96 lg:max-w-96">
          <div className="w-full bg-morpheus-den space-y-4 p-4 rounded-lg border border-b-0 border-[#30CCCE] sm:space-y-5 sm:p-5 sm:rounded-xl">
            <p className="text-base text-white text-center">
              Sizda savol bormi? Agar ha bo'lsa o'z savollaringizni bizning
              rasmiy telegram botimizgaa yuborishingiz mumkin!
            </p>

            {/* telegram link */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/mryaxyobek"
              className="block bg-white/70 py-2.5 rounded-lg text-base text-center transition-colors hover:bg-white"
            >
              Savol yuborish
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Complaint;
  