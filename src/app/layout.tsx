import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Sayed Ali | Flutter Developer",
  description: "Crafting fluid, high-performance cross-platform experiences with Flutter. Transforming complex business logic into elegant, user-centric mobile applications.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
