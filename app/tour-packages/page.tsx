"use client";

const packages = [
  // =========================
  // AVAILABILITY
  // =========================
  {
  title: "Adora Magic City Cruise",
  subtitle: "Fly + Cruise (China Shenzhen + Vietnam Nha Trang)",
  duration: "8D7N",
  dates: "Aug. 21–28, 2026",
  price: "$1,388",
  status: "20 SLOTS",
},
  {
    title: "Chongqing",
    subtitle: "Shopping Tour",
    duration: "5D3N",
    dates: "Oct. 15–19, 2026",
    price: "₱34,587",
    status: "20 PAX",
  },
  {
    title: "Chongqing",
    subtitle: "Shopping Tour",
    duration: "5D3N",
    dates: "Oct. 17–21, 2026",
    price: "₱34,587",
    status: "SOLD OUT",
  },

  // =========================
  // AVATAR ZHANGJIAJIE
  // =========================
  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Sep. 1–6, 2026",
    price: "₱31,437",
    status: "SOLD OUT",
  },
  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Oct. 27–Nov. 1, 2026",
    price: "₱39,627",
    status: "15 PAX",
  },
  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Nov. 10–15, 2026",
    price: "₱33,327",
    status: "13 PAX",
  },
  {
    title: "Avatar Zhangjiajie",
    subtitle: "Shopping Tour",
    duration: "6D5N",
    dates: "Dec. 22–27, 2026",
    price: "₱45,927",
    status: "SOLD OUT",
  },

  // =========================
  // AVATAR + FENGHUANG
  // =========================
  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Sep. 1–6, 2026",
    price: "₱50,337",
    status: "Minimum 10 Pax",
  },
  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Oct. 27–Nov. 1, 2026",
    price: "₱50,337",
    status: "Minimum 10 Pax",
  },
  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Nov. 10–15, 2026",
    price: "₱50,337",
    status: "Minimum 10 Pax",
  },
  {
    title: "Avatar Zhangjiajie + Fenghuang",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Dec. 22–27, 2026",
    price: "₱50,337",
    status: "Minimum 10 Pax",
  },

  // =========================
  // CHONGQING + ZHANGJIAJIE + SHANGHAI
  // =========================
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Aug. 30–Sep. 5, 2026",
    price: "₱55,944",
    status: "9 PAX",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Sep. 12–18, 2026",
    price: "₱55,944",
    status: "8 PAX",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Oct. 10–16, 2026",
    price: "₱55,944",
    status: "14 PAX",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Oct. 26–Nov. 2, 2026",
    price: "₱62,244",
    status: "6 PAX",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Nov. 16–22, 2026",
    price: "₱55,944",
    status: "5 PAX",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Nov. 28–Dec. 4, 2026",
    price: "₱55,944",
    status: "20 PAX",
  },
  {
    title: "Chongqing + Zhangjiajie + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Dec. 21–27, 2026",
    price: "₱68,544",
    status: "16 PAX",
  },

  // =========================
  // BEIJING
  // =========================
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "4D3N",
    dates: "Jul. 5–8, 2026",
    price: "₱31,437",
    status: "SOLD OUT",
  },
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "4D3N",
    dates: "Jul. 23–26, 2026",
    price: "₱31,437",
    status: "SOLD OUT",
  },
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "4D3N",
    dates: "Aug. 6–9, 2026",
    price: "₱31,437",
    status: "CLOSED",
  },
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "4D3N",
    dates: "Aug. 23–26, 2026",
    price: "₱31,437",
    status: "CLOSED",
  },
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "4D3N",
    dates: "Sep. 13–16, 2026",
    price: "₱31,437",
    status: "16 PAX",
  },
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "4D3N",
    dates: "Oct. 25–28, 2026",
    price: "₱34,587",
    status: "3 PAX",
  },
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "4D3N",
    dates: "Nov. 1–4, 2026",
    price: "₱34,587",
    status: "5 PAX",
  },
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "4D3N",
    dates: "Dec. 20–23, 2026",
    price: "₱43,?00",
    status: "20 PAX",
  },
  {
    title: "Beijing",
    subtitle: "Shopping Tour",
    duration: "4D3N",
    dates: "Dec. 31, 2026–Jan. 3, 2027",
    price: "₱40,887",
    status: "20 PAX",
  },

  // =========================
  // BEIJING + SHANGHAI
  // =========================
  {
    title: "Beijing + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Jul. 5–11, 2026",
    price: "₱55,944",
    status: "SOLD OUT",
  },
  {
    title: "Beijing + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Jul. 23–29, 2026",
    price: "₱55,944",
    status: "SOLD OUT",
  },
  {
    title: "Beijing + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Aug. 6–12, 2026",
    price: "₱55,944",
    status: "SOLD OUT",
  },
  {
    title: "Beijing + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Aug. 23–29, 2026",
    price: "₱55,944",
    status: "CLOSED",
  },
  {
    title: "Beijing + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Sep. 13–19, 2026",
    price: "₱55,944",
    status: "16 PAX",
  },
  {
    title: "Beijing + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Oct. 12–18, 2026",
    price: "₱55,944",
    status: "20 PAX",
  },
  {
    title: "Beijing + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Oct. 25–31, 2026",
    price: "₱59,094",
    status: "3 PAX",
  },
  {
    title: "Beijing + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Nov. 1–7, 2026",
    price: "₱59,094",
    status: "18 PAX",
  },
  {
    title: "Beijing + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Dec. 20–26, 2026",
    price: "₱68,544",
    status: "20 PAX",
  },
  {
    title: "Beijing + Shanghai",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Dec. 31, 2026–Jan. 6, 2027",
    price: "₱65,394",
    status: "20 PAX",
  },

  // =========================
  // BEIJING + INNER MONGOLIA
  // =========================
  {
    title: "Beijing + Inner Mongolia",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Jul. 23–29, 2026",
    price: "₱50,337",
    status: "SOLD OUT",
  },
  {
    title: "Beijing + Inner Mongolia",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Aug. 6–12, 2026",
    price: "₱50,337",
    status: "SOLD OUT",
  },
  {
    title: "Beijing + Inner Mongolia",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Aug. 23–29, 2026",
    price: "₱50,337",
    status: "CLOSED",
  },
  {
    title: "Beijing + Inner Mongolia",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Sep. 13–19, 2026",
    price: "₱50,337",
    status: "FULL - Contact us",
  },
  {
    title: "Beijing + Inner Mongolia",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Oct. 12–18, 2026",
    price: "₱50,337",
    status: "20 PAX",
  },
  {
    title: "Beijing + Inner Mongolia",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Oct. 25–31, 2026",
    price: "₱53,487",
    status: "FULL - Contact us",
  },
  {
    title: "Beijing + Inner Mongolia",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Nov. 1–7, 2026",
    price: "₱53,487",
    status: "1 PAX",
  },

  // =========================
  // BEIJING + XI'AN
  // =========================
  {
    title: "Beijing + Xi'an",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Jul. 5–11, 2026",
    price: "₱61,047",
    status: "CLOSED",
  },
  {
    title: "Beijing + Xi'an",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Jul. 23–29, 2026",
    price: "₱61,047",
    status: "CLOSED",
  },
  {
    title: "Beijing + Xi'an",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Aug. 6–12, 2026",
    price: "₱61,047",
    status: "CLOSED",
  },
  {
    title: "Beijing + Xi'an",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Aug. 23–29, 2026",
    price: "₱61,047",
    status: "15 PAX",
  },
  {
    title: "Beijing + Xi'an",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Sep. 13–19, 2026",
    price: "₱61,047",
    status: "18 PAX",
  },
  {
    title: "Beijing + Xi'an",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Oct. 12–18, 2026",
    price: "₱61,047",
    status: "20 PAX",
  },
  {
    title: "Beijing + Xi'an",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Oct. 25–31, 2026",
    price: "₱61,047",
    status: "20 PAX",
  },
  {
    title: "Beijing + Xi'an",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Nov. 1–7, 2026",
    price: "₱61,047",
    status: "20 PAX",
  },
  {
    title: "Beijing + Xi'an",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Dec. 20–26, 2026",
    price: "₱61,047",
    status: "20 PAX",
  },
  {
    title: "Beijing + Xi'an",
    subtitle: "Shopping Tour",
    duration: "7D6N",
    dates: "Dec. 31, 2026–Jan. 6, 2027",
    price: "₱61,047",
    status: "20 PAX",
  },

  // =========================
  // SHANGHAI
  // =========================
  {
    title: "Shanghai",
    subtitle: "Pure Fun",
    duration: "4D3N",
    dates: "Jul. 8–11, 2026",
    price: "₱37,737",
    status: "CLOSED",
  },
  {
    title: "Shanghai",
    subtitle: "Pure Fun",
    duration: "4D3N",
    dates: "Jul. 26–29, 2026",
    price: "₱37,737",
    status: "CLOSED",
  },
  {
    title: "Shanghai",
    subtitle: "Pure Fun",
    duration: "4D3N",
    dates: "Aug. 9–12, 2026",
    price: "₱37,737",
    status: "CLOSED",
  },
  {
    title: "Shanghai",
    subtitle: "Pure Fun",
    duration: "4D3N",
    dates: "Aug. 26–29, 2026",
    price: "₱37,737",
    status: "CLOSED",
  },
  {
    title: "Shanghai",
    subtitle: "Pure Fun",
    duration: "4D3N",
    dates: "Sep. 16–19, 2026",
    price: "₱37,737",
    status: "20 PAX",
  },
  {
    title: "Shanghai",
    subtitle: "Pure Fun",
    duration: "4D3N",
    dates: "Oct. 28–31, 2026",
    price: "₱40,887",
    status: "10 PAX",
  },
  {
    title: "Shanghai",
    subtitle: "Pure Fun",
    duration: "4D3N",
    dates: "Nov. 4–7, 2026",
    price: "₱37,737",
    status: "10 PAX",
  },

  // =========================
  // WINTER HARBIN
  // =========================
  {
    title: "Winter Harbin",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Dec. 17–22, 2026",
    price: "₱81,837",
    status: "20 PAX",
  },
  {
    title: "Winter Harbin",
    subtitle: "Pure Fun",
    duration: "5D4N",
    dates: "Dec. 23–27, 2026",
    price: "₱94,437",
    status: "17 PAX",
  },
  {
    title: "Winter Harbin",
    subtitle: "Pure Fun",
    duration: "5D4N",
    dates: "Dec. 30, 2026–Jan. 3, 2027",
    price: "₱94,437",
    status: "18 PAX",
  },
  {
    title: "Winter Harbin",
    subtitle: "Pure Fun",
    duration: "7D6N",
    dates: "Jan. 3–9, 2027",
    price: "₱81,837",
    status: "18 PAX",
  },
  {
    title: "Winter Harbin",
    subtitle: "Pure Fun",
    duration: "6D5N",
    dates: "Jan. 14–19, 2027",
    price: "₱81,837",
    status: "20 PAX",
  },
  {
    title: "Winter Harbin",
    subtitle: "Pure Fun",
    duration: "5D4N",
    dates: "Feb. 16–20, 2027",
    price: "₱81,837",
    status: "20 PAX",
  },

  // =========================
  // CANTON FAIR
  // =========================
  {
    title: "Autumn Canton Fair - Phase 1",
    subtitle: "Business Tour",
    duration: "4D3N",
    dates: "Oct. 16–19, 2026",
    price: "₱81,837",
    status: "Available",
  },
  {
    title: "Autumn Canton Fair - Phase 2",
    subtitle: "Business Tour",
    duration: "4D3N",
    dates: "Oct. 24–27, 2026",
    price: "₱75,537",
    status: "Available",
  },
  {
    title: "Autumn Canton Fair - Phase 3",
    subtitle: "Business Tour",
    duration: "4D3N",
    dates: "Nov. 1–4, 2026",
    price: "₱75,537",
    status: "Available",
  },

  // =========================
  // YIWU
  // =========================
  {
    title: "Yiwu International Trade Market",
    subtitle: "Supplier Seeking Tour",
    duration: "4D3N",
    dates: "Jul. 12–15, 2026",
    price: "₱55,944",
    status: "Available",
  },
  {
    title: "Yiwu International Trade Market",
    subtitle: "Supplier Seeking Tour",
    duration: "4D3N",
    dates: "Jul. 26–29, 2026",
    price: "₱55,944",
    status: "Available",
  },
  {
    title: "Yiwu International Trade Market",
    subtitle: "Supplier Seeking Tour",
    duration: "4D3N",
    dates: "Aug. 9–12, 2026",
    price: "₱55,944",
    status: "Available",
  },
  {
    title: "Yiwu International Trade Market",
    subtitle: "Supplier Seeking Tour",
    duration: "4D3N",
    dates: "Aug. 23–26, 2026",
    price: "₱55,944",
    status: "Available",
  },
  {
    title: "Yiwu International Trade Market",
    subtitle: "Supplier Seeking Tour",
    duration: "4D3N",
    dates: "Sep. 6–9, 2026",
    price: "₱55,944",
    status: "Available",
  },
  {
    title: "Yiwu International Trade Market",
    subtitle: "Supplier Seeking Tour",
    duration: "4D3N",
    dates: "Sep. 20–23, 2026",
    price: "₱55,944",
    status: "Available",
  },
  {
    title: "Yiwu International Trade Market",
    subtitle: "Supplier Seeking Tour",
    duration: "4D3N",
    dates: "Oct. 18–21, 2026",
    price: "₱55,944",
    status: "Available",
  },

  // =========================
  // GUANGZHOU LAND TOUR
  // =========================
  {
    title: "Guangzhou Land Tour",
    subtitle: "Land Tour",
    duration: "4D3N",
    dates: "Flexible Schedule",
    price: "From ₱25,137",
    status: "Min. 4 Pax",
  },

  // =========================
  // XINJIANG LAND TOUR
  // =========================
  {
    title: "Xinjiang Land Tour",
    subtitle: "Land Tour",
    duration: "4D3N",
    dates: "Flexible Schedule",
    price: "From ₱56,637",
    status: "Min. 4 Pax",
  },
];

export default function TourPackagesPage() {
  const handleInquiry = (
    title: string,
    duration: string,
    dates: string,
    price: string
  ) => {
    const message = `Hello CHINGU Travel and Tours!

I would like to inquire about:

${title}
Duration: ${duration}
Date: ${dates}
Package From: ${price} per person

Please send me the complete package details. Thank you!`;

    window.open(
      `https://wa.me/639193888999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            CHINGU Travel and Tours
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            China Tour Packages
          </h1>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Explore our China tour packages, departure dates,
            starting rates, and availability.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {packages.map((pkg) => (
            <div
              key={`${pkg.title}-${pkg.dates}`}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition flex flex-col"
            >

              {/* Duration + Type */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  {pkg.duration}
                </span>

                <span className="text-xs text-gray-500 text-right">
                  {pkg.subtitle}
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-4 text-lg font-bold text-gray-900 min-h-[52px]">
                {pkg.title}
              </h2>

              {/* Departure */}
              <div className="mt-4">
                <p className="text-xs text-gray-400 uppercase">
                  Departure
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {pkg.dates}
                </p>
              </div>

              {/* Price */}
              <div className="mt-5">
                <p className="text-xs text-gray-400 uppercase">
                  Package From
                </p>

                <p className="text-2xl font-bold text-gray-900">
                  {pkg.price}
                </p>

                <p className="text-xs text-gray-400">
                  per person
                </p>
              </div>

              {/* Status */}
              <div className="mt-4">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                    pkg.status === "Available"
                      ? "bg-green-50 text-green-600"
                      : pkg.status === "SOLD OUT" ||
                        pkg.status === "CLOSED"
                      ? "bg-gray-100 text-gray-500"
                      : pkg.status.includes("FULL")
                      ? "bg-red-50 text-red-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {pkg.status}
                </span>
              </div>

              {/* Inquiry */}
              <button
                onClick={() =>
                  handleInquiry(
                    pkg.title,
                    pkg.duration,
                    pkg.dates,
                    pkg.price
                  )
                }
                className="mt-5 w-full border border-red-600 text-red-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-600 hover:text-white transition"
              >
                Inquire Now →
              </button>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
