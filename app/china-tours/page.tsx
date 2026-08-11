"use client";

const polarPackages = [
  {
    title: "Chongqing",
    subtitle: "Shopping Tour",
    duration: "5D3N",
    price: "₱31,437",
    description:
      "Discover Chongqing with an exciting shopping tour experience.",
  },
  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    price: "₱31,437",
    description:
      "Explore the breathtaking landscapes of Zhangjiajie.",
  },
  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    price: "₱50,337",
    description:
      "Experience the stunning scenery of Zhangjiajie and historic Fenghuang.",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    price: "₱55,944",
    description:
      "Experience three exciting Chinese destinations in one unforgettable trip.",
  },
];

const uosPackages = [
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

export default function ChinaToursPage() {
  const handleInquiry = (pkg: {
    title: string;
    duration: string;
    dates?: string;
    city?: string;
    price: string;
  }) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${pkg.title}
Duration: ${pkg.duration}
${
  pkg.dates
    ? `Departure: ${pkg.dates}\n`
    : ""
}${
  pkg.city
    ? `Departure City: ${pkg.city}\n`
    : ""
}Package From: ${pkg.price} per person

Please send me the complete package details. Thank you!`
    );

    window.open(
      `https://wa.me/63919388999?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* MAIN HEADER */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            China Tour Packages
          </h1>

          <p className="mt-3 text-gray-500">
            Explore our available China tour packages.
          </p>
        </div>

        {/* POLAR PACKAGES */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {polarPackages.map((pkg) => {
              const isPolar4D5N = pkg.duration === "4D5N";

              return (
                <div
                  key={`${pkg.title}-${pkg.duration}`}
                  className={`rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                    isPolar4D5N
                      ? "bg-blue-50 border-2 border-blue-200 shadow-md"
                      : "bg-white border border-gray-100 shadow-md"
                  }`}
                >
                  {/* BADGES */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        isPolar4D5N
                          ? "text-blue-700 bg-blue-100"
                          : "text-red-600 bg-red-50"
                      }`}
                    >
                      {pkg.duration}
                    </span>

                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isPolar4D5N
                          ? "text-blue-700 bg-blue-100"
                          : "text-gray-500 bg-gray-100"
                      }`}
                    >
                      Available
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-lg font-bold text-gray-900 min-h-[48px]">
                    {pkg.title}
                  </h3>

                  {/* TYPE */}
                  <p className="mt-2 text-xs text-gray-400">
                    {pkg.subtitle}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed min-h-[60px]">
                    {pkg.description}
                  </p>

                  {/* PRICE */}
                  <div className="mt-5">
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
                    onClick={() => handleInquiry(pkg)}
                    className={`mt-5 w-full py-2.5 rounded-xl text-sm font-semibold transition ${
                      isPolar4D5N
                        ? "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                        : "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    }`}
                  >
                    Inquire Now →
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* UOS / MORE CHINA PACKAGES */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              More China Tour Packages
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              More available China tour packages and departure dates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {uosPackages.map((pkg) => (
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
        </section>

      </div>
    </main>
  );
}
