const packages = [
  {
    title: "Avatar Zhangjiajie",
    duration: "6D5N",
    type: "Shopping Tour",
    price: "$529",
    description:
      "Explore the breathtaking landscapes of Zhangjiajie and experience an unforgettable China adventure.",
  },
  {
    title: "Zhangjiajie + Chongqing + Shanghai",
    duration: "7D6N",
    type: "Shopping Tour",
    price: "$888",
    description:
      "Experience three exciting Chinese destinations in one memorable journey.",
  },
  {
    title: "Beijing + Shanghai",
    duration: "7D6N",
    type: "Shopping Tour",
    price: "$888",
    description:
      "Discover China's historic capital and the vibrant city of Shanghai.",
  },
  {
    title: "Beijing + Xi'an",
    duration: "7D6N",
    type: "Shopping Tour",
    price: "$969",
    description:
      "Explore Beijing and discover the historic wonders of Xi'an.",
  },
  {
    title: "Shanghai",
    duration: "4D3N",
    type: "Pure Fun",
    price: "$599",
    description:
      "Enjoy a memorable Shanghai getaway packed with exciting city experiences.",
  },
  {
    title: "Canton Fair",
    duration: "Business Tour",
    type: "Business Tour",
    price: "$1,199",
    description:
      "Join a business-focused China tour and experience the Canton Fair.",
  },
];

export default function TourPackages() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest">
            Explore With Us
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Featured Tour Packages
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Discover our latest China tour packages for shopping,
            leisure, and business travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="bg-gradient-to-r from-red-600 to-red-500 p-6 text-white">

                <div className="flex items-center justify-between">

                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                    {pkg.duration}
                  </span>

                  <span className="text-sm">
                    {pkg.type}
                  </span>

                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  {pkg.title}
                </h3>

              </div>

              <div className="p-6">

                <p className="text-gray-600 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mt-6">

                  <p className="text-xs text-gray-500 uppercase">
                    Package From
                  </p>

                  <p className="text-3xl font-bold text-gray-900">
                    {pkg.price}
                  </p>

                </div>

                <button
                  className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
                >
                  Inquire Now →
                </button>

              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-10">

          <button
            className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition"
          >
            View All Tour Packages
          </button>

        </div>

      </div>
    </section>
  );
}
