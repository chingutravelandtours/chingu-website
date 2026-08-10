"use client";

const USD_TO_PHP = 63;

const packages = [
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Sep. 13–17, 2026",
    city: "MNL",
    usd: 899,
    slots: 0,
  },
  {
    title: "Tokyo + Mt. Fuji",
    duration: "5D4N",
    date: "Sep. 18–22, 2026",
    city: "MNL",
    usd: 799,
    slots: 0,
  },
  {
    title: "Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Sep. 25–29, 2026",
    city: "MNL",
    usd: 799,
    slots: 0,
  },
  {
    title: "Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Sep. 26–30, 2026",
    city: "MNL",
    usd: 899,
    slots: 0,
  },
  {
    title: "Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Oct. 9–13, 2026",
    city: "MNL",
    usd: 899,
    slots: 4,
  },
  {
    title: "Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Oct. 15–19, 2026",
    city: "MNL",
    usd: 899,
    slots: 8,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Oct. 17–21, 2026",
    city: "MNL",
    usd: 899,
    slots: 0,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Oct. 21–25, 2026",
    city: "MNL",
    usd: 899,
    slots: 0,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Oct. 22–26, 2026",
    city: "MNL",
    usd: 799,
    slots: 0,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Oct. 23–27, 2026",
    city: "MNL",
    usd: 899,
    slots: 0,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Oct. 24–28, 2026",
    city: "MNL",
    usd: 899,
    slots: 0,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Oct. 25–29, 2026",
    city: "MNL",
    usd: 859,
    slots: 0,
  },
  {
    title: "Japan – Osaka – Nara – Kyoto",
    duration: "5D4N",
    date: "Oct. 25–29, 2026",
    city: "CEB",
    usd: 1299,
    slots: 0,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Oct. 27–31, 2026",
    city: "CEB",
    usd: 999,
    slots: 0,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Oct. 31–Nov. 4, 2026",
    city: "MNL",
    usd: 949,
    slots: 0,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Nov. 4–8, 2026",
    city: "MNL",
    usd: 799,
    slots: 0,
  },
  {
    title: "Tokyo + Mt. Fuji",
    duration: "5D4N",
    date: "Nov. 6–10, 2026",
    city: "MNL",
    usd: 829,
    slots: 0,
  },
  {
    title: "Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Nov. 13–17, 2026",
    city: "MNL",
    usd: 899,
    slots: 0,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Nov. 14–18, 2026",
    city: "MNL",
    usd: 899,
    slots: 0,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Nov. 18–22, 2026",
    city: "MNL",
    usd: 859,
    slots: 0,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Nov. 19–23, 2026",
    city: "CEB",
    usd: 899,
    slots: 4,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Nov. 21–25, 2026",
    city: "CEB",
    usd: 999,
    slots: 0,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Nov. 21–25, 2026",
    city: "MNL",
    usd: 859,
    slots: 0,
  },
  {
    title: "Japan – Osaka – Nara – Kyoto",
    duration: "5D4N",
    date: "Nov. 25–29, 2026",
    city: "CEB",
    usd: 1499,
    slots: 30,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Nov. 25–29, 2026",
    city: "MNL",
    usd: 899,
    slots: 1,
  },
  {
    title: "CEBU – TOKYO – HAKONE",
    duration: "8D7N",
    date: "Nov. 26–Dec. 3, 2026",
    city: "CEB",
    usd: 2488,
    slots: 30,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Nov. 28–Dec. 2, 2026",
    city: "MNL",
    usd: 899,
    slots: 0,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Dec. 10–14, 2026",
    city: "CEB",
    usd: 899,
    slots: 22,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    duration: "5D4N",
    date: "Dec. 12–16, 2026",
    city: "MNL",
    usd: 859,
    slots: 4,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    duration: "5D4N",
    date: "Dec. 16–20, 2026",
    city: "MNL",
    usd: 949,
    slots: 0,
  },
];

const peso = (usd: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(usd * USD_TO_PHP);

export default function JapanToursPage() {
  const handleInquiry = (pkg: (typeof packages)[number]) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${pkg.title}
Duration: ${pkg.duration}
Departure: ${pkg.date}
Departure City: ${pkg.city}
Package From: ${peso(pkg.usd)} per person

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

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Japan Tour Packages
          </h1>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Explore our Japan tour packages, departure dates and rates.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {packages.map((pkg) => (
            <div
              key={`${pkg.title}-${pkg.date}-${pkg.city}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >

              {/* Duration + Status */}
              <div className="flex items-center justify-between gap-2">

                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full whitespace-nowrap">
                  {pkg.duration}
                </span>

                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                    pkg.slots > 0
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {pkg.slots > 0
                    ? `${pkg.slots} slots`
                    : "CLOSED"}
                </span>

              </div>

              {/* Title */}
              <h2 className="mt-4 text-base font-bold text-gray-900 min-h-[48px]">
                {pkg.title}
              </h2>

              {/* Departure */}
              <div className="mt-3">

                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Departure
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {pkg.date}
                </p>

              </div>

              {/* City */}
              <div className="mt-3">

                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Departure City
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {pkg.city}
                </p>

              </div>

              {/* Price */}
              <div className="mt-4">

                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Package From
                </p>

                <p className="text-xl font-bold text-gray-900">
                  {peso(pkg.usd)}
                </p>

                <p className="text-[10px] text-gray-400 mt-1">
                  per person
                </p>

              </div>

              {/* Inquiry */}
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
