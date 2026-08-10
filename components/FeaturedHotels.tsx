const hotels = [
  {
    name: "Featured Hotel",
    location: "Dubai, UAE",
    image: "/images/hotels/hotel-1.jpg",
    description: "Comfortable accommodation for your next journey.",
  },
  {
    name: "Featured Hotel",
    location: "Manila, Philippines",
    image: "/images/hotels/hotel-2.jpg",
    description: "Enjoy a convenient stay in the heart of the city.",
  },
  {
    name: "Featured Hotel",
    location: "Singapore",
    image: "/images/hotels/hotel-3.jpg",
    description: "A great choice for business and leisure travelers.",
  },
];

export default function FeaturedHotels() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest">
            Stay With Us
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Featured Hotels
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Discover comfortable accommodations for your next business trip,
            holiday, or family vacation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {hotels.map((hotel) => (
            <div
              key={hotel.name + hotel.location}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >

              <div className="h-56 bg-gray-200 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">

                <p className="text-sm text-red-600 font-medium">
                  📍 {hotel.location}
                </p>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {hotel.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  {hotel.description}
                </p>

                <button className="mt-5 text-red-600 font-semibold hover:text-red-700">
                  Inquire Now →
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
