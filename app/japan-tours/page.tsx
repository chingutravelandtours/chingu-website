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
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Sep. 26–30, 2026",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 1,
    deposit: 300 * USD_TO_PHP,
  },

  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Oct. 9–13, 2026",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 4,
    deposit: 300 * USD_TO_PHP,
  },

  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Oct. 15–19, 2026",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 2,
    deposit: 300 * USD_TO_PHP,
  },

  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Oct. 22–26, 2026",
    city: "MNL",
    price: 799 * USD_TO_PHP,
    slots: 1,
    deposit: 300 * USD_TO_PHP,
  },

  {
  title: "Discover Osaka Kyoto Nara",
  subtitle: "Japan",
  duration: "5D4N",
  dates: "Nov. 19–23, 2026",
  city: "CEB",
  price: 899 * USD_TO_PHP,
  slots: 4,
  deposit: 300 * USD_TO_PHP,
},

{
  title: "Japan Osaka Nara Kyoto",
  subtitle: "Japan",
  duration: "5D4N",
  dates: "Nov. 25–29, 2026",
  city: "CEB",
  price: 1499 * USD_TO_PHP,
  slots: 27,
  deposit: 500 * USD_TO_PHP,
},

{
  title: "Cebu Tokyo Hakone",
  subtitle: "Japan",
  duration: "8D7N",
  dates: "Nov. 26–Dec. 3, 2026",
  city: "CEB",
  price: 2488 * USD_TO_PHP,
  slots: 30,
  deposit: 500 * USD_TO_PHP,
},

{
  title: "Discover Osaka Kyoto Nara",
  subtitle: "Japan",
  duration: "5D4N",
  dates: "Dec. 10–14, 2026",
  city: "CEB",
  price: 899 * USD_TO_PHP,
  slots: 6,
  deposit: 300 * USD_TO_PHP,
},

{
  title: "Discover Osaka + Kyoto + Nara",
  subtitle: "Japan (3 in 1)",
  duration: "5D4N",
  dates: "Dec. 12–16, 2026",
  city: "MNL",
  price: 859 * USD_TO_PHP,
  slots: 4,
  deposit: 300 * USD_TO_PHP,
},
];

const peso = (amount: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);

export default function JapanToursPage() {

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

Deposit: ${peso(pkg.deposit ?? 0)}

Please send me the complete package details. Thank you!`
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

          <p className="
            text-red-600 
            font-semibold 
            uppercase 
            tracking-[4px] 
            text-sm
          ">
            CHINGU Travel and Tours
          </p>


          <h1 className="
            mt-3 
            text-4xl 
            md:text-5xl 
            font-bold 
            text-gray-900
          ">
            Japan Tour Packages
          </h1>


          <p className="
            mt-4 
            text-gray-500
          ">
            Explore our Japan tour packages, departure dates and rates.
          </p>

        </div>



        {/* PACKAGE GRID */}

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5 
          gap-4
        ">


          {packages.map((pkg, index) => (

            <div
              key={`${pkg.title}-${pkg.dates}-${index}`}
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


              {/* DURATION + STATUS */}

              <div className="
                flex 
                justify-between 
                items-center 
                gap-2
              ">


                <span className="
                  text-xs
                  font-bold
                  px-3
                  py-1.5
                  rounded-full
                  bg-red-50
                  text-red-600
                ">
                  {pkg.duration}
                </span>



                <span className={`
                  text-xs
                  font-semibold
                  px-2.5
                  py-1.5
                  rounded-full
                  ${
                    pkg.slots && pkg.slots > 0
                    ? "bg-green-50 text-green-600"
                    : "bg-gray-100 text-gray-500"
                  }
                `}>
                  {
                    pkg.slots && pkg.slots > 0
                    ? `${pkg.slots} slots`
                    : "Available"
                  }
                </span>


              </div>




              {/* TITLE */}

              <h2 className="
                mt-4
                text-sm
                font-bold
                text-gray-900
                min-h-[45px]
              ">
                {pkg.title}
              </h2>



              {/* TYPE */}

              <p className="
                mt-2
                text-xs
                text-gray-400
              ">
                {pkg.subtitle}
              </p>




              {/* DATE */}

              <div className="mt-4">

                <p className="
                  text-[10px]
                  uppercase
                  text-gray-400
                ">
                  Departure
                </p>


                <p className="
                  mt-1
                  text-xs
                  font-semibold
                  text-gray-700
                ">
                  {pkg.dates}
                </p>

              </div>




              {/* CITY */}

              <div className="mt-3">

                <p className="
                  text-[10px]
                  uppercase
                  text-gray-400
                ">
                  Departure City
                </p>


                <p className="
                  mt-1
                  text-xs
                  font-semibold
                  text-gray-700
                ">
                  {pkg.city}
                </p>


              </div>





              {/* PRICE */}

              <div className="mt-auto pt-5">

                <p className="
                  text-[10px]
                  uppercase
                  text-gray-400
                ">
                  Package From
                </p>


                <p className="
                  mt-1
                  text-lg
                  font-bold
                  text-gray-900
                ">
                  {peso(pkg.price)}
                </p>


                <p className="
                  text-[10px]
                  text-gray-400
                ">
                  per person
                </p>


              </div>




              {/* DEPOSIT */}

              <div className="mt-3">

                <p className="
                  text-[10px]
                  uppercase
                  text-gray-400
                ">
                  Deposit
                </p>


                <p className="
                  text-xs
                  font-bold
                  text-gray-700
                ">
                  {peso(pkg.deposit ?? 0)}
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


      </div>

    </main>
  );

}
