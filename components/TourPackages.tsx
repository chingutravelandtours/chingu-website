const packages = [
  {
    title: "Avatar Zhangjiajie",
    duration: "6D5N",
    type: "Shopping Tour",
    price: "$529",
    description: "Explore the breathtaking landscapes of Zhangjiajie.",
  },
  {
    title: "Zhangjiajie + Chongqing + Shanghai",
    duration: "7D6N",
    type: "Shopping Tour",
    price: "$888",
    description: "Experience three exciting Chinese destinations.",
  },
  {
    title: "Beijing + Shanghai",
    duration: "7D6N",
    type: "Shopping Tour",
    price: "$888",
    description: "Discover China's historic capital and vibrant Shanghai.",
  },
  {
    title: "Beijing + Xi'an",
    duration: "7D6N",
    type: "Shopping Tour",
    price: "$969",
    description: "Explore Beijing and the historic wonders of Xi'an.",
  },
  {
    title: "Shanghai",
    duration: "4D3N",
    type: "Pure Fun",
    price: "$599",
    description: "Enjoy an exciting Shanghai getaway.",
  },
  {
    title: "Canton Fair",
    duration: "Business Tour",
    type: "Business Tour",
    price: "$1,199",
    description: "Experience the Canton Fair on a business tour.",
  },
];

export default function TourPackages() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            Explore With Us
          </p>

          <h2 className="mt-1 text-3xl font-bold text-gray-900">
            Featured Tour Packages
          </h2>

          <p className="mt-2 max-w-xl mx-auto text-sm text-gray-600">
            Discover our latest China tour packages for shopping,
            leisure, and business travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >

              {/* Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-500 px-5 py-4 text-white">

                <div className="flex items-center justify-between gap-2">

                  <span className="text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full">
                    {pkg.duration}
                  </span>

                  <span className="text-xs">
                    {pkg.type}
                  </span>

                </div>

                <h3 className="mt-3 text-lg font-bold min-h-[48px] flex items-center">
                  {pkg.title}
                </h3>

              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">

                <p className="text-sm text-gray-600 min-h-[42px]">
                  {pkg.description}
                </p>

                <div className="mt-4">
                  <p className="text-[10px] text-gray-500 uppercase">
                    Package From
                  </p>

                  <p className="text-2xl font-bold text-gray-900">
                    {pkg.price}
                  </p>
                </div>

                <button className="mt-4 w-full bg-red-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                  Inquire Now →
                </button>

              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-7">
          <button className="border-2 border-red-600 text-red-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white transition">
            View All Tour Packages
          </button>
        </div>

      </div>
    </section>
  );
}
