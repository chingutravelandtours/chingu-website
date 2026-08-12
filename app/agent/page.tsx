"use client";

export default function AgentPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">

      <div className="w-full max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Verified Travel Partner Portal
          </h1>

          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Welcome to CHINGU Travel and Tours B2B Partner Network.
            <br />
            Connect with trusted travel services, hotel partners, and tour solutions.
          </p>

        </div>


        {/* FREE REGISTRATION */}

        <div className="
          mt-8
          bg-red-50
          border
          border-red-200
          rounded-2xl
          p-6
          text-center
        ">

          <h2 className="text-xl font-bold text-red-700">
            FREE B2B Partner Registration
          </h2>

          <p className="mt-2 text-gray-700">
            Join the CHINGU Travel and Tours B2B Partner Network for FREE.
            There is no registration fee or membership fee.
          </p>

          <p className="mt-2 text-gray-700">
            Access is available only to verified travel agencies with valid
            business documents.
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


        {/* B2B SERVICES */}

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

            {/* RED LINE ICON */}

            <div className="
              w-14
              h-14
              rounded-xl
              bg-red-50
              flex
              items-center
              justify-center
            ">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-7 h-7 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.5 16.5 21 3l-5 8-6 2.5-7.5 3Z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.5 13.5-2 6 5-5"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8.5 20 12"
                />
              </svg>

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
              leading-relaxed
            ">
              Access verified tour packages and travel solutions
              for your customers.
            </p>


            <p className="
              mt-5
              text-red-600
              font-semibold
            ">
              Learn More →
            </p>

          </div>


          {/* HOTEL PARTNERS */}

          <div className="
            bg-white
            rounded-2xl
            p-7
            shadow-md
            border
            border-gray-100
          ">

            {/* RED LINE ICON */}

            <div className="
              w-14
              h-14
              rounded-xl
              bg-red-50
              flex
              items-center
              justify-center
            ">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-7 h-7 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 21h20"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7h2"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 7h2"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 11h2"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 11h2"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 15h2"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 15h2"
                />

              </svg>

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
              leading-relaxed
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


          {/* QUOTATION SUPPORT */}

          <div className="
            bg-white
            rounded-2xl
            p-7
            shadow-md
            border
            border-gray-100
          ">

            {/* RED LINE ICON */}

            <div className="
              w-14
              h-14
              rounded-xl
              bg-red-50
              flex
              items-center
              justify-center
            ">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-7 h-7 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 3v5h5"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 13h8"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 17h5"
                />

              </svg>

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
              leading-relaxed
            ">
              Request quotations and receive support for hotel,
              tour, and travel booking inquiries.
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
        ">

          <div className="text-center">

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
              We verify our travel partners to help maintain a
              trusted and secure B2B travel network.
            </p>

          </div>


          <div className="
            mt-6
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-4
            gap-4
          ">

            <div className="
              bg-gray-50
              rounded-xl
              p-4
              text-center
            ">
              <p className="font-semibold text-gray-800">
                Government ID
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Identity verification
              </p>
            </div>


            <div className="
              bg-gray-50
              rounded-xl
              p-4
              text-center
            ">
              <p className="font-semibold text-gray-800">
                Business Registration
              </p>

              <p className="text-xs text-gray-500 mt-1">
                DTI / SEC or applicable registration
              </p>
            </div>


            <div className="
              bg-gray-50
              rounded-xl
              p-4
              text-center
            ">
              <p className="font-semibold text-gray-800">
                Business Permit
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Valid business documentation
              </p>
            </div>


            <div className="
              bg-gray-50
              rounded-xl
              p-4
              text-center
            ">
              <p className="font-semibold text-gray-800">
                Verification
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Admin approval required
              </p>
            </div>

          </div>

        </div>


        {/* PARTNERSHIP MESSAGE */}

        <div className="mt-10 text-center">

          <h2 className="
            text-2xl
            font-bold
            text-gray-900
          ">
            Grow Together Through Partnership
          </h2>


          <p className="
            mt-3
            max-w-3xl
            mx-auto
            text-gray-500
            leading-relaxed
          ">
            Our goal is to connect travel agencies, hotels, and travel
            partners through a trusted B2B network where businesses can
            create opportunities and grow together.
          </p>

        </div>


        {/* FOOTER */}

        <p className="
          mt-12
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
