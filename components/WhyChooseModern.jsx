'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle2, ArrowRight, Sparkles, Target } from 'lucide-react';

const points = [
  'To be renowned for our expertise in asset management.',
  'To be most valued for our advice, innovation, execution & professionalism.',
  'A relentless focus on the needs of our clients.',
  'Teamwork must be in the heart of all we do.',
];

export default function WhyChooseModern() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative pb-16 sm:pb-20 pr-6 sm:pr-12"
          >
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/80 group">
              <Image
                src="/assets/lnbg-business-strategy.jpg"
                alt="LNBG Business Strategy"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 right-0 w-[68%] sm:w-[62%] h-[240px] sm:h-[290px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-8 border-white group z-20">
              <Image
                src="/assets/lnbg-business-strategies.jpg"
                alt="LNBG Business Strategies"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-6 -left-2 sm:-left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 z-30 flex items-center gap-3.5"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-red-600/20">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-red-600">25+ Years</div>
                <div className="text-sm font-bold text-slate-900">Market Experience</div>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">Why Choose Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight"
            >
              Many people trust us for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-500">
                fast services
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed"
            >
              We recognise that lifestyles change, so consistent two-way communication with the client is the cornerstone of our service. Through regular dialogue, we keep up-to-date with any changes in clients&apos; lives and modify their arrangements to suit these ever-changing needs.
            </motion.p>

            <div className="space-y-3">
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-700 text-sm font-semibold leading-relaxed">{p}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-7 py-3.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-red-600/30 hover:scale-105 transition-all duration-300"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
