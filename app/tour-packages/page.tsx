"use client";

const packages = [
  {
    title: "Chongqing",
    subtitle: "Shopping Tour",
    duration: "5D3N",
    dates: "Aug. 22–26",
    price: "₱31,437",
    status: "CLOSED",
  },
  {
    title: "Chongqing",
    subtitle: "Shopping Tour",
    duration: "5D3N",
    dates: "Sep. 22–26",
    price: "₱34,587",
    status: "Available",
  },
  {
    title: "Chongqing",
    subtitle: "Shopping Tour",
    duration: "5D3N",
    dates: "Oct. 15–19",
    price: "₱34,587",
    status: "Available",
  },
  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Oct. 27–Nov. 1",
    price: "₱39,627",
    status: "Available",
  },
  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Nov. 10–15",
    price: "₱33,327",
    status: "13 PAX",
  },
  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Sep. 1–6",
    price: "₱50,337",
    status: "Minimum 10 Pax",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Aug. 30–Sep. 5",
    price: "₱55,944",
    status: "9 PAX",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Sep. 12–18",
    price: "₱55,944",
    status: "8 PAX",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Oct. 10–16",
    price: "₱55,944",
    status: "14 PAX",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Nov. 28–Dec. 4",
    price: "₱55,944",
    status: "20 PAX",
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

${title} - ${duration}
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
            All Tour Packages
          </h1>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Explore our available China tour packages, departure dates,
            and starting rates.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {packages.map((pkg) => (
            <div
              key={`${pkg.title}-${pkg.dates}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 hover:shadow-xl transition"
            >

              {/* Duration and Type */}
              <div className="flex items-center justify-between gap-3">

                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  {pkg.duration}
                </span>

                <span className="text-xs text-gray-500">
                  {pkg.subtitle}
                </span>

              </div>

              {/* Package Title */}
              <h2 className="mt-5 text-xl font-bold text-gray-900">
                {pkg.title}
              </h2>

              {/* Departure */}
              <div className="mt-4">

                <p className="text-xs text-gray-400 uppercase">
                  Departure
                </p>

                <p className="mt-1 font-semibold text-gray-700">
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

              {/* Availability */}
              <div className="mt-5">

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    pkg.status === "Available"
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {pkg.status}
                </span>

              </div>

              {/* WhatsApp Inquiry */}
              <button
                onClick={() =>
                  handleInquiry(
                    pkg.title,
                    pkg.duration,
                    pkg.dates,
                    pkg.price
                  )
                }
                className="mt-6 w-full border border-red-600 text-red-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-600 hover:text-white transition"
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
