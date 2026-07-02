import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { buildMetadata } from "@/lib/seo";
import { SEQUENCES } from "@/lib/sequences";

export const metadata: Metadata = buildMetadata({
  title: "Platform",
  description:
    "A deep dive into every layer of the RADHA platform — from scan to shelf to owner insight.",
});

const CAPABILITIES = [
  {
    title: "Scan to Product Truth",
    description:
      "One scan resolves label, sourcing, and safety data into a single verified record.",
    anchor: "/showcase#scan-product-truth",
  },
  {
    title: "Label Intelligence",
    description: "Static labels become structured, queryable data at scan time.",
    anchor: "/#label-intelligence",
  },
  {
    title: "Personalised Product Safety",
    description: "Owner safety profiles flag risk before purchase, not after.",
    anchor: "/#personalised-safety",
  },
  {
    title: "Retail Operations Engine",
    description: "Inventory, compliance, and recall status stay in sync across every location.",
    anchor: "/showcase#retail-operations",
  },
  {
    title: "Business Pulse",
    description: "Real-time visibility into how the network is performing, at a glance.",
    anchor: "/#business-pulse",
  },
  {
    title: "Private by Design",
    description: "Owner data is encrypted at rest and visible only to the person it belongs to.",
    anchor: "/showcase#private-by-design",
  },
  {
    title: "Complete RADHA Ecosystem",
    description: "Brands, retailers, and owners finally read from the same source of truth.",
    anchor: "/showcase#complete-ecosystem",
  },
];

export default function PlatformPage() {
  return (
    <main id="main-content">
      <section className="relative flex h-[70vh] min-h-[520px] items-end overflow-hidden bg-surface-inverted">
        <Image
          src={SEQUENCES["02-scan-product-truth"].posterFinal}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent"
        />
        <Container className="relative z-10 pb-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
            The Platform
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white tablet:text-6xl desktop:text-7xl">
            Every layer of RADHA, in depth
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 tablet:text-lg">
            The full cinematic walkthrough lives on the homepage. This page is
            the reference: what each layer does, for whom, and why it holds
            together as one system.
          </p>
        </Container>
      </section>

      <section aria-labelledby="capabilities-heading" className="bg-surface py-24 tablet:py-32">
        <Container>
          <ScrollReveal>
            <SectionHeading
              id="capabilities-heading"
              eyebrow="Capabilities"
              title="Seven layers, one connected system"
            />
          </ScrollReveal>

          <StaggerGroup className="mt-14 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <StaggerItem key={capability.title}>
                <Link
                  href={capability.anchor}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-ink/8 bg-surface-muted p-8 transition-colors hover:bg-brand-50"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-ink">{capability.title}</h2>
                    <p className="mt-2 text-sm text-ink-muted">{capability.description}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                    See it in motion
                    <Icon
                      icon={ArrowRight}
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
    </main>
  );
}
