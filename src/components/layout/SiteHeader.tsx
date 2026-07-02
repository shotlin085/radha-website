"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RadhaWordmark } from "@/components/ui/RadhaWordmark";
import { MobileNav } from "@/components/layout/MobileNav";

const NAV_LINKS = [
  { href: "/platform", label: "Platform" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const prevScrollY = useRef(0);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextScrolled = latest > 80;
    const nextHidden = latest > prevScrollY.current && latest > 200 && !mobileNavOpen;
    setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    setHidden((current) => (current === nextHidden ? current : nextHidden));
    prevScrollY.current = latest;
  });

  return (
    <>
      <motion.header
        animate={{
          y: hidden ? -96 : 0,
          backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)",
          boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.08)" : "none",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-x-0 top-0 z-40 backdrop-blur-sm"
      >
        {/* mix-blend-difference + white makes the wordmark/nav/hamburger
            auto-contrast against whatever sits behind the transparent
            header — dark hero frames at the top of the page, cream
            elsewhere, and the solid white bar once scrolled. The orange
            CTA is deliberately excluded (it carries its own background). */}
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label="RADHA home"
            className="inline-flex items-center py-2.5 mix-blend-difference"
          >
            <RadhaWordmark className="text-white" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 mix-blend-difference desktop:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="text-sm font-medium text-white/75 hover:text-white aria-[current=page]:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden desktop:block">
            <Button href="/contact">Request Demo</Button>
          </div>

          <button
            ref={menuTriggerRef}
            type="button"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            className="rounded-full p-3 text-white mix-blend-difference desktop:hidden"
          >
            <Icon icon={Menu} size={24} />
          </button>
        </Container>
      </motion.header>

      <div id="mobile-nav">
        <MobileNav
          open={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
          links={NAV_LINKS}
          triggerRef={menuTriggerRef}
        />
      </div>
    </>
  );
}
