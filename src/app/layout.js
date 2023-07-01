"use client";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "./components/Footer";
import Head from "./Head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Belal Bahaa",
  description: "Belal Bahaa portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <ThemeProvider enableSystem={false} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
