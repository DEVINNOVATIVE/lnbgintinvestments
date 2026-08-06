'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CtaBand() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#070D1B]">
      <div className="absolute inset-0 bg-grid-dark opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-md rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-300 text-xs font-bold uppercase tracking-widest">Ready When You Are</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6"
        >
          Let&apos;s build your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
            investment future
          </span>{' '}
          together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Our team is ready to discuss your investment goals and explore how LNBG INT INVESTMENTS can help your business grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all"
          >
            Request a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+447887447527"
            className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-bold hover:bg-white hover:text-slate-900 transition-all"
          >
            <Phone className="w-4 h-4 text-red-400" />
            +1 818 575 0663
          </a>
        </motion.div>
      </div>
    </section>
  );
}
