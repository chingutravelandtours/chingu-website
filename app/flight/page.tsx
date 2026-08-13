"use client";

import { useState } from "react";

export default function FlightPage() {

  const [form, setForm] = useState({
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    passengers: "1",
    travelClass: "Economy",
    airline: "",
    message: "",
  });


  const inputStyle = `
    w-full
    border
    border-gray-300
    rounded-xl
    px-4
    py-3
    text-black
    placeholder:text-gray-400
    bg-white
    outline-none
    focus:border-red-500
    focus:ring-2
    focus:ring-red-100
  `;


  const handleSubmit = () => {

    const message = `
Hello CHINGU Travel and Tours!

I would like to request a flight quotation.

From:
${form.from}

To:
${form.to}

Departure:
${form.departure}

Return:
${form.returnDate}

Passengers:
${form.passengers}

Class:
${form.travelClass}

Preferred Airline:
${form.airline}

Special Request:
${form.message}

Thank you.
`;

    window.open(
      `https://wa.me/63919388999?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  };


  return (

    <main className="min-h-screen bg-gray-50 py-12 px-5">

      <div className="max-w-5xl mx-auto">


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
            Flight Booking Inquiry
          </h1>


          <p className="
          mt-4
          text-gray-500
          ">
            Request your flight quotation and let us find the best options.
          </p>

        </div>



        <div className="
          bg-white
          rounded-2xl
          shadow-md
          border
          border-gray-100
          p-8
        ">


          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          ">


            <input
              className={inputStyle}
              placeholder="From (Example: Manila)"
              onChange={(e)=>setForm({...form,from:e.target.value})}
            />


            <input
              className={inputStyle}
              placeholder="To (Example: Dubai)"
              onChange={(e)=>setForm({...form,to:e.target.value})}
            />


            <input
              type="date"
              className={inputStyle}
              onChange={(e)=>setForm({...form,departure:e.target.value})}
            />


            <input
              type="date"
              className={inputStyle}
              onChange={(e)=>setForm({...form,returnDate:e.target.value})}
            />


            <input
              className={inputStyle}
              placeholder="Number of Passengers"
              value={form.passengers}
              onChange={(e)=>setForm({...form,passengers:e.target.value})}
            />


            <select
              className={inputStyle}
              onChange={(e)=>setForm({...form,travelClass:e.target.value})}
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>


            <input
              className={inputStyle}
              placeholder="Preferred Airline (Optional)"
              onChange={(e)=>setForm({...form,airline:e.target.value})}
            />


          </div>



          <textarea
            className={`
              ${inputStyle}
              mt-5
              h-32
            `}
            placeholder="Special Request"
            onChange={(e)=>setForm({...form,message:e.target.value})}
          />



          <button
            onClick={handleSubmit}
            className="
              mt-6
              w-full
              bg-red-600
              text-white
              py-3
              rounded-xl
              font-semibold
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
