

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail, Phone, Clock, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top contact bar */}
      <div
        className={`hidden md:block transition-all duration-500 overflow-hidden bg-slate-900 text-slate-300 ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-red-500" />
              <span>lnbg@lnbgllc.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>+44 7887 447527</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-red-500" />
              <span>Sat - Wed: 8:00 - 4:00</span>
            </div>
          </div>



          {/* <div className="flex items-center gap-2 text-slate-400">
            <span className="text-red-500">Follow us:</span>
            <span className="hover:text-white cursor-pointer transition">in</span>
            <span className="hover:text-white cursor-pointer transition">f</span>
            <span className="hover:text-white cursor-pointer transition">x</span>
          </div> */}
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg border-b border-white/20'
            : 'bg-white/95 backdrop-blur-sm border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image 
                src="/assets/logo.png" 
                alt="LNBIG Logo" 
                width={160} // Double the display size for Retina clarity
                height={160} // Double the display size for Retina clarity
                quality={100} // Prevents Next.js from compressing the logo
                className="w-28 h-28 object-contain group-hover:scale-105 transition-transform duration-300"
                priority // Ensures the logo loads immediately above the fold
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                      active
                        ? 'text-red-600'
                        : 'text-slate-600 hover:text-red-600'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-red-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Get Quote
                <ChevronRight className="w-4 h-4" />
              </Link>
              <button
                className="md:hidden text-slate-700 hover:text-red-600 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass border-t border-white/20 animate-fade-in">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? 'bg-red-50 text-red-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center"
                onClick={() => setMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}