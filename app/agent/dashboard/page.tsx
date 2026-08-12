"use client";

import { useState } from "react";

type Quotation = {
  number: string;
  client: string;
  destination: string;
  status: "Pending" | "Approved" | "Processing";
};

const quotations: Quotation[] = [
  {
    number: "QT-240001",
    client: "John Smith",
    destination: "Dubai",
    status: "Pending",
  },
  {
    number: "QT-240002",
    client: "Maria Cruz",
    destination: "Japan",
    status: "Approved",
  },
  {
    number: "QT-240003",
    client: "Ahmed Ali",
    destination: "Thailand",
    status: "Processing",
  },
];

export default function AgentDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getStatusClass = (status: Quotation["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Approved":
        return "bg-green-100 text-green-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">

      {/* MOBILE HEADER */}
      <div className="lg:hidden bg-red-700 text-white p-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-lg">CHINGU</p>
          <p className="text-xs text-red-100">
            Travel and Tours
          </p>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-2xl"
        >
          ☰
        </button>
      </div>


      {/* SIDEBAR */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-40
          h-screen
          w-64
          bg-gradient-to-b
          from-red-700
          to-red-600
          text-white
          transition-transform
          duration-300
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* BRAND */}
        <div className="px-6 py-8 border-b border-red-500">

          <h1 className="text-3xl font-bold tracking-wide">
            CHINGU
          </h1>

          <p className="text-sm text-red-100">
            Travel and Tours
          </p>

          <p className="text-[10px] tracking-[3px] mt-3 text-red-200">
            B2B TOUR OPERATORS
          </p>

        </div>


        {/* NAVIGATION */}
        <nav className="p-4 space-y-2">

          {/* DASHBOARD */}
          <a
            href="/agent/dashboard"
            className="
              flex
              items-center
              gap-3
              bg-white
              text-red-700
              rounded-xl
              px-4
              py-3
              font-semibold
            "
          >
            <span>▦</span>
            Dashboard
          </a>


          {/* QUOTATION */}
          <a
            href="/agent/quotation"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              hover:bg-red-500
              transition
            "
          >
            <span>▤</span>
            Request Quotation
          </a>


          {/* HOTEL */}
          <a
            href="/agent/hotel-booking"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              hover:bg-red-500
              transition
            "
          >
            <span>▥</span>
            Hotel Booking
          </a>


          {/* VISA */}
          <a
            href="/agent/visa"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              hover:bg-red-500
              transition
            "
          >
            <span>✈</span>
            Visa Assistance
          </a>


          {/* TOUR PACKAGES */}
          <a
            href="/china-tours"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              hover:bg-red-500
              transition
            "
          >
            <span>▣</span>
            Tour Packages
          </a>


          {/* BOOKING STATUS */}
          <a
            href="/agent/booking-status"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              hover:bg-red-500
              transition
            "
          >
            <span>◷</span>
            Booking Status
          </a>


          {/* PAYMENTS */}
          <a
            href="/agent/payments"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              hover:bg-red-500
              transition
            "
          >
            <span>▭</span>
            Payments
          </a>


          {/* PROFILE */}
          <a
            href="/agent/profile"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              hover:bg-red-500
              transition
            "
          >
            <span>♙</span>
            My Profile
          </a>


          {/* REPORTS */}
          <a
            href="/agent/reports"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              hover:bg-red-500
              transition
            "
          >
            <span>▥</span>
            Reports
          </a>


          {/* SETTINGS */}
          <a
            href="/agent/settings"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              hover:bg-red-500
              transition
            "
          >
            <span>⚙</span>
            Settings
          </a>

        </nav>


        {/* LOGOUT */}
        <div className="absolute bottom-0 left-0 right-0 p-4">

          <a
            href="/agent/login"
            className="
              flex
              items-center
              justify-center
              gap-2
              border
              border-white/60
              rounded-xl
              px-4
              py-3
              font-semibold
              hover:bg-white
              hover:text-red-700
              transition
            "
          >
            ⇥ Logout
          </a>

          <p className="text-center text-[10px] text-red-200 mt-5">
            © 2026 CHINGU Travel and Tours
            <br />
            All Rights Reserved.
          </p>

        </div>

      </aside>


      {/* MAIN CONTENT */}
      <section className="lg:ml-64 p-5 md:p-8">

        {/* TOP HEADER */}
        <div className="
          bg-white
          rounded-2xl
          shadow-sm
          border
          border-gray-100
          p-6
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
        ">

          <div>

            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard
            </h1>

            <p className="mt-1 text-gray-500">
              Welcome to CHINGU Travel and Tours B2B Portal
            </p>

          </div>


          <div className="text-right">

            <p className="font-bold text-gray-800">
              Welcome, Agent
            </p>

            <p className="text-sm text-gray-500 flex items-center justify-end gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              Online
            </p>

          </div>

        </div>


        {/* STAT CARDS */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
          mt-6
        ">

          {/* PENDING */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">

            <p className="text-gray-500">
              Pending Quotations
            </p>

            <p className="mt-2 text-4xl font-bold text-red-600">
              18
            </p>

          </div>


          {/* HOTEL */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">

            <p className="text-gray-500">
              Hotel Requests
            </p>

            <p className="mt-2 text-4xl font-bold text-blue-600">
              12
            </p>

          </div>


          {/* VISA */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">

            <p className="text-gray-500">
              Visa Requests
            </p>

            <p className="mt-2 text-4xl font-bold text-green-600">
              9
            </p>

          </div>


          {/* BOOKINGS */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">

            <p className="text-gray-500">
              Confirmed Bookings
            </p>

            <p className="mt-2 text-4xl font-bold text-purple-600">
              45
            </p>

          </div>

        </div>


        {/* QUICK ACTIONS */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-5
          mt-6
        ">


          {/* QUOTATION */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Request Quotation
            </h2>

            <p className="mt-2 text-gray-500">
              Create airfare, hotel or package quotation.
            </p>

            <a
              href="/agent/quotation"
              className="
                inline-block
                mt-5
                bg-red-600
                text-white
                px-6
                py-2.5
                rounded-xl
                font-semibold
                hover:bg-red-700
                transition
              "
            >
              Open
            </a>

          </div>


          {/* HOTEL */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Hotel Booking
            </h2>

            <p className="mt-2 text-gray-500">
              Submit hotel reservation requests.
            </p>

            <a
              href="/agent/hotel-booking"
              className="
                inline-block
                mt-5
                bg-red-600
                text-white
                px-6
                py-2.5
                rounded-xl
                font-semibold
                hover:bg-red-700
                transition
              "
            >
              Open
            </a>

          </div>


          {/* VISA */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Visa Assistance
            </h2>

            <p className="mt-2 text-gray-500">
              Apply for visa processing.
            </p>

            <a
              href="/agent/visa"
              className="
                inline-block
                mt-5
                bg-red-600
                text-white
                px-6
                py-2.5
                rounded-xl
                font-semibold
                hover:bg-red-700
                transition
              "
            >
              Open
            </a>

          </div>


          {/* TOUR PACKAGES */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Tour Packages
            </h2>

            <p className="mt-2 text-gray-500">
              Browse available tour packages.
            </p>

            <a
              href="/china-tours"
              className="
                inline-block
                mt-5
                bg-red-600
                text-white
                px-6
                py-2.5
                rounded-xl
                font-semibold
                hover:bg-red-700
                transition
              "
            >
              Open
            </a>

          </div>


          {/* BOOKING STATUS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Booking Status
            </h2>

            <p className="mt-2 text-gray-500">
              Track customer bookings.
            </p>

            <a
              href="/agent/booking-status"
              className="
                inline-block
                mt-5
                bg-red-600
                text-white
                px-6
                py-2.5
                rounded-xl
                font-semibold
                hover:bg-red-700
                transition
              "
            >
              Open
            </a>

          </div>


          {/* PAYMENTS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Payments
            </h2>

            <p className="mt-2 text-gray-500">
              Review invoices and payments.
            </p>

            <a
              href="/agent/payments"
              className="
                inline-block
                mt-5
                bg-red-600
                text-white
                px-6
                py-2.5
                rounded-xl
                font-semibold
                hover:bg-red-700
                transition
              "
            >
              Open
            </a>

          </div>

        </div>


        {/* RECENT QUOTATIONS */}
        <div className="
          mt-6
          bg-white
          rounded-2xl
          shadow-sm
          border
          border-gray-100
          overflow-hidden
        ">

          <div className="p-6 border-b border-gray-100">

            <h2 className="text-xl font-bold text-gray-900">
              Recent Quotations
            </h2>

          </div>


          {/* DESKTOP TABLE */}
          <div className="hidden md:block overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr className="text-left text-sm text-gray-500">

                  <th className="px-6 py-4">
                    Quotation No.
                  </th>

                  <th className="px-6 py-4">
                    Client
                  </th>

                  <th className="px-6 py-4">
                    Destination
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                </tr>

              </thead>


              <tbody>

                {quotations.map((quotation) => (

                  <tr
                    key={quotation.number}
                    className="border-t border-gray-100"
                  >

                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {quotation.number}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {quotation.client}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {quotation.destination}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`
                          inline-flex
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          ${getStatusClass(quotation.status)}
                        `}
                      >
                        {quotation.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* MOBILE LIST */}
          <div className="md:hidden">

            {quotations.map((quotation) => (

              <div
                key={quotation.number}
                className="p-5 border-t border-gray-100"
              >

                <div className="flex items-center justify-between">

                  <p className="font-bold text-gray-800">
                    {quotation.number}
                  </p>

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      ${getStatusClass(quotation.status)}
                    `}
                  >
                    {quotation.status}
                  </span>

                </div>

                <p className="mt-2 text-sm text-gray-600">
                  {quotation.client}
                </p>

                <p className="text-sm text-gray-500">
                  {quotation.destination}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
