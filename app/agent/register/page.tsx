"use client";

import { useState } from "react";

export default function AgentRegisterPage() {
  const [form, setForm] = useState({
    name: "",
    agency: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert(
      "Registration submitted successfully! Your account is pending approval."
    );

    console.log("Agent Registration:", form);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-lg">

        {/* HEADER */}
        <div className="text-center mb-8">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Agent Registration
          </h1>

          <p className="mt-3 text-gray-500">
            Create your B2B travel agent account.
          </p>

        </div>


        {/* FORM CARD */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* FULL NAME */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Juan Dela Cruz"
                required
                className="
                  mt-2
                  w-full
                  bg-white
                  text-black
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-100
                "
              />
            </div>


            {/* AGENCY */}
            <div>
              <label
                htmlFor="agency"
                className="block text-sm font-semibold text-gray-700"
              >
                Agency Name
              </label>

              <input
                id="agency"
                type="text"
                name="agency"
                value={form.agency}
                onChange={handleChange}
                placeholder="ABC Travel Agency"
                required
                className="
                  mt-2
                  w-full
                  bg-white
                  text-black
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-100
                "
              />
            </div>


            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="agent@email.com"
                required
                className="
                  mt-2
                  w-full
                  bg-white
                  text-black
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-100
                "
              />
            </div>


            {/* PHONE */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700"
              >
                Mobile Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+63 9XX XXX XXXX"
                required
                className="
                  mt-2
                  w-full
                  bg-white
                  text-black
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-100
                "
              />
            </div>


            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="
                  mt-2
                  w-full
                  bg-white
                  text-black
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-100
                "
              />
            </div>


            {/* CONFIRM PASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="
                  mt-2
                  w-full
                  bg-white
                  text-black
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-100
                "
              />
            </div>


            {/* SUBMIT */}
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
              Submit Registration
            </button>

          </form>


          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}

            <a
              href="/agent/login"
              className="text-red-600 font-semibold hover:underline"
            >
              Agent Login
            </a>
          </p>

        </div>

      </div>

    </main>
  );
}
