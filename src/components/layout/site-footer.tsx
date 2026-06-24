import React from 'react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-radha-ink text-radha-surface py-20 mt-32 border-t border-radha-ink-soft">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="font-bold text-2xl tracking-tight text-white inline-block mb-4" aria-label="RADHA Home">
            RADHA
          </Link>
          <p className="text-radha-hairline opacity-80 max-w-sm text-sm leading-relaxed">
            Retail Assistant for Data, Health & Audits
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-6 uppercase text-xs tracking-wider opacity-60">Product</h4>
          <ul className="space-y-4 text-sm text-radha-hairline opacity-80">
            <li><Link href="#product-intelligence" className="hover:text-radha-orange transition-colors">Product Intelligence</Link></li>
            <li><Link href="#retail-operations" className="hover:text-radha-orange transition-colors">Retail Operations</Link></li>
            <li><Link href="#operational-health" className="hover:text-radha-orange transition-colors">Operational Health</Link></li>
            <li><Link href="#privacy" className="hover:text-radha-orange transition-colors">Privacy</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-6 uppercase text-xs tracking-wider opacity-60">Company</h4>
          <ul className="space-y-4 text-sm text-radha-hairline opacity-80">
            <li><Link href="#about" className="hover:text-radha-orange transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-radha-orange transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
