import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import Sidebar from "@/components/sidebar"
import CellularAutomata from "@/components/cellularautomata";
// import { GeistMono } from 'geist/font/mono';
// import { Pixelify_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"]})

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          >
            <Sidebar />
            {/* <CellularAutomata /> */}
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
