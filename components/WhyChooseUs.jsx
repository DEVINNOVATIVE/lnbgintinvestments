
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, CheckCircle2, Sparkles } from 'lucide-react';

const points = [
  'To be renowned for our expertise in asset management.',
  'To be most valued for our advice, innovation, execution & professionalism.',
  'A relentless focus on the needs of our clients.',
  'Teamwork must be in the heart of all we do.',
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative pb-12 sm:pb-16 lg:pb-20 pr-6 sm:pr-12"
          >
            <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
              <Image
                src="/assets/lnbg-business-strategy.jpg"
                alt="LNBG Business Strategy"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="absolute bottom-0 right-0 w-[70%] sm:w-[65%] h-[220px] sm:h-[270px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-8 border-white group z-20">
              <Image
                src="/assets/lnbg-business-strategies.jpg"
                alt="LNBG Business Strategies"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
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
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Why Choose Us
              </span>
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
              className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
            >
              We recognise that lifestyles change, so consistent two-way communication with the client is the cornerstone of our service. Through regular dialogue, we keep up-to-date with any changes in clients' lives &amp; subsequently modify their arrangements with us to suit these ever-changing needs.
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group flex flex-col justify-between p-6 bg-white rounded-3xl border border-slate-100/90 shadow-lg shadow-slate-200/50 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-red-600/20 group-hover:scale-110 transition-transform duration-300 mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-red-600 transition-colors">
                    Strategic Services
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    We provide access to strategic services such as planning and surveying, construction, installation, and integrated process control automation through our professional network.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="group flex flex-col justify-between p-6 bg-white rounded-3xl border border-slate-100/90 shadow-lg shadow-slate-200/50 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-red-600/20 group-hover:scale-110 transition-transform duration-300 mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-red-600 transition-colors">
                    Business Growth
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    LNBG INT INVESTMENTS has established a regional network backed by relationships with international financial institutions, utilizing local insights and global trends.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}