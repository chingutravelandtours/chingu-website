"use client";

import {
  Plane,
  Hotel,
  Globe2,
  FileCheck,
  Ship,
  MapPin,
  CalendarDays,
  Users,
  ArrowRightLeft,
} from "lucide-react";


export default function FlightPage() {

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">


      <div className="max-w-6xl mx-auto">


        {/* HEADER */}

        <div className="text-center mb-10">

          <p className="
            text-red-600
            font-semibold
            uppercase
            tracking-widest
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
            Book Your Best Flight Today
          </h1>


          <p className="
            mt-4
            text-gray-600
            text-lg
          ">
            Find convenient flights and travel options worldwide.
          </p>


        </div>




        {/* BOOKING CARD */}

        <div className="
          bg-white
          rounded-3xl
          shadow-lg
          border
          border-gray-100
          p-8
        ">



          {/* SERVICE TABS */}

          <div className="
            flex
            flex-wrap
            gap-8
            border-b
            pb-5
          ">


            <button className="
              flex
              items-center
              gap-2
              text-red-600
              font-semibold
              border-b-2
              border-red-600
              pb-4
            ">
              <Plane size={20}/>
              Flights
            </button>



            <button className="
              flex
              items-center
              gap-2
              text-gray-600
              font-semibold
            ">
              <Hotel size={20}/>
              Hotels
            </button>



            <button className="
              flex
              items-center
              gap-2
              text-gray-600
              font-semibold
            ">
              <Globe2 size={20}/>
              Tours
            </button>



            <button className="
              flex
              items-center
              gap-2
              text-gray-600
              font-semibold
            ">
              <FileCheck size={20}/>
              Visa
            </button>



            <button className="
              flex
              items-center
              gap-2
              text-gray-600
              font-semibold
            ">
              <Ship size={20}/>
              Cruise
            </button>


          </div>





          {/* TRIP TYPE */}

          <div className="
            mt-6
            flex
            gap-3
          ">

            <button className="
              px-5
              py-2
              rounded-full
              border
              border-red-600
              text-red-600
              font-semibold
            ">
              One Way
            </button>


            <button className="
              px-5
              py-2
              rounded-full
              border
              border-gray-300
              text-gray-600
            ">
              Round Trip
            </button>


          </div>






          {/* SEARCH FORM */}

          <div className="
            mt-7
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          ">



            {/* FROM */}

            <div className="relative">

              <Plane
                size={20}
                className="
                  absolute
                  left-4
                  top-4
                  text-red-600
                "
              />


              <input
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  py-4
                  pl-12
                  text-gray-900
                  placeholder:text-gray-400
                  outline-none
                  focus:border-red-500
                "
                placeholder="Flying from"
              />

            </div>





            {/* TO */}

            <div className="relative">

              <MapPin
                size={20}
                className="
                  absolute
                  left-4
                  top-4
                  text-red-600
                "
              />


              <input
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  py-4
                  pl-12
                  text-gray-900
                  placeholder:text-gray-400
                  outline-none
                  focus:border-red-500
                "
                placeholder="Flying to"
              />


            </div>





            {/* DATE */}

            <div className="relative">

              <CalendarDays
                size={20}
                className="
                  absolute
                  left-4
                  top-4
                  text-red-600
                "
              />


              <input
                type="date"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  py-4
                  pl-12
                  text-gray-900
                  outline-none
                  focus:border-red-500
                "
              />


            </div>






            {/* PASSENGER */}

            <div className="relative">

              <Users
                size={20}
                className="
                  absolute
                  left-4
                  top-4
                  text-red-600
                "
              />


              <select
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  py-4
                  pl-12
                  text-gray-900
                  outline-none
                  focus:border-red-500
                "
              >

                <option>
                  1 Passenger - Economy
                </option>

                <option>
                  2 Passengers - Economy
                </option>

                <option>
                  Business Class
                </option>

              </select>


            </div>



          </div>






          {/* SWAP */}

          <button className="
            mt-6
            flex
            items-center
            gap-2
            text-red-600
            font-semibold
          ">

            <ArrowRightLeft size={18}/>

            Swap Locations

          </button>






          {/* SEARCH BUTTON */}

          <button className="
            mt-8
            w-full
            bg-red-600
            text-white
            py-4
            rounded-xl
            font-bold
            hover:bg-red-700
            transition
          ">

            SEARCH FLIGHTS →

          </button>



        </div>


      </div>


    </main>
  );
}
