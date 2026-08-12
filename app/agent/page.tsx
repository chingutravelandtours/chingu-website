"use client";

export default function AgentPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">

      <div className="w-full max-w-5xl mx-auto">


        {/* HEADER */}
        <div className="text-center">

          <p className="
            text-red-600
            font-semibold
            uppercase
            tracking-[4px]
            text-sm
          ">
            CHINGU Travel and Tours
          </p>


          <h1 className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
          ">
            CHINGU B2B Partner Portal
          </h1>


          <p className="
            mt-4
            text-gray-500
            text-lg
          ">
            A centralized B2B platform connecting travel agencies,
            hotels, and travel partners through trusted solutions.
          </p>

        </div>




        {/* FREE REGISTRATION BOX */}

        <div className="
          mt-8
          bg-red-50
          border
          border-red-200
          rounded-2xl
          p-6
          text-center
        ">

          <h2 className="
            text-xl
            font-bold
            text-red-700
          ">
            FREE B2B Partner Registration
          </h2>


          <p className="
            mt-2
            text-gray-700
          ">
            No registration fee. No membership fee.
          </p>


          <p className="
            mt-2
            text-gray-700
          ">
            Access is available only for verified travel agencies
            with valid business documents.
          </p>

        </div>





        {/* BUTTONS */}

        <div className="
          mt-8
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-5
        ">


          <a
            href="/agent/login"
            className="
              bg-red-600
              text-white
              px-10
              py-3
              rounded-xl
              font-semibold
              text-center
              hover:bg-red-700
              transition
              shadow-md
            "
          >
            B2B Portal Login
          </a>



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
              text-center
              hover:bg-red-600
              hover:text-white
              transition
            "
          >
            Become a Travel Partner
          </a>


        </div>





        {/* AGENT SERVICES */}

        <div className="
          mt-12
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        ">


          {/* TOUR PACKAGES */}

          <div className="
            bg-white
            rounded-2xl
            p-7
            shadow-md
            border
            border-gray-100
          ">

            <div className="
              w-14
              h-14
              rounded-xl
              bg-red-50
              flex
              items-center
              justify-center
              text-red-600
              text-2xl
            ">
              ✈
            </div>


            <h2 className="
              mt-6
              text-xl
              font-bold
              text-gray-900
            ">
              B2B Tour Packages
            </h2>


            <p className="
              mt-3
              text-gray-500
            ">
              Access verified tour packages and travel
              solutions for your customers.
            </p>


            <p className="
              mt-5
              text-red-600
              font-semibold
            ">
              Learn More →
            </p>

          </div>






          {/* HOTEL */}

          <div className="
            bg-white
            rounded-2xl
            p-7
            shadow-md
            border
            border-gray-100
          ">


            <div className="
              w-14
              h-14
              rounded-xl
              bg-red-50
              flex
              items-center
              justify-center
              text-red-600
              text-2xl
            ">
              🏨
            </div>


            <h2 className="
              mt-6
              text-xl
              font-bold
              text-gray-900
            ">
              Hotel Partner Network
            </h2>


            <p className="
              mt-3
              text-gray-500
            ">
              Connect with trusted hotel partners and request
              competitive rates for your clients.
            </p>


            <p className="
              mt-5
              text-red-600
              font-semibold
            ">
              Learn More →
            </p>


          </div>






          {/* SUPPORT */}

          <div className="
            bg-white
            rounded-2xl
            p-7
            shadow-md
            border
            border-gray-100
          ">


            <div className="
              w-14
              h-14
              rounded-xl
              bg-red-50
              flex
              items-center
              justify-center
              text-red-600
              text-2xl
            ">
              📄
            </div>


            <h2 className="
              mt-6
              text-xl
              font-bold
              text-gray-900
            ">
              Quotation & Booking Support
            </h2>


            <p className="
              mt-3
              text-gray-500
            ">
              Request quotations and receive support for
              hotel, tour, and travel inquiries.
            </p>


            <p className="
              mt-5
              text-red-600
              font-semibold
            ">
              Learn More →
            </p>


          </div>


        </div>






        {/* VERIFICATION */}

        <div className="
          mt-10
          bg-white
          rounded-2xl
          shadow-md
          border
          border-gray-100
          p-8
          text-center
        ">


          <h2 className="
            text-2xl
            font-bold
            text-gray-900
          ">
            Verified Travel Agencies Only
          </h2>


          <p className="
            mt-3
            text-gray-500
          ">
            We verify our partners to maintain a trusted and secure
            B2B travel network.
          </p>


        </div>





        {/* FOOTER */}

        <p className="
          mt-10
          text-center
          text-sm
          text-gray-400
        ">
          © 2026 CHINGU Travel and Tours. All Rights Reserved.
        </p>


      </div>

    </main>
  );
}
