'use client';

import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Building2, ChartBar as BarChart3, Building, Globe as Globe2, Landmark, Coins, ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    slug: 'business-strategy',
    icon: Briefcase,
    title: 'Business Strategy',
    desc: 'Partnering with leading-edge digital companies allows us to expand our portfolio and pass on strategic solutions to our clients.',
    tag: 'Strategy',
  },
  {
    slug: 'asset-management',
    icon: TrendingUp,
    title: 'Asset Management',
    desc: 'Asset management services built around portfolio management, research, dealing, and innovative product development.',
    tag: 'Management',
  },
  {
    slug: 'corporate-investments',
    icon: Building2,
    title: 'Corporate Investments',
    desc: 'Highly selective investments in regions and entities where there is exceptional growth potential.',
    tag: 'Investment',
  },
  {
    slug: 'markets-research',
    icon: BarChart3,
    title: 'Markets Research',
    desc: 'Designed and implemented virtually every type of business research for hundreds of global entities over 25 years.',
    tag: 'Research',
  },
  {
    slug: 'real-estate-investment',
    icon: Building,
    title: 'Real Estate Investment',
    desc: 'A REIT Management Company identifies premier projects and raises capital through structured public offerings.',
    tag: 'Real Estate',
  },
  {
    slug: 'global-services',
    icon: Globe2,
    title: 'Global Services',
    desc: 'Partnering with top-tier international digital and financial platforms to expand global capabilities for our clients.',
    tag: 'Global',
  },
  {
    slug: 'bond-market',
    icon: Landmark,
    title: 'Bond Market',
    desc: 'Tracking evolving marketplace trends and pursuing measured capital growth across fixed-income instruments.',
    tag: 'Fixed Income',
  },
  {
    slug: 'commodity-investments',
    icon: Coins,
    title: 'Commodity Investments',
    desc: 'Commodity fund investments in primary agricultural products, raw materials, and precious metals like gold.',
    tag: 'Commodities',
  },
];

export default function Services8() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-red-50/80 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f940_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f940_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Modern Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-8"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-5 shadow-sm">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">What We Offer</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-500">
                Services
              </span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mt-5 max-w-2xl">
              Comprehensive financial and investment solutions designed to accelerate your capital growth across every dimension.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-4 lg:text-right"
          >
            <div className="inline-flex flex-col gap-1 bg-slate-50 border border-slate-200/80 rounded-2xl px-6 py-4">
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 leading-none">08</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Specialized Services</span>
            </div>
          </motion.div>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                className="group relative bg-white p-7 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-400 border border-slate-200/80 hover:border-red-200 hover:-translate-y-2 overflow-hidden flex flex-col"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-red-50/0 to-red-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top row: icon + tag */}
                <div className="relative z-10 flex items-start justify-between mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-rose-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 group-hover:bg-red-50 group-hover:text-red-600 rounded-full px-2.5 py-1 transition-colors duration-300">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg font-black text-slate-900 mb-2.5 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="relative z-10 inline-flex items-center gap-1.5 text-red-600 text-xs font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
