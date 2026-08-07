import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import QuickActions from "@/components/QuickActions";
import RecentQuotations from "@/components/RecentQuotations";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Header />

        <Stats />

        <QuickActions />

        <div className="mt-8">
          <RecentQuotations />
        </div>
      </main>
    </div>
  );
}