import EsimPlans from "@/components/EsimPlans";

export default function EsimPage() {
  return (
    <main>
      <section className="bg-red-600 text-white py-20 px-10">
        <h1 className="text-5xl font-bold">
          Stay Connected Anywhere
        </h1>

        <p className="mt-4">
          Instant eSIM for your international travel.
        </p>
      </section>

      <EsimPlans />
    </main>
  );
}
