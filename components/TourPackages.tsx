const packages = [
  {
    title: "Avatar Zhangjiajie",
    duration: "6D5N",
    type: "Shopping Tour",
    price: "₱33,327",
    description:
      "Explore the breathtaking landscapes of Zhangjiajie.",
  },
  {
    title: "Zhangjiajie + Chongqing + Shanghai",
    duration: "7D6N",
    type: "Shopping Tour",
    price: "₱55,944",
    description:
      "Experience three exciting Chinese destinations.",
  },
  {
    title: "Beijing + Shanghai",
    duration: "7D6N",
    type: "Shopping Tour",
    price: "₱55,944",
    description:
      "Discover China's historic capital and vibrant Shanghai.",
  },
  {
    title: "Beijing + Xi'an",
    duration: "7D6N",
    type: "Shopping Tour",
    price: "₱61,047",
    description:
      "Explore Beijing and the historic wonders of Xi'an.",
  },
  {
    title: "Shanghai",
    duration: "4D3N",
    type: "Pure Fun",
    price: "₱37,737",
    description:
      "Enjoy an exciting Shanghai getaway.",
  },
  {
    title: "Canton Fair",
    duration: "Business Tour",
    type: "Business Tour",
    price: "₱75,537",
    description:
      "Experience the Canton Fair on a business tour.",
  },
];

export default function TourPackages() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            Explore With Us
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Featured Tour Packages
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-500">
            Discover our latest China tour packages for shopping,
            leisure, and business travelers.
          </p>
        </div>

        {/* Tour Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >

              {/* Top Information */}
              <div className="flex items-center justify-between mb-4">

                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  {pkg.duration}
                </span>

                <span className="text-xs text-gray-500">
                  {pkg.type}
                </span>

              </div>

              {/* Package Name */}
              <h3 className="text-xl font-bold text-gray-900 min-h-[56px]">
                {pkg.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-500 leading-relaxed min-h-[48px]">
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mt-5">

                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Package From
                </p>

                <p className="text-2xl font-bold text-gray-900">
                  {pkg.price}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  per person
                </p>

              </div>

              {/* Inquiry Button */}
              <button
                className="mt-5 w-full border border-red-600 text-red-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-600 hover:text-white transition"
              >
                Inquire Now →
              </button>

            </div>
          ))}

        </div>

        {/* View All */}
        <div className="text-center mt-8">

          <button
            className="text-red-600 font-semibold hover:text-red-700"
          >
            View All Tour Packages →
          </button>

        </div>

      </div>
    </section>
  );
}
