"use client";

import { useState } from "react";

export default function FlightPage() {

  const [tripType, setTripType] = useState("Round Trip");

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-5">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-red-600 uppercase tracking-[4px] font-semibold text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-5xl font-bold text-gray-900">
            Flight Booking Inquiry
          </h1>

          <p className="mt-4 text-gray-600">
            Request your flight quotation and let us find the best options for your journey.
          </p>

        </div>


        {/* FORM */}

        <div className="
          bg-white
          rounded-3xl
          shadow-lg
          border
          border-gray-200
          p-8
        ">


          {/* NAME */}

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Agent Name"
              className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500"
            />


            <input
              type="text"
              placeholder="Agency Name"
              className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500"
            />


            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500"
            />


            <input
              type="text"
              placeholder="Contact Number"
              className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500"
            />

          </div>



          {/* TRIP BUTTON */}

          <div className="flex gap-3 mt-8">

            {[
              "Round Trip",
              "One Way",
              "Multi City"
            ].map((type)=>(

              <button
                key={type}
                onClick={()=>setTripType(type)}
                className={`
                  px-6 py-2 rounded-full border transition
                  ${
                    tripType === type
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-700 border-gray-300"
                  }
                `}
              >
                {type}
              </button>

            ))}

          </div>




          {/* ROUTE */}

          <div className="grid md:grid-cols-2 gap-5 mt-8">

            <input
              type="text"
              placeholder="Departure"
              className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400"
            />


            <input
              type="text"
              placeholder="Destination"
              className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400"
            />

          </div>




          {/* DATE */}

          <div className="grid md:grid-cols-2 gap-5 mt-5">

            <input
              type="date"
              className="w-full p-4 rounded-xl border border-gray-300 text-gray-700"
            />


            <input
              type="date"
              className="w-full p-4 rounded-xl border border-gray-300 text-gray-700"
            />

          </div>




          {/* PASSENGER */}

          <div className="grid md:grid-cols-2 gap-5 mt-5">


            <input
              type="number"
              placeholder="Number of Passengers"
              className="w-full p-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400"
            />



            <select
              className="w-full p-4 rounded-xl border border-gray-300 text-gray-700"
            >

              <option>Select Cabin</option>
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business Class</option>
              <option>First Class</option>

            </select>


          </div>




          {/* MESSAGE */}

          <textarea
            placeholder="Comments / Special Request"
            className="
              mt-5
              w-full
              h-32
              p-4
              rounded-xl
              border
              border-gray-300
              text-gray-900
              placeholder-gray-400
            "
          />



          <input
            type="text"
            placeholder="Preferred Airlines (Optional)"
            className="
              mt-5
              w-full
              p-4
              rounded-xl
              border
              border-gray-300
              text-gray-900
              placeholder-gray-400
            "
          />





          {/* BUTTON */}

          <button
            className="
              mt-8
              w-full
              bg-red-600
              hover:bg-red-700
              text-white
              py-4
              rounded-xl
              font-bold
              transition
            "
          >
            Request Flight Quote →
          </button>


        </div>

      </div>

    </main>
  );
}
