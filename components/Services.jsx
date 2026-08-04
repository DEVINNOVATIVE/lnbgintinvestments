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

'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { services } from '@/lib/serviceData';
import {
  Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers,
  Home as HomeIcon, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight,
} from 'lucide-react';

const iconMap = { Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers, HomeIcon };

export default function Services() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(400);

  const totalDots = Math.max(1, services.length - 2);

  const scrollToIndex = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, services.length - 1));
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: clamped * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [cardWidth]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalDots;
        scrollToIndex(next);
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, totalDots, scrollToIndex]);

  // Track scroll position to update active dot
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.max(0, Math.min(idx, totalDots - 1)));
  }, [cardWidth, totalDots]);

  // Measure card width for scroll calculations
  useEffect(() => {
    function measure() {
      if (!scrollRef.current) return;
      const firstCard = scrollRef.current.querySelector('[data-card]');
      if (firstCard) {
        const width = firstCard.offsetWidth + 24; // card + gap
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
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            {/* <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest">What we do</span>
            </div> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-slate-500 max-w-xl mt-4 text-[15px] leading-relaxed">
              Comprehensive solutions designed to accelerate your business growth across every dimension of modern investment.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full border-2 border-slate-200 text-slate-600 hover:border-red-600 hover:text-red-600 hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex >= totalDots - 1}
              className="w-12 h-12 rounded-full bg-red-600 text-white hover:bg-red-700 hover:shadow-glow disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel track — full width, scroll-snap */}
      <div
        className="relative z-10 max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-4 md:px-[max(16px,calc((100vw-1280px)/2))] no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none' }}
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.iconName] || Target;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                data-card
                className="group snap-start flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 hover:border-red-200 transition-all duration-500 hover:-translate-y-2 block"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Category tag */}
                  <div className="absolute bottom-4 left-4 flex gap-1.5">
                    {service.categories.slice(0, 2).map((cat) => (
                      <span key={cat} className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold rounded-full uppercase tracking-wide">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {service.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-red-600 text-xs font-semibold group-hover:gap-2.5 transition-all">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Hover gradient bar */}
                <div className="h-1 bg-gradient-to-r from-red-600 to-rose-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            );
          })}

          {/* End spacer */}
          <div className="flex-shrink-0 w-4" />
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: totalDots }, (_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? 'w-8 bg-red-600'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      {/* <div className="max-w-7xl mx-auto px-4 relative z-10 mt-10 text-center">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-red-600 text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-glow"
        >
          View All Services
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div> */}
    </section>
  );
}
