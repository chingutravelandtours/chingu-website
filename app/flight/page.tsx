"use client";

import {
  Plane,
  MapPin,
  CalendarDays,
  Users,
  ArrowRightLeft,
} from "lucide-react";


export default function FlightPage() {

  return (

    <main className="min-h-screen bg-gray-50">


      {/* HERO */}

      <section className="
        bg-red-600
        py-16
        px-6
        text-white
        text-center
      ">

        <p className="
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
        ">
          Book Your Best Flight Today
        </h1>


        <p className="
          mt-4
          text-lg
        ">
          Find convenient flights and travel options worldwide.
        </p>


      </section>




      {/* BOOKING BOX */}

      <section className="
        max-w-6xl
        mx-auto
        -mt-8
        px-5
      ">


        <div className="
          bg-white
          rounded-3xl
          shadow-xl
          p-8
        ">


          {/* TABS */}

          <div className="
            flex
            gap-8
            border-b
            pb-4
            text-gray-600
            font-semibold
          ">

            <button className="
              text-red-600
              border-b-2
              border-red-600
              pb-3
            ">
              ✈ Flights
            </button>


            <button>
              🏨 Hotels
            </button>


            <button>
              🌍 Tours
            </button>


            <button>
              🛂 Visa
            </button>


            <button>
              🚢 Cruise
            </button>

          </div>




          {/* TRIP TYPE */}

          <div className="
            mt-6
            flex
            gap-3
          ">

            <button className="
              border
              border-red-600
              text-red-600
              px-5
              py-2
              rounded-full
            ">
              One-way
            </button>


            <button className="
              border
              px-5
              py-2
              rounded-full
            ">
              Round-trip
            </button>


          </div>





          {/* SEARCH FIELDS */}

          <div className="
            mt-6
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          ">



            <div className="relative">

              <Plane
                className="
                  absolute
                  left-4
                  top-4
                  text-red-600
                "
                size={22}
              />


              <input
                className="
                  w-full
                  border
                  rounded-xl
                  py-4
                  pl-12
                  text-gray-900
                  placeholder:text-gray-400
                  outline-none
                "
                placeholder="Flying from"
              />

            </div>





            <div className="relative">


              <MapPin
                className="
                  absolute
                  left-4
                  top-4
                  text-red-600
                "
                size={22}
              />


              <input
                className="
                  w-full
                  border
                  rounded-xl
                  py-4
                  pl-12
                  text-gray-900
                  placeholder:text-gray-400
                  outline-none
                "
                placeholder="Flying to"
              />


            </div>





            <div className="relative">


              <CalendarDays
                className="
                  absolute
                  left-4
                  top-4
                  text-red-600
                "
                size={22}
              />


              <input
                type="date"
                className="
                  w-full
                  border
                  rounded-xl
                  py-4
                  pl-12
                  text-gray-900
                "
              />


            </div>





            <div className="relative">


              <Users
                className="
                  absolute
                  left-4
                  top-4
                  text-red-600
                "
                size={22}
              />


              <select
                className="
                  w-full
                  border
                  rounded-xl
                  py-4
                  pl-12
                  text-gray-900
                "
              >

                <option>
                  1 Passenger, Economy
                </option>

                <option>
                  2 Passengers, Economy
                </option>

                <option>
                  Business Class
                </option>


              </select>


            </div>


          </div>





          {/* SWAP BUTTON */}

          <div className="
            mt-5
            flex
            justify-center
          ">

            <button className="
              flex
              items-center
              gap-2
              text-red-600
              font-semibold
            ">

              <ArrowRightLeft size={18}/>
              Swap Locations

            </button>

          </div>





          {/* BUTTON */}

          <button
            className="
              mt-8
              w-full
              bg-red-600
              text-white
              py-4
              rounded-xl
              font-bold
              hover:bg-red-700
              transition
            "
          >

            SEARCH FLIGHTS →

          </button>



        </div>


      </section>


    </main>

  );
}
