export default function AgentPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="text-center">

        <h1 className="text-4xl font-bold">
          CHINGU Travel and Tours
        </h1>

        <p className="mt-3 text-gray-500">
          B2B Agent Portal
        </p>

        <div className="mt-6 flex gap-4 justify-center">

          <a
            href="/agent/login"
            className="bg-red-600 text-white px-6 py-3 rounded-xl"
          >
            Login
          </a>

          <a
            href="/agent/register"
            className="border border-red-600 text-red-600 px-6 py-3 rounded-xl"
          >
            Register
          </a>

        </div>

      </div>

    </main>
  );
}
