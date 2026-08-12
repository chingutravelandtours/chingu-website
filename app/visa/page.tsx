"use client";

import VisaCard from "./VisaCard";
import { visaData } from "./visaData";

export default function VisaPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-5">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <p className="text-red-600 uppercase tracking-widest font-semibold text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-5xl font-bold text-gray-900">
            Visa Assistance
          </h1>

          <p className="mt-4 text-gray-500">
            Hassle-free visa processing for your international journey.
          </p>

        </div>


        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        ">

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
