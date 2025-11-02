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
  title: "Sayed Ali MH",
  description: "Flutter Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ambient glows */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute top-0 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
