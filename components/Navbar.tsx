"use client";

import { useState } from "react";

export default function Navbar() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">

        {/* LOGO / BUSINESS NAME */}
        <h1 className="text-2xl font-bold text-red-700">
          CHINGU Travel and Tours
        </h1>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-6">

          {/* HOME */}
          <a
            href="/"
            className="text-gray-800 hover:text-red-600 font-medium transition"
          >
            Home
          </a>

          

          {/* B2B PORTAL */}
          <a
            href="/agent"
            className="text-gray-800 hover:text-red-600 font-medium transition"
          >
            B2B Portal
          </a>

          {/* CONTACT US */}
          <button
            onClick={() => setShowContact(true)}
            className="text-gray-800 hover:text-red-600 font-medium transition"
          >
            Contact Us
          </button>

          {/* LOGIN */}
          <a
            href="/login"
            className="
              bg-red-600
              text-white
              px-5
              py-2
              rounded-full
              hover:bg-red-700
              transition
            "
          >
            Login
          </a>

        </nav>
      </header>


      {/* CONTACT US POPUP */}
      {showContact && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            px-4
          "
          onClick={() => setShowContact(false)}
        >

          <div
            className="
              w-full
              max-w-md
              rounded-2xl
              bg-white
              p-8
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE / TITLE */}
            <div className="flex items-center justify-between mb-6">

              <h2 className="text-3xl font-bold text-gray-800">
                Contact Us
              </h2>

              <button
                onClick={() => setShowContact(false)}
                className="
                  text-2xl
                  text-gray-400
                  hover:text-gray-700
                "
              >
                ×
              </button>

            </div>


            {/* DESCRIPTION */}
            <p className="text-gray-600 mb-6">
              <strong>CHINGU Travel and Tours</strong>
              <br />
              We’re here to help you plan your next journey.
            </p>


            {/* UAE */}
            <div className="mb-5">

              <p className="text-sm font-semibold text-gray-500">
                Phone / WhatsApp — UAE
              </p>

              <a
                href="https://wa.me/971552550096"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-lg
                  font-semibold
                  text-green-600
                  hover:underline
                "
              >
                +971 55 255 0096
              </a>

            </div>


            {/* PHILIPPINES */}
            <div className="mb-5">

              <p className="text-sm font-semibold text-gray-500">
                Phone / WhatsApp — Philippines
              </p>

              <a
                href="https://wa.me/63919388999"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-lg
                  font-semibold
                  text-green-600
                  hover:underline
                "
              >
                +63 919 388 999
              </a>

            </div>


            {/* EMAIL */}
            <div className="mb-7">

              <p className="text-sm font-semibold text-gray-500">
                Email
              </p>

              <a
                href="mailto:info@cttravelph.com"
                className="
                  text-lg
                  font-semibold
                  text-red-600
                  hover:underline
                "
              >
                info@cttravelph.com
              </a>

            </div>


            {/* CONTACT BUTTONS */}
            <div className="flex flex-col gap-3">

              {/* WHATSAPP UAE */}
              <a
                href="https://wa.me/971552550096"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  rounded-xl
                  bg-green-600
                  py-3
                  text-center
                  font-semibold
                  text-white
                  hover:bg-green-700
                  transition
                "
              >
                WhatsApp UAE
              </a>


              {/* WHATSAPP PHILIPPINES */}
              <a
                href="https://wa.me/63919388999"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  rounded-xl
                  bg-green-600
                  py-3
                  text-center
                  font-semibold
                  text-white
                  hover:bg-green-700
                  transition
                "
              >
                WhatsApp Philippines
              </a>


              {/* EMAIL */}
              <a
                href="mailto:info@cttravelph.com"
                className="
                  w-full
                  rounded-xl
                  bg-red-600
                  py-3
                  text-center
                  font-semibold
                  text-white
                  hover:bg-red-700
                  transition
                "
              >
                Send Email
              </a>

            </div>

          </div>

        </div>
      )}
    </>
  );
}
