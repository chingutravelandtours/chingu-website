export default function AgentPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-5xl">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            B2B Agent Portal
          </h1>

          <p className="mt-4 text-gray-500 text-lg">
            Welcome to CHINGU Travel and Tours Agent Portal.
            Manage tour packages, visa assistance, bookings, and customer requests.
          </p>

        </div>


        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">


          {/* LOGIN */}
          <a
            href="/agent/login"
            className="
              bg-red-600
              text-white
              px-10
              py-4
              rounded-xl
              font-semibold
              text-center
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
              py-4
              rounded-xl
              font-semibold
              text-center
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
          mt-12
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        ">


          <div className="
            bg-white
            rounded-2xl
            shadow-md
            border
            border-gray-100
            p-6
            text-center
          ">

            <div className="text-3xl">
              ✈️
            </div>

            <h2 className="mt-4 font-bold text-gray-900">
              Tour Packages
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              View available destinations and agent rates.
            </p>

          </div>



          <div className="
            bg-white
            rounded-2xl
            shadow-md
            border
            border-gray-100
            p-6
            text-center
          ">

            <div className="text-3xl">
              📄
            </div>

            <h2 className="mt-4 font-bold text-gray-900">
              Visa Assistance
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Submit and monitor visa applications.
            </p>

          </div>



          <div className="
            bg-white
            rounded-2xl
            shadow-md
            border
            border-gray-100
            p-6
            text-center
          ">

            <div className="text-3xl">
              🏨
            </div>

            <h2 className="mt-4 font-bold text-gray-900">
              Booking Support
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Manage customer bookings and requests.
            </p>

          </div>


        </div>


        {/* FOOTER NOTE */}
        <div className="text-center mt-10">

          <p className="text-sm text-gray-400">
            Already registered? Login to access your agent dashboard.
          </p>

        </div>


      </div>

    </main>
  );
}
