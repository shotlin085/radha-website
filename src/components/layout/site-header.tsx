'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-radha-sunken shadow-sm border-b border-radha-hairline py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-12 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl tracking-tight text-radha-ink" aria-label="RADHA Home">
          RADHA
        </Link>
        
        <nav className="hidden lg:flex gap-8 items-center font-medium text-sm">
          <Link href="#product" className="hover:text-radha-orange transition-colors">Product</Link>
          <Link href="#product-intelligence" className="hover:text-radha-orange transition-colors">Product Intelligence</Link>
          <Link href="#retail-operations" className="hover:text-radha-orange transition-colors">Retail Operations</Link>
          <Link href="#operational-health" className="hover:text-radha-orange transition-colors">Operational Health</Link>
          <Link href="#privacy" className="hover:text-radha-orange transition-colors">Privacy</Link>
          <Link href="#about" className="hover:text-radha-orange transition-colors">About</Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="px-5 py-2.5 rounded-full bg-radha-ink text-radha-surface hover:bg-radha-ink-soft transition-colors text-sm font-medium">
            Request a Demo
          </Link>
        </div>

        <button 
          className="lg:hidden p-2 text-radha-ink" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-radha-canvas border-b border-radha-hairline shadow-lg flex flex-col p-5 gap-4">
          <Link href="#product" onClick={() => setMenuOpen(false)}>Product</Link>
          <Link href="#product-intelligence" onClick={() => setMenuOpen(false)}>Product Intelligence</Link>
          <Link href="#retail-operations" onClick={() => setMenuOpen(false)}>Retail Operations</Link>
          <Link href="#operational-health" onClick={() => setMenuOpen(false)}>Operational Health</Link>
          <Link href="#privacy" onClick={() => setMenuOpen(false)}>Privacy</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-2 text-radha-orange font-medium">
            Request a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
