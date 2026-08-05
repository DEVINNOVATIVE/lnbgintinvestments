'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye, Sparkles, ShieldCheck, TrendingUp, Globe2, CheckCircle2 } from 'lucide-react';

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
    <section className="py-24 bg-[#070D1B] text-white relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-xs font-bold tracking-[0.2em] uppercase">Our Mission &amp; Vision</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]"
          >
            Capital that moves{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">markets forward</span>
          </motion.h2>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Mission card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 hover:border-red-500/30 transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/30 mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                To provide access to a wide range of strategic services — planning, surveying, construction, installation and commissioning works — empowering our clients to achieve their corporate vision with confidence.
              </p>
            </div>
          </motion.div>

          {/* Vision card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 hover:border-red-500/30 transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/5 rounded-full blur-3xl group-hover:bg-rose-500/10 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-600 to-amber-600 flex items-center justify-center shadow-lg shadow-rose-600/30 mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                To increase stakeholders&apos; value through effective technology, sales, and marketing practices — growing international and domestic market share while conducting ourselves with integrity, speed, and flexibility.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image + checkpoints row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/assets/crypto-trade.jpg"
                alt="LNBG Trading Technology"
                fill
                quality={100}
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-2xl px-6 py-4 shadow-xl shadow-red-600/30 hidden sm:block">
              <div className="text-3xl font-black leading-none">100%</div>
              <div className="text-xs font-semibold text-red-100 mt-1">Compliance</div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-4">
            {checkpoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-600 transition-colors duration-300">
                  <CheckCircle2 className="w-4 h-4 text-red-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-slate-300 text-sm font-medium leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <Icon className="w-7 h-7 text-red-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">{p.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
