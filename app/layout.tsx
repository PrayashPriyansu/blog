import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/utils";
import { Inter } from "next/font/google";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Blog",
  description: "A peaceful and serene blog experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen text-foreground  bg-background light font-sans antialiased",
          inter.className
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
