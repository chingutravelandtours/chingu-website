import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vietnam Tour Packages | Chingu Travel and Tours",
  description:
    "Explore Vietnam land tour packages with Chingu Travel and Tours. Flexible dates, tour arrangements, hotel and airfare available upon request.",
};

export default function VietnamToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
