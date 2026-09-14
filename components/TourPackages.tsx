"use client";

import { useState } from "react";
import Link from "next/link";

const destinations = [
  { name: "Japan", flag: "🇯🇵", href: "/japan-tours" },
  { name: "China", flag: "🇨🇳", href: "/china-tours" },
  { name: "Hong Kong & Macau", flag: "🇭🇰", href: "/hongkong-macau-uos" },
  { name: "Taiwan", flag: "🇹🇼", href: "/taiwan-tours" },
  { name: "South Korea", flag: "🇰🇷", href: "/korea-tours" },
  { name: "Thailand", flag: "🇹🇭", href: "/thailand-tours" },
  { name: "Vietnam", flag: "🇻🇳", href: "/vietnam-tours" },
  { name: "Mongolia", flag: "🇲🇳", href: "/mongolia-tours" },
  { name: "Singapore", flag: "🇸🇬", href: "/singapore-tours" },
  { name: "Malaysia", flag: "🇲🇾", href: "/malaysia-tours" },
  { name: "Indonesia", flag: "🇮🇩", href: "/indonesia-tours" },
  { name: "Laos", flag: "🇱🇦", href: "/laos-tours" },
  { name: "India", flag: "🇮🇳", href: "/india-tours" },
  { name: "Australia", flag: "🇦🇺", href: "/australia-tours" },
  { name: "UAE", flag: "🇦🇪", href: "/uae-tours" },
  { name: "Europe", flag: "🇪🇺", href: "/europe-tours" },
  { name: "Central Asia", flag: "🌏", href: "/central-asia-tours" },
  { name: "Russia", flag: "🇷🇺", href: "/russia-tours" },
  { name: "Greece", flag: "🇬🇷", href: "/greece-tours" },
  { name: "Turkey", flag: "🇹🇷", href: "/turkey-tours" },
];

export default function TourPackageSearch() {
  const [tourType, setTourType] = useState("GIT");
  const [from, setFrom] = useState("Manila");
  const [region, setRegion] = useState("Asia");
  const [country, setCountry] = useState("");
  const [searched, setSearched] = useState(false);

  const filteredDestinations =
    country.trim() === ""
      ? []
      : destinations.filter((destination) =>
          destination.name
            .toLowerCase()
            .includes(country.trim().toLowerCase())
        );

  const handleSearch = () => {
    setSearched(true);
  };

  const handleClear = () => {
    setCountry("");
    setSearched(false);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* SEARCH PANEL */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

          {/* HEADER */}
          <div className="px-6 md:px-10 pt-8 pb-5">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest">
              Chingu Travel & Tours
            </p>

            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
              International Tour
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Search available tour packages by destination.
            </p>
          </div>

          {/* TOUR TYPE */}
          <div className="px-6 md:px-10">
            <div className="flex gap-2 border-b border-gray-200">

              {["GIT", "FIT Land", "Tour"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => {
                    setTourType(type);
                    setSearched(false);
                  }}
                  className={`px-5 py-3 text-sm font-semibold transition ${
                    tourType === type
                      ? "text-red-600 border-b-2 border-red-600"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {type}
                </button>
              ))}

            </div>
          </div>

          {/* SEARCH FIELDS */}
          <div className="p-6 md:p-10">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* FROM */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  From
                </label>

                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm font-medium text-gray-800 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                >
                  <option value="Manila">Manila</option>
                  <option value="Clark">Clark</option>
                  <option value="Cebu">Cebu</option>
                </select>
              </div>

              {/* TO / REGION */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  To / Region
                </label>

                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm font-medium text-gray-800 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                >
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Middle East">Middle East</option>
                  <option value="Australia">Australia</option>
                  <option value="Worldwide">Worldwide</option>
                </select>
              </div>

              {/* COUNTRY */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Country
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    🔍
                  </span>

                  <input
                    type="text"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      setSearched(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    placeholder="Search country"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-4 text-sm font-medium text-gray-800 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

            </div>

            {/* SEARCH BUTTON */}
            <div className="mt-6 flex justify-center gap-3">

              <button
                type="button"
                onClick={handleSearch}
                className="w-full md:w-auto min-w-[280px] bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                🔍 INTERNATIONAL SEARCH
              </button>

              {country && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-6 py-4 rounded-xl border border-gray-200 bg-white text-gray-600 font-semibold hover:bg-gray-50 transition"
                >
                  Clear
                </button>
              )}

            </div>

          </div>
        </div>

        {/* RESULTS */}
        {searched && (
          <div className="mt-8">

            {/* NO COUNTRY */}
            {country.trim() === "" ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">

                <div className="text-4xl mb-4">
                  🔍
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  Search for a destination
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Please enter a country or destination above.
                </p>

              </div>

            ) : filteredDestinations.length > 0 ? (

              /* RESULTS FOUND */
              <div>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-widest text-red-600 font-semibold">
                    Search Results
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">
                        Available Destinations
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Results for "{country}"
                      </p>
                    </div>

                    <p className="text-sm text-gray-500">
                      {filteredDestinations.length} result
                      {filteredDestinations.length !== 1 ? "s" : ""}
                    </p>

                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                  {filteredDestinations.map((destination) => (
                    <Link
                      key={destination.name}
                      href={destination.href}
                      className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-red-300 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-4">

                        <div className="text-4xl">
                          {destination.flag}
                        </div>

                        <div className="flex-1">

                          <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                            {destination.name}
                          </h4>

                          <p className="text-sm text-gray-500 mt-1">
                            {tourType} packages
                          </p>

                          <span className="inline-block mt-3 text-sm font-semibold text-red-600">
                            View Packages →
                          </span>

                        </div>

                      </div>
                    </Link>
                  ))}

                </div>

              </div>

            ) : (

              /* NO RESULTS */
              <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">

                <div className="text-4xl mb-4">
                  🔍
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  No destination found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  We couldn't find a tour package matching "{country}".
                </p>

                <button
                  type="button"
                  onClick={handleClear}
                  className="mt-5 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition"
                >
                  Search Again
                </button>

              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
