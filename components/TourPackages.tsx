const packages = [
  {
    title: "Chongqing",
    subtitle: "Shopping Tour",
    duration: "5D3N",
    price: "₱31,437",
    description:
      "Discover Chongqing with an exciting shopping tour experience.",
  },
  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    price: "₱31,437",
    description:
      "Explore the breathtaking landscapes of Zhangjiajie.",
  },
  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    price: "₱50,337",
    description:
      "Experience the stunning scenery of Zhangjiajie and historic Fenghuang.",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    price: "₱55,944",
    description:
      "Experience three exciting Chinese destinations in one unforgettable trip.",
  },
];

export default function TourPackages() {
  const handleInquiry = (
    title: string,
    duration: string,
    price: string
  ) => {
    const message = `Hello CHINGU Travel and Tours!

I would like to inquire about:

${title} - ${duration}
Package From: ${price} per person

Please send me the available dates and complete package details. Thank you!`;

    window.open(
      `https://wa.me/639193888999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

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
            Discover our latest China tour packages for your next adventure.
          </p>
        </div>

        {/* Four Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >

              {/* Duration + Type */}
              <div className="flex items-center justify-between gap-2 mb-4">

                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full whitespace-nowrap">
                  {pkg.duration}
                </span>

                <span className="text-xs text-gray-500 text-right">
                  {pkg.subtitle}
                </span>

              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 min-h-[56px]">
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

              {/* WhatsApp Button */}
              <button
                onClick={() =>
                  handleInquiry(
                    pkg.title,
                    pkg.duration,
                    pkg.price
                  )
                }
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
            onClick={() => {
              window.location.href = "/tour-packages";
            }}
            className="text-red-600 font-semibold hover:text-red-700"
          >
            View All Tour Packages →
          </button>
        </div>

      </div>
    </section>
  );
}
