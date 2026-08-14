"use client";

type Package = {
  title: string;
  subtitle: string;
  duration: string;
  price: number;
  deposit?: number;
  minimum?: number;
  description?: string;
  dates?: string;
  city?: string;
  slots?: number;
};

const USD_TO_PHP = 63;

const packages: Package[] = [
  // =========================
  // POLAR PACKAGES
  // =========================
 {
    title: "ChongQing",
    subtitle: "Shopping",
    duration: "5D3N",
    dates: "Sep. 22–26, 2026",
    dates: "Oct. 15–19, 2026",
    city: "MNL",
    price: 499 * USD_TO_PHP,
    slots: 20,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "ChongQing",
    subtitle: "Shopping",
    duration: "5D3N",
    dates: "Oct. 15–19, 2026",
    city: "MNL",
    price: 499 * USD_TO_PHP,
    slots: 20,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping",
    duration: "6D5N",
    dates: "Oct. 27–Nov. 1, 2026",
    city: "MNL",
    price: 579 * USD_TO_PHP,
    slots: 15,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping",
    duration: "6D5N",
    dates: "Nov. 10–15, 2026",
    city: "MNL",
    price: 479 * USD_TO_PHP,
    slots: 13,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Sep. 1–6, 2026",
    city: "MNL",
    price: 749 * USD_TO_PHP,
    minimum: 10,
    deposit: 200 * USD_TO_PHP,
  },

 {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Oct. 27–Nov. 1, 2026",
    city: "MNL",
    price: 729 * USD_TO_PHP,
    minimum: 15,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Nov. 10–15, 2026",
    city: "MNL",
    price: 699 * USD_TO_PHP,
    minimum: 20,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Dec. 22–27, 2026",
    city: "MNL",
    price: 699 * USD_TO_PHP,
    minimum: 20,
    deposit: 200 * USD_TO_PHP,
  },
];

export default function ChinaToursPage() {
  const formatPeso = (amount: number) => {
    return `₱${Math.round(amount).toLocaleString("en-PH")}`;
  };

  const handleInquiry = (pkg: Package) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${pkg.title}
Duration: ${pkg.duration}
${pkg.dates ? `Departure: ${pkg.dates}\n` : ""}
${pkg.city ? `Departure City: ${pkg.city}\n` : ""}
Package From: ${formatPeso(pkg.price)} per person
${pkg.deposit !== undefined ? `Deposit: ${formatPeso(pkg.deposit)}\n` : ""}
${pkg.minimum !== undefined ? `Minimum: ${pkg.minimum} pax\n` : ""}

Please send me the complete package details. Thank you!`
    );

    window.open(
      `https://wa.me/63919388999?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-5">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            China Tour Packages
          </h1>

          <p className="mt-4 text-gray-500">
            Explore our China tour packages, departure dates and rates.
          </p>
        </div>

        {/* CHINA PACKAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {packages.map((pkg, index) => (
            <div
              key={`${pkg.title}-${pkg.duration}-${pkg.dates}-${index}`}
              className="
                bg-white
                rounded-2xl
                border
                border-gray-100
                shadow-md
                p-5
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                flex
                flex-col
              "
            >

              {/* DURATION + AVAILABILITY */}
              <div className="flex items-center justify-between gap-2">

                {/* RED DURATION */}
                <span
                  className="
                    text-xs
                    font-bold
                    px-3
                    py-1.5
                    rounded-full
                    bg-red-50
                    text-red-600
                  "
                >
                  {pkg.duration}
                </span>

                {/* GREEN AVAILABILITY */}
                <span
                  className="
                    text-xs
                    font-semibold
                    px-2.5
                    py-1.5
                    rounded-full
                    bg-green-50
                    text-green-600
                  "
                >
                  {pkg.slots !== undefined
                    ? `${pkg.slots} slots`
                    : "Available"}
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

              {/* DESCRIPTION */}
              {pkg.description && (
                <p className="mt-5 text-sm text-gray-500 leading-relaxed min-h-[60px]">
                  {pkg.description}
                </p>
              )}

              {/* DEPARTURE */}
              {pkg.dates && (
                <div className="mt-5">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                    Departure
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    {pkg.dates}
                  </p>
                </div>
              )}

              {/* DEPARTURE CITY */}
              {pkg.city && (
                <div className="mt-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                    Departure City
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    {pkg.city}
                  </p>
                </div>
              )}

              {/* MINIMUM */}
              {pkg.minimum !== undefined && (
                <div className="mt-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                    Minimum
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    {pkg.minimum} pax
                  </p>
                </div>
              )}

              {/* PRICE */}
              <div className="mt-auto pt-5">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Package From
                </p>

                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {formatPeso(pkg.price)}
                </p>

                <p className="text-[10px] text-gray-400">
                  per person
                </p>
              </div>

              {/* DEPOSIT */}
              {pkg.deposit !== undefined && (
                <div className="mt-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                    Deposit
                  </p>

                  <p className="mt-1 text-sm font-bold text-gray-700">
                    {formatPeso(pkg.deposit)}
                  </p>
                </div>
              )}

              {/* INQUIRE BUTTON */}
              <button
                onClick={() => handleInquiry(pkg)}
                className="
                  mt-5
                  w-full
                  py-2.5
                  rounded-xl
                  text-sm
                  font-semibold
                  border-2
                  border-red-600
                  text-red-600
                  hover:bg-red-600
                  hover:text-white
                  transition
                "
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
