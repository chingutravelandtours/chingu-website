export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">

      <div className="bg-white rounded-2xl shadow p-6">
        <p className="text-gray-500">Pending Quotations</p>
        <h2 className="text-4xl font-bold text-red-600 mt-3">18</h2>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <p className="text-gray-500">Hotel Requests</p>
        <h2 className="text-4xl font-bold text-blue-600 mt-3">12</h2>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <p className="text-gray-500">Visa Requests</p>
        <h2 className="text-4xl font-bold text-green-600 mt-3">9</h2>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <p className="text-gray-500">Confirmed Bookings</p>
        <h2 className="text-4xl font-bold text-purple-600 mt-3">45</h2>
      </div>

    </div>
  );
}