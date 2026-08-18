"use client";

import { useState } from "react";

export default function GaelPage() {
  const [message, setMessage] = useState("");

  const options = [
    "Tour Packages",
    "Flight Inquiry",
    "Hotel Reservation",
    "Visa Assistance",
    "Talk to Chingu Team",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">

        {/* Gael Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
            G
          </div>

          <h1 className="text-3xl font-bold mt-4 text-gray-800">
            Gael
          </h1>

          <p className="text-gray-500">
            Chingu AI Travel Assistant
          </p>
        </div>


        {/* Welcome Message */}
        <div className="bg-blue-50 rounded-xl p-5 mb-6">
          <p className="text-gray-700">
            Hi! I'm Gael, your Chingu Travel Assistant.
            <br /><br />
            I can help you with tour packages, flights,
            hotels, visa assistance, and customized travel
            experiences.
          </p>
        </div>


        {/* Buttons */}
        <div className="grid gap-3">
          {options.map((item) => (
            <button
              key={item}
              className="border border-blue-600 text-blue-600 rounded-xl py-3 hover:bg-blue-600 hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>


        {/* Chat Box */}
        <div className="mt-8">
          <label className="block text-sm text-gray-600 mb-2">
            Ask Gael anything:
          </label>

          <div className="flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Example: I want a Japan tour package"
              className="flex-1 border rounded-xl px-4 py-3 outline-none"
            />

            <button
              className="bg-blue-600 text-white px-5 rounded-xl"
              onClick={() => alert(
                "Thank you! Gael received your inquiry: " + message
              )}
            >
              Send
            </button>
          </div>
        </div>


        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Chingu Travel and Tours • Philippines & UAE Office
        </p>

      </div>
    </main>
  );
}
