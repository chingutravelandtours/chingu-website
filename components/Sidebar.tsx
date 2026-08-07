"use client";

import {
  LayoutDashboard,
  FileText,
  Building2,
  Plane,
  Briefcase,
  Clock3,
  CreditCard,
  User,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const menus = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Request Quotation", icon: FileText },
    { name: "Hotel Booking", icon: Building2 },
    { name: "Visa Assistance", icon: Plane },
    { name: "Tour Packages", icon: Briefcase },
    { name: "Booking Status", icon: Clock3 },
    { name: "Payments", icon: CreditCard },
    { name: "My Profile", icon: User },
    { name: "Reports", icon: BarChart3 },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-72 min-h-screen bg-gradient-to-b from-red-900 via-red-700 to-red-900 text-white flex flex-col shadow-2xl">

      {/* ================= BRAND ================= */}
      <div className="p-8 border-b border-red-500 text-center">

        <h1 className="mt-5 text-4xl font-black tracking-wider">
          CHINGU
        </h1>

        <p className="mt-2 text-lg text-red-100 font-medium">
          Travel and Tours
        </p>

        <p className="mt-2 text-[11px] tracking-[0.35em] uppercase text-red-200">
          B2B Tour Operators
        </p>

      </div>

      {/* ================= MENU ================= */}
      <nav className="flex-1 px-4 py-6">

        {menus.map((menu, index) => {
          const Icon = menu.icon;

          return (
            <button
              key={menu.name}
              className={`w-full flex items-center gap-4 px-5 py-3 rounded-xl mb-2 transition-all duration-300

              ${
                index === 0
                  ? "bg-white text-red-700 shadow-xl font-bold"
                  : "text-white hover:bg-red-600 hover:translate-x-2 hover:shadow-lg"
              }
              `}
            >
              <Icon size={21} strokeWidth={2.2} />

              <span className="text-[15px]">
                {menu.name}
              </span>

            </button>
          );
        })}

      </nav>

      {/* ================= LOGOUT ================= */}
      <div className="px-5 pb-4">

        <button className="w-full flex items-center justify-center gap-3 border border-white rounded-xl py-3 font-semibold hover:bg-white hover:text-red-700 transition-all duration-300">

          <LogOut size={20} />

          Logout

        </button>

      </div>

      {/* ================= FOOTER ================= */}
      <div className="border-t border-red-600 py-4 px-3 text-center text-xs text-red-200">

        <p>© 2025 CHINGU Travel and Tours</p>

        <p className="mt-1">
          All Rights Reserved.
        </p>

      </div>

    </aside>
  );
}