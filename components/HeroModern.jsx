'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, TrendingUp, Globe as Globe2, Star } from 'lucide-react';

const slides = [
  {
    image: '/assets/bn1-5-3.jpg',
    eyebrow: 'LNBG International Investment',
    title: 'Capital that moves',
    highlight: 'markets forward',
    desc: 'Tailored investment strategies, asset management and research built to accelerate your corporate vision.',
  },
  {
    image: '/assets/bn2-5-3.jpg',
    eyebrow: 'Improve Your Business',
    title: 'We help you',
    highlight: 'grow faster',
    desc: 'Strategic insights and global networks that turn ambition into measurable, long-term performance.',
  },
];

const ticker = [
  { icon: ShieldCheck, label: 'BVI Licensed IBC' },
  { icon: TrendingUp, label: '$1.2B+ Assets Managed' },
  { icon: Globe2, label: '25+ Countries Active' },
  { icon: Star, label: '98% Client Satisfaction' },
];

export default function HeroModern() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#070D1B]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={s.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image src={s.image} alt="Hero" fill priority quality={100} unoptimized className="object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-br from-[#070D1B]/95 via-[#070D1B]/80 to-[#070D1B]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(220,38,38,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid-dark opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={s.eyebrow}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-md rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-300 text-xs font-semibold tracking-widest uppercase">{s.eyebrow}</span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
              >
                {s.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                  {s.highlight}
                </span>
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={s.desc}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-lg max-w-xl leading-relaxed mb-8"
              >
                {s.desc}
              </motion.p>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/our-services"
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white px-7 py-4 rounded-xl text-sm font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.03] active:scale-95 transition-all"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/20 text-white px-7 py-4 rounded-xl text-sm font-bold hover:bg-white hover:text-slate-900 transition-all"
              >
                <Play className="w-4 h-4 text-red-400 group-hover:text-slate-900 transition-colors" />
                Our Story
              </Link>
            </motion.div>

            <div className="flex items-center gap-2 mt-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? 'w-10 bg-red-500' : 'w-4 bg-white/25 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-red-600/30 to-amber-400/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs text-red-300 font-bold uppercase tracking-widest mb-1">Why LNBG</div>
                    <div className="text-white text-xl font-bold">Trusted Investment Partner</div>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/30">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  {ticker.map((t, idx) => {
                    const Icon = t.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/40 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-red-500/15 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-colors">
                          <Icon className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-slate-200 font-semibold text-sm">{t.label}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <Link
                  href="/contact"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-white text-slate-900 py-3.5 rounded-xl text-sm font-bold hover:bg-red-600 hover:text-white transition-all"
                >
                  Request a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
