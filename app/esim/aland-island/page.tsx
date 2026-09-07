"use client";

const plans = [
  {
    name: "Aland Islands eSIM",
    data: "1GB",
    validity: "7 Days",
    price: 6.99,
  },
  {
    name: "Aland Islands eSIM",
    data: "3GB",
    validity: "15 Days",
    price: 14.99,
  },
  {
    name: "Aland Islands eSIM",
    data: "5GB",
    validity: "30 Days",
    price: 21.99,
  },
];

export default function AlandIslandsEsimPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <div className="text-5xl mb-3">🇦🇽</div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Aland Islands eSIM
          </h1>

          <p className="text-gray-500 mt-3">
            Choose your eSIM plan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={`${plan.data}-${plan.validity}`}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold text-gray-900">
                {plan.data}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Valid for {plan.validity}
              </p>

              <div className="mt-6">
                <p className="text-xs uppercase text-gray-400">
                  Price
                </p>

                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ${plan.price}
                </p>
              </div>

              <button
                className="
                  mt-6
                  w-full
                  rounded-xl
                  bg-red-600
                  text-white
                  py-3
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
    </main>
  );
}
