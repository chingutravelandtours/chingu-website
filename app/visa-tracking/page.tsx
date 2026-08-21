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
    remarks:
      "Your visa application is currently being processed.",
  },
  {
    reference: "CTT-2026-002",
    applicant: "Maria Santos",
    destination: "Japan",
    applicationDate: "August 3, 2026",
    status: "Additional Documents",
    lastUpdated: "August 9, 2026",
    remarks:
      "Please submit the requested additional documents.",
  },
  {
    reference: "CTT-2026-003",
    applicant: "Sample Applicant",
    destination: "Korea",
    applicationDate: "August 1, 2026",
    status: "Approved",
    lastUpdated: "August 8, 2026",
    remarks:
      "Your visa application has been approved.",
  },
  {
    reference: "CTT-2026-004",
    applicant: "Sample Applicant",
    destination: "Australia",
    applicationDate: "July 28, 2026",
    status: "Released",
    lastUpdated: "August 7, 2026",
    remarks:
      "Your passport and visa documents are ready for release.",
  },
];

export default function VisaTrackingPage() {
  const [reference, setReference] = useState("");
  const [result, setResult] =
    useState<VisaApplication | null>(null);
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
    <main className="min-h-screen bg-gray-50 py-12 px-5">
      <div className="max-w-3xl mx-auto">

        {/* BACK TO VISA INFO */}
        <div className="mb-6">
          <a
            href="/visa"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-red-600
              hover:text-red-700
              transition
            "
          >
            ← Back to Visa Information
          </a>
        </div>

        {/* HEADER */}
        <div className="text-center mb-10">

          <p className="text-red-600 font-semibold uppercase tracking-[4px] text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Visa Tracking
          </h1>

          <p className="mt-4 text-gray-500">
            Check the current status of your visa application.
          </p>

        </div>

        {/* SEARCH CARD */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Application Reference Number
          </label>

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
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
              className="
                flex-1
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                text-sm
                outline-none
                focus:border-red-500
                focus:ring-2
                focus:ring-red-100
              "
            />

            <button
              onClick={handleSearch}
              disabled={!reference.trim()}
              className="
                bg-red-600
                text-white
                px-7
                py-3
                rounded-xl
                text-sm
                font-semibold
                hover:bg-red-700
                disabled:bg-gray-300
                disabled:cursor-not-allowed
                transition
              "
            >
              Track Application
            </button>

          </div>

          {/* NO RESULT */}
          {searched && !result && (
            <div className="mt-6 bg-red-50 border border-red-100 rounded-xl p-5">

              <p className="font-semibold text-red-700">
                Application Not Found
              </p>

              <p className="mt-1 text-sm text-red-600">
                We could not find an application with that
                reference number. Please check the reference
                number and try again.
              </p>

            </div>
          )}

        </div>

        {/* RESULT */}
        {result && (
          <div className="mt-6 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

            {/* RESULT HEADER */}
            <div className="bg-gray-50 border-b px-6 py-5">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Reference Number
                  </p>

                  <p className="mt-1 text-xl font-bold text-gray-900">
                    {result.reference}
                  </p>
                </div>

                <span
                  className={`
                    inline-flex
                    items-center
                    justify-center
                    border
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-bold
                    ${getStatusClass(result.status)}
                  `}
                >
                  {result.status}
                </span>

              </div>

            </div>

            {/* DETAILS */}
            <div className="p-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Applicant
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    {result.applicant}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Destination
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    {result.destination}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Application Date
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    {result.applicationDate}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Last Updated
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    {result.lastUpdated}
                  </p>
                </div>

              </div>

              {/* REMARKS */}
              <div className="mt-6 bg-gray-50 rounded-xl p-5">

                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Remarks
                </p>

                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {result.remarks}
                </p>

              </div>

            </div>

          </div>
        )}

        {/* INFORMATION */}
        <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6">

          <h2 className="font-bold text-gray-900">
            Visa Tracking Information
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-500">

            <li>
              • Enter the reference number provided by CHINGU
              Travel and Tours.
            </li>

            <li>
              • Make sure the reference number is entered
              correctly.
            </li>

            <li>
              • Visa processing times may vary depending on the
              destination and embassy or consulate.
            </li>

          </ul>

        </div>

        {/* CONTACT BUTTON */}
        <div className="text-center mt-8">

          <a
            href="https://wa.me/63919388999"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              bg-red-600
              text-white
              px-7
              py-3
              rounded-xl
              text-sm
              font-semibold
              hover:bg-red-700
              transition
            "
          >
            Need Help? Contact Us →
          </a>

        </div>

        {/* NOTICE */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Visa requirements, processing times and application
          status are subject to change without prior notice.
        </p>

      </div>
    </main>
  );
}


Your file library is full. New files won't be saved to your library, but you can still use them in this chat. To store new files for later, free up space or upgrade your storage.
Upgrade
Manage
