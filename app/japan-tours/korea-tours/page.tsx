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

Deposit: ${peso(pkg.deposit ?? 0)}

Please send me the complete package details. Thank you!`
    );

    window.open(
      `https://wa.me/63919388999?text=${message}`,
      "_blank"
    );

  };


  return (
    <main className="min-h-screen bg-gray-50 py-12 px-5">

      <div className="max-w-[1600px] mx-auto">


        {/* HEADER */}

        <div className="text-center mb-12">

          <p className="
            text-red-600 
            font-semibold 
            uppercase 
            tracking-[4px] 
            text-sm
          ">
            CHINGU Travel and Tours
          </p>


          <h1 className="
            mt-3 
            text-4xl 
            md:text-5xl 
            font-bold 
            text-gray-900
          ">
            Korea Tour Packages
          </h1>


          <p className="
            mt-4 
            text-gray-500
          ">
            Explore our Korea tour packages, departure dates and rates.
          </p>

        </div>



        {/* PACKAGE GRID */}

        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5 
          gap-4
        ">


          {packages.map((pkg, index) => (

            <div
              key={`${pkg.title}-${pkg.dates}-${index}`}
              className="
                bg-white
                rounded-2xl
                border
                border-gray-100
                shadow-md
                p-4
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                flex
                flex-col
              "
            >


              {/* DURATION + STATUS */}

              <div className="
                flex 
                justify-between 
                items-center 
                gap-2
              ">


                <span className="
                  text-xs
                  font-bold
                  px-3
                  py-1.5
                  rounded-full
                  bg-red-50
                  text-red-600
                ">
                  {pkg.duration}
                </span>



                <span className={`
                  text-xs
                  font-semibold
                  px-2.5
                  py-1.5
                  rounded-full
                  ${
                    pkg.slots && pkg.slots > 0
                    ? "bg-green-50 text-green-600"
                    : "bg-gray-100 text-gray-500"
                  }
                `}>
                  {
                    pkg.slots && pkg.slots > 0
                    ? `${pkg.slots} slots`
                    : "Available"
                  }
                </span>


              </div>




              {/* TITLE */}

              <h2 className="
                mt-4
                text-sm
                font-bold
                text-gray-900
                min-h-[45px]
              ">
                {pkg.title}
              </h2>



              {/* TYPE */}

              <p className="
                mt-2
                text-xs
                text-gray-400
              ">
                {pkg.subtitle}
              </p>




              {/* DATE */}

              <div className="mt-4">

                <p className="
                  text-[10px]
                  uppercase
                  text-gray-400
                ">
                  Departure
                </p>


                <p className="
                  mt-1
                  text-xs
                  font-semibold
                  text-gray-700
                ">
                  {pkg.dates}
                </p>

              </div>




              {/* CITY */}

              <div className="mt-3">

                <p className="
                  text-[10px]
                  uppercase
                  text-gray-400
                ">
                  Departure City
                </p>


                <p className="
                  mt-1
                  text-xs
                  font-semibold
                  text-gray-700
                ">
                  {pkg.city}
                </p>


              </div>





              {/* PRICE */}

              <div className="mt-auto pt-5">

                <p className="
                  text-[10px]
                  uppercase
                  text-gray-400
                ">
                  Package From
                </p>


                <p className="
                  mt-1
                  text-lg
                  font-bold
                  text-gray-900
                ">
                  {peso(pkg.price)}
                </p>


                <p className="
                  text-[10px]
                  text-gray-400
                ">
                  per person
                </p>


              </div>




              {/* DEPOSIT */}

              <div className="mt-3">

                <p className="
                  text-[10px]
                  uppercase
                  text-gray-400
                ">
                  Deposit
                </p>


                <p className="
                  text-xs
                  font-bold
                  text-gray-700
                ">
                  {peso(pkg.deposit ?? 0)}
                </p>


              </div>




              {/* BUTTON */}

              <button
                onClick={() => handleInquiry(pkg)}
                className="
                  mt-5
                  w-full
                  py-2
                  rounded-xl
                  text-xs
                  font-semibold
                  border-2
                  border-red-600
                  text-red-600
                  hover:bg-red-600
                  hover:text-white
                  transition
                "
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
