"use client";

const packages = [
  // =========================
  // TAIWAN
  // =========================

  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Aug. 13–16, 2026",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 0,
  },
  {
    title: "Hong Kong + Macau + Shenzhen + Canton + Zhuhai",
    duration: "5D4N",
    date: "Aug. 19–23, 2026",
    city: "MNL",
    price: "$328",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Hong Kong + Shenzhen + Zhuhai",
    duration: "4D3N",
    date: "Aug. 19–22, 2026",
    city: "MNL",
    price: "$299",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Shenzhen + Zhuhai + Hong Kong Disneyland",
    duration: "5D4N",
    date: "Aug. 19–23, 2026",
    city: "DVO",
    price: "$409",
    downpayment: "$250",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Macau + Chikan + Canton + Zhongshan + Zhuhai",
    duration: "5D4N",
    date: "Aug. 19–23, 2026",
    city: "MNL",
    price: "$269",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Aug. 20–23, 2026",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 1,
  },
  {
    title: "Macau + Chikan + Canton + Zhongshan + Zhuhai",
    duration: "5D4N",
    date: "Aug. 20–24, 2026",
    city: "MNL",
    price: "$269",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Hong Kong + Macau + Shenzhen + Canton + Zhuhai",
    duration: "5D4N",
    date: "Aug. 20–24, 2026",
    city: "MNL",
    price: "$348",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Macau + Chikan + Canton + Zhongshan + Zhuhai",
    duration: "5D4N",
    date: "Aug. 21–25, 2026",
    city: "MNL",
    price: "$269",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Hong Kong + Macau + Shenzhen + Canton + Zhuhai",
    duration: "5D4N",
    date: "Aug. 21–25, 2026",
    city: "MNL",
    price: "$348",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Aug. 22–25, 2026",
    city: "MNL",
    price: "$459",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 0,
  },
  {
    title: "Shenzhen + Zhuhai + Hong Kong Disneyland",
    duration: "5D4N",
    date: "Aug. 26–30, 2026",
    city: "DVO",
    price: "$409",
    downpayment: "$250",
    airline: "Cebu Pacific",
    slots: 1,
  },
  {
    title: "Hong Kong + Shenzhen + Zhuhai",
    duration: "5D4N",
    date: "Aug. 26–30, 2026",
    city: "CEB",
    price: "$369",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Hong Kong Disneyland + Macau + Shenzhen + Zhuhai",
    duration: "4D3N",
    date: "Aug. 26–29, 2026",
    city: "MNL",
    price: "$439",
    downpayment: "$300",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Hong Kong + Shenzhen + Zhuhai",
    duration: "4D3N",
    date: "Aug. 27–30, 2026",
    city: "MNL",
    price: "$299",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Aug. 27–30, 2026",
    city: "MNL",
    price: "$479",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 0,
  },
  {
    title: "Macau + Chikan + Canton + Zhongshan + Zhuhai",
    duration: "5D4N",
    date: "Aug. 27–31, 2026",
    city: "MNL",
    price: "$269",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Hong Kong + Macau + Shenzhen + Canton + Zhuhai",
    duration: "5D4N",
    date: "Aug. 28–Sep. 1, 2026",
    city: "MNL",
    price: "$328",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Macau + Chikan + Canton + Zhongshan + Zhuhai",
    duration: "5D4N",
    date: "Aug. 28–Sep. 1, 2026",
    city: "MNL",
    price: "$269",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },
  {
    title: "Hong Kong + Macau + Shenzhen + Canton + Zhuhai",
    duration: "6D5N",
    date: "Sep. 3–8, 2026",
    city: "MNL",
    price: "$368",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 12,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Sep. 3–6, 2026",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 0,
  },
  {
    title: "Hong Kong Disneyland + Macau + Shenzhen + Zhuhai",
    duration: "4D3N",
    date: "Sep. 3–6, 2026",
    city: "MNL",
    price: "$439",
    downpayment: "$300",
    airline: "Cebu Pacific",
    slots: 1,
  },
  {
    title: "Hong Kong + Shenzhen + Zhuhai",
    duration: "5D4N",
    date: "Sep. 4–8, 2026",
    city: "CEB",
    price: "$369",
    downpayment: "$150",
    airline: "Cebu Pacific",
    slots: 0,
  },

  // =========================
  // 2027 HONG KONG + MACAU
  // =========================

  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Apr. 10–13, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 4,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Apr. 15–18, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 30,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Apr. 22–25, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 30,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "May 6–9, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 30,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "May 14–17, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 30,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "May 21–24, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 26,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "May 29–Jun. 1, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 25,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Jun. 4–7, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 30,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Jun. 10–13, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 30,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Jun. 17–20, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 30,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Jun. 24–27, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 30,
  },
  {
    title: "Hong Kong + Macau",
    duration: "4D3N",
    date: "Jul. 1–4, 2027",
    city: "MNL",
    price: "$449",
    downpayment: "$200",
    airline: "Cebu Pacific Air",
    slots: 30,
  },
];

export default function taiwanPage() {
  const handleInquiry = (pkg: (typeof packages)[number]) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${pkg.title}
Duration: ${pkg.duration}
Departure: ${pkg.date}
Departure City: ${pkg.city}
Package Price: ${pkg.price} per person
Downpayment: ${pkg.downpayment} per person
Airline: ${pkg.airline}


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
           Taiwan Tour Packages
          </h1>

          <p className="mt-3 text-gray-500">
            Available Taiwan tour packages
          </p>
        </div>

        {/* PACKAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {packages.map((pkg) => (
            <div
              key={`${pkg.title}-${pkg.date}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >

              {/* TOP BADGES */}
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
                    : "FULL / CLOSED"}
                </span>

              </div>

              {/* TITLE */}
              <h2 className="mt-4 text-base font-bold text-gray-900 min-h-[48px]">
                {pkg.title}
              </h2>

              {/* SUPPLIER */}
              <p className="mt-2 text-xs text-gray-400">
                 Taiwan
              </p>

              {/* DATE */}
              <div className="mt-4">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Departure
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {pkg.date}
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

              {/* DOWNPAYMENT */}
              <div className="mt-3">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Downpayment
                </p>

                <p className="text-sm font-semibold text-gray-700">
                  {pkg.downpayment} / person
                </p>
              </div>

              {/* AIRLINE */}
              <div className="mt-3">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Airline
                </p>

                <p className="text-xs font-medium text-gray-600">
                  {pkg.airline}
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
