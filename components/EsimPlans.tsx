const plans = [
  // AZERBAIJAN - 3 DAYS
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Caucasus 3 500MB/day",
    data: "500MB/day",
    validity: "3 Days",
    price: "$4.45",
    php: "₱258",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Caucasus 3 1GB/day",
    data: "1GB/day",
    validity: "3 Days",
    price: "$6.05",
    php: "₱351",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Caucasus 3 2GB/day",
    data: "2GB/day",
    validity: "3 Days",
    price: "$8.81",
    php: "₱511",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Caucasus 3 3GB/day",
    data: "3GB/day",
    validity: "3 Days",
    price: "$11.56",
    php: "₱670",
    recommended: true,
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Global 149 500MB/day",
    data: "500MB/day",
    validity: "3 Days",
    price: "$10.04",
    php: "₱582",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Global 149 1GB/day",
    data: "1GB/day",
    validity: "3 Days",
    price: "$13.16",
    php: "₱763",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Global 149 2GB/day",
    data: "2GB/day",
    validity: "3 Days",
    price: "$21.21",
    php: "₱1,230",
  },

  // AZERBAIJAN - 4 DAYS
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Caucasus 3 500MB/day",
    data: "500MB/day",
    validity: "4 Days",
    price: "$5.25",
    php: "₱305",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Caucasus 3 1GB/day",
    data: "1GB/day",
    validity: "4 Days",
    price: "$7.43",
    php: "₱431",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Caucasus 3 2GB/day",
    data: "2GB/day",
    validity: "4 Days",
    price: "$11.20",
    php: "₱650",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Caucasus 3 3GB/day",
    data: "3GB/day",
    validity: "4 Days",
    price: "$14.68",
    php: "₱852",
    recommended: true,
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Global 149 500MB/day",
    data: "500MB/day",
    validity: "4 Days",
    price: "$13.16",
    php: "₱763",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Global 149 1GB/day",
    data: "1GB/day",
    validity: "4 Days",
    price: "$17.22",
    php: "₱999",
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    name: "Global 149 2GB/day",
    data: "2GB/day",
    validity: "4 Days",
    price: "$28.03",
    php: "₱1,626",
  },
];

export default function EsimPlans() {
  return (
    <section className="bg-gray-50 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <div className="text-5xl mb-4">🇦🇿</div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Azerbaijan eSIM
          </h2>

          <p className="text-gray-500 mt-3">
            Stay connected in Azerbaijan with fast and reliable 5G eSIM plans.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <button className="px-5 py-2 rounded-full bg-red-600 text-white font-semibold">
            Daily Plans
          </button>

          <button className="px-5 py-2 rounded-full bg-white border text-gray-600">
            Unlimited
          </button>

          <button className="px-5 py-2 rounded-full bg-white border text-gray-600">
            Data Plans
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {plans.map((plan, index) => (
            <div
              key={`${plan.name}-${plan.validity}-${index}`}
              className="
                relative
                bg-white
                rounded-2xl
                shadow-md
                p-6
                border
                hover:shadow-xl
                hover:-translate-y-1
                transition
              "
            >

              {plan.recommended && (
                <span className="
                  absolute
                  top-4
                  right-4
                  bg-red-600
                  text-white
                  text-xs
                  font-bold
                  px-3
                  py-1
                  rounded-full
                ">
                  BEST
                </span>
              )}

              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  {plan.flag}
                </span>

                <span className="text-sm font-semibold text-blue-600">
                  5G
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-4">
                {plan.name}
              </h3>

              <div className="mt-4 space-y-2 text-gray-600">

                <p>
                  <span className="font-semibold">Data:</span>{" "}
                  {plan.data}
                </p>

                <p>
                  <span className="font-semibold">Validity:</span>{" "}
                  {plan.validity}
                </p>

                <p>
                  <span className="font-semibold">Network:</span>{" "}
                  5G
                </p>

              </div>

              <div className="mt-6">

                <p className="text-3xl font-bold text-red-600">
                  {plan.price}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Approx. {plan.php}
                </p>

              </div>

              <button
                className="
                  mt-6
                  w-full
                  bg-red-600
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-red-700
                  transition
                "
              >
                Buy eSIM
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
