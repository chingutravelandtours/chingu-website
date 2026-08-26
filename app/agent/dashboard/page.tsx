"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Flight - Book & Buy",
    icon: "✈",
    description: "Search and book domestic and international flights.",
    action: "SEARCH FLIGHT",
  },
  {
    title: "Hotel - Book & Buy",
    icon: "🏨",
    description: "Find hotels and request competitive B2B rates.",
    action: "SEARCH HOTEL",
  },
  {
    title: "International Tour",
    icon: "🌏",
    description: "Browse verified international tour packages.",
    action: "SEARCH TOUR",
    href: "/agent/tourpackages",
  },
  {
    title: "Domestic Tour",
    icon: "🏝",
    description: "Explore Philippine domestic tour packages.",
    action: "SEARCH TOUR",
  },
  {
    title: "eSIM Travel",
    icon: "📱",
    description: "Provide your travelers with affordable eSIM data plans.",
    action: "VIEW eSIM",
    href: "/agent/esim",
  },
  {
    title: "Visa Service",
    icon: "📄",
    description: "Check visa information and travel requirements.",
    action: "VIEW VISA",
  },
];

const news = [
  {
    date: "Aug 26, 2026",
    title: "New B2B travel products available",
  },
  {
    date: "Aug 25, 2026",
    title: "Vietnam travel partnership opportunities",
  },
  {
    date: "Aug 24, 2026",
    title: "New international tour packages",
  },
  {
    date: "Aug 23, 2026",
    title: "eSIM travel connectivity now available",
  },
];

const promos = [
  {
    date: "AUG 2026",
    title: "Special B2B Tour Package Offers",
  },
  {
    date: "AUG 2026",
    title: "Selected eSIM Partner Rates",
  },
  {
    date: "ONGOING",
    title: "Partner-only Travel Offers",
  },
  {
    date: "ONGOING",
    title: "Customized Tour Quotations",
  },
];

export default function AgentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleFlightSearch = () => {
    if (!origin || !destination || !departure) {
      alert("Please enter origin, destination and departure date.");
      return;
    }

    alert(
      `Flight search:\n${origin} → ${destination}\nDeparture: ${departure}${
        returnDate ? `\nReturn: ${returnDate}` : ""
      }`
    );
  };

  const handleLogout = () => {
    window.location.href = "/agent/login";
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6">

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden md:flex w-10 h-10 items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600"
          >
            ☰
          </button>

          <button
            type="button"
            onClick={() => setMobileMenu(true)}
            className="md:hidden w-10 h-10 rounded-lg hover:bg-gray-100"
          >
            ☰
          </button>

          {/* CHINGU BRAND */}

          <Link href="/agent/dashboard" className="flex items-center gap-2">

            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
              C
            </div>

            <div className="leading-tight">
              <div className="font-extrabold tracking-wide text-red-700">
                CHINGU
              </div>

              <div className="text-[9px] font-bold tracking-widest text-gray-500">
                TRAVEL AND TOURS
              </div>
            </div>

          </Link>

          <span className="hidden lg:block ml-4 text-xs font-bold text-gray-400 border-l pl-4">
            B2B PARTNER PORTAL
          </span>

        </div>


        {/* RIGHT HEADER */}

        <div className="flex items-center gap-3">

          <Link
            href="/agent/esim"
            className="hidden sm:flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-xs font-semibold hover:border-red-300 hover:text-red-600"
          >
            📱 eSIM
          </Link>

          <button
            type="button"
            className="relative w-10 h-10 rounded-lg hover:bg-gray-100"
          >
            🔔
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white rounded-full text-[9px] flex items-center justify-center">
              3
            </span>
          </button>

          <div className="hidden sm:flex items-center gap-2 border-l pl-3">

            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
              EN
            </div>

            <div className="hidden lg:block leading-tight">
              <p className="text-sm font-bold">
                Eden NL
              </p>

              <p className="text-[10px] text-green-600 font-semibold">
                VERIFIED PARTNER
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="hidden sm:block text-gray-500 hover:text-red-600 text-sm font-semibold"
          >
            Logout
          </button>

        </div>

      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenu && (
        <div className="fixed inset-0 z-[100] md:hidden">

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenu(false)}
          />

          <aside className="relative w-72 h-full bg-white shadow-xl">

            <div className="h-16 border-b flex items-center justify-between px-4">

              <div className="font-bold text-red-700">
                CHINGU B2B
              </div>

              <button
                type="button"
                onClick={() => setMobileMenu(false)}
                className="text-xl"
              >
                ×
              </button>

            </div>

            <Navigation
              onNavigate={() => setMobileMenu(false)}
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t">

              <button
                type="button"
                onClick={handleLogout}
                className="w-full bg-red-600 text-white rounded-lg py-3 font-semibold"
              >
                Logout
              </button>

            </div>

          </aside>

        </div>
      )}


      <div className="flex">


        {/* =====================================================
            SIDEBAR
        ===================================================== */}

        {sidebarOpen && (
          <aside className="hidden md:flex w-60 shrink-0 bg-white border-r border-gray-200 min-h-[calc(100vh-64px)] flex-col">

            <div className="flex-1 overflow-y-auto">
              <Navigation />
            </div>

            <div className="p-4 border-t">

              <div className="rounded-xl bg-red-50 border border-red-100 p-4">

                <p className="text-[10px] uppercase font-bold text-red-600">
                  Partner Support
                </p>

                <p className="text-sm font-bold mt-2">
                  Chingu Travel and Tours
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  +971 55 255 0096
                </p>

                <a
                  href="mailto:admin@chingutravelandtours.com"
                  className="block mt-3 bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 text-center text-xs font-semibold"
                >
                  CONTACT SUPPORT
                </a>

              </div>

            </div>

          </aside>
        )}


        {/* =====================================================
            MAIN
        ===================================================== */}

        <section className="flex-1 min-w-0 p-4 lg:p-6">

          {/* WELCOME */}

          <div className="mb-5">

            <p className="text-sm text-gray-500">
              Welcome back,
            </p>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-2">

              <div>

                <h1 className="text-2xl lg:text-3xl font-extrabold">
                  Eden NL
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                  Manage your bookings, quotations and B2B travel services.
                </p>

              </div>

              <div className="text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-lg font-semibold">
                ✓ VERIFIED B2B PARTNER
              </div>

            </div>

          </div>


          {/* =====================================================
              STATISTICS
          ===================================================== */}

          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">

            <StatCard
              title="MY WALLET"
              value="₱0.00"
              subtitle="Available balance"
              icon="₱"
            />

            <StatCard
              title="PENDING BOOKINGS"
              value="0"
              subtitle="Awaiting confirmation"
              icon="◷"
            />

            <StatCard
              title="CONFIRMED BOOKINGS"
              value="0"
              subtitle="Confirmed bookings"
              icon="✓"
            />

            <StatCard
              title="TOTAL SALES"
              value="₱0.00"
              subtitle="This month"
              icon="₱"
            />

            <div className="col-span-2 lg:col-span-4 xl:col-span-1">
              <StatCard
                title="PARTNER STATUS"
                value="VERIFIED"
                subtitle="Active account"
                icon="★"
              />
            </div>

          </div>


          {/* =====================================================
              FLIGHT SEARCH
          ===================================================== */}

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden">

            <div className="bg-red-600 text-white px-5 py-3 flex items-center gap-2">

              <span className="text-lg">
                ✈
              </span>

              <h2 className="font-bold text-sm">
                FLIGHT - BOOK AND BUY
              </h2>

            </div>

            <div className="p-5">

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

                <Input
                  label="Origin"
                  placeholder="Manila (MNL)"
                  value={origin}
                  onChange={setOrigin}
                />

                <Input
                  label="Destination"
                  placeholder="Dubai (DXB)"
                  value={destination}
                  onChange={setDestination}
                />

                <Input
                  label="Departure Date"
                  type="date"
                  value={departure}
                  onChange={setDeparture}
                />

                <Input
                  label="Return Date"
                  type="date"
                  value={returnDate}
                  onChange={setReturnDate}
                />

              </div>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

                <Select
                  label="Passenger"
                  options={[
                    "1 Adult",
                    "2 Adults",
                    "3 Adults",
                    "4 Adults",
                    "5 Adults",
                  ]}
                />

                <Select
                  label="Cabin Class"
                  options={[
                    "Economy",
                    "Premium Economy",
                    "Business",
                    "First Class",
                  ]}
                />

                <Select
                  label="Preferred Airline"
                  options={[
                    "Any Airline",
                    "Emirates",
                    "Philippine Airlines",
                    "Cebu Pacific",
                    "AirAsia",
                  ]}
                />

              </div>


              <div className="flex flex-wrap gap-2 mt-5">

                <button
                  type="button"
                  onClick={handleFlightSearch}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-3 text-sm font-bold"
                >
                  SEARCH FLIGHT
                </button>

                <button
                  type="button"
                  className="border border-gray-300 rounded-lg px-5 py-3 text-sm font-semibold hover:bg-gray-50"
                >
                  Clear
                </button>

              </div>

            </div>

          </div>


          {/* =====================================================
              SERVICES
          ===================================================== */}

          <div className="mb-6">

            <div className="flex items-center justify-between mb-4">

              <div>

                <p className="text-xs uppercase tracking-widest text-red-600 font-bold">
                  B2B SERVICES
                </p>

                <h2 className="text-xl font-bold">
                  Travel Services
                </h2>

              </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

              {services.map((service) => (

                <ServiceCard
                  key={service.title}
                  {...service}
                />

              ))}

            </div>

          </div>


          {/* =====================================================
              QUICK ACTIONS
          ===================================================== */}

          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">

            <div className="flex items-center gap-2 mb-4">

              <span className="text-red-600">
                ⚡
              </span>

              <h2 className="font-bold">
                QUICK ACTIONS
              </h2>

            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

              <QuickAction
                icon="🧾"
                title="New Quotation"
              />

              <QuickAction
                icon="🎫"
                title="My Bookings"
              />

              <QuickAction
                icon="💳"
                title="My Transactions"
              />

              <QuickAction
                icon="📊"
                title="Reports"
              />

            </div>

          </div>


          {/* =====================================================
              NEWS AND PROMOS
          ===================================================== */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-6">


            {/* NEWS */}

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

              <div className="bg-red-600 text-white px-5 py-3 flex items-center gap-2">

                <span>
                  🔔
                </span>

                <h2 className="font-bold text-sm">
                  NEWS & PRODUCT UPDATE
                </h2>

              </div>


              <div className="divide-y">

                {news.map((item) => (

                  <div
                    key={`${item.date}-${item.title}`}
                    className="p-4 hover:bg-gray-50"
                  >

                    <p className="text-[10px] uppercase font-bold text-gray-400">
                      {item.date}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-700">
                      {item.title}
                    </p>

                  </div>

                ))}

              </div>


              <div className="p-4 border-t">

                <button
                  type="button"
                  className="text-red-600 text-sm font-bold"
                >
                  VIEW ALL NEWS →
                </button>

              </div>

            </div>


            {/* PROMOS */}

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

              <div className="bg-red-600 text-white px-5 py-3 flex items-center gap-2">

                <span>
                  🏷
                </span>

                <h2 className="font-bold text-sm">
                  PROMO UPDATE
                </h2>

              </div>


              <div className="divide-y">

                {promos.map((promo) => (

                  <div
                    key={`${promo.date}-${promo.title}`}
                    className="p-4 hover:bg-gray-50"
                  >

                    <p className="text-[10px] uppercase font-bold text-red-600">
                      {promo.date}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-700">
                      {promo.title}
                    </p>

                  </div>

                ))}

              </div>


              <div className="p-4 border-t">

                <button
                  type="button"
                  className="text-red-600 text-sm font-bold"
                >
                  VIEW ALL PROMOS →
                </button>

              </div>

            </div>

          </div>


          {/* =====================================================
              PARTNER SUPPORT
          ===================================================== */}

          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-xl">
                  ☎
                </div>

                <div>

                  <h3 className="font-bold">
                    Need assistance with your booking?
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Our Chingu partner support team can assist with
                    quotations, bookings and travel services.
                  </p>

                </div>

              </div>

              <a
                href="mailto:admin@chingutravelandtours.com"
                className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-5 py-3 text-sm font-bold text-center"
              >
                CONTACT SUPPORT
              </a>

            </div>

          </div>


          {/* =====================================================
              FOOTER
          ===================================================== */}

          <footer className="bg-white border border-gray-200 rounded-xl p-5">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div>

                <h3 className="font-extrabold text-red-700">
                  CHINGU TRAVEL AND TOURS
                </h3>

                <p className="text-xs text-gray-500 mt-2">
                  Verified B2B Travel Partner Network
                </p>

              </div>


              <div>

                <h4 className="font-bold text-sm">
                  Partner Support
                </h4>

                <p className="text-xs text-gray-500 mt-2">
                  +971 55 255 0096
                </p>

                <p className="text-xs text-gray-500">
                  +63 919 388 8999
                </p>

                <p className="text-xs text-gray-500 break-all">
                  admin@chingutravelandtours.com
                </p>

              </div>


              <div>

                <h4 className="font-bold text-sm">
                  Office
                </h4>

                <p className="text-xs text-gray-500 mt-2">
                  Philippines & UAE Office
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  B2B Travel Partner Services
                </p>

              </div>

            </div>


            <div className="border-t mt-5 pt-4 text-center">

              <p className="text-[11px] text-gray-400">
                © 2026 CHINGU Travel and Tours. All Rights Reserved.
              </p>

            </div>

          </footer>

        </section>

      </div>

    </main>
  );
}


/* ============================================================
   NAVIGATION
============================================================ */

function Navigation({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const items = [
    {
      label: "Dashboard",
      icon: "▣",
      href: "/agent/dashboard",
      active: true,
    },
    {
      label: "Flight - Book & Buy",
      icon: "✈",
      href: "#",
    },
    {
      label: "Hotel - Book & Buy",
      icon: "🏨",
      href: "#",
    },
    {
      label: "Tour Packages",
      icon: "🌏",
      href: "/agent/tourpackages",
    },
    {
      label: "eSIM Travel",
      icon: "📱",
      href: "/agent/esim",
      badge: "NEW",
    },
    {
      label: "Car Rental",
      icon: "🚗",
      href: "#",
    },
    {
      label: "Cruise",
      icon: "🚢",
      href: "#",
    },
    {
      label: "Travel Insurance",
      icon: "🛡",
      href: "#",
    },
    {
      label: "Visa Service",
      icon: "📄",
      href: "#",
    },
    {
      label: "Ground Services",
      icon: "🚐",
      href: "#",
    },
    {
      label: "Quotations",
      icon: "🧾",
      href: "#",
    },
    {
      label: "Bookings",
      icon: "🎫",
      href: "#",
    },
    {
      label: "My Transactions",
      icon: "💳",
      href: "#",
    },
    {
      label: "My Wallet",
      icon: "₱",
      href: "#",
    },
    {
      label: "My Reports",
      icon: "📊",
      href: "#",
    },
    {
      label: "News & Updates",
      icon: "🔔",
      href: "#",
    },
    {
      label: "Promo Center",
      icon: "🏷",
      href: "#",
    },
    {
      label: "Partner Support",
      icon: "☎",
      href: "mailto:admin@chingutravelandtours.com",
    },
    {
      label: "Account Settings",
      icon: "⚙",
      href: "#",
    },
  ];

  return (
    <nav className="p-3 space-y-1">

      {items.map((item) => (

        <Link
          key={item.label}
          href={item.href}
          onClick={onNavigate}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
            item.active
              ? "bg-red-600 text-white"
              : "text-gray-700 hover:bg-red-50 hover:text-red-600"
          }`}
        >

          <span className="w-5 text-center">
            {item.icon}
          </span>

          <span className="flex-1">
            {item.label}
          </span>

          {item.badge && (
            <span
              className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${
                item.active
                  ? "bg-white text-red-600"
                  : "bg-red-600 text-white"
              }`}
            >
              {item.badge}
            </span>
          )}

        </Link>

      ))}

    </nav>
  );
}


/* ============================================================
   STAT CARD
============================================================ */

function StatCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">

      <div className="flex items-start justify-between gap-2">

        <div>

          <p className="text-[9px] uppercase font-bold text-gray-400">
            {title}
          </p>

          <p className="text-xl font-extrabold mt-2">
            {value}
          </p>

          <p className="text-[10px] text-gray-400 mt-1">
            {subtitle}
          </p>

        </div>

        <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold">
          {icon}
        </div>

      </div>

    </div>
  );
}


/* ============================================================
   INPUT
============================================================ */

function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">

      <span className="text-xs font-bold text-gray-600">
        {label}
      </span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
      />

    </label>
  );
}


/* ============================================================
   SELECT
============================================================ */

function Select({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <label className="block">

      <span className="text-xs font-bold text-gray-600">
        {label}
      </span>

      <select
        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
      >

        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}

      </select>

    </label>
  );
}


/* ============================================================
   SERVICE CARD
============================================================ */

function ServiceCard({
  title,
  icon,
  description,
  action,
  href,
}: {
  title: string;
  icon: string;
  description: string;
  action: string;
  href?: string;
}) {
  const content = (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition h-full">

      <div className="bg-red-600 text-white px-4 py-3 flex items-center gap-2">

        <span className="text-lg">
          {icon}
        </span>

        <h3 className="text-sm font-bold">
          {title}
        </h3>

      </div>

      <div className="p-5 flex flex-col h-[155px]">

        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {description}
        </p>

        <span className="mt-4 block w-full text-center border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg py-2.5 text-xs font-bold transition">
          {action} →
        </span>

      </div>

    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        {content}
      </Link>
    );
  }

  return content;
}


/* ============================================================
   QUICK ACTION
============================================================ */

function QuickAction({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <button
      type="button"
      className="border border-gray-200 rounded-lg p-4 text-left hover:border-red-300 hover:bg-red-50 transition"
    >

      <div className="text-xl">
        {icon}
      </div>

      <p className="text-sm font-bold mt-2">
        {title}
      </p>

      <p className="text-[10px] text-gray-400 mt-1">
        Open service
      </p>

    </button>
  );
}
