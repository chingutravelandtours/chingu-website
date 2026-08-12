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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password does not match.");
      return;
    }

    alert(
      "Agent registration submitted! Your account is waiting for approval."
    );

    console.log(form);
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
        <div className="
          bg-white
          rounded-2xl
          shadow-md
          border
          border-gray-100
          p-8
        ">

          <form onSubmit={handleSubmit} className="space-y-5">


            {/* NAME */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Juan Dela Cruz"
                required
                className="
                  mt-2
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              />
            </div>


            {/* AGENCY */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Agency Name
              </label>

              <input
                name="agency"
                value={form.agency}
                onChange={handleChange}
                placeholder="ABC Travel Agency"
                required
                className="
                  mt-2
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              />
            </div>


            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="agent@email.com"
                required
                className="
                  mt-2
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              />
            </div>


            {/* PHONE */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Mobile Number
              </label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+63 9xx xxx xxxx"
                required
                className="
                  mt-2
                  w-full
                  border
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
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="
                  mt-2
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              />
            </div>


            {/* CONFIRM */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="
                  mt-2
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-red-500
                "
              />
            </div>


            {/* BUTTON */}
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
              Create Agent Account
            </button>


          </form>


          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a
              href="/agent/login"
              className="text-red-600 font-semibold hover:underline"
            >
              Login
            </a>
          </p>


        </div>

      </div>

    </main>
  );
}

