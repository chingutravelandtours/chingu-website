"use client";

import Link from "next/link";

const chinaPackages = [
  {
    title: "Avatar + Furong",
    subtitle: "No Shopping",
    duration: "7D6N",
    dates: "Jan. 6–12, 2027",
    city: "MNL",
    price: "₱37,737",
    slots: 20,
  },
  {
    title: "Shanghai + Anji",
    subtitle: "Skiing Tour",
    duration: "6D5N",
    dates: "Jan. 6–11, 2027",
    city: "MNL",
    price: "₱43,974",
    slots: 60,
  },
  {
    title: "Harbin",
    subtitle: "No Shopping",
    duration: "6D5N",
    dates: "Jan. 6–11, 2027",
    city: "MNL",
    price: "₱87,444",
    slots: 18,
  },
  {
    title: "Charming Yunnan",
    subtitle: "No Shopping",
    duration: "9D8N",
    dates: "Jan. 7–15, 2027",
    city: "MNL",
    price: "₱87,444",
    slots: 12,
  },
];

const destinations = [
  {
    title: "Japan",
    subtitle: "Japan Tour Packages",
    description:
      "Explore our Japan tour packages, departure dates, prices and available slots.",
    icon: "🇯🇵",
    href: "/japan-tours",
  },
  {
    title: "Hong Kong & Macau",
    subtitle: "Hong Kong & Macau Packages",
    description:
      "Explore our available Hong Kong and Macau tour packages.",
    icon: "🇭🇰",
    href: "/hongkong-macau-uos",
  },
];

export default function TourPackages() {
  const handleInquiry = (
    title: string,
    duration: string,
    dates: string,
    city: string,
    price: string
  ) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${title}
Duration: ${duration}
Departure: ${dates}
Departure City: ${city}
Package From: ${price} per person

Please send me the complete package details. Thank you!`
    );

    window.open(
      `https://wa.me/63919388999?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* CHINA */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            Explore With Us
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            China Tour Packages
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-500">
            Discover our available China tour packages for your next adventure.
          </p>
        </div>

        {/* CHINA PACKAGE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {chinaPackages.map((pkg) => (
            <div
              key={`${pkg.title}-${pkg.dates}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* BADGES */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  {pkg.duration}
                </span>

                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                  {pkg.slots} slots
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-base font-bold text-gray-900 min-h-[48px]">
                {pkg.title}
              </h3>

              {/* TYPE */}
              <p className="mt-2 text-xs text-gray-400">
                {pkg.subtitle}
              </p>

              {/* DATE */}
              <div className="mt-4">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Departure
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {pkg.dates}
                </p>
              </div>

              {/* CITY */}
              <div className="mt-3">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Departure City
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {pkg.city}
                </p>
              </div>

              {/* PRICE */}
              <div className="mt-4">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Package From
                </p>

                <p className="text-xl font-bold text-gray-900">
                  {pkg.price}
                </p>

                <p className="text-[10px] text-gray-400">
                  per person
                </p>
              </div>

              {/* INQUIRE */}
              <button
                onClick={() =>
                  handleInquiry(
                    pkg.title,
                    pkg.duration,
                    pkg.dates,
                    pkg.city,
                    pkg.price
                  )
                }
                className="mt-5 w-full border border-red-600 text-red-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-600 hover:text-white transition"
              >
                Inquire Now →
              </button>
            </div>
          ))}
        </div>

        {/* MORE CHINA PACKAGES */}
        <div className="text-center mt-8">
          <Link
            href="/china-tours"
            className="inline-flex items-center justify-center bg-red-600 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-red-700 transition shadow-md"
          >
            More China Packages →
          </Link>
        </div>

        {/* OTHER DESTINATIONS */}
        <div className="mt-20">

          <div className="text-center mb-10">
            <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
              More Destinations
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Explore More Tours
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {destinations.map((destination) => (
              <Link
                key={destination.title}
                href={destination.href}
                className="group"
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">

                  <div className="text-5xl mb-5">
                    {destination.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition">
                    {destination.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-red-600">
                    {destination.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="mt-6">
                    <span className="block w-full text-center bg-red-600 text-white py-3 rounded-xl text-sm font-semibold group-hover:bg-red-700 transition">
                      View Tour Packages →
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
