"use client";

import { useState } from "react";

type VisaApplication = {
  reference: string;
  applicant: string;
  destination: string;
  applicationDate: string;
  status: string;
  lastUpdated: string;
  remarks: string;
};

const applications: VisaApplication[] = [
  {
    reference: "CTT-2026-001",
    applicant: "Juan Dela Cruz",
    destination: "China",
    applicationDate: "August 5, 2026",
    status: "Processing",
    lastUpdated: "August 10, 2026",
    remarks: "Your visa application is currently being processed.",
  },
  {
    reference: "CTT-2026-002",
    applicant: "Maria Santos",
    destination: "Japan",
    applicationDate: "August 3, 2026",
    status: "Additional Documents",
    lastUpdated: "August 9, 2026",
    remarks: "Please submit the requested additional documents.",
  },
  {
    reference: "CTT-2026-003",
    applicant: "Sample Applicant",
    destination: "Korea",
    applicationDate: "August 1, 2026",
    status: "Approved",
    lastUpdated: "August 8, 2026",
    remarks: "Your visa application has been approved.",
  },
  {
    reference: "CTT-2026-004",
    applicant: "Sample Applicant",
    destination: "Australia",
    applicationDate: "July 28, 2026",
    status: "Released",
    lastUpdated: "August 7, 2026",
    remarks: "Your passport and visa documents are ready for release.",
  },
];

export default function VisaTrackingPage() {
  const [reference, setReference] = useState("");
  const [result, setResult] = useState<VisaApplication | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const cleanReference = reference.trim().toUpperCase();

    const application = applications.find(
      (item) => item.reference === cleanReference
    );

    setResult(application || null);
    setSearched(true);
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-50 text-green-700 border-green-200";

      case "Released":
        return "bg-blue-50 text-blue-700 border-blue-200";

      case "Additional Documents":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";

      case "Processing":
        return "bg-red-50 text-red-600 border-red-200";

      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">
      <div className="max-w-3xl mx-auto">

        <a
          href="/visa"
          className="text-red-600 font-semibold text-sm hover:text-red-700"
        >
          ← Back to Visa Information
        </a>

        <div className="text-center mt-8 mb-10">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Visa Tracking
          </h1>

          <p className="mt-4 text-gray-500">
            Check the current status of your visa application.
          </p>

        </div>


        <div className="bg-white rounded-2xl shadow-md border p-6">

          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Application Reference Number
          </label>


          <div className="flex flex-col sm:flex-row gap-3">

            <input
              value={reference}
              onChange={(e) => {
                setReference(e.target.value);
                setSearched(false);
                setResult(null);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Example: CTT-2026-001"
              className="flex-1 border rounded-xl px-4 py-3 outline-none focus:border-red-500"
            />


            <button
              onClick={handleSearch}
              disabled={!reference.trim()}
              className="
              bg-red-600
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              disabled:bg-gray-300
              "
            >
              Track Application
            </button>

          </div>


          {searched && !result && (

            <div className="mt-5 bg-red-50 border border-red-100 rounded-xl p-5">

              <p className="font-semibold text-red-700">
                Application Not Found
              </p>

              <p className="text-sm text-red-600 mt-2">
                Please check your reference number and try again.
              </p>

            </div>

          )}

        </div>


        {result && (

          <div className="mt-6 bg-white rounded-2xl shadow-md border overflow-hidden">

            <div className="bg-gray-50 border-b p-6">

              <p className="text-xs text-gray-400">
                REFERENCE NUMBER
              </p>

              <p className="text-xl font-bold">
                {result.reference}
              </p>


              <span
                className={`
                inline-block
                mt-4
                px-4
                py-2
                rounded-full
                border
                text-sm
                font-bold
                ${getStatusClass(result.status)}
                `}
              >
                {result.status}
              </span>

            </div>


            <div className="p-6 grid sm:grid-cols-2 gap-5">

              <div>
                <p className="text-xs text-gray-400">
                  Applicant
                </p>
                <p className="font-semibold">
                  {result.applicant}
                </p>
              </div>


              <div>
                <p className="text-xs text-gray-400">
                  Destination
                </p>
                <p className="font-semibold">
                  {result.destination}
                </p>
              </div>


              <div>
                <p className="text-xs text-gray-400">
                  Application Date
                </p>
                <p className="font-semibold">
                  {result.applicationDate}
                </p>
              </div>


              <div>
                <p className="text-xs text-gray-400">
                  Last Updated
                </p>
                <p className="font-semibold">
                  {result.lastUpdated}
                </p>
              </div>


              <div className="sm:col-span-2 bg-gray-50 rounded-xl p-5">

                <p className="text-xs text-gray-400">
                  Remarks
                </p>

                <p className="mt-2 text-gray-700">
                  {result.remarks}
                </p>

              </div>

            </div>

          </div>

        )}



        <div className="mt-8 text-center">

          <a
            href="https://wa.me/63919388999"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            bg-red-600
            text-white
            px-7
            py-3
            rounded-xl
            font-semibold
            "
          >
            Need Help? Contact Us →
          </a>

        </div>


        <p className="text-center text-xs text-gray-400 mt-8">
          Visa requirements and processing times may change depending on embassy policies.
        </p>


      </div>
    </main>
  );
}
