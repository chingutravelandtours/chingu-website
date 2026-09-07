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
    title: "Discover Da Nang – Ba Na Hills – Hoi An",
    subtitle: "Vietnam Tour Package",
    duration: "4D3N",
    dates: "Flexible Dates",
    city: "DAD",
    price: 127 * USD_TO_PHP,
    slots: 0,
    deposit: 0,
  },

  {
    title: "Da Nang – Ba Na Hills – Hoi An",
    subtitle: "Vietnam Tour Package",
    duration: "4D3N",
    dates: "Flexible Dates",
    city: "DAD",
    price: 134 * USD_TO_PHP,
    slots: 0,
    deposit: 0,
  },

  {
    title: "Da Nang – Ba Na Hills – Hoi An – Hue",
    subtitle: "Vietnam Tour Package",
    duration: "5D4N",
    dates: "Flexible Dates",
    city: "DAD",
    price: 185 * USD_TO_PHP,
    slots: 0,
    deposit: 0,
  },

  {
    title: "Hanoi – Ha Long – Ninh Binh – Da Nang – Hoi An",
    subtitle: "Vietnam Tour Package",
    duration: "7D6N",
    dates: "Flexible Dates",
    city: "HAN",
    price: 255 * USD_TO_PHP,
    slots: 0,
    deposit: 0,
  },

  {
    title: "Ho Chi Minh – Da Nang – Hoi An – Hanoi",
    subtitle: "Vietnam Tour Package",
    duration: "10D9N",
    dates: "Flexible Dates",
    city: "SGN",
    price: 361 * USD_TO_PHP,
    slots: 0,
    deposit: 0,
  },
];
