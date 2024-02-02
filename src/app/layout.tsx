import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar"
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: "jnj",
  description: "jared & jess blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${GeistMono.className} bg-white text-black font-extralight`}>
            <Sidebar />
            {/* <CellularAutomata /> */}
            {children}
      </body>
    </html>
  );
}
