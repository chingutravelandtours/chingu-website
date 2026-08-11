"use client";

const packages = [
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
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "5D4N",
    dates: "Feb. 19–23, 2027",
    city: "MNL",
    price: "₱27,657",
    slots: 17,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "5D4N",
    dates: "Feb. 20–24, 2027",
    city: "MNL",
    price: "₱27,027",
    slots: 32,
  },
  {
    title: "Avatar Furong Town",
    subtitle: "Charter Flight",
    duration: "5D4N",
    dates: "Feb. 20–24, 2027",
    city: "MNL",
    price: "₱23,877",
    slots: 145,
  },
  {
    title: "Beijing Skiing",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Feb. 21–26, 2027",
    city: "MNL",
    price: "₱32,697",
    slots: 13,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Feb. 21–26, 2027",
    city: "MNL",
    price: "₱28,287",
    slots: 60,
  },
  {
    title: "Avatar Furong + Xiamen",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Feb. 26–Mar. 4, 2027",
    city: "MNL",
    price: "₱31,437",
    slots: 18,
  },
];

export default function ChinaUOSPage() {
  const handleInquiry = (pkg: (typeof packages)[number]) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${pkg.title}
Duration: ${pkg.duration}
Departure: ${pkg.dates}
Departure City: ${pkg.city}
Package From: ${pkg.price} per person


Please send me the complete package details. Thank you!`
    );

    window.open(
      `https://wa.me/639193888999?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            China Tour Packages
          </h1>

          <p className="mt-3 text-gray-500">
            Explore our available China tour packages.
          </p>

          <div className="mt-3">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            </span>
          </div>
        </div>

        {/* PACKAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {packages.map((pkg) => (
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
              <h2 className="mt-4 text-base font-bold text-gray-900 min-h-[48px]">
                {pkg.title}
              </h2>

              {/* TOUR TYPE */}
              <p className="mt-2 text-xs text-gray-400">
                {pkg.subtitle}
              </p>

              {/* DEPARTURE */}
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

              {/* SUPPLIER */}
              <div className="mt-3">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Supplier
                </p>

                <p className="text-xs font-semibold text-gray-600">
                  UOS Travel
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => handleInquiry(pkg)}
                className="mt-5 w-full border border-red-600 text-red-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-600 hover:text-white transition"
              >
                Inquire Now →
              </button>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
