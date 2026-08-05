'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/our-services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#070D1B]/90 backdrop-blur-xl border-b border-white/10 py-0 shadow-2xl shadow-black/30'
            : 'bg-transparent py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-28 h-11 lg:w-32 lg:h-12 rounded-xl overflow-hidden shadow-lg bg-white group-hover:scale-105 group-hover:shadow-red-500/20 transition-all duration-300">
                <Image
                  src="/assets/logo.png"
                  alt="LNBG Logo"
                  fill
                  quality={100}
                  unoptimized
                  className="object-contain p-1"
                  priority
                />
              </div>
            </Link>

            {/* Centered desktop nav */}
            <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${
                      active
                        ? 'text-white bg-white/10 '
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-red-500"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+447887447527"
                className={`hidden lg:flex items-center gap-2 text-sm font-semibold transition-colors ${
                  scrolled ? 'text-slate-300 hover:text-white' : 'text-white/90 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4 text-red-400" />
                +44 7887 447527
              </a>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Get Quote
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl  text-white hover:bg-white/20 transition-colors"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[78%] max-w-sm bg-[#070D1B] border-l border-white/10 z-[70] md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="relative w-28 h-11 rounded-xl overflow-hidden bg-white shadow-md">
                  <Image src="/assets/logo.png" alt="LNBG Logo" fill quality={100} unoptimized className="object-contain p-1" />
                </div>
                <button
                  className="w-12 h-12 flex items-center justify-center rounded-xl  text-white hover:bg-white/20 transition-colors"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((item, i) => {
                    const active = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.06 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base font-bold transition-all ${
                            active
                              ? 'bg-gradient-to-r from-red-600/20 to-transparent text-white border border-red-500/30'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white border border-transparent'
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                          <ArrowUpRight className={`w-4 h-4 ${active ? 'text-red-400' : 'text-slate-500'}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                  <a href="tel:+447887447527" className="flex items-center gap-3 text-slate-300 text-sm font-semibold">
                    <span className="w-9 h-9 rounded-xl bg-red-500/15 border border-red-500/20 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-red-400" />
                    </span>
                    +44 7887 447527
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-3.5 rounded-2xl text-sm font-bold shadow-lg shadow-red-600/30"
                    onClick={() => setMenuOpen(false)}
                  >
                    Get Quote
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
