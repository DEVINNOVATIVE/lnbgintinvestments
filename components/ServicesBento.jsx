'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/lib/serviceData';
import { getServiceIcon } from '@/lib/serviceIcons';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesBento() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Investment solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">every horizon</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-500 max-w-md text-base leading-relaxed"
          >
            Eight specialised services that span the full investment lifecycle — from research and strategy to execution and growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = getServiceIcon(service.iconName);
            const isFeatured = i === 0 || i === 5;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className={isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative h-full block rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-1.5 ${
                    isFeatured
                      ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-800 text-white shadow-xl'
                      : 'bg-white border-slate-100 hover:border-red-200 hover:shadow-2xl hover:shadow-red-600/10 text-slate-900'
                  }`}
                >
                  <div className="p-7 flex flex-col h-full min-h-[220px]">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                          isFeatured
                            ? 'bg-white/10 border border-white/15'
                            : 'bg-gradient-to-br from-red-600 to-rose-700 shadow-lg shadow-red-600/20'
                        }`}
                      >
                        <Icon className={`w-7 h-7 ${isFeatured ? 'text-red-400' : 'text-white'}`} />
                      </div>
                      <ArrowUpRight
                        className={`w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                          isFeatured ? 'text-white/40' : 'text-slate-300'
                        }`}
                      />
                    </div>

                    <h3 className={`text-lg font-bold mb-2 transition-colors ${isFeatured ? 'text-white' : 'group-hover:text-red-600'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-5 line-clamp-2 ${isFeatured ? 'text-slate-300' : 'text-slate-500'}`}>
                      {service.shortDesc}
                    </p>

                    <div className="mt-auto flex items-center gap-2">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider transition-all ${
                          isFeatured ? 'text-red-400' : 'text-red-600'
                        }`}
                      >
                        Explore
                      </span>
                      <span className={`h-px flex-1 transition-all duration-300 ${isFeatured ? 'bg-white/15' : 'bg-slate-200 group-hover:bg-red-200'}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
