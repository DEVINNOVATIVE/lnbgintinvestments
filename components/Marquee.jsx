'use client';

import { motion } from 'framer-motion';

const items = [
  'Asset Management',
  'Corporate Investments',
  'Markets Research',
  'Real Estate',
  'Bond Market',
  'Commodity Funds',
  'Global Services',
  'Business Strategy',
];

export default function Marquee() {
  return (
    <div className="bg-[#070D1B] border-y border-white/5 py-5 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070D1B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070D1B] to-transparent z-10 pointer-events-none" />
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">{item}</span>
            <span className="text-red-600 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
