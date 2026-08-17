"use client";

const USD_TO_PHP = 63;

type Package = {
  title: string;
  subtitle: string;
  duration: string;
  dates: string;
  city: string;
  price: number;
  slots?: number;
  deposit?: number;
};

const packages: Package[] = [
  {
    title: "Discover Taipei + Jiufen + Shifen",
    subtitle: "Taiwan (3 in 1)",
    duration: "5D4N",
    dates: "Sep. 18–22, 2026",
    city: "MNL",
    price: 699 * USD_TO_PHP,
    slots: 8,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Taiwan Food & Culture Experience",
    subtitle: "Taipei + Night Markets",
    duration: "4D3N",
    dates: "Oct. 10–13, 2026",
    city: "MNL",
    price: 599 * USD_TO_PHP,
    slots: 10,
    deposit: 250 * USD_TO_PHP,
  },
  {
    title: "Taiwan Family Adventure Tour",
    subtitle: "Taipei + Yehliu + Yangmingshan",
    duration: "6D5N",
    dates: "Dec. 5–10, 2026",
    city: "MNL",
    price: 799 * USD_TO_PHP,
    slots: 6,
    deposit: 300 * USD_TO_PHP,
  },
];

export default function TaiwanToursPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-5">
      <div className="max-w-[1600px] mx-auto">

        <div className="text-center mb-12">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Taiwan Tour Packages
          </h1>

          <p className="mt-4 text-gray-500">
            Explore our Taiwan tour packages, departure dates and rates.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((pkg, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition"
            >

              <p className="text-5xl font-bold text-gray-100">
                TW
              </p>


              <p className="mt-5 text-red-600 font-semibold">
                {pkg.subtitle}
              </p>


              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {pkg.title}
              </h2>


              <div className="mt-5 space-y-2 text-gray-600">

                <p>
                  Duration: {pkg.duration}
                </p>

                <p>
                  Departure: {pkg.dates}
                </p>

                <p>
                  From: {pkg.city}
                </p>

              </div>


              <div className="mt-6">

                <p className="text-sm text-gray-500">
                  Package Price
                </p>

                <p className="text-3xl font-bold text-red-600">
                  ₱{pkg.price.toLocaleString()}
                </p>

              </div>


              {pkg.deposit && (
                <p className="mt-3 text-gray-600">
                  Deposit:
                  {" "}
                  ₱{pkg.deposit.toLocaleString()}
                </p>
              )}


              {pkg.slots && (
                <p className="mt-2 text-sm text-gray-500">
                  Available Slots: {pkg.slots}
                </p>
              )}


              <button
                className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700"
              >
                Reserve Now →
              </button>


            </div>

          ))}

        </div>

      </div>
    </main>
  );
}
