"use client";

import VisaCard from "./VisaCard";
import { visaData } from "./visaData";

export default function VisaPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-5">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="
            text-red-600
            uppercase
            tracking-[4px]
            font-semibold
            text-sm
          ">
            CHINGU Travel and Tours
          </p>


          <h1 className="
            mt-4
            text-5xl
            font-bold
            text-gray-900
          ">
            Visa Assistance
          </h1>


          <p className="
            mt-4
            text-gray-500
            text-lg
          ">
            Hassle-free visa processing for your international journey.
          </p>

        </div>


        {/* SEARCH */}
        <div className="max-w-xl mx-auto mb-10">

          <input
            type="text"
            placeholder="Search visa destination..."
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-5
              py-3
              text-gray-900
              placeholder:text-gray-400
              outline-none
              focus:border-red-500
              focus:ring-2
              focus:ring-red-100
            "
          />

        </div>



        {/* VISA CARDS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {visaData.map((visa) => (
            <VisaCard
              key={visa.country}
              visa={visa}
            />
          ))}

        </div>


      </div>

    </main>
  );
}
