"use client";

import { useState } from "react";
import {
  Plane,
  Globe2,
  Map,
  MapPin,
  Search,
  CalendarDays,
  ChevronDown,
  Tag,
  Users,
  Heart,
  ArrowRight,
  X,
} from "lucide-react";

type Destination = {
  name: string;
  flag: string;
  image: string;
};

const destinations: Destination[] = [
  {
    name: "Japan",
    flag: "🇯🇵",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "China",
    flag: "🇨🇳",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Hong Kong",
    flag: "🇭🇰",
    image:
      "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
    image:
      "https://images.unsplash.com/photo-1538485399081-7c8971a5d6a4?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    image:
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Vietnam",
    flag: "🇻🇳",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=85",
  },
];

const countries = [
  "Japan",
  "China",
  "Hong Kong",
  "South Korea",
  "Thailand",
  "Vietnam",
  "Singapore",
  "Malaysia",
  "Indonesia",
];

const internationalRegions = [
  "ASIA",
  "EUROPE",
  "AMERICAS",
  "MIDDLE EAST",
  "OCEANIA",
];

const domesticRegions = [
  "Luzon",
  "Visayas",
  "Mindanao",
  "Palawan",
  "Bicol",
  "Central Visayas",
];

type SelectBoxProps = {
  label: string;
  icon: React.ElementType;
  value: string;
  placeholder: string;
  onClick: () => void;
};

function SelectBox({
  label,
  icon: Icon,
  value,
  placeholder,
  onClick,
}: SelectBoxProps) {
  return (
    <div className="field-group">
      <label>{label}</label>

      <button
        type="button"
        className="select-box"
        onClick={onClick}
      >
        <div className="select-left">
          <Icon size={20} />

          <span className={!value ? "placeholder" : ""}>
            {value || placeholder}
          </span>
        </div>

        <ChevronDown size={19} />
      </button>
    </div>
  );
}

type DateBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

function DateBox({ value, onChange }: DateBoxProps) {
  return (
    <div className="field-group">
      <label>Tour Date</label>

      <div className="date-box">
        <CalendarDays size={19} />

        <input
          type="date"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />

        <CalendarDays
          size={19}
          className="calendar-end"
        />
      </div>
    </div>
  );
}

type FeatureProps = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
};

function Feature({
  icon: Icon,
  title,
  subtitle,
}: FeatureProps) {
  return (
    <div className="feature">
      <div className="feature-icon">
        <Icon size={25} strokeWidth={2.2} />
      </div>

      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default function TravelHome() {
  const [internationalTab, setInternationalTab] =
    useState("GIT");

  const [from, setFrom] = useState("MANILA");
  const [region, setRegion] = useState("ASIA");
  const [country, setCountry] = useState("");
  const [internationalDate, setInternationalDate] =
    useState("");

  const [domesticRegion, setDomesticRegion] =
    useState("");
  const [domesticDate, setDomesticDate] =
    useState("");

  const [countryOpen, setCountryOpen] =
    useState(false);

  const [regionOpen, setRegionOpen] =
    useState(false);

  const [domesticOpen, setDomesticOpen] =
    useState(false);

  const [message, setMessage] = useState("");

  const handleInternationalSearch = () => {
    const destination =
      country || region || "your destination";

    setMessage(
      `Searching ${internationalTab} tours from ${from} to ${destination}...`
    );
  };

  const handleDomesticSearch = () => {
    const destination =
      domesticRegion || "the Philippines";

    setMessage(
      `Searching domestic tours in ${destination}...`
    );
  };

  return (
    <main className="travel-page">

      {/* =====================================
          HERO
      ====================================== */}

      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">

          <div className="brand-name">
            CHINGU TRAVEL AND TOURS
          </div>

          <div className="hero-grid">

            <div className="hero-copy">

              <h1>
                Explore the World
                <br />

                <span>
                  with Chingu
                </span>
              </h1>

              <p>
                Your trusted travel partner for unforgettable
                <br className="desktop-break" />

                journeys. Search, plan and discover amazing
                <br className="desktop-break" />

                tour packages today.
              </p>

            </div>


            <div className="travel-message">

              <div className="script-text">
                Travel
                <br />
                More
              </div>

              <div className="script-heart">
                ♡
              </div>

              <div className="script-line">
                ─────── ✈
              </div>

              <div className="script-bottom">
                Live Better
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================
          SEARCH AREA
      ====================================== */}

      <section className="search-wrapper">

        <div className="search-grid">

          {/* INTERNATIONAL */}

          <div className="search-card">

            <div className="card-heading">

              <div className="heading-icon red-icon">
                <Globe2 size={28} />
              </div>

              <div className="heading-text">

                <h2>
                  International Tour
                </h2>

                <p>
                  Discover amazing destinations around the world
                </p>

              </div>

            </div>


            {/* TABS */}

            <div className="tour-tabs">

              {["GIT", "FIT Land", "Tour"].map(
                (tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={
                      internationalTab === tab
                        ? "tour-tab active"
                        : "tour-tab"
                    }
                    onClick={() =>
                      setInternationalTab(tab)
                    }
                  >
                    {tab}
                  </button>
                )
              )}

            </div>


            {/* FORM */}

            <div className="form-grid">

              <SelectBox
                label="From"
                icon={MapPin}
                value={from}
                placeholder="Select departure"
                onClick={() => {
                  setFrom(
                    from === "MANILA"
                      ? "CEBU"
                      : "MANILA"
                  );
                }}
              />


              {/* TO / REGION */}

              <div className="field-group">

                <label>
                  To / Region
                </label>

                <div className="dropdown-container">

                  <button
                    type="button"
                    className="select-box"
                    onClick={() => {
                      setRegionOpen(
                        !regionOpen
                      );

                      setCountryOpen(false);
                    }}
                  >

                    <div className="select-left">

                      <Globe2 size={20} />

                      <span>
                        {region}
                      </span>

                    </div>

                    <ChevronDown size={19} />

                  </button>


                  {regionOpen && (
                    <div className="dropdown-menu">

                      {internationalRegions.map(
                        (item) => (
                          <button
                            type="button"
                            key={item}
                            onClick={() => {
                              setRegion(item);
                              setRegionOpen(false);
                            }}
                          >
                            {item}
                          </button>
                        )
                      )}

                    </div>
                  )}

                </div>

              </div>


              {/* COUNTRY */}

              <div className="field-group">

                <label>
                  Country
                </label>

                <div className="dropdown-container">

                  <button
                    type="button"
                    className="select-box"
                    onClick={() => {
                      setCountryOpen(
                        !countryOpen
                      );

                      setRegionOpen(false);
                    }}
                  >

                    <div className="select-left">

                      <Search size={20} />

                      <span
                        className={
                          !country
                            ? "placeholder"
                            : ""
                        }
                      >
                        {country ||
                          "Search country..."}
                      </span>

                    </div>

                    <ChevronDown size={19} />

                  </button>


                  {countryOpen && (
                    <div className="dropdown-menu">

                      {countries.map(
                        (item) => (
                          <button
                            type="button"
                            key={item}
                            onClick={() => {
                              setCountry(item);
                              setCountryOpen(false);
                            }}
                          >
                            {item}
                          </button>
                        )
                      )}

                    </div>
                  )}

                </div>

              </div>


              {/* DATE */}

              <DateBox
                value={internationalDate}
                onChange={setInternationalDate}
              />

            </div>


            <button
              type="button"
              className="search-button"
              onClick={
                handleInternationalSearch
              }
            >

              <Search size={25} />

              INTERNATIONAL SEARCH

            </button>

          </div>


          {/* =================================
              DOMESTIC
          ================================== */}

          <div className="search-card domestic-card">

            <div className="card-heading">

              <div className="heading-icon white-icon">
                <Map size={29} />
              </div>

              <div className="heading-text">

                <h2>
                  Domestic Tour
                </h2>

                <p>
                  Explore the beautiful destinations in the Philippines
                </p>

              </div>

            </div>


            <div className="domestic-form">

              {/* REGION */}

              <div className="field-group">

                <label>
                  Region
                </label>

                <div className="dropdown-container">

                  <button
                    type="button"
                    className="select-box"
                    onClick={() =>
                      setDomesticOpen(
                        !domesticOpen
                      )
                    }
                  >

                    <div className="select-left">

                      <MapPin size={20} />

                      <span
                        className={
                          !domesticRegion
                            ? "placeholder"
                            : ""
                        }
                      >
                        {domesticRegion ||
                          "Select region"}
                      </span>

                    </div>

                    <ChevronDown size={19} />

                  </button>


                  {domesticOpen && (
                    <div className="dropdown-menu">

                      {domesticRegions.map(
                        (item) => (
                          <button
                            type="button"
                            key={item}
                            onClick={() => {
                              setDomesticRegion(
                                item
                              );

                              setDomesticOpen(
                                false
                              );
                            }}
                          >
                            {item}
                          </button>
                        )
                      )}

                    </div>
                  )}

                </div>

              </div>


              {/* DATE */}

              <DateBox
                value={domesticDate}
                onChange={setDomesticDate}
              />

            </div>


            <button
              type="button"
              className="search-button"
              onClick={handleDomesticSearch}
            >

              <Search size={25} />

              DOMESTIC SEARCH

            </button>

          </div>

        </div>

      </section>


      {/* =====================================
          FEATURES
      ====================================== */}

      <section className="features-bar">

        <Feature
          icon={Plane}
          title="Trusted Travel Partner"
          subtitle="Safe and Hassle-Free Travel"
        />

        <div className="feature-divider" />

        <Feature
          icon={Tag}
          title="Best Tour Packages"
          subtitle="Great Deals, Great Experiences"
        />

        <div className="feature-divider" />

        <Feature
          icon={Users}
          title="Expert Assistance"
          subtitle="We're Here For You"
        />

        <div className="feature-divider" />

        <Feature
          icon={Heart}
          title="Travel More, Live Better"
          subtitle="Create Unforgettable Memories"
        />

      </section>


      {/* =====================================
          POPULAR DESTINATIONS
      ====================================== */}

      <section className="destinations">

        <div className="destination-header">

          <div>

            <span className="section-label">
              POPULAR DESTINATIONS
            </span>

            <h2>
              Where Do You Want to Go?
            </h2>

            <p>
              Search and find the best tour packages
              for your next adventure.
            </p>

          </div>


          <button
            type="button"
            className="view-all"
            onClick={() =>
              setMessage(
                "Showing all destinations..."
              )
            }
          >

            View All Destinations

            <ArrowRight size={19} />

          </button>

        </div>


        <div className="destination-grid">

          {destinations.map(
            (destination) => (

              <div
                className="destination-card"
                key={destination.name}
                onClick={() =>
                  setMessage(
                    `Selected ${destination.name}`
                  )
                }
              >

                <img
                  src={destination.image}
                  alt={destination.name}
                />

                <div className="destination-gradient" />

                <div className="destination-name">

                  <span className="flag">
                    {destination.flag}
                  </span>

                  <span>
                    {destination.name}
                  </span>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* =====================================
          TOAST MESSAGE
      ====================================== */}

      {message && (
        <div className="toast">

          <span>
            {message}
          </span>

          <button
            type="button"
            onClick={() => setMessage("")}
          >
            <X size={17} />
          </button>

        </div>
      )}

    </main>
  );
}
