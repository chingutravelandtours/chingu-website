"use client";

import Link from "next/link";

interface Destination {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
}

const destinations: Destination[] = [
  {
    title: "Japan",
    subtitle: "Japan Tour Packages",
    description:
      "Explore our Japan tour packages, departure dates, prices and available slots.",
    icon: "🇯🇵",
    href: "/japan-tours",
  },
  {
    title: "China",
    subtitle: "China Tour Packages",
    description:
      "Explore our available China tour packages, destinations, dates and rates.",
    icon: "🇨🇳",
    href: "/china-tours",
  },
  {
    title: "Hong Kong & Macau",
    subtitle: "Hong Kong & Macau Packages",
    description:
      "Explore our available Hong Kong and Macau tour packages.",
    icon: "🇭🇰",
    href: "/hongkong-macau-uos",
  },
  {
    title: "South Korea",
    subtitle: "Korea Packages",
    description:
      "Explore our available South Korea tour packages.",
    icon: "🇰🇷",
    href: "/korea-tours",
  },
];

export default function TourPackages() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Explore With Us
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Tour Packages
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Discover our available tour destinations and packages for your next
            adventure.
          </p>
        </div>

        {/* DESTINATION CARDS */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {destinations.map((destination) => (
            <Link
              key={destination.title}
              href={destination.href}
              className="group"
            >
              <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* ICON */}
                <div className="mb-5 text-5xl">
                  {destination.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-900 transition group-hover:text-red-600">
                  {destination.title}
                </h3>

                {/* SUBTITLE */}
                <p className="mt-2 text-sm font-semibold text-red-600">
                  {destination.subtitle}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-500">
                  {destination.description}
                </p>

                {/* BUTTON */}
                <div className="mt-6">
                  <span className="block w-full rounded-xl bg-red-600 py-3 text-center text-sm font-semibold text-white transition group-hover:bg-red-700">
                    View Tour Packages →
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
