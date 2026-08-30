
import EsimPlans from "@/components/EsimPlans";

export default function EsimPage() {
  return (
    <main className="bg-white">

      {/* eSIM HERO IMAGE */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/esim.jpg"
          alt="Chingu Travel and Tours eSIM Travel Plans"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* eSIM PLANS */}
      <EsimPlans />

    </main>
  );
}
