import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/navbar";
import { LenisProvider } from "@/providers/lenis-provider";
import { Footer } from "@/components/footer/footer";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soller",
  description: "Soller Landing Page",
  openGraph: {
    locale: "en_US",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/icon-light.svg",
        href: "/assets/icon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/icon-dark.svg",
        href: "/assets/icon-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
