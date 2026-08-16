"use client";

const packages = [
  // =========================
  // AVAILABILITY
  // =========================
  {
  title: "Adora Magic City Cruise",
  subtitle: "Fly + Cruise (China Shenzhen + Vietnam Nha Trang)",
  duration: "8D7N",
  dates: "Aug. 21–28, 2026",
  price: "$1,388",
  status: "20 SLOTS",
},

  {
  title: "Hong Kong + Macau",
  subtitle: "Hong Kong + Macau Tour",
  duration: "4D3N",
  dates: "Aug. 22–25, 2026",
  price: "$459",
  status: "2 SLOTS",
},

  {
  title: "Manila-Danang",
  subtitle: "Charter Flight",
  duration: "5D3N",
  dates: "Aug. 26–29, 2026",
  price: "₱24,888",
  status: "1 SLOT",
},

  {
  title: "Chongqing + Chengdu",
  subtitle: "China Air China Tour",
  duration: "5D4N",
  dates: "Aug. 27–31, 2026",
  price: "$389",
  status: "1 SLOT",
},

  {
  title: "Hanoi Sapa Ha Long Bay",
  subtitle: "Vietnam Tour",
  duration: "5D4N",
  dates: "Aug. 27–31, 2026",
  price: "₱39,888",
  status: "1 SLOT",
},

  {
  title: "Cebu - Shanghai Mini Kyoto",
  subtitle: "China Eastern Airlines Tour",
  duration: "5D4N",
  dates: "Aug. 30–Sep. 03, 2026",
  price: "$478",
  status: "19 SLOTS",
},
];

export default function TourPackagesPage() {
  const handleInquiry = (
    title: string,
    duration: string,
    dates: string,
    price: string
  ) => {
    const message = `Hello CHINGU Travel and Tours!

I would like to inquire about:

${title}
Duration: ${duration}
Date: ${dates}
Package From: ${price} per person

Please send me the complete package details. Thank you!`;

    window.open(
      `https://wa.me/639193888999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            China Tour Packages
          </h1>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Explore our China tour packages, departure dates,
            starting rates, and availability.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {packages.map((pkg) => (
            <div
              key={`${pkg.title}-${pkg.dates}`}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition flex flex-col"
            >

              {/* Duration + Type */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  {pkg.duration}
                </span>

                <span className="text-xs text-gray-500 text-right">
                  {pkg.subtitle}
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-4 text-lg font-bold text-gray-900 min-h-[52px]">
                {pkg.title}
              </h2>

              {/* Departure */}
              <div className="mt-4">
                <p className="text-xs text-gray-400 uppercase">
                  Departure
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {pkg.dates}
                </p>
              </div>

              {/* Price */}
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

              {/* Status */}
              <div className="mt-4">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                    pkg.status === "Available"
                      ? "bg-green-50 text-green-600"
                      : pkg.status === "SOLD OUT" ||
                        pkg.status === "CLOSED"
                      ? "bg-gray-100 text-gray-500"
                      : pkg.status.includes("FULL")
                      ? "bg-red-50 text-red-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {pkg.status}
                </span>
              </div>

              {/* Inquiry */}
              <button
                onClick={() =>
                  handleInquiry(
                    pkg.title,
                    pkg.duration,
                    pkg.dates,
                    pkg.price
                  )
                }
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
