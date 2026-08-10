"use client";

const USD_TO_PHP = 63;

const packages = [
  {
    title: "Shanghai + Anji",
    subtitle: "Skiing Tour",
    duration: "6D5N",
    dates: "Jan. 2–7, 2027",
    city: "MNL",
    usd: 728,
    slots: 36,
  },
  {
    title: "Avatar + Skiing",
    subtitle: "Via Guangzhou",
    duration: "6D5N",
    dates: "Jan. 2–7, 2027",
    city: "MNL",
    usd: 569,
    slots: 20,
  },
  {
    title: "Manila – Wuhan + Yangtze River",
    subtitle: "No Shopping",
    duration: "6D5N",
    dates: "Jan. 8–13, 2027",
    city: "MNL",
    usd: 649,
    slots: 21,
  },
  {
    title: "Avatar + Skiing",
    subtitle: "Via Guangzhou",
    duration: "6D5N",
    dates: "Jan. 9–14, 2027",
    city: "MNL",
    usd: 569,
    slots: 20,
  },
  {
    title: "Shanghai + Anji",
    subtitle: "Skiing Tour",
    duration: "6D5N",
    dates: "Jan. 9–14, 2027",
    city: "MNL",
    usd: 698,
    slots: 60,
  },
  {
    title: "Avatar Furong Town",
    subtitle: "Charter Flight",
    duration: "5D4N",
    dates: "Jan. 9–13, 2027",
    city: "MNL",
    usd: 379,
    slots: 59,
  },
  {
    title: "Shanghai + Anji",
    subtitle: "Skiing Tour",
    duration: "5D4N",
    dates: "Jan. 14–18, 2027",
    city: "MNL",
    usd: 668,
    slots: 30,
  },
  {
    title: "Avatar + Skiing",
    subtitle: "Via Guangzhou",
    duration: "7D6N",
    dates: "Jan. 14–20, 2027",
    city: "MNL",
    usd: 599,
    slots: 20,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "5D4N",
    dates: "Jan. 14–18, 2027",
    city: "MNL",
    usd: 429,
    slots: 14,
  },
  {
    title: "Harbin",
    subtitle: "No Shopping",
    duration: "5D4N",
    dates: "Jan. 14–18, 2027",
    city: "MNL",
    usd: 1358,
    slots: 32,
  },
  {
    title: "Avatar Furong + Xiamen",
    subtitle: "6+1 FOC",
    duration: "7D6N",
    dates: "Jan. 15–21, 2027",
    city: "MNL",
    usd: 499,
    slots: 30,
  },
  {
    title: "Shanghai + Anji",
    subtitle: "Skiing Tour",
    duration: "5D4N",
    dates: "Jan. 15–19, 2027",
    city: "MNL",
    usd: 668,
    slots: 30,
  },
  {
    title: "Avatar + Skiing",
    subtitle: "Via Guangzhou",
    duration: "6D5N",
    dates: "Jan. 16–21, 2027",
    city: "MNL",
    usd: 569,
    slots: 20,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Jan. 16–21, 2027",
    city: "MNL",
    usd: 449,
    slots: 30,
  },
  {
    title: "Beijing + Shanghai",
    subtitle: "Tour",
    duration: "6D5N",
    dates: "Jan. 15–20, 2027",
    city: "MNL",
    usd: 699,
    slots: 0,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Jan. 23–27, 2027",
    city: "MNL",
    usd: 429,
    slots: 54,
  },
  {
    title: "Avatar Furong Town",
    subtitle: "Charter Flight",
    duration: "5D4N",
    dates: "Jan. 23–27, 2027",
    city: "MNL",
    usd: 379,
    slots: 70,
  },
  {
    title: "Avatar + Skiing",
    subtitle: "Via Guangzhou",
    duration: "6D5N",
    dates: "Jan. 23–28, 2027",
    city: "MNL",
    usd: 569,
    slots: 20,
  },
  {
    title: "Shanghai + Anji",
    subtitle: "Skiing Tour",
    duration: "6D5N",
    dates: "Jan. 23–28, 2027",
    city: "MNL",
    usd: 698,
    slots: 20,
  },
  {
    title: "Harbin",
    subtitle: "No Shopping",
    duration: "5D4N",
    dates: "Jan. 23–27, 2027",
    city: "MNL",
    usd: 1358,
    slots: 32,
  },
  {
    title: "Avatar + Skiing",
    subtitle: "Via Guangzhou",
    duration: "7D6N",
    dates: "Jan. 28–Feb. 3, 2027",
    city: "MNL",
    usd: 599,
    slots: 20,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "5D4N",
    dates: "Jan. 28–Feb. 1, 2027",
    city: "MNL",
    usd: 429,
    slots: 19,
  },
  {
    title: "Harbin",
    subtitle: "No Shopping",
    duration: "5D4N",
    dates: "Jan. 28–Feb. 1, 2027",
    city: "MNL",
    usd: 1358,
    slots: 32,
  },
  {
    title: "Charter Flight Avatar Skiing",
    subtitle: "Charter Flight",
    duration: "5D4N",
    dates: "Jan. 28–Feb. 1, 2027",
    city: "MNL",
    usd: 499,
    slots: 80,
  },
  {
    title: "Beijing Skiing",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Jan. 28–Feb. 2, 2027",
    city: "MNL",
    usd: 519,
    slots: 15,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Feb. 20–25, 2027",
    city: "MNL",
    usd: 449,
    slots: 60,
  },
  {
    title: "Avatar + Skiing",
    subtitle: "Via Guangzhou",
    duration: "6D5N",
    dates: "Feb. 20–25, 2027",
    city: "MNL",
    usd: 569,
    slots: 20,
  },
  {
    title: "Avatar Furong Town",
    subtitle: "Charter Flight",
    duration: "5D4N",
    dates: "Feb. 20–24, 2027",
    city: "MNL",
    usd: 379,
    slots: 145,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "5D4N",
    dates: "Feb. 20–24, 2027",
    city: "MNL",
    usd: 429,
    slots: 32,
  },
  {
    title: "Charming Yunnan",
    subtitle: "No Shopping",
    duration: "8D7N",
    dates: "Feb. 19–26, 2027",
    city: "MNL",
    usd: 1788,
    slots: 26,
  },
  {
    title: "Avatar + Skiing",
    subtitle: "Via Guangzhou",
    duration: "7D6N",
    dates: "Feb. 17–23, 2027",
    city: "MNL",
    usd: 599,
    slots: 20,
  },
  {
    title: "Manila – Qingdao",
    subtitle: "Via Hong Kong • No Shopping",
    duration: "5D4N",
    dates: "Feb. 18–22, 2027",
    city: "MNL",
    usd: 999,
    slots: 21,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "5D4N",
    dates: "Feb. 18–22, 2027",
    city: "MNL",
    usd: 429,
    slots: 32,
  },
  {
    title: "Manila – Xiamen + Hua'an Tulou",
    subtitle: "Tour",
    duration: "4D3N",
    dates: "Feb. 18–21, 2027",
    city: "MNL",
    usd: 299,
    slots: 0,
  },
  {
    title: "Avatar + Furong",
    subtitle: "Via Guangzhou",
    duration: "7D6N",
    dates: "Mar. 23–29, 2027",
    city: "MNL",
    usd: 699,
    slots: 0,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "5D4N",
    dates: "Mar. 22–26, 2027",
    city: "MNL",
    usd: 529,
    slots: 39,
  },
  {
    title: "Charming Yunnan",
    subtitle: "No Shopping",
    duration: "8D7N",
    dates: "Mar. 22–29, 2027",
    city: "MNL",
    usd: 1788,
    slots: 30,
  },
];

const peso = (usd: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(usd * USD_TO_PHP);

export default function ChinaUOSPage() {
  const handleInquiry = (pkg: (typeof packages)[number]) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${pkg.title}
Duration: ${pkg.duration}
Departure: ${pkg.dates}
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
            China Tour Packages
          </h1>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Explore our latest China tour packages, departure dates,
            starting rates, and availability.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {packages.map((pkg) => (
            <div
              key={`${pkg.title}-${pkg.dates}-${pkg.city}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >

              {/* Duration + Availability */}
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

              {/* Tour Type */}
              <p className="mt-2 text-xs text-gray-400">
                {pkg.subtitle}
              </p>

              {/* Departure */}
              <div className="mt-3">

                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Departure
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {pkg.dates}
                </p>

              </div>

              {/* Departure City */}
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
                disabled={pkg.slots === 0}
                className={`mt-5 w-full py-2.5 rounded-xl text-sm font-semibold transition ${
                  pkg.slots > 0
                    ? "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                {pkg.slots > 0 ? "Inquire Now →" : "Closed"}
              </button>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
