"use client";

type Package = {
  title: string;
  subtitle: string;
  duration: string;
  destinations: string;
  priceUSD: number;
  pricePHP: number;
  bookingType: string;
  inclusions: string[];
};

const packages: Package[] = [
  {
    title: "Discover Da Nang – Ba Na Hills – Hoi An",
    subtitle: "Vietnam • SIC Tour",
    duration: "4D3N",
    destinations: "Da Nang • Ba Na Hills • Marble Mountains • Hoi An",
    priceUSD: 127,
    pricePHP: 0,
    bookingType: "From 2 pax",
    inclusions: [
      "Airport transfers",
      "Transportation for sightseeing",
      "English-speaking guide on touring days",
      "Sightseeing entrance fees",
      "Ba Na Hills cable car",
      "Day 2 lunch",
      "Day 3 dinner",
    ],
  },

  {
    title: "Da Nang – Ba Na Hills – Marble Mountain – Hoi An",
    subtitle: "Vietnam • SIC Tour",
    duration: "4D3N",
    destinations:
      "Da Nang • Ba Na Hills • Marble Mountains • Hoi An • Coconut Boat",
    priceUSD: 134,
    pricePHP: 0,
    bookingType: "From 2 pax",
    inclusions: [
      "Airport transfers",
      "Transportation",
      "English-speaking guide",
      "Sightseeing entrance fees",
      "Selected meals",
    ],
  },

  {
    title: "Da Nang – Ba Na Hills – Hoi An – Hue",
    subtitle: "Vietnam • SIC Tour",
    duration: "5D4N",
    destinations:
      "Da Nang • Ba Na Hills • Marble Mountains • Hoi An • Hue",
    priceUSD: 185,
    pricePHP: 0,
    bookingType: "From 2 pax",
    inclusions: [
      "Transportation",
      "English-speaking guide",
      "Sightseeing",
      "Selected entrance fees",
      "Selected meals",
    ],
  },

  {
    title: "Hanoi – Ha Long – Ninh Binh – Da Nang – Hoi An",
    subtitle: "Vietnam • SIC Tour",
    duration: "7D6N",
    destinations:
      "Hanoi • Ha Long Bay • Ninh Binh • Da Nang • Hoi An • Ba Na Hills",
    priceUSD: 255,
    pricePHP: 0,
    bookingType: "From 2 pax",
    inclusions: [
      "Transportation",
      "English-speaking guide",
      "Sightseeing",
      "Selected entrance fees",
      "Selected meals",
    ],
  },

  {
    title: "Ho Chi Minh – Da Nang – Hoi An – Hanoi",
    subtitle: "Vietnam • SIC Tour",
    duration: "10D9N",
    destinations:
      "Ho Chi Minh • Da Nang • Hoi An • Hanoi • Ha Long • Ninh Binh",
    priceUSD: 361,
    pricePHP: 0,
    bookingType: "From 2 pax",
    inclusions: [
      "Transportation",
      "English-speaking guide",
      "Sightseeing",
      "Selected entrance fees",
      "Selected meals",
    ],
  },
];

/*
  Chingu selling rate
  Update this rate anytime.
*/
const USD_TO_PHP = 63;

const peso = (amount: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);

const usd = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

export default function VietnamToursPage() {
  const handleInquiry = (pkg: Package) => {
    const sellingPricePHP = pkg.priceUSD * USD_TO_PHP;

    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about the following Vietnam tour:

${pkg.title}
Package Type: ${pkg.subtitle}
Duration: ${pkg.duration}
Booking: ${pkg.bookingType}

Destinations:
${pkg.destinations}

Package From:
${usd(pkg.priceUSD)} / ${peso(sellingPricePHP)} per person

Please send me the complete package details, inclusions, exclusions, hotel options, and available dates.

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

          <p
            className="
              text-red-600
              font-semibold
              uppercase
              tracking-[4px]
              text-sm
            "
          >
            CHINGU Travel and Tours
          </p>

          <h1
            className="
              mt-3
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
            "
          >
            Vietnam Tour Packages
          </h1>

          <p className="mt-4 text-gray-500">
            Discover Vietnam with our curated tour packages.
          </p>

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

          {packages.map((pkg, index) => {

            const sellingPricePHP =
              pkg.priceUSD * USD_TO_PHP;

            return (
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
                <div className="flex justify-between items-center gap-2">

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
                    {pkg.bookingType}
                  </span>

                </div>

                {/* TITLE */}
                <h2
                  className="
                    mt-4
                    text-sm
                    font-bold
                    text-gray-900
                    min-h-[55px]
                  "
                >
                  {pkg.title}
                </h2>

                {/* SUBTITLE */}
                <p
                  className="
                    mt-2
                    text-xs
                    text-gray-400
                  "
                >
                  {pkg.subtitle}
                </p>

                {/* DESTINATIONS */}
                <div className="mt-4">

                  <p
                    className="
                      text-[10px]
                      uppercase
                      text-gray-400
                    "
                  >
                    Destinations
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      font-medium
                      text-gray-700
                    "
                  >
                    {pkg.destinations}
                  </p>

                </div>

                {/* PRICE */}
                <div className="mt-auto pt-5">

                  <p
                    className="
                      text-[10px]
                      uppercase
                      text-gray-400
                    "
                  >
                    Package From
                  </p>

                  <p
                    className="
                      mt-1
                      text-lg
                      font-bold
                      text-gray-900
                    "
                  >
                    {peso(sellingPricePHP)}
                  </p>

                  <p className="text-[10px] text-gray-400">
                    {usd(pkg.priceUSD)} per person
                  </p>

                </div>

                {/* INCLUSIONS */}
                <div className="mt-4">

                  <p
                    className="
                      text-[10px]
                      uppercase
                      text-gray-400
                      mb-2
                    "
                  >
                    Highlights
                  </p>

                  <ul className="space-y-1">

                    {pkg.inclusions
                      .slice(0, 4)
                      .map((item, i) => (
                        <li
                          key={i}
                          className="
                            text-[11px]
                            text-gray-600
                            flex
                            items-start
                            gap-1
                          "
                        >
                          <span className="text-red-600">
                            ✓
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}

                  </ul>

                </div>

                {/* BUTTON */}
                <button
                  onClick={() => handleInquiry(pkg)}
                  className="
                    mt-5
                    w-full
                    py-2.5
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
            );
          })}

        </div>

        {/* FOOTNOTE */}
        <div className="mt-10 text-center">

          <p className="text-xs text-gray-400">
            Rates are subject to availability and confirmation.
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Flights, hotel accommodation and other exclusions may apply
            depending on the selected package.
          </p>

        </div>

      </div>
    </main>
  );
}
