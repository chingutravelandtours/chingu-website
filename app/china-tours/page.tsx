"use client";

type Package = {
  title: string;
  subtitle: string;
  duration: string;
  price: number;
  description?: string;
  dates?: string;
  city?: string;
  slots?: number;
};

const USD_TO_PHP = 63;

const packages: Package[] = [
  // EXISTING CHINA / POLAR PACKAGES
 {
    title: "Chongqing",
    subtitle: "Shopping",
    duration: "5D3N",
    dates: "Sep. 22–26, 2026",
    city: "MNL",
    price: 549 / USD_TO_PHP,
    slots: 20,
    Deposit: 200 / USD_TO_PHP,
  },
  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    price: 31437 / USD_TO_PHP,
    description:
      "Explore the breathtaking landscapes of Zhangjiajie.",
  },
  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    price: 50337 / USD_TO_PHP,
    description:
      "Experience the stunning scenery of Zhangjiajie and historic Fenghuang.",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    price: 55944 / USD_TO_PHP,
    description:
      "Experience three exciting Chinese destinations in one unforgettable trip.",
  },

  // ADDITIONAL CHINA / UOS PACKAGES
  {
    title: "Avatar + Furong",
    subtitle: "No Shopping",
    duration: "7D6N",
    dates: "Jan. 6–12, 2027",
    city: "MNL",
    price: 37737 / USD_TO_PHP,
    slots: 20,
  },
  {
    title: "Shanghai + Anji",
    subtitle: "Skiing Tour",
    duration: "6D5N",
    dates: "Jan. 6–11, 2027",
    city: "MNL",
    price: 43974 / USD_TO_PHP,
    slots: 60,
  },
  {
    title: "Harbin",
    subtitle: "No Shopping",
    duration: "6D5N",
    dates: "Jan. 6–11, 2027",
    city: "MNL",
    price: 87444 / USD_TO_PHP,
    slots: 18,
  },
  {
    title: "Charming Yunnan",
    subtitle: "No Shopping",
    duration: "9D8N",
    dates: "Jan. 7–15, 2027",
    city: "MNL",
    price: 87444 / USD_TO_PHP,
    slots: 12,
  },
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "5D4N",
    dates: "Feb. 19–23, 2027",
    city: "MNL",
    price: 27657 / USD_TO_PHP,
    slots: 17,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "5D4N",
    dates: "Feb. 20–24, 2027",
    city: "MNL",
    price: 27027 / USD_TO_PHP,
    slots: 32,
  },
  {
    title: "Avatar Furong Town",
    subtitle: "Charter Flight",
    duration: "5D4N",
    dates: "Feb. 20–24, 2027",
    city: "MNL",
    price: 23877 / USD_TO_PHP,
    slots: 145,
  },
  {
    title: "Beijing Skiing",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Feb. 21–26, 2027",
    city: "MNL",
    price: 32697 / USD_TO_PHP,
    slots: 13,
  },
  {
    title: "Shanghai Mini Kyoto",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Feb. 21–26, 2027",
    city: "MNL",
    price: 28287 / USD_TO_PHP,
    slots: 60,
  },
  {
    title: "Avatar Furong + Xiamen",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Feb. 26–Mar. 4, 2027",
    city: "MNL",
    price: 31437 / USD_TO_PHP,
    slots: 18,
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
              key={`${pkg.title}-${pkg.duration}-${index}`}
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

              {/* DURATION + SLOTS */}
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
