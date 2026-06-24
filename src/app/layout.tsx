import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RADHA — Product Intelligence and Retail Operations",
  description: "RADHA connects product scanning, label intelligence, expiry, inventory, tasks, GRN and operational health in one retail platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-[100svh] flex flex-col bg-radha-canvas text-radha-ink antialiased selection:bg-radha-orange-pale selection:text-radha-orange-deep">
        {children}
      </body>
    </html>
  );
}
