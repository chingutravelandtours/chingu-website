"use client";

const USD_TO_PHP = 63;

type Package = {
  title: string;
  subtitle: string;
  duration: string;
  dates: string;
  city: string;
  price: number;
  slots?: number;
  deposit?: number;
};

const packages: Package[] = [
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Sep. 13–17, 2026",
    city: "MNL",
    price: 839 * USD_TO_PHP,
    slots: 1,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Sep. 26–30, 2026",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 1,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Oct. 9–13, 2026",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 4,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Oct. 15–19, 2026",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 2,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Oct. 22–26, 2026",
    city: "MNL",
    price: 799 * USD_TO_PHP,
    slots: 1,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Nov. 19–23, 2026",
    city: "CEB",
    price: 899 * USD_TO_PHP,
    slots: 4,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Japan Osaka Nara Kyoto",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Nov. 25–29, 2026",
    city: "CEB",
    price: 1499 * USD_TO_PHP,
    slots: 27,
    deposit: 500 * USD_TO_PHP,
  },
  {
    title: "Cebu Tokyo Hakone",
    subtitle: "Japan",
    duration: "8D7N",
    dates: "Nov. 26–Dec. 3, 2026",
    city: "CEB",
    price: 2488 * USD_TO_PHP,
    slots: 30,
    deposit: 500 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Dec. 10–14, 2026",
    city: "CEB",
    price: 899 * USD_TO_PHP,
    slots: 6,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Dec. 12–16, 2026",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 4,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Dec. 16–20, 2026",
    city: "MNL",
    price: 999 * USD_TO_PHP,
    slots: 12,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Adora Flora City Cruise",
    subtitle: "Fly + Cruise",
    duration: "7D6N",
    dates: "Jan. 6–12, 2027",
    city: "MNL",
    price: 1588 * USD_TO_PHP,
    slots: 20,
    deposit: 500 * USD_TO_PHP,
  },
  {
    title: "Adora Flora City Cruise",
    subtitle: "Fly + Cruise",
    duration: "6D5N",
    dates: "Jan. 11–16, 2027",
    city: "MNL",
    price: 1488 * USD_TO_PHP,
    slots: 20,
    deposit: 500 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (Via 5J)",
    duration: "5D4N",
    dates: "Jan. 13–17, 2027",
    city: "DVO",
    price: 999 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Jan. 13–17, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 30,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Jan. 14–18, 2027",
    city: "CEB",
    price: 899 * USD_TO_PHP,
    slots: 17,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Jan. 14–18, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Jan. 14–18, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 21,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Jan. 15–19, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 10,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (Via 5J)",
    duration: "5D4N",
    dates: "Jan. 16–20, 2027",
    city: "DVO",
    price: 999 * USD_TO_PHP,
    slots: 28,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Jan. 16–20, 2027",
    city: "MNL",
    price: 999 * USD_TO_PHP,
    slots: 22,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Jan. 20–24, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Enoshima",
    subtitle: "Japan (Winter)",
    duration: "5D4N",
    dates: "Jan. 21–25, 2027",
    city: "CEB",
    price: 929 * USD_TO_PHP,
    slots: 19,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Jan. 21–25, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Jan. 21–25, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Jan. 22–26, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 6,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Jan. 22–26, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 27,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kobe + Kyoto + Nara",
    subtitle: "Japan (PAL)",
    duration: "5D4N",
    dates: "Jan. 23–27, 2027",
    city: "DVO",
    price: 1149 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Jan. 26–30, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Hokkaido Icebreaker",
    subtitle: "Japan (VIA ANA) - No Shopping",
    duration: "6D5N",
    dates: "Feb. 2–7, 2027",
    city: "MNL",
    price: 2288 * USD_TO_PHP,
    slots: 28,
    deposit: 500 * USD_TO_PHP,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Feb. 10–14, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 1,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo + Mt. Fuji + Yokohama",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Feb. 19–23, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 1,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Feb. 19–23, 2027",
    city: "MNL",
    price: 799 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Nagoya + Takayama + Shirakawago + Osaka",
    subtitle: "Japan (Winter)",
    duration: "5D4N",
    dates: "Feb. 20–24, 2027",
    city: "MNL",
    price: 1099 * USD_TO_PHP,
    slots: 23,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kobe + Kyoto + Nara",
    subtitle: "Japan (PAL)",
    duration: "5D4N",
    dates: "Feb. 20–24, 2027",
    city: "DVO",
    price: 1149 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Feb. 26–Mar. 2, 2027",
    city: "MNL",
    price: 799 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kobe + Kyoto + Nara",
    subtitle: "Japan (PAL)",
    duration: "5D4N",
    dates: "Mar. 4–8, 2027",
    city: "DVO",
    price: 1149 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Mar. 4–8, 2027",
    city: "CEB",
    price: 899 * USD_TO_PHP,
    slots: 21,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Mar. 12–16, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 16,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Mar. 12–16, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 23,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Mar. 19–23, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 24,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Mar. 19–23, 2027",
    city: "MNL",
    price: 949 * USD_TO_PHP,
    slots: 4,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Mar. 26–30, 2027",
    city: "MNL",
    price: 999 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Mar. 27–31, 2027",
    city: "CEB",
    price: 999 * USD_TO_PHP,
    slots: 25,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Mar. 27–31, 2027",
    city: "MNL",
    price: 999 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Mar. 28–Apr. 1, 2027",
    city: "MNL",
    price: 999 * USD_TO_PHP,
    slots: 15,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Mar. 28–Apr. 1, 2027",
    city: "MNL",
    price: 999 * USD_TO_PHP,
    slots: 21,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 1–5, 2027",
    city: "CEB",
    price: 999 * USD_TO_PHP,
    slots: 19,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 2–6, 2027",
    city: "CEB",
    price: 999 * USD_TO_PHP,
    slots: 20,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Apr. 3–7, 2027",
    city: "MNL",
    price: 949 * USD_TO_PHP,
    slots: 5,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 3–7, 2027",
    city: "CEB",
    price: 999 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 5–9, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 18,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 9–13, 2027",
    city: "CEB",
    price: 999 * USD_TO_PHP,
    slots: 5,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Apr. 9–13, 2027",
    city: "MNL",
    price: 949 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Apr. 12–16, 2027",
    city: "MNL",
    price: 929 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 13–17, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Apr. 14–18, 2027",
    city: "MNL",
    price: 949 * USD_TO_PHP,
    slots: 25,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 14–18, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 15–19, 2027",
    city: "CEB",
    price: 899 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Apr. 15–19, 2027",
    city: "MNL",
    price: 929 * USD_TO_PHP,
    slots: 30,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo + Mt. Fuji + Kamakura",
    subtitle: "Japan (Via PAL)",
    duration: "5D4N",
    dates: "Apr. 15–19, 2027",
    city: "DVO",
    price: 1199 * USD_TO_PHP,
    slots: 30,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 16–20, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kobe + Kyoto + Nara",
    subtitle: "Japan (PAL)",
    duration: "5D4N",
    dates: "Apr. 17–21, 2027",
    city: "DVO",
    price: 1149 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "Apr. 17–21, 2027",
    city: "MNL",
    price: 929 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 19–23, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 29,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 21–25, 2027",
    city: "CEB",
    price: 899 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 22–26, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 30,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 23–27, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 7,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "Apr. 26–30, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 7,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "May 6–10, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 26,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Discover Osaka Kyoto Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "May 7–11, 2027",
    city: "CEB",
    price: 899 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "May 9–13, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo + Mt. Fuji + Kamakura",
    subtitle: "Japan (Via PAL)",
    duration: "5D4N",
    dates: "May 13–17, 2027",
    city: "DVO",
    price: 1199 * USD_TO_PHP,
    slots: 19,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "May 13–17, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "May 15–19, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 29,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (Via 5J)",
    duration: "5D4N",
    dates: "May 19–23, 2027",
    city: "DVO",
    price: 999 * USD_TO_PHP,
    slots: 27,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "May 20–24, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "May 22–26, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 28,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Tokyo - Mt. Fuji - Kamakura",
    subtitle: "Japan",
    duration: "5D4N",
    dates: "May 26–30, 2027",
    city: "MNL",
    price: 899 * USD_TO_PHP,
    slots: 32,
    deposit: 300 * USD_TO_PHP,
  },
  {
    title: "Osaka + Kyoto + Nara",
    subtitle: "Japan (3 in 1)",
    duration: "5D4N",
    dates: "May 27–31, 2027",
    city: "MNL",
    price: 859 * USD_TO_PHP,
    slots: 0,
    deposit: 300 * USD_TO_PHP,
  },
];

const peso = (amount: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);

export default function JapanToursPage() {
  const handleInquiry = (pkg: Package) => {
    const message = encodeURIComponent(
      `Hello CHINGU Travel and Tours!

I would like to inquire about:

${pkg.title}
Package Type: ${pkg.subtitle}
Duration: ${pkg.duration}
Departure: ${pkg.dates}
Departure City: ${pkg.city}

Package From: ${peso(pkg.price)} per person
Deposit: ${peso(pkg.deposit ?? 0)} per person

Please send me the complete package details, inclusions, exclusions, available dates, and booking requirements.

Thank you!`
    );

    window.open(
      `https://wa.me/63919388999?text=${message}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-white py-10 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Japan Tour Packages
          </h1>

          <p className="mt-3 text-gray-600">
            View available departure dates, tour packages and current rates.
          </p>
        </div>

        {/* AVAILABILITY */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dates & Availability
          </h2>

          <p className="mt-3 text-gray-600">
            View available dates and check current availability for your
            preferred Japan tour package.
          </p>

          {/* DESKTOP TABLE */}
          <div className="hidden lg:block mt-8 overflow-x-auto">
            <div className="min-w-[1150px]">

              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[2fr_1.1fr_0.7fr_0.55fr_0.8fr_0.9fr_0.8fr]
                  gap-5
                  border-b
                  border-gray-200
                  pb-4
                  text-xs
                  font-semibold
                  text-gray-600
                "
              >
                <div>Package</div>
                <div>Starting / Ending</div>
                <div>Duration</div>
                <div>City</div>
                <div>Status</div>
                <div className="text-right">Price From</div>
                <div className="text-right">Deposit</div>
              </div>

              {/* ROWS */}
              {packages.map((pkg, index) => {
                const available = (pkg.slots ?? 0) > 0;

                return (
                  <div
                    key={`${pkg.title}-${pkg.dates}-${index}`}
                    className="
                      grid
                      grid-cols-[2fr_1.1fr_0.7fr_0.55fr_0.8fr_0.9fr_0.8fr]
                      gap-5
                      items-center
                      border-b
                      border-gray-100
                      py-5
                    "
                  >

                    {/* PACKAGE */}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900">
                        {pkg.title}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {pkg.subtitle}
                      </p>
                    </div>

                    {/* DATE */}
                    <div>
                      <p className="text-xs font-semibold text-gray-800">
                        {pkg.dates}
                      </p>
                    </div>

                    {/* DURATION */}
                    <div>
                      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-700">
                        {pkg.duration}
                      </span>
                    </div>

                    {/* CITY */}
                    <div>
                      <p className="text-xs font-semibold text-gray-800">
                        {pkg.city}
                      </p>
                    </div>

                    {/* STATUS */}
                    <div>
                      {available ? (
                        <>
                          <p className="text-sm font-semibold text-green-600">
                            Available
                          </p>

                          <p className="text-[10px] text-gray-500">
                            {pkg.slots} slots
                          </p>
                        </>
                      ) : (
                        <p className="text-sm font-semibold text-gray-400">
                          Sold Out
                        </p>
                      )}
                    </div>

                    {/* PRICE */}
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">
                        {peso(pkg.price)}
                      </p>

                      <p className="text-[10px] text-gray-500">
                        per person
                      </p>

                      {available && (
                        <button
                          onClick={() => handleInquiry(pkg)}
                          className="
                            mt-2
                            text-[11px]
                            font-semibold
                            text-red-600
                            hover:text-red-700
                          "
                        >
                          Inquire →
                        </button>
                      )}
                    </div>

                    {/* DEPOSIT */}
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">
                        {peso(pkg.deposit ?? 0)}
                      </p>

                      <p className="text-[10px] text-gray-500">
                        per person
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* TABLET + MOBILE CARDS */}
          <div className="lg:hidden mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">

            {packages.map((pkg, index) => {
              const available = (pkg.slots ?? 0) > 0;

              return (
                <div
                  key={`${pkg.title}-${pkg.dates}-${index}`}
                  className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-5
                    shadow-sm
                  "
                >

                  {/* TOP */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-gray-900">
                        {pkg.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {pkg.subtitle}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-700">
                      {pkg.duration}
                    </span>
                  </div>

                  {/* DETAILS */}
                  <div className="mt-5 grid grid-cols-2 gap-4">

                    <div>
                      <p className="text-[10px] uppercase text-gray-400">
                        Departure
                      </p>

                      <p className="mt-1 text-xs font-semibold text-gray-800">
                        {pkg.dates}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase text-gray-400">
                        City
                      </p>

                      <p className="mt-1 text-xs font-semibold text-gray-800">
                        {pkg.city}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase text-gray-400">
                        Status
                      </p>

                      {available ? (
                        <p className="mt-1 text-xs font-semibold text-green-600">
                          Available — {pkg.slots} slots
                        </p>
                      ) : (
                        <p className="mt-1 text-xs font-semibold text-gray-400">
                          Sold Out
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="text-[10px] uppercase text-gray-400">
                        Duration
                      </p>

                      <p className="mt-1 text-xs font-semibold text-gray-800">
                        {pkg.duration}
                      </p>
                    </div>

                  </div>

                  {/* PRICE + DEPOSIT */}
                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">

                    <div>
                      <p className="text-[10px] uppercase text-gray-400">
                        Price From
                      </p>

                      <p className="mt-1 text-lg font-bold text-gray-900">
                        {peso(pkg.price)}
                      </p>

                      <p className="text-[10px] text-gray-500">
                        per person
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase text-gray-400">
                        Deposit
                      </p>

                      <p className="mt-1 text-lg font-bold text-gray-900">
                        {peso(pkg.deposit ?? 0)}
                      </p>

                      <p className="text-[10px] text-gray-500">
                        per person
                      </p>
                    </div>

                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => handleInquiry(pkg)}
                    disabled={!available}
                    className={`
                      mt-5
                      w-full
                      rounded-xl
                      py-3
                      text-xs
                      font-semibold
                      transition
                      ${
                        available
                          ? "bg-red-600 text-white hover:bg-red-700"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }
                    `}
                  >
                    {available ? "Inquire Now →" : "Sold Out"}
                  </button>

                </div>
              );
            })}

          </div>
        </section>

        {/* FOOTER NOTE */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center">
          <p className="text-xs font-semibold text-gray-600">
            Rates and availability are subject to change and confirmation.
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Please contact Chingu Travel and Tours for complete itinerary,
            inclusions, exclusions and booking requirements.
          </p>
        </div>

      </div>
    </main>
  );
}
