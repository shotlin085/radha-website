import type { Metadata } from "next";
import "./globals.css";
import { plusJakartaSans, jetbrainsMono } from "@/lib/fonts";
import { buildMetadata } from "@/lib/seo";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SkipLink } from "@/components/layout/SkipLink";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
// Chat widget temporarily disabled — see ChatLauncher render below.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChatLauncher } from "@/components/chat/ChatLauncher";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <MotionProvider>
          <SkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
          {/* <ChatLauncher /> */}
        </MotionProvider>
      </body>
    </html>
  );
}
