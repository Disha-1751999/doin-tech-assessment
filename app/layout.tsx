import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../public/font/Satoshi-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/font/Satoshi-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/font/Satoshi-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/font/Satoshi-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bytespace",
  description: "Get Access to Hundreds Courses Available",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${satoshi.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col font-satoshi">{children}</body>
    </html>
  );
}
