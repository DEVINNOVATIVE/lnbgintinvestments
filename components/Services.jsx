

// 'use client';

// import { useState, useRef, useEffect, useCallback } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { services } from '@/lib/serviceData';
// import {
//   Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers,
//   Home as HomeIcon, ArrowRight, ChevronLeft, ChevronRight,
// } from 'lucide-react';

// const iconMap = { Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers, HomeIcon };

// export default function Services() {
//   const scrollRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [cardWidth, setCardWidth] = useState(320);

//   const totalDots = services.length;

//   const scrollToIndex = useCallback((index) => {
//     const clamped = Math.max(0, Math.min(index, services.length - 1));
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         left: clamped * cardWidth,
//         behavior: 'smooth',
//       });
//     }
//   }, [cardWidth]);

//   // Auto-slide effect
//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => {
//         const next = (prev + 1) % totalDots;
//         scrollToIndex(next);
//         return next;
//       });
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isPaused, totalDots, scrollToIndex]);

//   const handleScroll = useCallback(() => {
//     if (!scrollRef.current) return;
//     const scrollLeft = scrollRef.current.scrollLeft;
//     const idx = Math.round(scrollLeft / cardWidth);
//     setActiveIndex(Math.max(0, Math.min(idx, totalDots - 1)));
//   }, [cardWidth, totalDots]);

//   // Dynamic measurement for precise scroll snapping across mobile & desktop
//   useEffect(() => {
//     function measure() {
//       if (!scrollRef.current) return;
//       const firstCard = scrollRef.current.querySelector('[data-card]');
//       if (firstCard) {
//         // Card width + Gap spacing (16px on mobile, 24px on desktop)
//         const gap = window.innerWidth < 640 ? 16 : 24;
//         const width = firstCard.offsetWidth + gap;
//         setCardWidth(width);
//       }
//     }
//     measure();
//     window.addEventListener('resize', measure);
//     return () => window.removeEventListener('resize', measure);
//   }, []);

//   function handlePrev() {
//     scrollToIndex(activeIndex - 1);
//   }

//   function handleNext() {
//     scrollToIndex(activeIndex + 1);
//   }

//   return (
//     <section className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden">
//       {/* Subtle Ambient Background Gradients */}
//       <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-rose-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header & Navigation Buttons */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.55 }}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/60 text-red-600 text-xs font-semibold uppercase tracking-wider mb-3">
//               <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
//               What We Offer
//             </div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
//               Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Services</span>
//             </h2>
//             <p className="text-slate-500 max-w-xl mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed">
//               Comprehensive financial and strategic solutions tailored to accelerate your business potential across every market dimension.
//             </p>
//           </motion.div>

//           {/* Desktop Arrow Controls */}
//           <motion.div
//             initial={{ opacity: 0, x: 12 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.5 }}
//             className="hidden sm:flex items-center gap-3"
//           >
//             <button
//               onClick={handlePrev}
//               disabled={activeIndex === 0}
//               className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-red-600 hover:text-red-600 hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-sm"
//               aria-label="Previous service"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={activeIndex >= totalDots - 1}
//               className="w-11 h-11 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
//               aria-label="Next service"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Carousel Container */}
//       <div
//         className="relative z-10 max-w-7xl mx-auto"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         onTouchStart={() => setIsPaused(true)}
//         onTouchEnd={() => setIsPaused(false)}
//       >
//         <div
//           ref={scrollRef}
//           onScroll={handleScroll}
//           className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-4 sm:px-6 lg:px-8 no-scrollbar cursor-grab active:cursor-grabbing"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {services.map((service, i) => {
//             const Icon = iconMap[service.iconName] || Target;
//             return (
//               <motion.div
//                 key={service.slug}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.1 }}
//                 transition={{ duration: 0.4, delay: i * 0.05 }}
//                 className="snap-center sm:snap-start flex-shrink-0 w-[82vw] sm:w-[320px] md:w-[360px]"
//               >
//                 <Link
//                   href={`/services/${service.slug}`}
//                   data-card
//                   className="group h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 hover:border-red-200 transition-all duration-300 flex flex-col justify-between block"
//                 >
//                   <div>
//                     {/* Image & Header Overlay */}
//                     <div className="relative h-44 sm:h-48 overflow-hidden">
//                       <img
//                         src={service.image}
//                         alt={service.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         loading="lazy"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

//                       {/* Icon Badge */}
//                       <div className="absolute top-3.5 right-3.5 w-10 h-10 sm:w-11 sm:h-11 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md group-hover:bg-red-600 transition-colors duration-300">
//                         <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
//                       </div>

//                       {/* Service Category Pills */}
//                       <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
//                         {service.categories?.slice(0, 2).map((cat) => (
//                           <span
//                             key={cat}
//                             className="px-2.5 py-0.5 bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-semibold rounded-full uppercase tracking-wider"
//                           >
//                             {cat}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Card Content */}
//                     <div className="p-5 sm:p-6">
//                       <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
//                         {service.title}
//                       </h3>
//                       <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
//                         {service.shortDesc}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Card Footer CTA */}
//                   <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
//                     <span className="text-[11px] font-medium text-slate-400">
//                       {service.date || 'LNBG Investment'}
//                     </span>
//                     <span className="inline-flex items-center gap-1.5 text-red-600 text-xs font-bold group-hover:gap-2.5 transition-all">
//                       <span>Explore</span>
//                       <ArrowRight className="w-3.5 h-3.5" />
//                     </span>
//                   </div>

//                   {/* Hover Accent Line */}
//                   <div className="h-1 bg-gradient-to-r from-red-600 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Mobile Carousel Indicators */}
//         <div className="flex sm:hidden items-center justify-center gap-2 pt-2 pb-4">
//           {services.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => scrollToIndex(idx)}
//               aria-label={`Go to slide ${idx + 1}`}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 idx === activeIndex
//                   ? 'w-6 bg-red-600'
//                   : 'w-2 bg-slate-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// 'use client';

// import { useState, useRef, useEffect, useCallback } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { services } from '@/lib/serviceData';
// import {
//   Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers,
//   Home as HomeIcon, ArrowRight, ChevronLeft, ChevronRight,
// } from 'lucide-react';

// const iconMap = { Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers, HomeIcon };

// export default function Services() {
//   const scrollRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [cardWidth, setCardWidth] = useState(320);

//   const totalDots = services.length;

//   const scrollToIndex = useCallback((index) => {
//     const clamped = Math.max(0, Math.min(index, services.length - 1));
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         left: clamped * cardWidth,
//         behavior: 'smooth',
//       });
//     }
//   }, [cardWidth]);

//   // Auto-slide effect (Only active on desktop/tablet screens)
//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => {
//         const next = (prev + 1) % totalDots;
//         scrollToIndex(next);
//         return next;
//       });
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isPaused, totalDots, scrollToIndex]);

//   const handleScroll = useCallback(() => {
//     if (!scrollRef.current) return;
//     const scrollLeft = scrollRef.current.scrollLeft;
//     const idx = Math.round(scrollLeft / cardWidth);
//     setActiveIndex(Math.max(0, Math.min(idx, totalDots - 1)));
//   }, [cardWidth, totalDots]);

//   useEffect(() => {
//     function measure() {
//       if (!scrollRef.current) return;
//       const firstCard = scrollRef.current.querySelector('[data-card]');
//       if (firstCard) {
//         const gap = 24;
//         const width = firstCard.offsetWidth + gap;
//         setCardWidth(width);
//       }
//     }
//     measure();
//     window.addEventListener('resize', measure);
//     return () => window.removeEventListener('resize', measure);
//   }, []);

//   function handlePrev() {
//     scrollToIndex(activeIndex - 1);
//   }

//   function handleNext() {
//     scrollToIndex(activeIndex + 1);
//   }

//   return (
//     <section className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden">
//       {/* Subtle Ambient Background Gradients */}
//       <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-rose-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header & Desktop Navigation Buttons */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.55 }}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/60 text-red-600 text-xs font-semibold uppercase tracking-wider mb-3">
//               <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
//               What We Offer
//             </div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
//               Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Services</span>
//             </h2>
//             <p className="text-slate-500 max-w-xl mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed">
//               Comprehensive financial and strategic solutions tailored to accelerate your business potential across every market dimension.
//             </p>
//           </motion.div>

//           {/* Desktop Arrow Controls */}
//           <motion.div
//             initial={{ opacity: 0, x: 12 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.5 }}
//             className="hidden sm:flex items-center gap-3"
//           >
//             <button
//               onClick={handlePrev}
//               disabled={activeIndex === 0}
//               className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-red-600 hover:text-red-600 hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-sm"
//               aria-label="Previous service"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={activeIndex >= totalDots - 1}
//               className="w-11 h-11 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
//               aria-label="Next service"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Services List / Carousel Container */}
//       <div
//         className="relative z-10 max-w-7xl mx-auto"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <div
//           ref={scrollRef}
//           onScroll={handleScroll}
//           /* Stacked vertically on Mobile (`space-y-4 flex-col`), Scrollable Row on Desktop (`sm:flex-row sm:overflow-x-auto`) */
//           className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:gap-6 sm:overflow-x-auto sm:scroll-smooth sm:snap-x sm:snap-mandatory pb-6 px-4 sm:px-6 lg:px-8 no-scrollbar"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {services.map((service, i) => {
//             const Icon = iconMap[service.iconName] || Target;
//             return (
//               <motion.div
//                 key={service.slug}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.1 }}
//                 transition={{ duration: 0.4, delay: i * 0.05 }}
//                 className="w-full sm:w-[320px] md:w-[360px] sm:flex-shrink-0 sm:snap-start"
//               >
//                 <Link
//                   href={`/services/${service.slug}`}
//                   data-card
//                   className="group h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 hover:border-red-200 transition-all duration-300 flex flex-col justify-between block"
//                 >
//                   <div>
//                     {/* Image & Header Overlay */}
//                     <div className="relative h-44 sm:h-48 overflow-hidden">
//                       <img
//                         src={service.image}
//                         alt={service.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         loading="lazy"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

//                       {/* Icon Badge */}
//                       <div className="absolute top-3.5 right-3.5 w-10 h-10 sm:w-11 sm:h-11 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md group-hover:bg-red-600 transition-colors duration-300">
//                         <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
//                       </div>

//                       {/* Service Category Pills */}
//                       <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
//                         {service.categories?.slice(0, 2).map((cat) => (
//                           <span
//                             key={cat}
//                             className="px-2.5 py-0.5 bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-semibold rounded-full uppercase tracking-wider"
//                           >
//                             {cat}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Card Content */}
//                     <div className="p-5 sm:p-6">
//                       <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
//                         {service.title}
//                       </h3>
//                       <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
//                         {service.shortDesc}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Card Footer CTA */}
//                   <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
//                     <span className="text-[11px] font-medium text-slate-400">
//                       {service.date || 'LNBG Investments'}
//                     </span>
//                     <span className="inline-flex items-center gap-1.5 text-red-600 text-xs font-bold group-hover:gap-2.5 transition-all">
//                       <span>Explore</span>
//                       <ArrowRight className="w-3.5 h-3.5" />
//                     </span>
//                   </div>

//                   {/* Hover Accent Line */}
//                   <div className="h-1 bg-gradient-to-r from-red-600 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { services } from '@/lib/serviceData';
import {
  Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers,
  Home as HomeIcon, ArrowUpRight, Sparkles, CheckCircle2, Award
} from 'lucide-react';

const iconMap = {
  Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers, HomeIcon,
};

export default function Services() {
  return (
    <section className="py-4 sm:py-14 bg-slate-50/50 text-slate-900 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-red-50/80 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-rose-50/70 rounded-full blur-[130px] pointer-events-none" />

      {/* Light Radial Grid Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            What We Offer
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg leading-relaxed font-normal"
          >
            Comprehensive financial and strategic solutions tailored to accelerate your business potential across every market dimension.
          </motion.p>
        </div>

        {/* Enhanced 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, i) => {
            const Icon = iconMap[service.iconName] || Target;
            const indexFormatted = String(i + 1).padStart(2, '0');

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative h-full bg-white rounded-3xl border border-slate-200/80 hover:border-red-500/40 transition-all duration-500 flex flex-col justify-between block shadow-sm hover:shadow-2xl hover:shadow-red-950/5 hover:-translate-y-2 overflow-hidden"
                >
                  <div>
                    {/* Visual Card Top Header */}
                    <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-900">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                      {/* Number Index Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-semibold tracking-widest shadow-sm">
                        {indexFormatted}
                      </div>

                      {/* Icon Badge Container */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-red-600 group-hover:border-red-600 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </div>

                      {/* Category Pills */}
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                        {service.categories?.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm border border-white/80"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-normal mb-6">
                        {service.shortDesc}
                      </p>

                      {/* Highlighted Feature Card */}
                      {service.features?.[0] && (
                        <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-100 group-hover:border-red-100 group-hover:bg-red-50/30 transition-all duration-300">
                          <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-1">
                            <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                            <span>{service.features[0].title}</span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-2 pl-6 leading-normal">
                            {service.features[0].desc}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto bg-slate-50/40">
                    {/* Stat Highlight Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-semibold">
                      <Award className="w-3.5 h-3.5 text-red-600" />
                      <span>{service.stats?.[0]?.value ? `${service.stats[0].value} ${service.stats[0].label}` : 'LNBG Expertise'}</span>
                    </div>

                    {/* Interactive Arrow Button */}
                    <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300 flex items-center justify-center shadow-sm">
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500  scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}