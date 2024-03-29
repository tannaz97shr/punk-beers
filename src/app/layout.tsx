import MainNavbar from "@/components/MainNavbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Punk Beer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavbar />
        <div className="flex flex-col mx-4 lg:mx-auto lg:w-[1200px]">
          {children}
        </div>
      </body>
    </html>
  );
}
