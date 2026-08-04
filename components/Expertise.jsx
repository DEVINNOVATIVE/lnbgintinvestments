'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function ProgressBar({ label, percent }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-800 font-semibold text-sm">{label}</span>
        <span className="text-red-600 font-bold text-sm">{percent}%</span>
      </div>
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-600 to-rose-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: inView ? `${percent}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Expertise() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-widest">Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
              As an established{' '}
              <span className="text-gradient">Wealth Manager</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              With a resolute focus on preserving and growing our clients’ wealth, what matters to our clients matters equally to us. We work closely with high net worth individuals, private clients, family offices and businesses to provide bespoke, discretionary and advisory investment services.
            </p>

            <div className="space-y-1">
              <ProgressBar label="Consulting" percent={80} />
              <ProgressBar label="Management" percent={85} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-slate-50 rounded-3xl transform rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/assets/experties.png"
                  alt="Investment Expert"
                  className="w-full object-cover"
                  style={{ maxHeight: '480px', objectPosition: 'top' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card-hover p-4 border border-slate-100 animate-float">
                <div className="text-2xl font-bold text-red-600">2K+</div>
                <div className="text-xs text-slate-500 font-medium">Completed Projects</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card-hover p-4 border border-slate-100 animate-float delay-300">
                <div className="text-2xl font-bold text-red-600">88%</div>
                <div className="text-xs text-slate-500 font-medium">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
