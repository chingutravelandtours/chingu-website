"use client";

import { useState } from "react";

export default function FlightPage() {

  const [tripType, setTripType] = useState("Round Trip");

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-5">

      <div className="max-w-5xl mx-auto">


        {/* HEADER */}

        <div className="text-center mb-12">

          <p className="text-red-600 uppercase tracking-widest font-semibold text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-5xl font-bold text-gray-900">
            Flight Booking Inquiry
          </h1>

          <p className="mt-4 text-gray-600">
            Request your flight quotation and let us find the best options for your journey.
          </p>

        </div>



        {/* FORM CARD */}

        <div className="
          bg-white
          rounded-3xl
          shadow-lg
          border
          border-gray-100
          p-8
        ">


          {/* PERSONAL INFO */}

          <div className="grid md:grid-cols-2 gap-5">


            <input
              type="text"
              placeholder="Agent Name"
              className="input"
            />


            <input
              type="text"
              placeholder="Agency Name"
              className="input"
            />


            <input
              type="email"
              placeholder="Email"
              className="input"
            />


            <input
              type="text"
              placeholder="Contact Number"
              className="input"
            />


          </div>



          {/* TRIP TYPE */}

          <div className="flex gap-3 mt-8">

            {["Round Trip","One Way","Multi City"].map(type => (

              <button
                key={type}
                onClick={()=>setTripType(type)}
                className={`
                  px-6
                  py-2
                  rounded-full
                  border
                  ${
                    tripType === type
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700"
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
              className="input"
            />


            <input
              type="text"
              placeholder="Destination"
              className="input"
            />


          </div>





          {/* DATE */}

          <div className="grid md:grid-cols-2 gap-5 mt-5">


            <input
              type="date"
              className="input"
            />


            <input
              type="date"
              className="input"
            />


          </div>






          {/* PASSENGER */}

          <div className="grid md:grid-cols-2 gap-5 mt-5">


            <input
              type="number"
              placeholder="Number of Passengers"
              className="input"
            />



            <select className="input">

              <option>
                Select Cabin
              </option>

              <option>
                Economy
              </option>

              <option>
                Premium Economy
              </option>

              <option>
                Business Class
              </option>

              <option>
                First Class
              </option>

            </select>


          </div>





          {/* EXTRA */}

          <textarea
            placeholder="Comments / Special Request"
            className="
              input
              mt-5
              h-32
            "
          />



          <input
            type="text"
            placeholder="Preferred Airlines (Optional)"
            className="input mt-5"
          />





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

            Request Flight Quote →

          </button>



        </div>


      </div>


    </main>
  );
}
