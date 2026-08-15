export default function HotelBooking() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-16">

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
          CHINGU TRAVEL AND TOURS
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Hotel Booking
        </h1>

        <p className="mt-4 text-gray-500 text-lg">
          Find the perfect stay for your next journey.
        </p>


        {/* SEARCH BOX */}
        <div className="
          mt-12
          bg-white
          rounded-3xl
          shadow-md
          border
          border-gray-100
          p-8
        ">

          <div className="
            grid
            grid-cols-1
            md:grid-cols-4
            gap-6
            items-end
          ">


            {/* DESTINATION */}
            <div className="text-left">

              <p className="font-bold text-gray-900">
                Destination
              </p>

              <input
                type="text"
                placeholder="City, hotel or property"
                className="
                  mt-3
                  w-full
                  bg-gray-50
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                "
              />

            </div>


            {/* DATE */}
            <div className="text-left">

              <p className="font-bold text-gray-900">
                Check-in / Check-out
              </p>

              <input
                type="date"
                className="
                  mt-3
                  w-full
                  bg-gray-50
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                "
              />

            </div>


            {/* GUEST */}
            <div className="text-left">

              <p className="font-bold text-gray-900">
                Guests
              </p>

              <input
                type="number"
                placeholder="Add travelers"
                className="
                  mt-3
                  w-full
                  bg-gray-50
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                "
              />

            </div>


            {/* BUTTON */}
            <button
              className="
                bg-red-600
                hover:bg-red-700
                text-white
                font-semibold
                rounded-full
                px-8
                py-4
                transition
              "
            >
              Search Hotels
            </button>


          </div>

        </div>

      </div>

    </main>
  );
}
