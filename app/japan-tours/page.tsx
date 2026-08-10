"use client";

const japanPackages = [
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan Tour",
    duration: "5D4N",
    dates: "Oct. 9–13, 2026",
    departure: "MNL",
    price: "₱56,637",
    slots: 4,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan Tour",
    duration: "5D4N",
    dates: "Oct. 15–19, 2026",
    departure: "MNL",
    price: "₱56,637",
    slots: 8,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan Tour",
    duration: "5D4N",
    dates: "Nov. 19–23, 2026",
    departure: "CEB",
    price: "₱56,637",
    slots: 4,
  },
  {
    title: "Japan – Osaka, Nara, Kyoto",
    subtitle: "Japan Tour",
    duration: "5D4N",
    dates: "Nov. 25–29, 2026",
    departure: "CEB",
    price: "₱94,437",
    slots: 30,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    subtitle: "Japan Tour",
    duration: "5D4N",
    dates: "Nov. 25–29, 2026",
    departure: "MNL",
    price: "₱56,637",
    slots: 1,
  },
  {
    title: "Tokyo + Hakone",
    subtitle: "Japan Tour",
    duration: "8D7N",
    dates: "Nov. 26–Dec. 3, 2026",
    departure: "CEB",
    price: "₱156,744",
    slots: 30,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan Tour",
    duration: "5D4N",
    dates: "Dec. 10–14, 2026",
    departure: "CEB",
    price: "₱56,637",
    slots: 22,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan Tour",
    duration: "5D4N",
    dates: "Dec. 12–16, 2026",
    departure: "MNL",
    price: "₱54,117",
    slots: 4,
  },
];

export default function JapanToursPage() {
  const handleInquiry = (
    title: string,
    duration: string,
    dates: string,
    departure: string,
    price: string
  ) => {
    const message = `Hello CHINGU Travel and Tours!

I would like to inquire about:

${title}
Duration: ${duration}
Departure: ${departure}
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
            Japan Tour Packages
          </h1>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Explore our available Japan tour packages,
            departure dates, starting rates, and available slots.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {japanPackages.map((pkg) => (
            <div
              key={`${pkg.title}-${pkg.dates}-${pkg.departure}`}
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

              {/* Departure Date */}
              <div className="mt-4">
                <p className="text-xs text-gray-400 uppercase">
                  Departure
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {pkg.dates}
                </p>
              </div>

              {/* Departure City */}
              <div className="mt-3">
                <p className="text-xs text-gray-400 uppercase">
                  Departure City
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {pkg.departure}
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

              {/* Slots */}
              <div className="mt-4">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-600">
                  {pkg.slots} {pkg.slots === 1 ? "Slot" : "Slots"} Available
                </span>
              </div>

              {/* Inquiry */}
              <button
                onClick={() =>
                  handleInquiry(
                    pkg.title,
                    pkg.duration,
                    pkg.dates,
                    pkg.departure,
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
