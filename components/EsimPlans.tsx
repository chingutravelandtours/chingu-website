const plans = [
  {
    country: "Thailand",
    name: "DTAC Happy Tourist 219",
    data: "15GB Data",
    validity: "7 Days",
    price: "₱324.99",
  },
  {
    country: "Thailand",
    name: "DTAC Happy Tourist 349",
    data: "50GB Data",
    validity: "10 Days",
    price: "₱379.77",
  },
  {
    country: "Thailand",
    name: "Unlimited Data",
    data: "Unlimited 5G/4G",
    validity: "8 Days",
    price: "₱559.74",
  },
];


export default function EsimPlans() {
  return (
    <section className="bg-gray-50 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-gray-900">
          eSIM Travel Plans
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Stay connected wherever you travel.
        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {plans.map((plan)=>(
            <div
              key={plan.name}
              className="
              bg-white
              rounded-2xl
              shadow-md
              p-6
              border
              hover:shadow-xl
              transition
              "
            >

              <h3 className="text-xl font-bold text-red-700">
                🇹🇭 {plan.country}
              </h3>


              <p className="font-semibold mt-3">
                {plan.name}
              </p>


              <div className="mt-4 text-gray-600">

                <p>
                  Data: {plan.data}
                </p>

                <p>
                  Validity: {plan.validity}
                </p>

              </div>


              <p className="text-2xl font-bold text-red-600 mt-5">
                {plan.price}
              </p>


              <button
                className="
                mt-5
                w-full
                bg-red-600
                text-white
                py-3
                rounded-xl
                hover:bg-red-700
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
