"use client";

export default function HotelPage() {

  return (

    <main className="min-h-screen bg-gray-50 py-16 px-5">


      <div className="max-w-6xl mx-auto">


        {/* HEADER */}

        <div className="text-center mb-10">

          <p className="
            text-red-600
            uppercase
            tracking-widest
            font-semibold
            text-sm
          ">
            CHINGU Travel and Tours
          </p>


          <h1 className="
            mt-3
            text-5xl
            font-bold
            text-gray-900
          ">
            Hotel Booking
          </h1>


          <p className="mt-4 text-gray-600">
            Find the perfect stay for your next journey.
          </p>


        </div>






        {/* CATEGORY TABS */}


        <div className="
          bg-white
          rounded-xl
          shadow-md
          p-3
          flex
          gap-3
          overflow-x-auto
          mb-5
        ">


          <button className="
            px-6
            py-3
            rounded-lg
            bg-gray-100
            font-semibold
          ">
            🏨 Hotels
          </button>


          <button className="
            px-6
            py-3
            text-gray-600
          ">
            🚢 Cruises
          </button>


          <button className="
            px-6
            py-3
            text-gray-600
          ">
            🧳 Tours
          </button>


          <button className="
            px-6
            py-3
            text-gray-600
          ">
            ✈ Flights
          </button>


        </div>








        {/* SEARCH BOX */}



        <div className="
          bg-white
          rounded-3xl
          shadow-lg
          border
          border-gray-200
          p-5
          flex
          flex-col
          md:flex-row
          items-center
          gap-4
        ">



          <div className="
            flex-1
            border-r
            border-gray-200
            px-5
          ">

            <p className="text-sm font-semibold text-gray-900">
              Where
            </p>

            <p className="text-gray-400 mt-2">
              Partner or destination
            </p>

          </div>






          <div className="
            flex-1
            border-r
            border-gray-200
            px-5
          ">


            <p className="text-sm font-semibold text-gray-900">
              When
            </p>


            <p className="text-gray-400 mt-2">
              Add dates
            </p>


          </div>







          <div className="
            flex-1
            px-5
          ">


            <p className="text-sm font-semibold text-gray-900">
              Who
            </p>


            <p className="text-gray-400 mt-2">
              Add travelers
            </p>


          </div>







          <button className="
            bg-black
            text-white
            w-14
            h-14
            rounded-full
            text-xl
          ">

            🔍

          </button>



        </div>



      </div>


    </main>

  );

}
