import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GsapScrollTriggerProvider from "@/components/GsapScrollTriggerProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Athul Krishna — Data Analyst & Storyteller",
  description:
    "Portfolio of Athul Krishna, Data Analyst & MCA Scholar. Translating complex data into clear strategic narratives with Python, SQL, Power BI, and interactive analytics.",
  keywords: [
    "Athul Krishna",
    "Data Analyst",
    "Data Storyteller",
    "Power BI",
    "Python",
    "SQL",
    "MCA Student",
    "Portfolio",
    "Kerala",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} ${cormorant.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#121513] text-[#1A1A1A] selection:bg-[rgba(204,88,51,0.2)] selection:text-[#CC5833] font-body">
        <SmoothScroll>
          <GsapScrollTriggerProvider>{children}</GsapScrollTriggerProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
