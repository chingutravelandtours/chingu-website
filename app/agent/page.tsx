"use client";

export default function AgentPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">

      <div className="w-full max-w-5xl mx-auto">

        {/* BRAND */}
        <div className="text-center">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          {/* TITLE */}
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Verified Travel Partner Portal
          </h1>

          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Welcome to CHINGU Travel and Tours B2B Partner Network.
            <br />
            Connect with trusted travel services, hotel partners, and
            tour solutions.
          </p>

        </div>


        {/* FREE PARTNER NOTICE */}
        <div
          className="
            mt-8
            bg-red-50
            border
            border-red-200
            rounded-2xl
            p-6
            text-center
          "
        >

          <h2 className="text-xl font-bold text-red-700">
            FREE Partner Registration
          </h2>

          <p className="mt-2 text-gray-700 leading-relaxed">
            Join the CHINGU Travel and Tours B2B Partner Network for FREE.
            There is no registration fee or membership fee.
          </p>

          <p className="mt-2 text-gray-700 leading-relaxed">
            To protect our travel partners and customers, access is
            available only to verified travel agencies with valid
            business documents.
          </p>

        </div>


        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-5">

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


        {/* FEATURES */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">


          {/* TOUR PACKAGES */}
          <div
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-md
              border
              border-gray-100
              text-center
            "
          >

            <div className="text-4xl mb-4">
              ✈️
            </div>

            <h2 className="font-bold text-gray-900 text-lg">
              Tour Packages
            </h2>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Access verified tour packages and travel solutions
              for your customers.
            </p>

          </div>


          {/* HOTEL PARTNERS */}
          <div
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-md
              border
              border-gray-100
              text-center
            "
          >

            <div className="text-4xl mb-4">
              🏨
            </div>

            <h2 className="font-bold text-gray-900 text-lg">
              Hotel Partners
            </h2>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Connect with hotel partners and request
              competitive rates for your clients.
            </p>

          </div>


          {/* BOOKING SUPPORT */}
          <div
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-md
              border
              border-gray-100
              text-center
            "
          >

            <div className="text-4xl mb-4">
              🤝
            </div>

            <h2 className="font-bold text-gray-900 text-lg">
              Booking Support
            </h2>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Get support with quotations, travel requests,
              and booking inquiries.
            </p>

          </div>

        </div>


        {/* VERIFICATION SECTION */}
        <div
          className="
            mt-10
            bg-white
            rounded-2xl
            shadow-md
            border
            border-gray-100
            p-8
          "
        >

          <div className="text-center">

            <h2 className="text-2xl font-bold text-gray-900">
              Verified Travel Agencies Only
            </h2>

            <p className="mt-3 text-gray-500 leading-relaxed">
              We verify our travel partners to help maintain a
              trusted and secure B2B travel network.
            </p>

          </div>


          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="font-semibold text-gray-800">
                Government ID
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Identity verification
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="font-semibold text-gray-800">
                Business Registration
              </p>

              <p className="text-xs text-gray-500 mt-1">
                DTI / SEC or applicable registration
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="font-semibold text-gray-800">
                Business Permit
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Valid business documentation
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="font-semibold text-gray-800">
                Verification
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Admin approval required
              </p>
            </div>

          </div>

        </div>


        {/* PARTNER MESSAGE */}
        <div className="mt-10 text-center">

          <h2 className="text-2xl font-bold text-gray-900">
            Grow Together Through Partnership
          </h2>

          <p className="mt-3 max-w-3xl mx-auto text-gray-500 leading-relaxed">
            Our goal is to connect travel agencies, hotels, and travel
            partners through a trusted B2B network where businesses can
            create opportunities and grow together.
          </p>

        </div>


        {/* REGISTER CTA */}
        <div className="mt-8 text-center">

          <a
            href="/agent/register"
            className="
              inline-block
              bg-red-600
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
              hover:bg-red-700
              transition
              shadow-md
            "
          >
            Apply as a Verified Travel Partner
          </a>

        </div>


        {/* FOOTER */}
        <p className="mt-12 text-center text-sm text-gray-400">
          © 2026 CHINGU Travel and Tours. All Rights Reserved.
        </p>

      </div>

    </main>
  );
}
