import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import Sidebar from "@/components/sidebar"
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


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
      <body className={GeistMono.className}>
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
