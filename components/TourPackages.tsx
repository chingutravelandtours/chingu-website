"use client";

import Link from "next/link";

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
  title: "Taiwan",
  subtitle: "Taiwan Packages",
  description: "Explore our available Taiwan tour packages.",
  icon: "🇹🇼",
  href: "/taiwan-tours",
},
{
  title: "South Korea",
  subtitle: "Korea Packages",
  description: "Explore our available South Korea tour packages.",
  icon: "🇰🇷",
  href: "/korea-tours",
},
{
  title: "Thailand",
  subtitle: "Thailand Packages",
  description: "Explore our available Thailand tour packages.",
  icon: "🇹🇭",
  href: "/thailand-tours",
},
{
  title: "Vietnam",
  subtitle: "Vietnam Packages",
  description: "Explore our available Vietnam tour packages.",
  icon: "🇻🇳",
  href: "/vietnam-tours",
},
{
  title: "Mongolia",
  subtitle: "Mongolia Packages",
  description: "Explore our available Mongolia tour packages.",
  icon: "🇲🇳",
  href: "/mongolia-tours",
},
{
  title: "Singapore",
  subtitle: "Singapore Packages",
  description: "Explore our available Singapore tour packages.",
  icon: "🇸🇬",
  href: "/singapore-tours",
},
{
  title: "Malaysia",
  subtitle: "Malaysia Packages",
  description: "Explore our available Malaysia tour packages.",
  icon: "🇲🇾",
  href: "/malaysia-tours",
},
{
  title: "Indonesia",
  subtitle: "Indonesia Packages",
  description: "Explore our available Indonesia tour packages.",
  icon: "🇮🇩",
  href: "/indonesia-tours",
},
{
  title: "Laos",
  subtitle: "Laos Packages",
  description: "Explore our available Laos tour packages.",
  icon: "🇱🇦",
  href: "/laos-tours",
},
{
  title: "India",
  subtitle: "India Packages",
  description: "Explore our available India tour packages.",
  icon: "🇮🇳",
  href: "/india-tours",
},
  {
  title: "Australia",
  subtitle: "Australia Packages",
  description: "Explore our available Australia tour packages.",
  icon: "🇦🇺",
  href: "/australia-tours",
},
{
  title: "UAE",
  subtitle: "UAE Packages",
  description: "Explore our available UAE tour packages.",
  icon: "🇦🇪",
  href: "/uae-tours",
},
{
  title: "Europe",
  subtitle: "Europe Packages",
  description: "Explore our available Europe tour packages.",
  icon: "🇪🇺",
  href: "/europe-tours",
},
{
  title: "Central Asia",
  subtitle: "Central Asia Packages",
  description: "Explore our available Central Asia tour packages.",
  icon: "🌏",
  href: "/central-asia-tours",
},
{
  title: "Russia",
  subtitle: "Russia Packages",
  description: "Explore our available Russia tour packages.",
  icon: "🇷🇺",
  href: "/russia-tours",
},
{
  title: "Laos",
  subtitle: "Laos Packages",
  description: "Explore our available Laos tour packages.",
  icon: "🇱🇦",
  href: "/laos-tours",
},
{
  title: "India",
  subtitle: "India Packages",
  description: "Explore our available India tour packages.",
  icon: "🇮🇳",
  href: "/india-tours",
},
{
  title: "Greece",
  subtitle: "Greece Packages",
  description: "Explore our available Greece tour packages.",
  icon: "🇬🇷",
  href: "/greece-tours",
},
{
  title: "Turkey",
  subtitle: "Turkey Packages",
  description: "Explore our available Turkey tour packages.",
  icon: "🇹🇷",
  href: "/turkey-tours",
},
{
  title: "Filchi",
  subtitle: "Filchi Packages",
  description: "Explore our available Filchi tour packages.",
  icon: "🌏",
  href: "/filchi-tours",
},
{
  title: "Adora Mediterranea Cruise",
  subtitle: "Cruise Packages",
  description: "Explore our available Adora Mediterranea Cruise packages.",
  icon: "🚢",
  href: "/adora-cruise",
},
{
  title: "Agent Fam Tour",
  subtitle: "Fam Tour Packages",
  description: "Explore our available Agent Fam Tour packages.",
  icon: "✈️",
  href: "/fam-tour",
},
{
  title: "Fly + Cruise",
  subtitle: "Fly + Cruise Packages",
  description: "Explore our available Fly + Cruise packages.",
  icon: "🛳️",
  href: "/fly-cruise",
},
{
  title: "No Shopping Packages",
  subtitle: "No Shopping Tour Packages",
  description: "Explore our available No Shopping tour packages.",
  icon: "🌍",
  href: "/no-shopping-tours",
},
];

export default function TourPackages() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            Explore With Us
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Featured Tour Packages
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-500">
            Discover our available tour destinations and packages for your
            next adventure.
          </p>
        </div>

        {/* DESTINATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {destinations.map((destination) => (
            <Link
              key={destination.title}
              href={destination.href}
              className="group"
            >
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

                {/* ICON */}
                <div className="text-5xl mb-5">
                  {destination.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition">
                  {destination.title}
                </h3>

                {/* SUBTITLE */}
                <p className="mt-2 text-sm font-semibold text-red-600">
                  {destination.subtitle}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-grow">
                  {destination.description}
                </p>

                {/* BUTTON */}
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
    </section>
  );
}
