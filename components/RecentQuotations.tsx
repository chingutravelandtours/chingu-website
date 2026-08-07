export default function RecentQuotations() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Recent Quotations
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-gray-500">
            <th className="pb-3">Quotation No.</th>
            <th className="pb-3">Client</th>
            <th className="pb-3">Destination</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="py-4">QT-240001</td>
            <td>John Smith</td>
            <td>Dubai</td>
            <td>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                Pending
              </span>
            </td>
          </tr>

          <tr className="border-b">
            <td className="py-4">QT-240002</td>
            <td>Maria Cruz</td>
            <td>Japan</td>
            <td>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Approved
              </span>
            </td>
          </tr>

          <tr>
            <td className="py-4">QT-240003</td>
            <td>Ahmed Ali</td>
            <td>Thailand</td>
            <td>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Processing
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}