import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import QuickActions from "@/components/QuickActions";
import RecentQuotations from "@/components/RecentQuotations";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <Header />

        <div className="p-6 lg:p-8">
          <Stats />

          <div className="mt-6">
            <QuickActions />
          </div>

          <div className="mt-8">
            <RecentQuotations />
          </div>
        </div>
      </main>
    </div>
  );
}
