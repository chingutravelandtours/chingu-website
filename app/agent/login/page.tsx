"use client";

import { useState } from "react";

export default function AgentLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary login test
    if (email && password) {
      alert("Login successful!");

      // Temporary redirect to dashboard
      window.location.href = "/agent/dashboard";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="text-center mb-8">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Agent Login
          </h1>

          <p className="mt-3 text-gray-500">
            Access your B2B travel agent portal.
          </p>

        </div>


        {/* LOGIN CARD */}
        <div className="
          bg-white
          rounded-2xl
          shadow-md
          border
          border-gray-100
          p-8
        ">

          <form onSubmit={handleLogin} className="space-y-5">


            {/* EMAIL */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="agent@email.com"
                required
                className="
                  mt-2
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              />

            </div>


            {/* PASSWORD */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="
                  mt-2
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              />

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="
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
              Login
            </button>


          </form>


          {/* REGISTER LINK */}
          <p className="text-center text-sm text-gray-500 mt-6">

            Don't have an account?{" "}

            <a
              href="/agent/register"
              className="
                text-red-600
                font-semibold
                hover:underline
              "
            >
              Register as Agent
            </a>

          </p>


        </div>


      </div>


    </main>
  );
}
