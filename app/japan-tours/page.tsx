"use client";

const packages = [
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Sep. 13–17, 2026",
    city: "MNL",
    price: "$899",
    slots: 0,
  },
  {
    title: "Tokyo + Mt. Fuji",
    duration: "5D4N",
    date: "Sep. 18–22, 2026",
    city: "MNL",
    price: "$799",
    slots: 0,
  },
  {
    title: "Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Sep. 25–29, 2026",
    city: "MNL",
    price: "$799",
    slots: 0,
  },
  {
    title: "Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Oct. 9–13, 2026",
    city: "MNL",
    price: "$899",
    slots: 4,
  },
  {
    title: "Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Oct. 15–19, 2026",
    city: "MNL",
    price: "$899",
    slots: 8,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Nov. 25–29, 2026",
    city: "MNL",
    price: "$899",
    slots: 1,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Dec. 10–14, 2026",
    city: "CEB",
    price: "$899",
    slots: 22,
  },
  {
    title: "Tokyo + Mt. Fuji",
    duration: "5D4N Winter",
    date: "Dec. 16–20, 2026",
    city: "MNL",
    price: "$999",
    slots: 19,
  },
  {
    title: "Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Jan. 14–18, 2027",
    city: "CEB",
    price: "$899",
    slots: 17,
  },
  {
    title: "Tokyo + Mt. Fuji + Kamakura",
    duration: "5D4N",
    date: "Jan. 14–18, 2027",
    city: "MNL",
    price: "$899",
    slots: 25,
  },
];

export default function JapanToursPage() {
  const handleInquiry = (pkg: (typeof packages)[number]) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${pkg.title}
Duration: ${pkg.duration}
Departure: ${pkg.date}
Departure City: ${pkg.city}
Package Price: ${pkg.price} per person

Please send me the complete package details. Thank you!`
    );

    window.open(
      `https://wa.me/639193888999?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Japan Tour Packages
          </h1>

          <p className="mt-3 text-gray-500">
            Explore our Japan tour packages, departure dates and rates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={`${pkg.title}-${pkg.date}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  {pkg.duration}
                </span>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    pkg.slots > 0
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {pkg.slots > 0
                    ? `${pkg.slots} slots`
                    : "FULL / CLOSED"}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-bold text-gray-900">
                {pkg.title}
              </h2>

              <div className="mt-4">
                <p className="text-xs text-gray-400 uppercase">
                  Departure
                </p>

                <p className="mt-1 font-semibold text-gray-700">
                  {pkg.date}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-400 uppercase">
                  Departure City
                </p>

                <p className="mt-1 font-semibold text-gray-700">
                  {pkg.city}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs text-gray-400 uppercase">
                  Package From
                </p>

                <p className="text-2xl font-bold text-gray-900">
                  {pkg.price}
                </p>

                <p className="text-xs text-gray-400">
                  per person
                </p>
              </div>

              <button
                onClick={() => handleInquiry(pkg)}
                className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-red-700 transition"
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
