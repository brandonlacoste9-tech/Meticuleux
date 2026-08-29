import type { Metadata } from "next";
import { shop } from "@/lib/shop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Méticuleux · Barbershop · 940 boul. Saint-Jean unit 27",
  description: `${shop.name}. ${shop.phone}. Book on Setmore. ${shop.addressLine}, ${shop.cityLine}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Instrument+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
