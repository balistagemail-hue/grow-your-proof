import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { FloatingCall } from "@/components/ui/floating-call";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Grow Your Proof | Websites That Turn Visitors Into Customers",
  description:
    "We build premium, high-converting websites for ambitious businesses that want more leads, stronger trust, and faster growth.",
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
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
      className={`${dmSans.variable} h-full antialiased dark`}
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingCall />
      </body>
    </html>
  );
}
