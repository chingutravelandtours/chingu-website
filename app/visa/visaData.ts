export interface VisaInfo {
  country: string;
  title: string;
  price: string;
  description: string;
  requirements?: string[];
}

export const visaData: VisaInfo[] = [
  {
    country: "Japan",
    title: "Japan Tourist Visa",
    price: "₱2,500",
    description: "Single or Multiple entry visa for leisure travel.",
  },
  {
    country: "Korea",
    title: "South Korea Tourist Visa",
    price: "₱2,000",
    description: "Explore Seoul and Busan with easy processing.",
  },
  {
    country: "Schengen",
    title: "Schengen Visa",
    price: "₱6,500",
    description: "Travel across 27 European countries.",
  },
];
