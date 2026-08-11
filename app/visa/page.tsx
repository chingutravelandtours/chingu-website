"use client";

import { useMemo, useState } from "react";

type VisaFee = {
  destination: string;
  regularFee: string;
  visaOnly: string;
  withTour: string;
  processing: string;
};

const visaFees: VisaFee[] = [
  {
    destination: "Australia",
    regularFee: "PHP 6700",
    visaOnly: "PHP 3000",
    withTour: "PHP 1500",
    processing: "15 to 45 working days",
  },
  {
    destination: "Canada",
    regularFee: "CAD 185",
    visaOnly: "PHP 3000",
    withTour: "N/A",
    processing: "15 to 30 working days",
  },
  {
    destination: "China",
    regularFee: "PHP 1700",
    visaOnly: "PHP 3000",
    withTour: "PHP 200",
    processing: "10 to 15 working days",
  },
  {
    destination: "Dubai",
    regularFee: "USD 100",
    visaOnly: "N/A",
    withTour: "N/A",
    processing: "15 to 20 working days",
  },
  {
    destination: "Holyland (Jordan & Egypt)",
    regularFee: "USD 25",
    visaOnly: "FREE OF CHARGE",
    withTour: "FREE OF CHARGE",
    processing: "15 to 30 working days",
  },
  {
    destination: "India",
    regularFee: "PHP 2637",
    visaOnly: "N/A",
    withTour: "PHP 1000",
    processing: "7 to 10 working days",
  },
  {
    destination: "Japan",
    regularFee: "Gratis",
    visaOnly: "PHP 1000",
    withTour: "PHP 800",
    processing: "5 to 7 working days",
  },
  {
    destination: "Korea",
    regularFee: "Gratis",
    visaOnly: "PHP 700",
    withTour: "PHP 500",
    processing: "5 working days",
  },
  {
    destination: "New Zealand",
    regularFee: "PHP 3500",
    visaOnly: "PHP 3000",
    withTour: "PHP 500",
    processing: "15 to 45 working days",
  },
  {
    destination: "Russia",
    regularFee: "PHP 3920",
    visaOnly: "N/A",
    withTour: "PHP 1000",
    processing: "10 to 15 working days",
  },
  {
    destination: "Schengen (Europe)",
    regularFee: "EUR 80 + PHP 1200 up to 2000",
    visaOnly: "PHP 3000",
    withTour: "PHP 1500",
    processing: "15 to 30 working days",
  },
  {
    destination: "South Africa",
    regularFee: "PHP 2120",
    visaOnly: "N/A",
    withTour: "PHP 1500",
    processing: "7 to 10 working days",
  },
  {
    destination: "Turkey",
    regularFee: "USD 170",
    visaOnly: "N/A",
    withTour: "PHP 1000",
    processing: "15 working days",
  },
  {
    destination: "United Kingdom",
    regularFee: "USD 140",
    visaOnly: "PHP 3000",
    withTour: "PHP 1500",
    processing: "15 to 30 working days",
  },
  {
    destination: "USA",
    regularFee: "USD 160",
    visaOnly: "PHP 3000",
    withTour: "PHP 1500",
    processing: "5 to 7 working days",
  },
];

const visaRequiredCountries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cape Verde",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Comoros",
  "Democratic Republic of the Congo",
  "Republic of the Congo",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominican Republic",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Finland",
  "France",
  "Gabon",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Iran",
  "Iraq",
  "Ireland",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia (FYROM)",
  "Madagascar",
  "Malawi",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vatican City (Holy See)",
  "Venezuela",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function VisaPage() {
  const [activeTab, setActiveTab] = useState<"info" | "tracking">("info");
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const filteredCountries = useMemo(() => {
    return visaRequiredCountries.filter((country) =>
      country.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const selectedVisa = visaFees.find(
    (visa) =>
      visa.destination.toLowerCase() === selectedCountry.toLowerCase()
  );

  const handleInquiry = (country: string) => {
    const visa = visaFees.find(
      (item) =>
        item.destination.toLowerCase() === country.toLowerCase()
    );

    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about visa assistance.

Destination: ${country}

${
  visa
    ? `Regular Visa Fee: ${visa.regularFee}
Visa Processing Fee - Visa Only: ${visa.visaOnly}
Visa Processing Fee - With Tour Package: ${visa.withTour}
Processing Duration: ${visa.processing}`
    : "Please send me the visa requirements, fees and processing time."
}

Please send me the complete visa requirements and application details. Thank you!`
    );

    window.open(
      `https://wa.me/63919388999?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

          {/* TOP BAR */}
          <div className="bg-gray-100 border-b px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛂</span>

              <h1 className="text-xl font-bold text-gray-800">
                VISA
              </h1>
            </div>
          </div>

          {/* COUNTRY SEARCH */}
          <div className="p-6 md:p-8 border-b">

            <div className="max-w-xl mx-auto">

              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Country
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedCountry("");
                }}
                placeholder="Search country..."
                className="
                  w-full
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

              {search && (
                <div className="mt-2 max-h-60 overflow-y-auto border border-gray-200 rounded-xl bg-white shadow-lg">

                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <button
                        key={country}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(country);
                          setSearch(country);
                        }}
                        className="
                          block
                          w-full
                          text-left
                          px-4
                          py-3
                          text-sm
                          text-gray-700
                          hover:bg-red-50
                          hover:text-red-600
                          transition
                        "
                      >
                        {country}
                      </button>
                    ))
                  ) : (
                    <p className="px-4 py-4 text-sm text-gray-500">
                      Country not found.
                    </p>
                  )}

                </div>
              )}

            </div>
          </div>

          {/* TABS */}
          <div className="grid grid-cols-2 border-b">

            <button
              onClick={() => setActiveTab("info")}
              className={`
                py-4
                text-sm
                font-semibold
                transition
                ${
                  activeTab === "info"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500 hover:text-red-600"
                }
              `}
            >
              VISA INFO
            </button>

            <button
              onClick={() => setActiveTab("tracking")}
              className={`
                py-4
                text-sm
                font-semibold
                transition
                ${
                  activeTab === "tracking"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500 hover:text-red-600"
                }
              `}
            >
              VISA TRACKING
            </button>

          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-8">

            {activeTab === "info" ? (
              <>
                {/* SELECTED COUNTRY */}
                {selectedCountry ? (
                  <div className="mb-8">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                      <div>
                        <p className="text-xs uppercase tracking-widest text-red-600 font-semibold">
                          Visa Information
                        </p>

                        <h2 className="mt-1 text-3xl font-bold text-gray-900">
                          {selectedCountry}
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                          Visa assistance for Philippine passport holders.
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          handleInquiry(selectedCountry)
                        }
                        className="
                          bg-red-600
                          text-white
                          px-6
                          py-3
                          rounded-xl
                          text-sm
                          font-semibold
                          hover:bg-red-700
                          transition
                        "
                      >
                        Inquire Now →
                      </button>

                    </div>

                    {selectedVisa ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {/* REGULAR VISA */}
                        <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Regular Visa Fee
                          </p>

                          <p className="mt-3 text-xl font-bold text-gray-900">
                            {selectedVisa.regularFee}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            PH Passport Holders
                          </p>
                        </div>

                        {/* VISA ONLY */}
                        <div className="bg-white rounded-2xl p-5 border border-gray-200">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Visa Only
                          </p>

                          <p className="mt-3 text-xl font-bold text-gray-900">
                            {selectedVisa.visaOnly}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            Processing Fee
                          </p>
                        </div>

                        {/* TOUR PACKAGE */}
                        <div className="bg-white rounded-2xl p-5 border border-gray-200">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            With Tour Package
                          </p>

                          <p className="mt-3 text-xl font-bold text-gray-900">
                            {selectedVisa.withTour}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            Processing Fee
                          </p>
                        </div>

                        {/* PROCESSING */}
                        <div className="bg-white rounded-2xl p-5 border border-gray-200">
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Processing Time
                          </p>

                          <p className="mt-3 text-xl font-bold text-gray-900">
                            {selectedVisa.processing}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            Working Days
                          </p>
                        </div>

                      </div>
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900">
                          Visa Assistance Available
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                          Visa fees and processing information for this
                          destination are not currently listed. Please
                          contact us for the latest details.
                        </p>

                        <button
                          onClick={() =>
                            handleInquiry(selectedCountry)
                          }
                          className="
                            mt-5
                            border-2
                            border-red-600
                            text-red-600
                            px-5
                            py-2.5
                            rounded-xl
                            text-sm
                            font-semibold
                            hover:bg-red-600
                            hover:text-white
                            transition
                          "
                        >
                          Inquire About This Visa →
                        </button>
                      </div>
                    )}

                  </div>
                ) : (
                  /* DEFAULT VISA TABLE */
                  <div>

                    <div className="text-center mb-8">
                      <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
                        CHINGU Travel and Tours
                      </p>

                      <h2 className="mt-2 text-3xl font-bold text-gray-900">
                        Visa Services
                      </h2>

                      <p className="mt-3 text-sm text-gray-500">
                        Select a country above to view visa fees and
                        processing information.
                      </p>
                    </div>

                    {/* DESKTOP TABLE */}
                    <div className="hidden md:block overflow-x-auto">

                      <table className="w-full border-collapse">

                        <thead>
                          <tr className="bg-gray-100">

                            <th className="border border-gray-200 px-4 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                              Destination
                            </th>

                            <th className="border border-gray-200 px-4 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                              Regular Visa Fee
                            </th>

                            <th className="border border-gray-200 px-4 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                              Visa Only
                            </th>

                            <th className="border border-gray-200 px-4 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                              With Tour Package
                            </th>

                            <th className="border border-gray-200 px-4 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                              Processing
                            </th>

                          </tr>
                        </thead>

                        <tbody>

                          {visaFees.map((visa) => (
                            <tr
                              key={visa.destination}
                              className="hover:bg-red-50 transition"
                            >

                              <td className="border border-gray-200 px-4 py-4 text-sm font-semibold text-gray-800">
                                {visa.destination}
                              </td>

                              <td className="border border-gray-200 px-4 py-4 text-sm text-gray-700">
                                {visa.regularFee}
                              </td>

                              <td className="border border-gray-200 px-4 py-4 text-sm text-gray-700">
                                {visa.visaOnly}
                              </td>

                              <td className="border border-gray-200 px-4 py-4 text-sm text-gray-700">
                                {visa.withTour}
                              </td>

                              <td className="border border-gray-200 px-4 py-4 text-sm text-gray-700">
                                {visa.processing}
                              </td>

                            </tr>
                          ))}

                        </tbody>

                      </table>

                    </div>

                    {/* MOBILE CARDS */}
                    <div className="md:hidden space-y-4">

                      {visaFees.map((visa) => (
                        <div
                          key={visa.destination}
                          className="
                            bg-white
                            border
                            border-gray-200
                            rounded-2xl
                            p-5
                            shadow-sm
                          "
                        >

                          <h3 className="text-lg font-bold text-gray-900">
                            {visa.destination}
                          </h3>

                          <div className="mt-4 space-y-3 text-sm">

                            <div className="flex justify-between gap-4">
                              <span className="text-gray-500">
                                Regular Visa
                              </span>
                              <span className="font-semibold text-gray-800 text-right">
                                {visa.regularFee}
                              </span>
                            </div>

                            <div className="flex justify-between gap-4">
                              <span className="text-gray-500">
                                Visa Only
                              </span>
                              <span className="font-semibold text-gray-800 text-right">
                                {visa.visaOnly}
                              </span>
                            </div>

                            <div className="flex justify-between gap-4">
                              <span className="text-gray-500">
                                With Tour
                              </span>
                              <span className="font-semibold text-gray-800 text-right">
                                {visa.withTour}
                              </span>
                            </div>

                            <div className="flex justify-between gap-4">
                              <span className="text-gray-500">
                                Processing
                              </span>
                              <span className="font-semibold text-gray-800 text-right">
                                {visa.processing}
                              </span>
                            </div>

                          </div>

                          <button
                            onClick={() =>
                              handleInquiry(visa.destination)
                            }
                            className="
                              mt-5
                              w-full
                              border-2
                              border-red-600
                              text-red-600
                              py-2.5
                              rounded-xl
                              text-sm
                              font-semibold
                              hover:bg-red-600
                              hover:text-white
                              transition
                            "
                          >
                            Inquire Now →
                          </button>

                        </div>
                      ))}

                    </div>

                  </div>
                )}

              </>
            ) : (
              /* VISA TRACKING */
              <div className="max-w-xl mx-auto py-8">

                <div className="text-center mb-8">

                  <div className="text-5xl mb-4">
                    🔎
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900">
                    Visa Tracking
                  </h2>

                  <p className="mt-3 text-sm text-gray-500">
                    Enter your visa application reference number
                    to check your application status.
                  </p>

                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Application Reference Number
                  </label>

                  <input
                    type="text"
                    placeholder="Enter reference number"
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      outline-none
                      focus:border-red-500
                      focus:ring-2
                      focus:ring-red-100
                    "
                  />

                  <button
                    className="
                      mt-4
                      w-full
                      bg-red-600
                      text-white
                      py-3
                      rounded-xl
                      font-semibold
                      hover:bg-red-700
                      transition
                    "
                  >
                    Check Visa Status
                  </button>

                  <p className="mt-4 text-xs text-center text-gray-400">
                    Visa tracking will be available once an
                    application reference number has been issued.
                  </p>

                </div>

              </div>
            )}

          </div>

          {/* NOTICE */}
          <div className="border-t bg-gray-50 px-6 py-5">

            <p className="text-xs text-gray-500 leading-relaxed text-center">
              <strong className="text-gray-700">
                Important Notice:
              </strong>{" "}
              Visa requirements, fees and processing times are
              subject to change without prior notice.
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}
