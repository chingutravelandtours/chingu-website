<div className="min-h-screen bg-gray-50 px-5 py-16">

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


    {/* SEARCH CARD */}
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
        items-center
      ">


        {/* DESTINATION */}
        <div className="text-left">

          <p className="
            font-bold
            text-gray-900
          ">
            Destination
          </p>

          <div className="
            mt-3
            bg-gray-50
            rounded-xl
            px-5
            py-4
            text-gray-400
          ">
            City, hotel or property
          </div>

        </div>



        {/* DATE */}
        <div className="text-left">

          <p className="
            font-bold
            text-gray-900
          ">
            Check-in / Check-out
          </p>

          <div className="
            mt-3
            bg-gray-50
            rounded-xl
            px-5
            py-4
            text-gray-400
          ">
            Select dates
          </div>

        </div>



        {/* GUEST */}
        <div className="text-left">

          <p className="
            font-bold
            text-gray-900
          ">
            Guests
          </p>

          <div className="
            mt-3
            bg-gray-50
            rounded-xl
            px-5
            py-4
            text-gray-400
          ">
            Add travelers
          </div>

        </div>



        {/* BUTTON */}
        <button
          className="
            mt-7
            bg-red-600
            hover:bg-red-700
            text-white
            font-semibold
            rounded-full
            px-8
            py-5
            transition
          "
        >

          Search Hotels

        </button>


      </div>

    </div>


  </div>

</div>
