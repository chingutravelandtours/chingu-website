"use client";

import { useState } from "react";

export default function Navbar() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">

        {/* Logo / Business Name */}
        <h1 className="text-2xl font-bold text-red-700">
          CHINGU Travel and Tours
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-6">

          {/* Home */}
          <a
            href="/"
            className="hover:text-red-600 font-medium transition"
          >
            Home
          </a>

          {/* Visa */}
          <a
            href="/visa"
            className="hover:text-red-600 font-medium transition"
          >
            Visa
          </a>

          {/* Contact Us */}
          <button
            onClick={() => setShowContact(true)}
            className="hover:text-red-600 font-medium transition"
          >
            Contact Us
          </button>

          {/* Login */}
          <a
            href="/login"
            className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
          >
            Login
          </a>

        </nav>
      </header>

      {/* CONTACT US POPUP */}
      {showContact && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setShowContact(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <div className="flex items-center justify-between mb-6">

              <h2 className="text-3xl font-bold text-gray-800">
                Contact Us
              </h2>

              <button
                onClick={() => setShowContact(false)}
                className="text-2xl text-gray-400 hover:text-gray-700"
              >
                ×
              </button>

            </div>

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
                className="text-lg font-semibold text-green-600 hover:underline"
              >
                +971 55 255 0096
              </a>

            </div>

            {/* Philippines */}
            <div className="mb-5">

              <p className="text-sm font-semibold text-gray-500">
                Phone / WhatsApp — Philippines
              </p>

              <a
                href="https://wa.me/63919388999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-green-600 hover:underline"
              >
                +63 919 388 999
              </a>

            </div>

            {/* Email */}
            <div className="mb-7">

              <p className="text-sm font-semibold text-gray-500">
                Email
              </p>

              <a
                href="mailto:info@cttravelph.com"
                className="text-lg font-semibold text-red-600 hover:underline"
              >
                info@cttravelph.com
              </a>

            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">

              {/* WhatsApp UAE */}
              <a
                href="https://wa.me/971552550096"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-green-600 py-3 text-center font-semibold text-white hover:bg-green-700 transition"
              >
                WhatsApp UAE
              </a>

              {/* WhatsApp Philippines */}
              <a
                href="https://wa.me/63919388999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-green-600 py-3 text-center font-semibold text-white hover:bg-green-700 transition"
              >
                WhatsApp Philippines
              </a>

              {/* Email */}
              <a
                href="mailto:info@cttravelph.com"
                className="w-full rounded-xl bg-red-600 py-3 text-center font-semibold text-white hover:bg-red-700 transition"
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
