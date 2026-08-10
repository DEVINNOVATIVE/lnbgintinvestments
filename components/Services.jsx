

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
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/lib/serviceData';
import {
  Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers,
  Home as HomeIcon, ArrowRight, ChevronLeft, ChevronRight,
} from 'lucide-react';

const iconMap = { Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers, HomeIcon };

export default function Services() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);

  const totalDots = services.length;

  const scrollToIndex = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, services.length - 1));
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: clamped * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [cardWidth]);

  // Auto-slide effect (Only active on desktop/tablet screens)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalDots;
        scrollToIndex(next);
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalDots, scrollToIndex]);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.max(0, Math.min(idx, totalDots - 1)));
  }, [cardWidth, totalDots]);

  useEffect(() => {
    function measure() {
      if (!scrollRef.current) return;
      const firstCard = scrollRef.current.querySelector('[data-card]');
      if (firstCard) {
        const gap = 24;
        const width = firstCard.offsetWidth + gap;
        setCardWidth(width);
      }
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  function handlePrev() {
    scrollToIndex(activeIndex - 1);
  }

  function handleNext() {
    scrollToIndex(activeIndex + 1);
  }

  return (
    <section className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-rose-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Desktop Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/60 text-red-600 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Services</span>
            </h2>
            <p className="text-slate-500 max-w-xl mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed">
              Comprehensive financial and strategic solutions tailored to accelerate your business potential across every market dimension.
            </p>
          </motion.div>

          {/* Desktop Arrow Controls */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:flex items-center gap-3"
          >
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-red-600 hover:text-red-600 hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-sm"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex >= totalDots - 1}
              className="w-11 h-11 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Services List / Carousel Container */}
      <div
        className="relative z-10 max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          /* Stacked vertically on Mobile (`space-y-4 flex-col`), Scrollable Row on Desktop (`sm:flex-row sm:overflow-x-auto`) */
          className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:gap-6 sm:overflow-x-auto sm:scroll-smooth sm:snap-x sm:snap-mandatory pb-6 px-4 sm:px-6 lg:px-8 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.iconName] || Target;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="w-full sm:w-[320px] md:w-[360px] sm:flex-shrink-0 sm:snap-start"
              >
                <Link
                  href={`/services/${service.slug}`}
                  data-card
                  className="group h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 hover:border-red-200 transition-all duration-300 flex flex-col justify-between block"
                >
                  <div>
                    {/* Image & Header Overlay */}
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute top-3.5 right-3.5 w-10 h-10 sm:w-11 sm:h-11 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md group-hover:bg-red-600 transition-colors duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </div>

                      {/* Service Category Pills */}
                      <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                        {service.categories?.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="px-2.5 py-0.5 bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-semibold rounded-full uppercase tracking-wider"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-[11px] font-medium text-slate-400">
                      {service.date || 'LNBG Investments'}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-red-600 text-xs font-bold group-hover:gap-2.5 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="h-1 bg-gradient-to-r from-red-600 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}