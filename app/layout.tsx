import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/archivo";
import "@fontsource-variable/dm-sans";
import { GoogleTagManager } from "./components/GoogleTagManager";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fierce Content | Strongly worded copy for your business, brand or agency",
  description:
    "Chelsea Groome is a freelance B2B copywriter specialising in thought leadership for technology and professional services companies.",
  metadataBase: new URL("https://fierce-content.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/fierce-content-icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1419",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  );
}
