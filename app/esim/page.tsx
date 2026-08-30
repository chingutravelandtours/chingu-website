import EsimPlans from "@/components/EsimPlans";

export default function EsimPage() {
  return (
    <main className="bg-white">

      {/* eSIM HERO */}
      <<section className="w-full bg-white overflow-hidden">
  <img
    src="/images/hero/esim (10).png"
    alt="Chingu Travel and Tours eSIM Travel Plans"
    className="w-full h-auto block"
  />
</section>
      {/* eSIM PLANS */}
      <EsimPlans />

    </main>
  );
}
