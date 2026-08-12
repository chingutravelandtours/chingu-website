// app/visa/VisaCard.tsx
"use client";

import React from "react";
import { VisaInfo } from "./visaData";

interface VisaCardProps {
  visa: VisaInfo;
}

export default function VisaCard({ visa }: VisaCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between p-6">
      <div>
        {/* Country Name & Badge */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold text-gray-900">
            {visa.country}
          </h2>
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
            {visa.price}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          {visa.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          {visa.description}
        </p>

        {/* Requirements (Kung mayroon sa data) */}
        {visa.requirements && visa.requirements.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs font-medium text-gray-600 mb-1">
              Key Requirements:
            </p>
            <ul className="list-disc list-inside text-xs text-gray-500 space-y-1">
              {visa.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <button
          onClick={() => alert(`Inquire for ${visa.country} Visa`)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-xl text-sm transition-colors duration-200"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
