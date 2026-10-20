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
  title: "Grow Your Proof | UGC & Growth Marketing for AI and Tech Apps",
  description:
    "UGC and growth marketing for AI and tech apps. Real creators, tested hooks and ads that turn views into downloads.",
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
