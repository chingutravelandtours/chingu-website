import EsimPlans from "@/components/EsimPlans";

export default function EsimPage() {
  return (
    <main className="bg-white">

      {/* eSIM HERO */}
      <section className="w-full h-[450px] overflow-hidden">
  <img
    src="/images/hero/esim (10).png"
    alt="Chingu Travel and Tours eSIM Travel Plans"
    className="w-full h-full object-cover object-center"
  />
</section>
      {/* eSIM PLANS */}
      <EsimPlans />

    </main>
  );
}
