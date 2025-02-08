import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/utils";
import { Montserrat, Calistoga, Russo_One } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
const orbitron = Russo_One({
  subsets: ["latin"],
  variable: "--font-orbi",
  weight: "400",
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "A peaceful and serene blog experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme: string = "light";

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background  relative font-sans  antialiased",
          montserrat.variable,
          calistoga.variable,
          orbitron.variable,
          { light: theme === "light" },
          { dark: theme === "dark" }
        )}
      >
        <div className="min-h-dvh flex-col relative flex bg-background">
          {/* <Header /> */}
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
