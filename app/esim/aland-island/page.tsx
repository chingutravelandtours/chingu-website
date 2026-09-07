import EsimPlans from "@/components/EsimPlans";

export default function AlandIslandsEsimPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">
            🇦🇽
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Aland Islands eSIM
          </h1>

          <p className="text-gray-500 mt-3">
            Choose your eSIM plan
          </p>
        </div>

        {/* ESIM PLANS */}
        <EsimPlans />

      </div>
    </main>
  );
}
