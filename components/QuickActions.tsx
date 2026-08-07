export default function QuickActions() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">

      <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-bold">Request Quotation</h2>
        <p className="text-gray-500 mt-2">
          Create airfare, hotel or package quotation.
        </p>
        <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg">
          Open
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-bold">Hotel Booking</h2>
        <p className="text-gray-500 mt-2">
          Submit hotel reservation requests.
        </p>
        <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg">
          Open
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-bold">Visa Assistance</h2>
        <p className="text-gray-500 mt-2">
          Apply for visa processing.
        </p>
        <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg">
          Open
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-bold">Tour Packages</h2>
        <p className="text-gray-500 mt-2">
          Browse available tour packages.
        </p>
        <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg">
          Open
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-bold">Booking Status</h2>
        <p className="text-gray-500 mt-2">
          Track customer bookings.
        </p>
        <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg">
          Open
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
        <h2 className="text-xl font-bold">Payments</h2>
        <p className="text-gray-500 mt-2">
          Review invoices and payments.
        </p>
        <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg">
          Open
        </button>
      </div>

    </div>
  );
}