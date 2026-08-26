"use client";

import Link from "next/link";
import {
  Plane,
  Hotel,
  Map,
  Smartphone,
  Car,
  Ship,
  ShieldCheck,
  FileText,
  CalendarDays,
  Wallet,
  Bell,
  Tag,
  Headphones,
  Settings,
  LogOut,
  Menu,
  ChevronDown,
  Search,
  ArrowRight,
  Globe2,
  Ticket,
  CreditCard,
} from "lucide-react";

import { useState } from "react";

export default function AgentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* =====================================================
          TOP NAVIGATION
      ===================================================== */}

      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>

          <Link
            href="/agent/dashboard"
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
              C
            </div>

            <div className="leading-tight">
              <div className="font-bold text-red-700 tracking-wide">
                CHINGU
              </div>
              <div className="text-[10px] text-gray-500 font-semibold tracking-wide">
                TRAVEL AND TOURS
              </div>
            </div>
          </Link>

          <div className="hidden md:block ml-4 text-sm font-semibold text-gray-500">
            B2B PARTNER PORTAL
          </div>

        </div>


        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* eSIM */}
          <div className="hidden md:flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-xs font-semibold">
            <Smartphone size={15} className="text-red-600" />
            eSIM
          </div>

          {/* Notification */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell size={20} />

            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile */}
          <div className="hidden sm:flex items-center gap-2 pl-3 border-l">

            <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="font-semibold text-gray-600">
                EN
              </span>
            </div>

            <div className="hidden lg:block leading-tight">
              <p className="text-sm font-semibold">
                Eden NL
              </p>
              <p className="text-xs text-gray-500">
                Verified Partner
              </p>
            </div>

            <ChevronDown size={15} />

          </div>

        </div>

      </header>


      <div className="flex">


        {/* =====================================================
            SIDEBAR
        ===================================================== */}

        {sidebarOpen && (
          <aside className="hidden md:flex w-60 bg-white border-r border-gray-200 min-h-[calc(100vh-64px)] flex-col">

            <nav className="p-3 space-y-1">

              <SidebarItem
                icon={<Wallet size={18} />}
                label="Dashboard"
                active
                href="/agent/dashboard"
              />

              <SidebarItem
                icon={<Plane size={18} />}
                label="Flight - Book & Buy"
                href="#"
              />

              <SidebarItem
                icon={<Hotel size={18} />}
                label="Hotel - Book & Buy"
                href="#"
              />

              <SidebarItem
                icon={<Map size={18} />}
                label="Tour Packages"
                href="/agent/tourpackages"
              />

              <SidebarItem
                icon={<Smartphone size={18} />}
                label="eSIM Travel Connect"
                href="/agent/esim"
                badge="NEW"
              />

              <SidebarItem
                icon={<Car size={18} />}
                label="Car Rental"
                href="#"
              />

              <SidebarItem
                icon={<Ship size={18} />}
                label="Cruise"
                href="#"
              />

              <SidebarItem
                icon={<ShieldCheck size={18} />}
                label="Travel Insurance"
                href="#"
              />

              <SidebarItem
                icon={<FileText size={18} />}
                label="Visa Service"
                href="#"
              />

              <SidebarItem
                icon={<Globe2 size={18} />}
                label="Ground Services"
                href="#"
              />

              <SidebarItem
                icon={<FileText size={18} />}
                label="Quotations"
                href="#"
              />

              <SidebarItem
                icon={<Ticket size={18} />}
                label="Bookings"
                href="#"
              />

              <SidebarItem
                icon={<CreditCard size={18} />}
                label="My Transactions"
                href="#"
              />

              <SidebarItem
                icon={<Wallet size={18} />}
                label="My Wallet"
                href="#"
              />

              <SidebarItem
                icon={<CalendarDays size={18} />}
                label="My Reports"
                href="#"
              />

              <SidebarItem
                icon={<Bell size={18} />}
                label="News & Updates"
                href="#"
              />

              <SidebarItem
                icon={<Tag size={18} />}
                label="Promo Center"
                href="#"
              />

              <SidebarItem
                icon={<Headphones size={18} />}
                label="Partner Support"
                href="#"
              />

              <SidebarItem
                icon={<Settings size={18} />}
                label="Account Settings"
                href="#"
              />

            </nav>


            {/* ACCOUNT MANAGER */}

            <div className="mt-auto p-4">

              <div className="rounded-xl border border-red-200 bg-red-50 p-4">

                <p className="text-xs font-bold text-red-700">
                  ACCOUNT MANAGER
                </p>

                <p className="mt-2 font-semibold text-sm">
                  Chingu Partner Support
                </p>

                <p className="text-xs text-gray-600 mt-1">
                  +971 55 255 0096
                </p>

                <p className="text-xs text-gray-600">
                  admin@chingutravelandtours.com
                </p>

                <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 text-xs font-semibold">
                  CONTACT SUPPORT
                </button>

              </div>

            </div>

          </aside>
        )}


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <section className="flex-1 p-4 lg:p-6 overflow-hidden">

          {/* WELCOME */}

          <div className="mb-5">

            <p className="text-sm text-gray-500">
              Welcome back,
            </p>

            <h1 className="text-2xl lg:text-3xl font-bold">
              Eden NL
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage your travel bookings, quotations and B2B services.
            </p>

          </div>


          {/* =====================================================
              STAT CARDS
          ===================================================== */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-5">

            <StatCard
              icon={<Wallet />}
              title="MY WALLET"
              value="₱0.00"
              subtitle="Available Balance"
            />

            <StatCard
              icon={<CalendarDays />}
              title="PENDING BOOKINGS"
              value="0"
              subtitle="View bookings"
            />

            <StatCard
              icon={<ShieldCheck />}
              title="CONFIRMED BOOKINGS"
              value="0"
              subtitle="View bookings"
            />

            <StatCard
              icon={<Tag />}
              title="TOTAL SALES"
              value="₱0.00"
              subtitle="This month"
            />

            <StatCard
              icon={<CreditCard />}
              title="PARTNER STATUS"
              value="VERIFIED"
              subtitle="Active B2B Partner"
            />

          </div>


          {/* =====================================================
              FLIGHT + ESIM
          ===================================================== */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-5">


            {/* FLIGHT */}

            <DashboardCard
              title="FLIGHT - BOOK & BUY"
              icon={<Plane size={18} />}
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <InputBox
                  label="From"
                  placeholder="Manila (MNL)"
                />

                <InputBox
                  label="To"
                  placeholder="Select destination"
                />

                <InputBox
                  label="Departure"
                  placeholder="Select date"
                  type="date"
                />

                <InputBox
                  label="Return"
                  placeholder="Select date"
                  type="date"
                />

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

                <SelectBox
                  label="Passenger"
                  value="1 Adult"
                />

                <SelectBox
                  label="Cabin"
                  value="Economy"
                />

                <SelectBox
                  label="Airline"
                  value="Any Airline"
                />

              </div>

              <button className="mt-5 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2">
                <Search size={17} />
                SEARCH FLIGHT
              </button>

            </DashboardCard>


            {/* ESIM */}

            <DashboardCard
              title="eSIM - TRAVEL CONNECTIVITY"
              icon={<Smartphone size={18} />}
              badge="NEW"
            >

              <div className="rounded-xl bg-red-50 border border-red-100 p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-lg font-bold text-gray-900">
                      Stay Connected Worldwide
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      eSIM data plans for your international travelers.
                    </p>

                  </div>

                  <Smartphone
                    size={42}
                    className="text-red-600"
                  />

                </div>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">

                  <QuickDestination
                    country="Thailand"
                    href="/agent/esim"
                  />

                  <QuickDestination
                    country="Japan"
                    href="/agent/esim"
                  />

                  <QuickDestination
                    country="Korea"
                    href="/agent/esim"
                  />

                  <QuickDestination
                    country="Vietnam"
                    href="/agent/esim"
                  />

                </div>


                <Link
                  href="/agent/esim"
                  className="mt-5 inline-flex items-center gap-2 text-red-600 font-semibold text-sm"
                >
                  View eSIM Plans
                  <ArrowRight size={16} />
                </Link>

              </div>

            </DashboardCard>

          </div>


          {/* =====================================================
              TOUR / HOTEL / VISA
          ===================================================== */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-5">


            <SearchServiceCard
              icon={<Map />}
              title="INTERNATIONAL TOUR"
              description="Search verified B2B tour packages."
              button="SEARCH TOUR"
            />

            <SearchServiceCard
              icon={<Hotel />}
              title="HOTEL - BOOK & BUY"
              description="Request competitive hotel rates."
              button="SEARCH HOTEL"
            />

            <SearchServiceCard
              icon={<FileText />}
              title="VISA SERVICE"
              description="Check visa information and requirements."
              button="VIEW VISA INFO"
            />

          </div>


          {/* =====================================================
              DOMESTIC / CRUISE / INSURANCE
          ===================================================== */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

            <SearchServiceCard
              icon={<Plane />}
              title="DOMESTIC TOUR"
              description="Explore domestic tour products."
              button="SEARCH TOUR"
            />

            <SearchServiceCard
              icon={<Ship />}
              title="CRUISE"
              description="Search available cruise packages."
              button="SEARCH CRUISE"
            />

            <SearchServiceCard
              icon={<ShieldCheck />}
              title="TRAVEL INSURANCE"
              description="Find suitable travel protection."
              button="SEARCH PLAN"
            />

          </div>


          {/* =====================================================
              NEWS + PROMOS
          ===================================================== */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-5">


            {/* NEWS */}

            <DashboardCard
              title="NEWS & PRODUCT UPDATE"
              icon={<Bell size={18} />}
            >

              <div className="divide-y">

                <NewsRow
                  date="Aug 26, 2026"
                  text="New B2B travel products and partner updates"
                />

                <NewsRow
                  date="Aug 25, 2026"
                  text="New international tour packages available"
                />

                <NewsRow
                  date="Aug 24, 2026"
                  text="Vietnam B2B partnership opportunities"
                />

                <NewsRow
                  date="Aug 23, 2026"
                  text="eSIM travel connectivity now available"
                />

              </div>

              <button className="mt-4 text-red-600 font-semibold text-sm">
                VIEW ALL NEWS →
              </button>

            </DashboardCard>


            {/* PROMO */}

            <DashboardCard
              title="PROMO UPDATE"
              icon={<Tag size={18} />}
            >

              <div className="divide-y">

                <NewsRow
                  date="AUG 2026"
                  text="Special B2B tour package offers"
                />

                <NewsRow
                  date="AUG 2026"
                  text="Selected eSIM partner rates"
                />

                <NewsRow
                  date="AUG 2026"
                  text="Limited-time travel promotions"
                />

                <NewsRow
                  date="ONGOING"
                  text="Partner-only travel offers"
                />

              </div>

              <button className="mt-4 text-red-600 font-semibold text-sm">
                VIEW ALL PROMOS →
              </button>

            </DashboardCard>

          </div>


          {/* =====================================================
              PARTNER SUPPORT
          ===================================================== */}

          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                  <Headphones />
                </div>

                <div>

                  <h3 className="font-bold">
                    Need assistance?
                  </h3>

                  <p className="text-sm text-gray-500">
                    Our partner support team is ready to help with bookings,
                    quotations and B2B services.
                  </p>

                </div>

              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold text-sm">
                CONTACT PARTNER SUPPORT
              </button>

            </div>

          </div>


          {/* =====================================================
              FOOTER
          ===================================================== */}

          <footer className="bg-white border border-gray-200 rounded-xl p-5">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div>

                <h4 className="font-bold text-red-700">
                  CHINGU TRAVEL AND TOURS
                </h4>

                <p className="text-sm text-gray-500 mt-2">
                  Verified B2B Travel Partner Network
                </p>

              </div>


              <div>

                <h4 className="font-semibold">
                  Partner Support
                </h4>

                <p className="text-sm text-gray-500 mt-2">
                  +971 55 255 0096
                </p>

                <p className="text-sm text-gray-500">
                  admin@chingutravelandtours.com
                </p>

              </div>


              <div>

                <h4 className="font-semibold">
                  Office
                </h4>

                <p className="text-sm text-gray-500 mt-2">
                  Philippines & UAE Office
                </p>

                <p className="text-sm text-gray-500">
                  www.chingutravelandtours.com
                </p>

              </div>

            </div>


            <div className="border-t mt-5 pt-4 text-center text-xs text-gray-400">
              © 2026 CHINGU Travel and Tours. All Rights Reserved.
            </div>

          </footer>

        </section>

      </div>

    </main>
  );
}


/* ============================================================
   SIDEBAR ITEM
============================================================ */

function SidebarItem({
  icon,
  label,
  href,
  active = false,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
        active
          ? "bg-red-600 text-white"
          : "text-gray-700 hover:bg-red-50 hover:text-red-600"
      }`}
    >
      {icon}

      <span className="flex-1">
        {label}
      </span>

      {badge && (
        <span className="text-[9px] bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">
          {badge}
        </span>
      )}
    </Link>
  );
}


/* ============================================================
   STAT CARD
============================================================ */

function StatCard({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">

      <div className="flex items-center justify-between">

        <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
          {icon}
        </div>

      </div>

      <p className="text-[10px] font-bold text-gray-500 mt-3">
        {title}
      </p>

      <p className="text-xl font-bold mt-1">
        {value}
      </p>

      <p className="text-xs text-gray-400 mt-1">
        {subtitle}
      </p>

    </div>
  );
}


/* ============================================================
   DASHBOARD CARD
============================================================ */

function DashboardCard({
  title,
  icon,
  children,
  badge,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  badge?: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      <div className="bg-red-600 text-white px-4 py-3 flex items-center gap-2">

        {icon}

        <h2 className="font-bold text-sm flex-1">
          {title}
        </h2>

        {badge && (
          <span className="bg-white text-red-600 text-[10px] px-2 py-1 rounded font-bold">
            {badge}
          </span>
        )}

      </div>

      <div className="p-4">
        {children}
      </div>

    </div>
  );
}


/* ============================================================
   INPUT
============================================================ */

function InputBox({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">

      <span className="text-xs font-semibold text-gray-600">
        {label}
      </span>

      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
      />

    </label>
  );
}


/* ============================================================
   SELECT
============================================================ */

function SelectBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <label className="block">

      <span className="text-xs font-semibold text-gray-600">
        {label}
      </span>

      <select className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-red-500">
        <option>{value}</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>

    </label>
  );
}


/* ============================================================
   QUICK DESTINATION
============================================================ */

function QuickDestination({
  country,
  href,
}: {
  country: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white border border-gray-200 rounded-lg px-3 py-3 text-center hover:border-red-400 hover:shadow-sm transition"
    >

      <Globe2
        size={20}
        className="mx-auto text-red-600"
      />

      <p className="text-xs font-semibold mt-2">
        {country}
      </p>

    </Link>
  );
}


/* ============================================================
   SERVICE CARD
============================================================ */

function SearchServiceCard({
  icon,
  title,
  description,
  button,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  button: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      <div className="bg-red-600 text-white px-4 py-3 flex items-center gap-2">

        {icon}

        <h3 className="font-bold text-sm">
          {title}
        </h3>

      </div>

      <div className="p-5">

        <p className="text-sm text-gray-500">
          {description}
        </p>

        <button className="mt-5 w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2.5 rounded-lg text-sm font-semibold transition">
          {button}
        </button>

      </div>

    </div>
  );
}


/* ============================================================
   NEWS ROW
============================================================ */

function NewsRow({
  date,
  text,
}: {
  date: string;
  text: string;
}) {
  return (
    <div className="py-3 flex items-center gap-4">

      <span className="text-[10px] font-bold text-gray-400 w-24 shrink-0">
        {date}
      </span>

      <p className="text-sm text-gray-700">
        {text}
      </p>

    </div>
  );
}
