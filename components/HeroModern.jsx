// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, ChevronDown, ShieldCheck, TrendingUp, Globe as Globe2, Star } from 'lucide-react';

// const slides = [
//   {
//     image: '/assets/bn1-5-3.jpg',
//     eyebrow: 'LNBG International Investment',
//     title: 'Capital that moves',
//     highlight: 'markets forward',
//     desc: 'Tailored investment strategies, asset management and research built to accelerate your corporate vision.',
//   },
//   {
//     image: '/assets/bn2-5-3.jpg',
//     eyebrow: 'Improve Your Business',
//     title: 'We help you',
//     highlight: 'grow faster',
//     desc: 'Strategic insights and global networks that turn ambition into measurable, long-term performance.',
//   },
// ];

// const cards = [
//   { icon: ShieldCheck, value: 'BVI', label: 'Licensed IBC' },
//   { icon: TrendingUp, value: '$1.2B+', label: 'Assets Managed' },
//   { icon: Globe2, value: '25+', label: 'Countries Active' },
//   { icon: Star, value: '98%', label: 'Client Satisfaction' },
// ];

// export default function HeroModern() {
//   const [i, setI] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
//     return () => clearInterval(t);
//   }, []);

//   const s = slides[i];

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#070D1B]">
//       {/* Background slides */}
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={s.image}
//           initial={{ opacity: 0, scale: 1.08 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//           className="absolute inset-0"
//         >
//           <Image src={s.image} alt="Hero" fill priority quality={100} unoptimized className="object-cover" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#070D1B]/90 via-[#070D1B]/60 to-[#070D1B]/95" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(220,38,38,0.18),transparent_55%)]" />
//       <div className="absolute inset-0 bg-grid-dark opacity-20" />

//       {/* Centered content */}
//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pt-28 sm:pt-32 pb-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={s.eyebrow}
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -12 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-md rounded-full px-4 py-1.5 mb-7"
//           >
//             <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//             <span className="text-red-300 text-xs font-bold tracking-[0.2em] uppercase">{s.eyebrow}</span>
//           </motion.div>
//         </AnimatePresence>

//         <AnimatePresence mode="wait">
//           <motion.h1
//             key={s.title}
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -24 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
//           >
//             {s.title}{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
//               {s.highlight}
//             </span>
//           </motion.h1>
//         </AnimatePresence>

//         <AnimatePresence mode="wait">
//           <motion.p
//             key={s.desc}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]"
//           >
//             {s.desc}
//           </motion.p>
//         </AnimatePresence>

//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="flex flex-wrap items-center justify-center gap-4"
//         >
//           <Link
//             href="/our-services"
//             className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all"
//           >
//             Explore Services
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </Link>
//           <Link
//             href="/about"
//             className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-white hover:text-slate-900 transition-all"
//           >
//             Our Story
//           </Link>
//         </motion.div>

//         {/* Slide indicators */}
//         <div className="flex items-center justify-center gap-2 mt-10">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setI(idx)}
//               aria-label={`Slide ${idx + 1}`}
//               className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? 'w-10 bg-red-500' : 'w-4 bg-white/25 hover:bg-white/50'}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Floating glass stat cards */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.4 }}
//         className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10"
//       >
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//           {cards.map((card, idx) => {
//             const Icon = card.icon;
//             return (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 + idx * 0.08 }}
//                 className="group bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:bg-white/10 hover:border-red-500/40 transition-all duration-300"
//               >
//                 <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
//                   <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                 </div>
//                 <div className="text-left">
//                   <div className="text-xl sm:text-2xl font-black text-white leading-none mb-1">{card.value}</div>
//                   <div className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">{card.label}</div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-slate-400"
//       >
//         <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
//         <motion.div
//           animate={{ y: [0, 6, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <ChevronDown className="w-4 h-4 text-red-400" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck, TrendingUp, Globe as Globe2, Star } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    eyebrow: 'LNBG International Investment',
    title: 'Capital that moves',
    highlight: 'markets forward',
    desc: 'Tailored investment strategies, asset management and research built to accelerate your corporate vision.',
  },
  {
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop',
    eyebrow: 'Improve Your Business',
    title: 'We help you',
    highlight: 'grow faster',
    desc: 'Strategic insights and global networks that turn ambition into measurable, long-term performance.',
  },
];

const cards = [
  { icon: ShieldCheck, value: 'BVI', label: 'Licensed IBC' },
  { icon: TrendingUp, value: '$1.2B+', label: 'Assets Managed' },
  { icon: Globe2, value: '25+', label: 'Countries Active' },
  { icon: Star, value: '98%', label: 'Client Satisfaction' },
];

export default function HeroModern() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#070D1B]">
      {/* Background slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={s.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image 
            src={s.image} 
            alt="Corporate Investment" 
            fill 
            priority 
            quality={100} 
            unoptimized 
            className="object-cover" 
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070D1B]/90 via-[#070D1B]/60 to-[#070D1B]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(220,38,38,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid-dark opacity-20" />

      {/* Centered content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center pt-28 sm:pt-32 pb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={s.eyebrow}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-md rounded-full px-4 py-1.5 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-300 text-xs font-bold tracking-[0.2em] uppercase">{s.eyebrow}</span>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.h1
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          >
            {s.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              {s.highlight}
            </span>
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={s.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]"
          >
            {s.desc}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all"
          >
           Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/our-services"
            className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-white hover:text-slate-900 transition-all"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? 'w-10 bg-red-500' : 'w-4 bg-white/25 hover:bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Floating glass stat cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.08 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:bg-white/10 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-black text-white leading-none mb-1">{card.value}</div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">{card.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-slate-400"
      >
        {/* <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span> */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-red-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}