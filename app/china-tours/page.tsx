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
  {
    title: "Chongqing",
    subtitle: "Shopping",
    duration: "5D3N",
    dates: "Sep. 22–26, 2026",
    city: "MNL",
    price: 499 * USD_TO_PHP,
    slots: 20,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Chongqing",
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
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Sep. 1–6, 2026",
    city: "MNL",
    price: 749 * USD_TO_PHP,
    minimum: 10,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Sep. 1–6, 2026",
    city: "MNL",
    price: 729 * USD_TO_PHP,
    minimum: 15,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Sep. 1–6, 2026",
    city: "MNL",
    price: 699 * USD_TO_PHP,
    minimum: 20,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Oct. 27–Nov. 1, 2026",
    city: "MNL",
    price: 749 * USD_TO_PHP,
    minimum: 10,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Oct. 27–Nov. 1, 2026",
    city: "MNL",
    price: 729 * USD_TO_PHP,
    minimum: 15,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Oct. 27–Nov. 1, 2026",
    city: "MNL",
    price: 699 * USD_TO_PHP,
    minimum: 20,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Nov. 10–15, 2026",
    city: "MNL",
    price: 749 * USD_TO_PHP,
    minimum: 10,
    deposit: 200 * USD_TO_PHP,
  },

  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Nov. 10–15, 2026",
    city: "MNL",
    price: 729 * USD_TO_PHP,
    minimum: 15,
    deposit: 200 * USD_TO_PHP,
  },

  {
  title: "Chongqing + Zhangjiajie + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Sep. 12–18, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: 8,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Chongqing + Zhangjiajie + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Oct. 10–16, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: 14,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Chongqing + Zhangjiajie + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Oct. 26 – Nov. 2, 2026",
  city: "MNL",
  price: 988 * USD_TO_PHP,
  slots: 6,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Chongqing + Zhangjiajie + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Nov. 16–22, 2026",
  city: "MNL",
  price: 888 * USD_TO_PHP,
  slots: 5,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Chongqing + Zhangjiajie + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Nov. 28 – Dec. 4, 2026",
  city: "MNL",
  price: 888 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Chongqing + Zhangjiajie + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Dec. 21–27, 2026",
  city: "MNL",
  price: 1033 * USD_TO_PHP,
  slots: 11,
  deposit: 400 * USD_TO_PHP,
},
  
 {
  title: "Beijing",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Sep. 13–16, 2026",
  city: "MNL",
  price: 449 * USD_TO_PHP,
  slots: 16,
  deposit: 200 * USD_TO_PHP,
}, 

  {
  title: "Beijing",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Oct. 12–18, 2026",
  city: "MNL",
  price: 499 * USD_TO_PHP,
  slots: 3,
  deposit: 200 * USD_TO_PHP,
},

  {
  title: "Beijing",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Nov. 1–4, 2026",
  city: "MNL",
  price: 499 * USD_TO_PHP,
  slots: 5,
  deposit: 200 * USD_TO_PHP,
},

  {
  title: "Beijing",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Dec. 20-23, 2026",
  city: "MNL",
  price: 649 * USD_TO_PHP,
  slots: 20,
  deposit: 200 * USD_TO_PHP,
},

  {
  title: "Beijing",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Dec. 31, 2026 - Jan. 3, 2027",
  city: "MNL",
  price: 599 * USD_TO_PHP,
  slots: 20,
  deposit: 200 * USD_TO_PHP,
},

  {
  title: "Beijing + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Sep. 13-19, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: 16,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Beijing + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Oct. 12-18, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Beijing + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Oct. 25-31, 2026",
  city: "MNL",
  price: 888 * USD_TO_PHP,
  slots: 3,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Beijing + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Nov. 1-7, 2026",
  city: "MNL",
  price: 888 * USD_TO_PHP,
  slots: 18,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Beijing + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Dec. 20-26, 2026",
  city: "MNL",
  price: 1038 * USD_TO_PHP,
  slots: 15,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Beijing + Shanghai",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Dec. 31, 2026 - Jan. 6, 2027",
  city: "MNL",
  price: 983 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Beijing + Inner Mongolia",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Oct. 12-18, 2026",
  city: "MNL",
  price: 799 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},
  
{
  title: "Beijing + Xi'an",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Aug. 23–29, 2026",
  city: "MNL",
  price: 919 * USD_TO_PHP,
  slots: 15,
  deposit: 400 * USD_TO_PHP,
},
  
{
  title: "Beijing + Xi'an",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Sep. 13–19, 2026",
  city: "MNL",
  price: 919 * USD_TO_PHP,
  slots: 18,
  deposit: 400 * USD_TO_PHP,
},
  
{
  title: "Beijing + Xi'an",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Oct. 12–18, 2026 (NEW DATE)",
  city: "MNL",
  price: 919 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},
  
{
  title: "Beijing + Xi'an",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Oct. 25–31, 2026 (+$50)",
  city: "MNL",
  price: 919 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},
  
{
  title: "Beijing + Xi'an",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Nov. 1–7, 2026 (+$50)",
  city: "MNL",
  price: 919 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},
  
{
  title: "Beijing + Xi'an",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Dec. 20–26, 2026 (+$200)",
  city: "MNL",
  price: 919 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},
  
{
  title: "Beijing + Xi'an",
  subtitle: "Shopping",
  duration: "7D6N",
  dates: "Dec. 31, 2026–Jan. 6, 2027 (+$150)",
  city: "MNL",
  price: 919 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},

{
  title: "Shanghai",
  subtitle: "Purefun",
  duration: "4D3N",
  dates: "Sep. 16–19, 2026",
  city: "MNL",
  price: 549 * USD_TO_PHP,
  slots: 20,
  deposit: 200 * USD_TO_PHP,
},

{
  title: "Shanghai",
  subtitle: "Purefun",
  duration: "4D3N",
  dates: "Oct. 28–31, 2026 (+$50)",
  city: "MNL",
  price: 599 * USD_TO_PHP,
  slots: 10,
  deposit: 200 * USD_TO_PHP,
},

{
  title: "Shanghai",
  subtitle: "Purefun",
  duration: "4D3N",
  dates: "Nov. 4–7, 2026",
  city: "MNL",
  price: 549 * USD_TO_PHP,
  slots: 10,
  deposit: 200 * USD_TO_PHP,
},

{
  title: "Shanghai",
  subtitle: "Purefun",
  duration: "4D3N",
  dates: "Dec. 23–26, 2026 (+$100)",
  city: "MNL",
  price: 649 * USD_TO_PHP,
  slots: 20,
  deposit: 200 * USD_TO_PHP,
},

{
  title: "Shanghai",
  subtitle: "Purefun",
  duration: "4D3N",
  dates: "Jan. 3–6, 2027 (+$50)",
  city: "MNL",
  price: 599 * USD_TO_PHP,
  slots: 20,
  deposit: 200 * USD_TO_PHP,
},

  {
  title: "Winter Harbin",
  subtitle: "Purefun",
  duration: "6D5N",
  dates: "Dec. 17–22, 2026",
  city: "MNL",
  price: 1249 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},

{
  title: "Winter Harbin",
  subtitle: "Purefun",
  duration: "5D4N",
  dates: "Dec. 23–27, 2026 (+$200)",
  city: "MNL",
  price: 1449 * USD_TO_PHP,
  slots: 17,
  deposit: 400 * USD_TO_PHP,
},

{
  title: "Winter Harbin",
  subtitle: "Purefun",
  duration: "5D4N",
  dates: "Dec. 30, 2026–Jan. 3, 2027 (+$200)",
  city: "MNL",
  price: 1449 * USD_TO_PHP,
  slots: 18,
  deposit: 400 * USD_TO_PHP,
},

{
  title: "Winter Harbin",
  subtitle: "Purefun",
  duration: "7D6N",
  dates: "Jan. 3–9, 2027",
  city: "MNL",
  price: 1249 * USD_TO_PHP,
  slots: 18,
  deposit: 400 * USD_TO_PHP,
},

{
  title: "Winter Harbin",
  subtitle: "Purefun",
  duration: "6D5N",
  dates: "Jan. 14–19, 2027",
  city: "MNL",
  price: 1249 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},

{
  title: "Winter Harbin",
  subtitle: "Purefun",
  duration: "5D4N",
  dates: "Feb. 16–20, 2027",
  city: "MNL",
  price: 1249 * USD_TO_PHP,
  slots: 20,
  deposit: 400 * USD_TO_PHP,
},

  {
  title: "Autumn Canton Fair: Phase 1",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Oct. 16–19, 2026 (+$100)",
  city: "MNL",
  price: 1249 * USD_TO_PHP,
  slots: 4,
  deposit: 500 * USD_TO_PHP,
},

  {
  title: "YiWu International Trade Market",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Jul. 12–15, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: undefined,
  deposit: 500 * USD_TO_PHP,
},

{
  title: "YiWu International Trade Market",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Jul. 26–29, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: undefined,
  deposit: 500 * USD_TO_PHP,
},

{
  title: "YiWu International Trade Market",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Aug. 9–12, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: undefined,
  deposit: 500 * USD_TO_PHP,,
},

{
  title: "YiWu International Trade Market",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Aug. 23–26, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: undefined,
  deposit: 500 * USD_TO_PHP,
},

{
  title: "YiWu International Trade Market",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Sep. 6–9, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: undefined,
  deposit: 500 * USD_TO_PHP,
},

{
  title: "YiWu International Trade Market",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Sep. 20–23, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: 20,
  deposit: 500 * USD_TO_PHP,
},

{
  title: "YiWu International Trade Market",
  subtitle: "Shopping",
  duration: "4D3N",
  dates: "Oct. 18–21, 2026",
  city: "MNL",
  price: 838 * USD_TO_PHP,
  slots: 20,
  deposit: 500 * USD_TO_PHP,
},

  {
  title: "GuangZhou",
  subtitle: "Land Tour Purefun",
  duration: "4D3N",
  dates: "Flexible Schedule (Peak dates are subject to surcharge)",
  city: "MNL",
  price: 349 * USD_TO_PHP,
  slots: 20,
  deposit: 200 * USD_TO_PHP,
},

{
  title: "XinJiang",
  subtitle: "Land Tour Purefun",
  duration: "4D3N",
  dates: "Flexible Schedule (Peak dates are subject to surcharge)",
  city: "MNL",
  price: 849 * USD_TO_PHP,
  slots: 20,
  deposit: 500 * USD_TO_PHP,
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
