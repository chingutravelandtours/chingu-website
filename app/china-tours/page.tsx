"use client";

type Package = {
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description?: string;
  dates?: string;
  city?: string;
  slots?: number;
};

const packages: Package[] = [
  // EXISTING CHINA PACKAGES
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

  // ADDITIONAL CHINA PACKAGES
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
  const handleInquiry = (pkg: Package) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${pkg.title}
Duration: ${pkg.duration}
${pkg.dates ? `Departure: ${pkg.dates}\n` : ""}
${pkg.city ? `Departure City: ${pkg.city}\n` : ""}
Package From: ${pkg.price} per person

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
            Explore our available China tour packages.
          </p>
        </div>

        {/* ALL CHINA PACKAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {packages.map((pkg, index) => (
            <div
              key={`${pkg.title}-${pkg.duration}-${index}`}
              className="
                bg-white
                rounded-2xl
                border-2
                border-red-100
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

                {pkg.slots !== undefined ? (
                  <span
                    className="
                      text-xs
                      font-semibold
                      px-2.5
                      py-1.5
                      rounded-full
                      bg-red-50
                      text-red-600
                    "
                  >
                    {pkg.slots} slots
                  </span>
                ) : (
                  <span
                    className="
                      text-xs
                      font-semibold
                      px-2.5
                      py-1.5
                      rounded-full
                      bg-red-50
                      text-red-600
                    "
                  >
                    Available
                  </span>
                )}

              </div>

              {/* TITLE */}
              <h2 className="mt-4 text-lg font-bold text-gray-900 min-h-[52px]">
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
                  {pkg.price}
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
