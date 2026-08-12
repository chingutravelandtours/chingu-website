"use client";

import { useState } from "react";

export default function AgentApplicationPage() {

  const [status, setStatus] = useState("PENDING VERIFICATION");


  const approveAgent = () => {
    setStatus("APPROVED");
  };


  const rejectAgent = () => {
    setStatus("REJECTED");
  };


  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <div className="max-w-5xl mx-auto">


        {/* HEADER */}
        <div className="mb-8">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            Agent Application Review
          </h1>

          <p className="text-gray-500 mt-2">
            Verify travel agency documents before approval.
          </p>

        </div>



        {/* APPLICANT INFO */}
        <div className="bg-white rounded-2xl shadow border p-8 mb-6">

          <h2 className="text-2xl font-bold mb-5">
            Applicant Information
          </h2>


          <div className="space-y-3 text-gray-700">

            <p>
              <strong>Name:</strong> Juan Dela Cruz
            </p>

            <p>
              <strong>Email:</strong> juan@email.com
            </p>

            <p>
              <strong>Mobile:</strong> +63 9123456789
            </p>

          </div>

        </div>





        {/* AGENCY INFO */}
        <div className="bg-white rounded-2xl shadow border p-8 mb-6">


          <h2 className="text-2xl font-bold mb-5">
            Agency Information
          </h2>


          <div className="space-y-3 text-gray-700">

            <p>
              <strong>Agency Name:</strong> ABC Travel Agency
            </p>


            <p>
              <strong>Business Address:</strong>
              Manila, Philippines
            </p>


            <p>
              <strong>DTI / SEC Registration:</strong>
              DTI-123456
            </p>


            <p>
              <strong>Business Permit:</strong>
              BP-987654
            </p>


            <p>
              <strong>DOT Accreditation:</strong>
              Not Provided
            </p>

          </div>


        </div>






        {/* DOCUMENTS */}
        <div className="bg-white rounded-2xl shadow border p-8 mb-6">


          <h2 className="text-2xl font-bold mb-5">
            Verification Documents
          </h2>



          <div className="space-y-4">


            <button className="
              w-full
              text-left
              border
              rounded-xl
              p-4
              hover:bg-gray-50
            ">
              📄 Government ID
              <span className="block text-sm text-gray-500">
                View uploaded document
              </span>
            </button>



            <button className="
              w-full
              text-left
              border
              rounded-xl
              p-4
              hover:bg-gray-50
            ">
              📄 Business Registration
              <span className="block text-sm text-gray-500">
                DTI / SEC Certificate
              </span>
            </button>




            <button className="
              w-full
              text-left
              border
              rounded-xl
              p-4
              hover:bg-gray-50
            ">
              📄 Business Permit
              <span className="block text-sm text-gray-500">
                Mayor's Permit
              </span>
            </button>



          </div>


        </div>






        {/* STATUS */}

        <div className="bg-white rounded-2xl shadow border p-8">


          <h2 className="text-2xl font-bold">
            Verification Status
          </h2>


          <p className="
            mt-4
            font-bold
            text-red-600
          ">
            {status}
          </p>




          <div className="flex gap-4 mt-8">


            <button
              onClick={approveAgent}
              className="
                bg-green-600
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
              "
            >
              Approve Agent
            </button>




            <button
              onClick={rejectAgent}
              className="
                bg-red-600
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
              "
            >
              Reject Application
            </button>


          </div>


        </div>



      </div>

    </main>
  );
}
