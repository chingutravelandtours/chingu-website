import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chingu Travel and Tours | Philippines & UAE",
  description:
    "Chingu Travel and Tours offers travel services, tour packages, flights, hotels, eSIM and travel assistance.",

  metadataBase: new URL("https://chingutravelandtours.com"),

  openGraph: {
    title: "Chingu Travel and Tours | Philippines & UAE",
    description:
      "Travel services, tour packages, flights, hotels, eSIM and travel assistance.",
    url: "https://chingutravelandtours.com",
    siteName: "Chingu Travel and Tours",
    images: [
      {
        url: "/chingu-logo.png",
        width: 1200,
        height: 1200,
        alt: "Chingu Travel and Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chingu Travel and Tours | Philippines & UAE",
    description:
      "Travel services, tour packages, flights, hotels, eSIM and travel assistance.",
    images: ["/chingu-logo.png"],
  },

  icons: {
    icon: "/chingu-logo.png",
    apple: "/chingu-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
