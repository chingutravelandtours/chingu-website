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
    title: "Discover Seoul + Nami Island + Gapyeong",
    subtitle: "South Korea (3 in 1)",
    duration: "5D4N",
    dates: "Oct. 15–19, 2026",
    city: "MNL",
    price: 799 * USD_TO_PHP,
    slots: 5,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Korea Winter Wonderland Tour",
    subtitle: "Seoul + Ski Resort + Shopping",
    duration: "6D5N",
    dates: "Dec. 10–15, 2026",
    city: "MNL",
    price: 999 * USD_TO_PHP,
    slots: 10,
    deposit: 400 * USD_TO_PHP,
  },
  {
    title: "Korea Cherry Blossom Experience",
    subtitle: "Seoul + Nami Island + Palace Tour",
    duration: "5D4N",
    dates: "Mar. 25–29, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 8,
    deposit: 300 * USD_TO_PHP,
  },
];

export default function SouthKoreaToursPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-5">
      <div className="max-w-[1600px] mx-auto">

        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            South Korea Tour Packages
          </h1>

          <p className="mt-4 text-gray-500">
            Explore Seoul, Korean culture, shopping, and unforgettable experiences.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border"
            >

              <p className="text-red-600 font-semibold">
                {pkg.subtitle}
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {pkg.title}
              </h2>

              <div className="mt-5 space-y-2 text-gray-600">
                <p>Duration: {pkg.duration}</p>
                <p>Departure: {pkg.dates}</p>
                <p>From: {pkg.city}</p>
              </div>

              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Package Price
                </p>

                <p className="text-3xl font-bold text-red-600">
                  ₱{pkg.price.toLocaleString()}
                </p>
              </div>


              {pkg.deposit && (
                <p className="mt-3 text-gray-600">
                  Deposit: ₱{pkg.deposit.toLocaleString()}
                </p>
              )}


              {pkg.slots && (
                <p className="mt-2 text-sm text-gray-500">
                  Available Slots: {pkg.slots}
                </p>
              )}


              <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700">
                Reserve Now
              </button>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
