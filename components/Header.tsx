export default function Header() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 flex justify-between items-center">

      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to CHINGU Travel and Tours B2B Portal
        </p>
      </div>

      <div className="text-right">
        <h3 className="text-lg font-semibold text-gray-800">
          Welcome, Agent
        </h3>

        <div className="flex items-center justify-end mt-2">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-500">Online</span>
        </div>
      </div>

    </div>
  );
}