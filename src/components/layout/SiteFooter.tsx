import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RadhaWordmark } from "@/components/ui/RadhaWordmark";

const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { href: "/platform", label: "Platform" },
      { href: "/showcase", label: "Showcase" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 bg-surface-muted">
      <Container className="grid gap-10 py-16 tablet:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <RadhaWordmark className="text-ink" />
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            Connected product truth — from scan to shelf to owner insight.
          </p>
        </div>
        {FOOTER_LINKS.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h2 className="mb-4 text-sm font-semibold text-ink">{group.heading}</h2>
            <ul className="flex flex-col">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 text-sm text-ink-muted hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>
      <Container className="border-t border-ink/8 py-6">
        <p className="text-xs text-ink-muted">
          © {new Date().getFullYear()} RADHA. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
