import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <div className="max-w-7xl mx-auto">


        {/* HEADER */}
        <div className="mb-10">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your travel business operations.
          </p>

        </div>



        {/* SUMMARY CARDS */}
        <div className="grid md:grid-cols-3 gap-6">


          {/* AGENTS */}
          <div className="
            bg-white
            rounded-2xl
            shadow-md
            border
            p-6
          ">

            <h2 className="text-xl font-bold text-gray-800">
              Agent Applications
            </h2>

            <p className="
              text-5xl
              font-bold
              text-red-600
              mt-4
            ">
              0
            </p>

            <p className="text-gray-500 mt-2">
              Pending agent approvals
            </p>


            <Link
              href="/admin/agent"
              className="
                inline-block
                mt-6
                bg-red-600
                text-white
                px-5
                py-3
                rounded-xl
                font-semibold
                hover:bg-red-700
              "
            >
              Manage Agents
            </Link>

          </div>




          {/* HOTELS */}
          <div className="
            bg-white
            rounded-2xl
            shadow-md
            border
            p-6
          ">

            <h2 className="text-xl font-bold text-gray-800">
              Hotel Partners
            </h2>

            <p className="
              text-5xl
              font-bold
              text-red-600
              mt-4
            ">
              0
            </p>

            <p className="text-gray-500 mt-2">
              Active partner hotels
            </p>


            <Link
              href="/admin/hotels"
              className="
                inline-block
                mt-6
                bg-red-600
                text-white
                px-5
                py-3
                rounded-xl
                font-semibold
                hover:bg-red-700
              "
            >
              Manage Hotels
            </Link>

          </div>





          {/* QUOTATIONS */}
          <div className="
            bg-white
            rounded-2xl
            shadow-md
            border
            p-6
          ">


            <h2 className="text-xl font-bold text-gray-800">
              Quotations
            </h2>


            <p className="
              text-5xl
              font-bold
              text-red-600
              mt-4
            ">
              0
            </p>


            <p className="text-gray-500 mt-2">
              Customer quotation requests
            </p>


            <Link
              href="/admin/quotations"
              className="
                inline-block
                mt-6
                bg-red-600
                text-white
                px-5
                py-3
                rounded-xl
                font-semibold
                hover:bg-red-700
              "
            >
              View Quotations
            </Link>


          </div>


        </div>





        {/* QUICK ACTIONS */}
        <div className="
          mt-10
          bg-white
          rounded-2xl
          shadow-md
          border
          p-8
        ">


          <h2 className="
            text-2xl
            font-bold
            text-gray-800
            mb-6
          ">
            Quick Actions
          </h2>


          <div className="
            grid
            md:grid-cols-4
            gap-4
          ">


            <Link
              href="/admin/agent"
              className="
                border
                rounded-xl
                p-5
                hover:bg-gray-50
                transition
              "
            >
              <h3 className="font-bold">
                Agents
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Approve new travel agents
              </p>

            </Link>




            <Link
              href="/admin/hotels"
              className="
                border
                rounded-xl
                p-5
                hover:bg-gray-50
                transition
              "
            >

              <h3 className="font-bold">
                Hotels
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Manage hotel partners
              </p>

            </Link>





            <Link
              href="/admin/quotations"
              className="
                border
                rounded-xl
                p-5
                hover:bg-gray-50
                transition
              "
            >

              <h3 className="font-bold">
                Quotations
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Review customer requests
              </p>

            </Link>





            <Link
              href="/tour-packages"
              className="
                border
                rounded-xl
                p-5
                hover:bg-gray-50
                transition
              "
            >

              <h3 className="font-bold">
                Tours
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Manage tour packages
              </p>

            </Link>


          </div>


        </div>


      </div>


    </main>
  );
}
