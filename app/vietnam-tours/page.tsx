"use client";

const USD_TO_PHP = 63;

type Package = {
  title: string;
  subtitle: string;
  duration: string;
  dates: string;
  city: string;
  price: number;
};

const packages: Package[] = [
  {
    title: "Discover Da Nang – Ba Na Hills – Hoi An",
    subtitle: "Land Tour Only",
    duration: "4D3N",
    dates: "Flexible Dates",
    city: "DAD",
    price: 135 * USD_TO_PHP,
  },
  {
    title: "Da Nang + Ba Na Hills + Hoi An",
    subtitle: "Land Tour Only",
    duration: "4D3N",
    dates: "Flexible Dates",
    city: "DAD",
    price: 134 * USD_TO_PHP,
  },
  {
    title: "Da Nang + Ba Na Hills + Hoi An + Hue",
    subtitle: "Land Tour Only",
    duration: "5D4N",
    dates: "Flexible Dates",
    city: "DAD",
    price: 185 * USD_TO_PHP,
  },
  {
    title: "Hanoi + Ha Long + Ninh Binh + Da Nang + Hoi An",
    subtitle: "Land Tour Only",
    duration: "7D6N",
    dates: "Flexible Dates",
    city: "HAN",
    price: 255 * USD_TO_PHP,
  },
  {
    title: "Ho Chi Minh + Da Nang + Hoi An + Hanoi",
    subtitle: "Land Tour Only",
    duration: "10D9N",
    dates: "Flexible Dates",
    city: "SGN",
    price: 361 * USD_TO_PHP,
  },
];

const peso = (amount: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);

export default function VietnamToursPage() {
  const handleInquiry = (pkg: Package) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${pkg.title}
Package Type: ${pkg.subtitle}
Duration: ${pkg.duration}
Departure: ${pkg.dates}
Departure City: ${pkg.city}

Package From: ${peso(pkg.price)} per person

Please send me the complete package details, inclusions, exclusions, available dates, and booking requirements.

I understand that hotel accommodation and international airfare are not included in the land tour package.

Thank you!`
    );

    window.open(
      `https://wa.me/63919388999?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-5">
      <div className="max-w-[1600px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Vietnam Land Tour Packages
          </h1>

          <p className="mt-4 text-gray-500">
            Explore Vietnam with our flexible land tour packages.
          </p>

          <div className="mt-5 inline-block bg-red-50 border border-red-100 rounded-xl px-5 py-3">
            <p className="text-sm font-semibold text-red-600">
              Land Tour Only
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Hotel accommodation and international airfare are not included.
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Hotel and flights can be arranged upon request.
            </p>
          </div>
        </div>

        {/* PACKAGE GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-4
          "
        >
          {packages.map((pkg, index) => (
            <div
              key={`${pkg.title}-${index}`}
              className="
                bg-white
                rounded-2xl
                border
                border-gray-100
                shadow-md
                p-4
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                flex
                flex-col
              "
            >

              {/* DURATION */}
              <span
                className="
                  w-fit
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

              {/* TITLE */}
              <h2
                className="
                  mt-4
                  text-sm
                  font-bold
                  text-gray-900
                  min-h-[45px]
                "
              >
                {pkg.title}
              </h2>

              {/* PACKAGE TYPE */}
              <p className="mt-2 text-xs font-semibold text-red-600">
                {pkg.subtitle}
              </p>

              {/* DEPARTURE */}
              <div className="mt-4">
                <p className="text-[10px] uppercase text-gray-400">
                  Departure
                </p>

                <p className="mt-1 text-xs font-semibold text-gray-700">
                  {pkg.dates}
                </p>
              </div>

              {/* CITY */}
              <div className="mt-3">
                <p className="text-[10px] uppercase text-gray-400">
                  Departure City
                </p>

                <p className="mt-1 text-xs font-semibold text-gray-700">
                  {pkg.city}
                </p>
              </div>

              {/* PRICE */}
              <div className="mt-auto pt-5">
                <p className="text-[10px] uppercase text-gray-400">
                  Package From
                </p>

                <p className="mt-1 text-lg font-bold text-gray-900">
                  {peso(pkg.price)}
                </p>

                <p className="text-[10px] text-gray-400">
                  per person
                </p>
              </div>

              {/* EXCLUSIONS */}
              <div className="mt-4 bg-gray-50 rounded-xl p-3">
                <p className="text-[10px] font-bold uppercase text-gray-400">
                  Not Included
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  Hotel accommodation
                </p>

                <p className="text-xs text-gray-600">
                  International airfare
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => handleInquiry(pkg)}
                className="
                  mt-5
                  w-full
                  py-2
                  rounded-xl
                  text-xs
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

        {/* FOOTER NOTE */}
        <div className="mt-10 text-center">
          <p className="text-xs font-semibold text-gray-600">
            Land Tour Only — Hotel & International Airfare Not Included
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Hotel accommodation and flights can be arranged separately upon request.
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Rates are subject to availability and confirmation.
          </p>
        </div>

      </div>
    </main>
  );
}
