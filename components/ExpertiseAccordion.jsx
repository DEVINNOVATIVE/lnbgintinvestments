'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Market Research',
    description:
      'LNBG Analytics produces high-quality, in-depth, and tailored investment and financial research services to help clients successfully navigate financial markets, enhance portfolios, and make strategic decisions.',
    projects: '30K+',
    successRate: '90%',
  },
  {
    id: 2,
    title: 'Strategic Consulting',
    description:
      'We offer creative solutions that have helped thousands of companies across all geographies develop and execute winning strategies with unrivaled tools, technology, and partner ecosystems.',
    projects: '20K+',
    successRate: '88%',
  },
  {
    id: 3,
    title: 'Sale Service',
    description:
      'Our team manages an extensive network connecting known buyers throughout the region with long-term owners to maximize portfolio market exposure.',
    projects: '18K+',
    successRate: '98%',
  },
];

export default function ExpertiseAccordion() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="bg-[#070D1B] text-white py-24 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-md border border-red-500/20">
              Core Capabilities
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Driven by Skill. Focused on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                Top Performance.
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We work closely with high-net-worth individuals, private clients, family offices, and businesses to provide bespoke investment advisory services backed by rigorous analysis.
            </p>

            <div className="space-y-5 pt-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-300">Strategy &amp; Analysis</span>
                  <span className="text-red-400">88%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-rose-500 h-full rounded-full w-[88%] shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-300">Economic Growth</span>
                  <span className="text-red-400">95%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-rose-500 h-full rounded-full w-[95%] shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/25 active:scale-95 transition-all"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-7 space-y-4"
          >
            {services.map((service, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  onClick={() => setExpandedIndex(idx)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-slate-900 border-red-500/50 p-6 shadow-xl shadow-red-950/20'
                      : 'bg-slate-900/40 border-slate-800/80 p-5 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-mono font-bold ${isExpanded ? 'text-red-500' : 'text-slate-500'}`}>
                        0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <motion.span animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.3 }} className={`text-xl ${isExpanded ? 'text-red-500' : 'text-slate-500'}`}>
                      <Plus className="w-5 h-5" />
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-slate-800/60 space-y-5">
                          <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
                          <div className="flex items-center gap-6">
                            <div>
                              <div className="text-xs text-slate-400">Completed Projects</div>
                              <div className="text-2xl font-extrabold text-white font-mono">{service.projects}</div>
                            </div>
                            <div className="h-8 w-px bg-slate-800" />
                            <div>
                              <div className="text-xs text-slate-400">Success Rate</div>
                              <div className="text-2xl font-extrabold text-red-400 font-mono">{service.successRate}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
