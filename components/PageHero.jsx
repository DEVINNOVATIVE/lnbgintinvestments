'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Chrome as Home, ChevronRight, ArrowRight } from 'lucide-react';

export default function PageHero({ title = 'Page', subtitle, check = false, bgImage = '/assets/hero.jpg' }) {
  const shortTitle = title.split('-')[0].trim();

  return (
    <div className="w-full">
      <section className="relative h-[55vh] min-h-[380px] sm:h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#070D1B]">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image src={bgImage} alt={shortTitle} fill priority quality={100} unoptimized className="object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#070D1B]/85 via-[#070D1B]/65 to-[#070D1B]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-md rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-300 text-xs font-bold tracking-[0.2em] uppercase">{subtitle}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          >
            {shortTitle}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mt-6"
          >
            <Link href="/" className="text-slate-400 hover:text-white text-sm font-semibold transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            {check && (
              <>
                <ChevronRight className="w-4 h-4 text-slate-600" />
                <Link href="/our-services" className="text-slate-400 hover:text-white text-sm font-semibold transition-colors">
                  Services
                </Link>
              </>
            )}
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-white text-sm font-bold">{shortTitle}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 origin-left"
        />
      </section>
    </div>
  );
}
