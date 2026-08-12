export default function AgentPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5">

      <div className="text-center max-w-xl">

        {/* LOGO / BRAND */}
        <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
          CHINGU Travel and Tours
        </p>


        {/* TITLE */}
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
          B2B Agent Portal
        </h1>


        <p className="mt-4 text-gray-500 text-lg">
          Welcome to CHINGU Travel and Tours Agent Portal.
          Access tour packages, visa assistance, hotel bookings,
          and customer requests in one place.
        </p>


        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">


          {/* LOGIN */}
          <a
            href="/agent/login"
            className="
              bg-red-600
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
              hover:bg-red-700
              transition
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
              px-8
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
        <div className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-4
        ">


          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold text-gray-900">
              Tour Packages
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              View available destinations and rates.
            </p>
          </div>


          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold text-gray-900">
              Visa Assistance
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Submit and track visa requests.
            </p>
          </div>


          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold text-gray-900">
              Booking Support
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Manage customer inquiries.
            </p>
          </div>


        </div>


      </div>

    </main>
  );
}
