export default function AgentPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-4xl text-center">

        {/* BRAND */}
        <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
          CHINGU Travel and Tours
        </p>


        {/* TITLE */}
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
          B2B Agent Portal
        </h1>


        <p className="mt-4 text-gray-500 text-lg">
          Welcome to CHINGU Travel and Tours Agent Portal.
          <br />
          Manage tour packages, visa assistance, bookings, and inquiries.
        </p>


        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">


          {/* LOGIN */}
          <a
            href="/agent/login"
            className="
              bg-red-600
              text-white
              px-10
              py-3
              rounded-xl
              font-semibold
              hover:bg-red-700
              transition
              shadow-md
            "
          >
            Agent Login
          </a>


          {/* REGISTER */}
          <a
            href="/agent/register"
            className="
              border-2
              border-red-600
              text-red-600
              px-10
              py-3
              rounded-xl
              font-semibold
              hover:bg-red-600
              hover:text-white
              transition
            "
          >
            Register as Agent
          </a>


        </div>


        {/* FEATURES */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">


          <div className="
            bg-white
            rounded-2xl
            p-6
            shadow-md
            border
            border-gray-100
          ">

            <h2 className="font-bold text-gray-900">
              Tour Packages
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              View available destinations and agent rates.
            </p>

          </div>



          <div className="
            bg-white
            rounded-2xl
            p-6
            shadow-md
            border
            border-gray-100
          ">

            <h2 className="font-bold text-gray-900">
              Visa Services
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Submit and track visa applications.
            </p>

          </div>



          <div className="
            bg-white
            rounded-2xl
            p-6
            shadow-md
            border
            border-gray-100
          ">

            <h2 className="font-bold text-gray-900">
              Booking Support
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Manage customer requests and bookings.
            </p>

          </div>


        </div>


        {/* FOOTER */}
        <p className="mt-10 text-sm text-gray-400">
          © 2026 CHINGU Travel and Tours. All Rights Reserved.
        </p>


      </div>

    </main>
  );
}
