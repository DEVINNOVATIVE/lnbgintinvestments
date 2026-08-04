'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Award, Layers } from 'lucide-react';

const stats = [
  { icon: Users, value: 38, suffix: '', label: 'Team Members' },
  { icon: Briefcase, value: 2348, suffix: '', label: 'Projects Delivered' },
  { icon: Award, value: 43, suffix: '', label: 'Awards Won' },
  { icon: Layers, value: 50, suffix: '', label: 'Services Offered' },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{display.toLocaleString()}</span>;
}

export default function StatsBand() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#070D1B]">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-rose-500/10 rounded-3xl blur-xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center group-hover:border-red-500/40 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                    <Counter value={stat.value} />
                    <span className="text-red-500">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
