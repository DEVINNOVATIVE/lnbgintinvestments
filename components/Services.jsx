// import Link from 'next/link';
// import { services } from '@/lib/serviceData';
// import { getServiceIcon } from '@/lib/serviceIcons';
// import { ArrowRight } from 'lucide-react';

// const FEATURED_COUNT = 4;

// export default function Services() {
//   const featuredServices = services.slice(0, FEATURED_COUNT);

//   return (
//     <section className="py-8 bg-slate-50/70 relative overflow-hidden">
//       {/* Background Decorative Blur Glows */}
//       <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute top-10 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center mb-16 space-y-3">
//           <div className="inline-flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
//             <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
//               What we do
//             </span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Services</span>
//           </h2>

//           <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-normal">
//             Comprehensive financial and strategic solutions tailored to accelerate your business potential.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
//           {featuredServices.map((service, i) => {
//             const Icon = getServiceIcon(service.iconName);
//             const isDefaultRed = i === 0;

//             return (
//               <Link
//                 key={service.slug}
//                 href={`/services/${service.slug}`}
//                 className={`group relative p-8 rounded-2xl transition-all duration-500 border flex flex-col justify-between text-center overflow-hidden ${
//                   isDefaultRed
//                     ? 'bg-gradient-to-b from-red-600 via-red-650 to-red-700 border-red-600 text-white shadow-xl shadow-red-600/20 hover:-translate-y-2'
//                     : 'bg-white border-slate-100/80 text-slate-900 shadow-lg shadow-slate-200/50 hover:bg-gradient-to-b hover:from-red-600 hover:to-red-700 hover:border-red-600 hover:text-white hover:shadow-xl hover:shadow-red-600/20 hover:-translate-y-2'
//                 }`}
//               >
//                 {/* SVG Topographic Pattern Effect on Red Background */}
//                 <div 
//                   className={`absolute inset-0 pointer-events-none opacity-10 transition-opacity duration-500 ${
//                     isDefaultRed ? 'opacity-15' : 'opacity-0 group-hover:opacity-15'
//                   }`}
//                   style={{
//                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm48 25c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm-43-7c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm63 31c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
//                   }}
//                 />

//                 <div className="relative z-10 flex flex-col items-center">
                  
//                   {/* Icon Circle Container */}
//                   <div
//                     className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md transition-all duration-500 ${
//                       isDefaultRed
//                         ? 'bg-white text-red-600 group-hover:scale-110'
//                         : 'bg-red-600 text-white group-hover:bg-white group-hover:text-red-600 group-hover:scale-110'
//                     }`}
//                   >
//                     <Icon className="w-9 h-9 stroke-[1.8] transition-colors duration-500" />
//                   </div>

//                   {/* Card Title */}
//                   <h3
//                     className={`text-xl font-extrabold mb-4 transition-colors duration-300 ${
//                       isDefaultRed ? 'text-white' : 'text-slate-900 group-hover:text-white'
//                     }`}
//                   >
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p
//                     className={`text-sm leading-relaxed mb-8 transition-colors duration-300 font-normal line-clamp-3 ${
//                       isDefaultRed ? 'text-red-50' : 'text-slate-500 group-hover:text-red-100'
//                     }`}
//                   >
//                     {service.shortDesc}
//                   </p>
//                 </div>

//                 {/* READ MORE CTA */}
//                 <div className="relative z-10 pt-2 border-t border-white/10 group-hover:border-white/20">
//                   <span
//                     className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
//                       isDefaultRed
//                         ? 'text-white group-hover:text-white'
//                         : 'text-slate-600 group-hover:text-white'
//                     }`}
//                   >
//                     <span>Read More</span>
//                     <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
//                   </span>
//                 </div>

//               </Link>
//             );
//           })}
//         </div>

//         {/* View all services */}
//         <div className="mt-12 text-center">
//           <Link
//             href="/services"
//             className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-bold tracking-wide shadow-lg shadow-slate-200/50 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-red-600/20 transition-all duration-300 group"
//           >
//             View All Services
//             <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
//           </Link>
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
//   const [cardWidth, setCardWidth] = useState(400);

//   const totalDots = Math.max(1, services.length - 2);

//   const scrollToIndex = useCallback((index) => {
//     const clamped = Math.max(0, Math.min(index, services.length - 1));
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         left: clamped * cardWidth,
//         behavior: 'smooth',
//       });
//     }
//   }, [cardWidth]);

//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => {
//         const next = (prev + 1) % totalDots;
//         scrollToIndex(next);
//         return next;
//       });
//     }, 3500);
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
//         const width = firstCard.offsetWidth + 24;
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
//     <section className="py-12 bg-slate-50 relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-50" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-40" />
//       <div className="absolute inset-0 bg-grid opacity-20" />

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.55 }}
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
//               Our <span className="text-gradient">Services</span>
//             </h2>
//             <p className="text-slate-500 max-w-xl mt-4 text-[15px] leading-relaxed">
//               Comprehensive solutions designed to accelerate your business growth across every dimension of modern investment.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 12 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center gap-3"
//           >
//             <button
//               onClick={handlePrev}
//               disabled={activeIndex === 0}
//               className="w-12 h-12 rounded-full border-2 border-slate-200 text-slate-600 hover:border-red-600 hover:text-red-600 hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
//               aria-label="Previous"
//             >
//               <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={activeIndex >= totalDots - 1}
//               className="w-12 h-12 rounded-full bg-red-600 text-white hover:bg-red-700 hover:shadow-glow disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
//               aria-label="Next"
//             >
//               <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       <div
//         className="relative z-10 max-w-7xl mx-auto"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <div
//           ref={scrollRef}
//           onScroll={handleScroll}
//           className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-4 md:px-[max(16px,calc((100vw-1280px)/2))] no-scrollbar cursor-grab active:cursor-grabbing"
//           style={{ scrollbarWidth: 'none' }}
//         >
//           {services.map((service, i) => {
//             const Icon = iconMap[service.iconName] || Target;
//             return (
//               <motion.div
//                 key={service.slug}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: i * 0.06 }}
//               >
//                 <Link
//                   href={`/services/${service.slug}`}
//                   data-card
//                   className="group snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 hover:border-red-200 transition-all duration-500 hover:-translate-y-2 block"
//                 >
//                   <div className="relative h-52 overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

//                     <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors duration-300">
//                       <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
//                     </div>

//                     <div className="absolute bottom-4 left-4 flex gap-1.5">
//                       {service.categories.slice(0, 2).map((cat) => (
//                         <span key={cat} className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold rounded-full uppercase tracking-wide">
//                           {cat}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                     <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
//                       {service.shortDesc}
//                     </p>

//                     <div className="flex items-center justify-between pt-4 border-t border-slate-100">
//                       <span className="text-xs text-slate-400 flex items-center gap-1.5">
//                         <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
//                         {service.date}
//                       </span>
//                       <span className="inline-flex items-center gap-1.5 text-red-600 text-xs font-semibold group-hover:gap-2.5 transition-all">
//                         Read More
//                         <ArrowRight className="w-3.5 h-3.5" />
//                       </span>
//                     </div>
//                   </div>

//                   <div className="h-1 bg-gradient-to-r from-red-600 to-rose-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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

  // Auto-slide effect
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

  // Dynamic measurement for precise scroll snapping across mobile & desktop
  useEffect(() => {
    function measure() {
      if (!scrollRef.current) return;
      const firstCard = scrollRef.current.querySelector('[data-card]');
      if (firstCard) {
        // Card width + Gap spacing (16px on mobile, 24px on desktop)
        const gap = window.innerWidth < 640 ? 16 : 24;
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
        
        {/* Section Header & Navigation Buttons */}
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

      {/* Carousel Container */}
      <div
        className="relative z-10 max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-4 sm:px-6 lg:px-8 no-scrollbar cursor-grab active:cursor-grabbing"
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
                className="snap-center sm:snap-start flex-shrink-0 w-[82vw] sm:w-[320px] md:w-[360px]"
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
                      {service.date || 'LNBG Investment'}
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

        {/* Mobile Carousel Indicators */}
        <div className="flex sm:hidden items-center justify-center gap-2 pt-2 pb-4">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-6 bg-red-600'
                  : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
