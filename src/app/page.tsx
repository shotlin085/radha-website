import React from 'react';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { AdaptiveSequence } from '@/components/motion/adaptive-sequence';
import { SEQUENCES } from '@/content/sequence-manifest';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only bg-radha-orange text-white p-4 absolute z-[100]">
        Skip to content
      </a>
      <SiteHeader />
      
      <main id="main-content" className="flex flex-col relative w-full pt-20">
        {/* 16.1 Hero — RADHA Reveal */}
        <section id="hero" className="w-full bg-radha-canvas min-h-screen relative">
          <div className="absolute top-0 left-0 w-full z-10 pointer-events-none mt-16 md:mt-32">
            <div className="max-w-[1440px] mx-auto px-5 lg:px-12 pointer-events-auto w-full md:w-[42%]">
              <h2 className="text-radha-orange font-bold uppercase tracking-wider text-sm mb-4">Retail intelligence, connected</h2>
              <h1 className="text-[var(--display-major)] font-bold leading-[1.05] tracking-tight mb-8 text-radha-ink">
                Know every product.<br />Run every store.
              </h1>
              <p className="text-[var(--body-large)] text-radha-ink-soft max-w-lg leading-relaxed mb-10">
                RADHA connects product intelligence, label analysis, expiry control, inventory, team tasks, GRN and operational health in one precise retail system.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#platform" className="px-6 py-3 rounded-full bg-radha-orange text-white hover:bg-radha-orange-deep transition-colors font-medium">
                  Explore the system
                </a>
                <Link href="/contact" className="px-6 py-3 rounded-full border border-radha-ink text-radha-ink hover:bg-radha-sunken transition-colors font-medium">
                  Request a demo
                </Link>
              </div>
              <p className="text-xs text-radha-ink-soft/70 mt-6 font-mono tracking-widest uppercase">
                Retail Assistant for Data, Health & Audits
              </p>
            </div>
          </div>
          <div className="w-full">
            <AdaptiveSequence manifest={SEQUENCES['01-radha-reveal']} className="md:w-[60%] md:ml-auto" pinLength="300vh" />
          </div>
        </section>

        {/* 16.2 Connected Platform Introduction */}
        <section id="platform" className="py-32 bg-radha-surface">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
            <div className="max-w-3xl mb-20">
              <h3 className="text-radha-teal font-bold uppercase tracking-wider text-sm mb-4 border-b border-radha-hairline inline-block pb-2">One connected platform</h3>
              <h2 className="text-[var(--heading-section)] font-bold leading-tight mb-6">Product truth and retail operations should not live in separate systems.</h2>
              <p className="text-[var(--body-large)] text-radha-ink-soft">
                RADHA brings the information customers need and the operational controls retail teams rely on into one connected product architecture. A scan can become structured product intelligence. Daily retail activity can become a clear operational-health view.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-radha-hairline">
              <div>
                <h4 className="font-bold text-[var(--heading-card)] mb-4">Customers</h4>
                <p className="text-radha-ink-soft mb-8">Understand products before making a decision.</p>
                <ul className="space-y-3 text-sm font-medium border-l-2 border-radha-orange-pale pl-4">
                  <li>Barcode scan</li><li>Ingredients</li><li>Nutrition</li><li>Allergens</li><li>Expiry</li><li>Alternatives</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[var(--heading-card)] mb-4">Retail teams</h4>
                <p className="text-radha-ink-soft mb-8">Keep daily work visible and actionable.</p>
                <ul className="space-y-3 text-sm font-medium border-l-2 border-radha-teal pl-4">
                  <li>Expiry</li><li>Tasks</li><li>Inventory</li><li>Stock receiving</li><li>Audits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[var(--heading-card)] mb-4">Business owners</h4>
                <p className="text-radha-ink-soft mb-8">See operational health without reading every raw record.</p>
                <ul className="space-y-3 text-sm font-medium border-l-2 border-radha-success pl-4">
                  <li>Aggregate indicators</li><li>Store health</li><li>Operational trends</li><li>Owner dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 16.3 Scan to Product Truth */}
        <section id="product-intelligence" className="w-full bg-radha-canvas relative">
          <div className="absolute top-0 right-0 w-full z-10 pointer-events-none mt-32">
            <div className="max-w-[1440px] mx-auto px-5 lg:px-12 flex justify-end pointer-events-auto">
              <div className="w-full md:w-[38%]">
                <h3 className="text-radha-orange font-bold uppercase tracking-wider text-sm mb-4">Product intelligence</h3>
                <h2 className="text-[var(--heading-section)] font-bold leading-tight mb-6">Scan a barcode. See the product clearly.</h2>
                <p className="text-[var(--body-large)] text-radha-ink-soft mb-12">
                  RADHA transforms a familiar package into an organised product view—identity, nutrition, ingredients, allergens and deterministic health information presented in one place.
                </p>
                <div className="space-y-6 border-t border-radha-hairline pt-8">
                  <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-radha-orange"></div><span className="font-medium">Product identity</span></div>
                  <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-radha-teal"></div><span className="font-medium">Nutrition & Ingredients</span></div>
                  <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-radha-warning"></div><span className="font-medium">Allergens</span></div>
                  <div className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-radha-success"></div><span className="font-medium">Health assessment</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <AdaptiveSequence manifest={SEQUENCES['02-scan-product-truth']} className="md:w-[58%]" pinLength="300vh" />
          </div>
        </section>

        {/* 16.4 & 16.5 Label Intelligence & Personalised Safety (Fallback Layout) */}
        <section className="py-32 bg-radha-surface">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-radha-orange-deep font-bold uppercase tracking-wider text-sm mb-4">Label intelligence</h3>
              <h2 className="text-[var(--heading-section)] font-bold leading-tight mb-6">Turn packaging into structured information.</h2>
              <p className="text-radha-ink-soft mb-8">
                When product data is incomplete, RADHA can capture a label, separate its important information and organise it into a consistent analysis flow.
              </p>
              <div className="p-6 bg-radha-sunken rounded-2xl border border-radha-hairline shadow-sm">
                <div className="text-sm font-mono text-radha-ink-soft mb-4 uppercase tracking-widest">Analysis Flow</div>
                <ul className="space-y-4 font-medium">
                  <li className="flex items-center gap-3"><span className="text-radha-orange">→</span> Detected identity</li>
                  <li className="flex items-center gap-3"><span className="text-radha-orange">→</span> Ingredients & Allergens</li>
                  <li className="flex items-center gap-3"><span className="text-radha-orange">→</span> Nutrition</li>
                  <li className="flex items-center gap-3"><span className="text-radha-orange">→</span> Missing information</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-radha-success font-bold uppercase tracking-wider text-sm mb-4">Context, not alarm</h3>
              <h2 className="text-[var(--heading-section)] font-bold leading-tight mb-6">Facts first. Personal relevance when it matters.</h2>
              <p className="text-radha-ink-soft mb-8">
                The same product can mean different things to different households. RADHA is designed to organise product facts and add relevant context without replacing professional medical advice or presenting fear-based warnings.
              </p>
              <div className="p-6 border border-radha-hairline rounded-2xl">
                <ul className="grid grid-cols-2 gap-6 text-sm font-medium">
                  <li>What stands out</li>
                  <li>Ingredient insights</li>
                  <li>Nutrition explained</li>
                  <li>Allergen profile</li>
                  <li className="col-span-2 pt-4 border-t border-radha-hairline text-radha-teal">Better alternative</li>
                </ul>
              </div>
              <p className="mt-6 text-xs text-radha-ink-soft/70">
                Information note: RADHA provides product information and decision support. It is not a substitute for professional medical diagnosis or treatment.
              </p>
            </div>
          </div>
        </section>

        {/* 16.6 Retail Operations Engine */}
        <section id="retail-operations" className="w-full bg-radha-sunken relative">
          <div className="absolute top-0 left-0 w-full z-10 pointer-events-none mt-32">
            <div className="max-w-[1440px] mx-auto px-5 lg:px-12 pointer-events-auto">
              <div className="w-full md:w-[35%]">
                <h3 className="text-radha-teal font-bold uppercase tracking-wider text-sm mb-4">Retail operations</h3>
                <h2 className="text-[var(--heading-section)] font-bold leading-tight mb-6">One operating system for the work behind the shelf.</h2>
                <p className="text-[var(--body-large)] text-radha-ink-soft mb-12">
                  Expiry checks, team tasks, inventory and stock receiving are connected to one operational workflow instead of remaining scattered across manual processes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-radha-hairline shadow-sm">Expiry</span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-radha-hairline shadow-sm">Tasks</span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-radha-hairline shadow-sm">Inventory</span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-radha-hairline shadow-sm">GRN</span>
                  <span className="px-4 py-2 bg-radha-teal text-white rounded-full text-sm font-medium shadow-sm">Operational Health</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <AdaptiveSequence manifest={SEQUENCES['03-retail-operations']} className="md:w-[65%] md:ml-auto" pinLength="300vh" />
          </div>
        </section>

        {/* 16.7 Business Pulse & 16.8 Private by Design */}
        <section id="operational-health" className="py-32 bg-radha-canvas border-t border-radha-hairline">
           <div className="max-w-[1440px] mx-auto px-5 lg:px-12 mb-32">
              <h3 className="text-radha-orange-deep font-bold uppercase tracking-wider text-sm mb-4">Business pulse</h3>
              <h2 className="text-[var(--heading-section)] max-w-2xl font-bold leading-tight mb-6">See store health, not scattered activity.</h2>
              <p className="text-[var(--body-large)] text-radha-ink-soft max-w-3xl mb-12">
                RADHA combines operational signals from expiry, tasks, inventory and GRN into a clearer store-level view, then presents aggregate business information for owners.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 <div className="p-6 bg-white rounded-2xl border border-radha-hairline shadow-sm text-center">
                    <span className="block text-radha-teal font-medium mb-2">Expiry control</span>
                 </div>
                 <div className="p-6 bg-white rounded-2xl border border-radha-hairline shadow-sm text-center">
                    <span className="block text-radha-teal font-medium mb-2">Task completion</span>
                 </div>
                 <div className="p-6 bg-white rounded-2xl border border-radha-hairline shadow-sm text-center">
                    <span className="block text-radha-teal font-medium mb-2">Inventory health</span>
                 </div>
                 <div className="p-6 bg-white rounded-2xl border border-radha-hairline shadow-sm text-center">
                    <span className="block text-radha-teal font-medium mb-2">GRN accuracy</span>
                 </div>
              </div>
           </div>

           {/* 04-private-owner-dashboard */}
           <div id="privacy" className="w-full relative">
              <div className="absolute top-0 right-0 w-full z-10 pointer-events-none mt-32">
                <div className="max-w-[1440px] mx-auto px-5 lg:px-12 flex justify-end pointer-events-auto">
                  <div className="w-full md:w-[40%] bg-radha-canvas/80 backdrop-blur-sm p-8 rounded-3xl border border-radha-hairline shadow-lg">
                    <h3 className="text-radha-ink font-bold uppercase tracking-wider text-sm mb-4">Private by design</h3>
                    <h2 className="text-[var(--heading-section)] font-bold leading-tight mb-6">The business sees the picture. Raw operational records stay protected.</h2>
                    <p className="text-[var(--body-large)] text-radha-ink-soft mb-12">
                      RADHA’s trust architecture is designed to separate raw operational activity from the aggregate indicators used for owner-level visibility.
                    </p>
                    <div className="space-y-8">
                       <div>
                          <h4 className="font-bold mb-2">Operational input</h4>
                          <p className="text-sm text-radha-ink-soft">Store activity enters the system as structured operational data.</p>
                       </div>
                       <div>
                          <h4 className="font-bold mb-2">Protected rollup</h4>
                          <p className="text-sm text-radha-ink-soft">Sensitive records remain protected while approved information is aggregated.</p>
                       </div>
                       <div>
                          <h4 className="font-bold mb-2">Owner visibility</h4>
                          <p className="text-sm text-radha-ink-soft">The owner dashboard receives useful business indicators rather than an unnecessary stream of raw personal records.</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <AdaptiveSequence manifest={SEQUENCES['04-private-owner-dashboard']} className="w-full" pinLength="300vh" />
              </div>
           </div>
        </section>

        {/* 16.9 Complete RADHA Ecosystem */}
        <section className="w-full bg-radha-surface relative">
           <div className="absolute top-0 left-0 w-full z-10 pointer-events-none mt-32">
              <div className="max-w-[1440px] mx-auto px-5 lg:px-12 pointer-events-auto text-center w-full">
                 <h3 className="text-radha-orange font-bold uppercase tracking-wider text-sm mb-4">The complete system</h3>
                 <h2 className="text-[var(--display-major)] font-bold leading-tight mb-6 max-w-4xl mx-auto">From the first scan to the operational-health view, RADHA connects the complete retail loop.</h2>
                 <p className="text-[var(--body-large)] text-radha-ink-soft max-w-2xl mx-auto">
                    Product discovery, label intelligence, expiry, tasks, inventory, GRN, operational health and owner visibility become parts of one coherent platform.
                 </p>
              </div>
           </div>
           <div className="w-full pt-64">
              <AdaptiveSequence manifest={SEQUENCES['05-complete-ecosystem']} className="w-full" pinLength="250vh" />
           </div>
        </section>

        {/* 16.12 FAQ & CTA */}
        <section className="py-32 bg-radha-sunken border-t border-radha-hairline">
           <div className="max-w-[800px] mx-auto px-5 lg:px-12 text-center mb-24">
              <h2 className="text-[var(--display-major)] font-bold mb-6">Build a clearer retail system with RADHA.</h2>
              <p className="text-[var(--body-large)] text-radha-ink-soft mb-12">
                 See how product intelligence, retail operations and owner visibility connect inside one platform.
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center">
                 <Link href="/contact" className="px-8 py-4 rounded-full bg-radha-ink text-radha-surface hover:bg-radha-ink-soft transition-colors font-medium text-lg shadow-md">
                    Request a Demo
                 </Link>
              </div>
           </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
