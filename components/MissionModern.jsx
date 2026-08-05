'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Eye, Sparkles, ShieldCheck, TrendingUp, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';

const checkpoints = [
  'Solution for small & large businesses',
  'Creation of automated process control systems through our professional network',
  'Algorithmic trading solution to support automated crypto trading for buy-side and sell-side clients.',
];

const pillars = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'Uncompromising compliance standards in every engagement.' },
  { icon: TrendingUp, title: 'Growth', desc: 'Accelerating stakeholder value through proven strategies.' },
  { icon: Globe2, title: 'Global Reach', desc: 'Active presence across 25+ countries and markets.' },
];

export default function MissionModern() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-50 rounded-full blur-[100px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-5"
          >
            <Sparkles className="w-4 h-4 text-red-600" />
            <span className="text-red-600 text-xs font-bold tracking-[0.2em] uppercase">Our Mission &amp; Vision</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]"
          >
            Capital that moves{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-500">
              markets forward
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-slate-500 text-base sm:text-lg leading-relaxed mt-4"
          >
            We never compromise on our high level of standards, environmental awareness, and integrity when dealing with employees, customers, and the community.
          </motion.p>
        </div>

        {/* ── Mission + Vision cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-100/40 rounded-full blur-3xl group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/25 mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To provide access to a wide range of strategic services — planning, surveying, construction, installation and commissioning works — empowering our clients to achieve their corporate vision with confidence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-100/40 rounded-full blur-3xl group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-600/25 mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To increase stakeholders&apos; value through effective technology, sales, and marketing practices — growing international and domestic market share while conducting ourselves with integrity, speed, and flexibility.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Image + checkpoints + founder ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
              <Image
                src="/assets/lnbg-meeting-2.jpg"
                alt="LNBG International Meeting"
                fill
                quality={100}
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -right-4 bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-2xl px-6 py-4 shadow-xl shadow-red-600/30 hidden sm:block z-10">
              <div className="text-3xl font-black leading-none">100%</div>
              <div className="text-xs font-semibold text-red-100 mt-1">Compliance</div>
            </div>
          </motion.div>

          {/* Checkpoints + founder column */}
          <div className="lg:col-span-7 space-y-4">
            {checkpoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-red-100 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-300">
                  <CheckCircle2 className="w-4 h-4 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-slate-700 text-sm font-medium leading-relaxed">{item}</span>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-red-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* ── Founder Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="pt-4 mt-2 border-t border-slate-200 flex items-center gap-5"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-200 shadow-lg flex-shrink-0">
                <Image
                  src="/assets/founder.jpeg"
                  alt="Lord Neil B Gibson"
                  fill
                  quality={100}
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900 leading-snug">Lord Neil B Gibson</h4>
                <p className="text-sm font-semibold text-slate-500 mt-0.5">CEO &amp; Company Founder</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Pillars ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-red-200 hover:bg-white hover:shadow-lg hover:shadow-red-600/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900 mb-1">{p.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
