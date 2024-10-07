import type { Metadata } from "next";
import { Providers } from "@/components/shared/Providers";
import { Navbar } from "@/components/shared/Navbar";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "PSCU NFTs Marketplace",
  description: "Pulsar Star Corporations United NFTs Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <link rel="icon" href="/favicon.ico" />
      <body style={{ paddingBottom: "100px" }}>
        <Analytics />
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
