import type { Metadata } from "next";
import { Instrument_Serif, Lora } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-display",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Bramble Coffee",
  description: "Good coffee, made carefully.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${lora.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
