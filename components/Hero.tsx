export default function Hero() {
  return (
    <section
      className="relative h-[650px] flex items-center justify-center text-center bg-cover bg-center"
      style={{
      backgroundImage: "url('/images/hero/travel.jpg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <p className="uppercase tracking-[5px] text-red-500 font-semibold mb-3">
          Welcome to Chingu Travel and Tours
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Explore the World
          <br />
          With Confidence
        </h1>

        <p className="text-gray-200 text-xl mt-6">
          Flights • Hotels • Visa Assistance • Tour Packages
        </p>

        <div className="mt-10">
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}