// // import { CheckCircle, ArrowRight } from 'lucide-react';
// // import Link from 'next/link';

// // const points = [
// //   'We provide access to a wide range of strategic services such as planning and surveying, construction, installation and commissioning works.',
// //   'We help our clients to develop and implement strategies that align with their business objectives and drive sustainable growth.',
// //   'Our professional network spans across 25+ countries, giving us deep market insight and local expertise.',
// // ];

// // export default function StrategicConsulting() {
// //   return (
// //     <section className="py-24 bg-slate-50 relative overflow-hidden">
// //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50" />
// //       <div className="absolute inset-0 bg-grid opacity-20" />

// //       <div className="max-w-7xl mx-auto px-4 relative z-10">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //           {/* Left: image */}
// //           <div className="relative order-2 lg:order-1">
// //             <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
// //               <img
// //                 src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                 alt="Strategic Consulting"
// //                 className="w-full h-[460px] object-cover"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
// //             </div>
// //             {/* Floating badge */}
// //             <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card-hover p-5 border border-slate-100 animate-float">
// //               <div className="flex items-center gap-3">
// //                 <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
// //                   <ArrowRight className="w-5 h-5 text-white" />
// //                 </div>
// //                 <div>
// //                   <div className="text-2xl font-bold text-slate-900">25+</div>
// //                   <div className="text-xs text-slate-500">Years Experience</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right: content */}
// //           <div className="order-1 lg:order-2">
// //             <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-1.5 mb-5">
// //               <span className="w-2 h-2 bg-red-600 rounded-full" />
// //               <span className="text-xs font-semibold uppercase tracking-widest">Our Approach</span>
// //             </div>
// //             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
// //               Strategic <span className="text-gradient">Consulting</span>
// //             </h2>
// //             <p className="text-slate-600 leading-relaxed mb-6">
// //               LNBIG INT INVESTMENTS provides strategic consulting services that help businesses
// //               navigate complex challenges and seize opportunities. Our approach combines deep
// //               industry knowledge with practical solutions.
// //             </p>
// //             <ul className="space-y-3 mb-8">
// //               {points.map((p, i) => (
// //                 <li key={i} className="flex items-start gap-3 group">
// //                   <div className="w-6 h-6 rounded-full bg-red-50 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
// //                     <CheckCircle className="w-4 h-4 text-red-600 group-hover:text-white transition-colors duration-300" />
// //                   </div>
// //                   <span className="text-slate-700 text-sm leading-relaxed">{p}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //             <Link
// //               href="/contact"
// //               className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
// //             >
// //               Get in touch
// //               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// const carouselSlides = [
//   {
//     title: 'Market Research',
//     description:
//       'LNBG Analytics produces high-quality, in-depth, and tailored investment and financial research services to help clients successfully navigate financial markets, enhance their portfolios, and make strategic decisions. As one of the top investment research firms, our enthusiastic and exclusive team of financial research analysts delivers distinguished industry and economic insights that aid our clients achieve their goals constantly.',
//     completedProjects: '30K',
//     successRate: '90%',
//   },
//   {
//     title: 'Strategic Consulting',
//     description:
//       'In an era of disruption, strategy is more important than ever. We offer creative solutions that have helped thousands of companies across all geographies and sectors develop and execute winning strategies. We’ve been a strategy thought leader for nearly five decades, and we bring unrivaled capabilities, tools, technologies, and talent to every engagement, augmented by an ecosystem of best-of-breed partners that provide specialized expertise.',
//     completedProjects: '20K',
//     successRate: '88%',
//   },
//   {
//     title: 'Sale Service',
//     description:
//       'Our team of industry experts manages an extensive network that allows us access to known buyers throughout the region. This includes recent buyers in numerous product types, as well as long-term owners and capital partners. We leverage our relationships to ensure that our clients’ portfolios receive maximum exposure to the market.',
//     completedProjects: '18K',
//     successRate: '98%',
//   },
// ];

// export default function ExpertiseSection() {
//   const [activeSlide, setActiveSlide] = useState(0);

//   // Auto-slide every 6 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="bg-[#0B1426] text-white py-20 lg:py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
//           {/* --- Left Column (Fixed Text & Progress Bars) --- */}
//           <div className="lg:col-span-6 space-y-8">
//             <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.2] text-white tracking-tight">
//               We Believe, The Passion Trying &amp; Skill Can Make A Top-Performing Company.
//             </h2>

//             <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
//               As an established Wealth Manager, with a resolute focus on preserving and growing our clients’ wealth, what matters to our clients matters equally to us. We work closely with high net worth individuals, private clients, family offices and businesses to provide bespoke, discretionary and advisory investment services
//             </p>

//             {/* Progress Bars */}
//             <div className="space-y-6 pt-4">
//               {/* Progress 1 */}
//               <div>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-bold text-white tracking-wide">Strategy &amp; Analysis</span>
//                   <span className="text-xs font-bold text-slate-300">88%</span>
//                 </div>
//                 <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
//                   <div className="bg-red-600 h-full rounded-full w-[88%] transition-all duration-1000 ease-out" />
//                 </div>
//               </div>

//               {/* Progress 2 */}
//               <div>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-bold text-white tracking-wide">Economic Growth</span>
//                   <span className="text-xs font-bold text-slate-300">95%</span>
//                 </div>
//                 <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
//                   <div className="bg-red-600 h-full rounded-full w-[95%] transition-all duration-1000 ease-out" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* --- Right Column (Carousel Expertise Content) --- */}
//           <div className="lg:col-span-6 lg:border-l lg:border-slate-800/80 lg:pl-12 flex flex-col justify-between min-h-[460px] relative">
            
//             <div className="space-y-6 transition-opacity duration-500 ease-in-out">
//               {/* Tagline */}
//               <div className="text-xs font-bold uppercase tracking-widest text-red-500">
//                 OUR EXPERTISE
//               </div>

//               {/* Slide Title */}
//               <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
//                 {carouselSlides[activeSlide].title}
//               </h3>

//               {/* Slide Description */}
//               <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
//                 {carouselSlides[activeSlide].description}
//               </p>

//               {/* Key Metrics */}
//               <div className="grid grid-cols-2 gap-8 pt-4">
//                 <div>
//                   <div className="text-slate-200 text-base sm:text-lg font-bold mb-1">
//                     Completed projects
//                   </div>
//                   <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
//                     {carouselSlides[activeSlide].completedProjects}
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-slate-200 text-base sm:text-lg font-bold mb-1">
//                     Success Rate
//                   </div>
//                   <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
//                     {carouselSlides[activeSlide].successRate}
//                   </div>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <div className="pt-4">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-lg shadow-red-600/20 active:scale-[0.98] transition-all duration-300"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             </div>

//             {/* --- Carousel Navigation Indicators (Pill Style) --- */}
//             <div className="flex items-center gap-3 pt-8 mt-auto">
//               {carouselSlides.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveSlide(idx)}
//                   aria-label={`Go to slide ${idx + 1}`}
//                   className={`transition-all duration-300 rounded-full focus:outline-none ${
//                     idx === activeSlide
//                       ? 'w-10 h-3 bg-red-600 flex items-center justify-center'
//                       : 'w-3 h-3 border-2 border-slate-600 hover:border-slate-400 bg-transparent'
//                   }`}
//                 >
//                   {idx === activeSlide && (
//                     <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
//                   )}
//                 </button>
//               ))}
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';



// const carouselSlides= [
//   {
//     title: 'Market Research',
//     description:
//       'LNBG Analytics produces high-quality, in-depth, and tailored investment and financial research services to help clients successfully navigate financial markets, enhance their portfolios, and make strategic decisions.',
//     completedProjects: '30K+',
//     successRate: '90%',
//   },
//   {
//     title: 'Strategic Consulting',
//     description:
//       'In an era of disruption, strategy is more important than ever. We offer creative solutions that have helped thousands of companies across all geographies and sectors develop and execute winning strategies.',
//     completedProjects: '20K+',
//     successRate: '88%',
//   },
//   {
//     title: 'Sale Service',
//     description:
//       'Our team of industry experts manages an extensive network that allows us access to known buyers throughout the region. We leverage our relationships to ensure that our clients’ portfolios receive maximum exposure.',
//     completedProjects: '18K+',
//     successRate: '98%',
//   },
// ];

// export default function ExpertiseSection() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const touchStartX = useRef(0);

//   // Auto-slide effect with pause-on-hover support
//   useEffect(() => {
//     if (isPaused) return;
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [isPaused]);

//   const handleNext = () => {
//     setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
//   };

//   const handlePrev = () => {
//     setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
//   };

//   // Simple swipe support
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     const touchEndX = e.changedTouches[0].clientX;
//     const diff = touchStartX.current - touchEndX;
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) handleNext();
//       else handlePrev();
//     }
//   };

//   return (
//     <section 
//       className="bg-[#070D1B] text-white py-20 lg:py-28 relative overflow-hidden selection:bg-red-500 selection:text-white"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {/* Background Ambient Glows */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* --- Left Column: Static Overview & Animated Metrics --- */}
//           <div className="lg:col-span-6 space-y-8">
//             <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wider uppercase">
//               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//               Empowering Vision
//             </div>

//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-white tracking-tight">
//               We Believe <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Passion, Skill &amp; Drive</span> Create Market Leaders.
//             </h2>

//             <p className="text-slate-300 text-base leading-relaxed font-normal">
//               As an established Wealth Manager, with a resolute focus on preserving and growing our clients’ wealth, what matters to our clients matters equally to us. We work closely with high net worth individuals, private clients, family offices, and businesses to provide bespoke investment services.
//             </p>

//             {/* Progress Bars with Gradient & Glow */}
//             <div className="space-y-6 pt-2">
//               <div>
//                 <div className="flex justify-between items-center mb-2.5">
//                   <span className="text-sm font-semibold text-slate-200 tracking-wide">Strategy &amp; Analysis</span>
//                   <span className="text-xs font-bold text-red-400 font-mono">88%</span>
//                 </div>
//                 <div className="w-full bg-slate-800/80 p-0.5 rounded-full border border-slate-700/50">
//                   <div 
//                     className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.5)] transition-all duration-1000 ease-out"
//                     style={{ width: '88%' }}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between items-center mb-2.5">
//                   <span className="text-sm font-semibold text-slate-200 tracking-wide">Economic Growth</span>
//                   <span className="text-xs font-bold text-red-400 font-mono">95%</span>
//                 </div>
//                 <div className="w-full bg-slate-800/80 p-0.5 rounded-full border border-slate-700/50">
//                   <div 
//                     className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.5)] transition-all duration-1000 ease-out"
//                     style={{ width: '95%' }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* --- Right Column: Interactive Card Carousel --- */}
//           <div 
//             className="lg:col-span-6 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between min-h-[480px]"
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//           >
//             {/* Header & Controls */}
//             <div className="flex items-center justify-between mb-6">
//               <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950/40 px-3 py-1 rounded-md border border-red-800/30">
//                 Our Expertise
//               </span>

//               {/* Prev / Next Arrows */}
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={handlePrev}
//                   className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-red-600 border border-slate-700/60 hover:border-red-500 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
//                   aria-label="Previous slide"
//                 >
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-red-600 border border-slate-700/60 hover:border-red-500 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
//                   aria-label="Next slide"
//                 >
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Slide Content with Smooth Transition */}
//             <div className="space-y-6 my-auto transition-all duration-500 ease-in-out">
//               <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
//                 {carouselSlides[activeSlide].title}
//               </h3>

//               <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
//                 {carouselSlides[activeSlide].description}
//               </p>

//               {/* Key Metrics Cards */}
//               <div className="grid grid-cols-2 gap-4 pt-4">
//                 <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-4">
//                   <div className="text-xs text-slate-400 font-medium mb-1">Completed Projects</div>
//                   <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
//                     {carouselSlides[activeSlide].completedProjects}
//                   </div>
//                 </div>

//                 <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-4">
//                   <div className="text-xs text-slate-400 font-medium mb-1">Success Rate</div>
//                   <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
//                     {carouselSlides[activeSlide].successRate}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Controls & Action */}
//             <div className="pt-8 mt-6 border-t border-slate-800 flex items-center justify-between gap-4">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-red-600/25 active:scale-[0.98] transition-all duration-200"
//               >
//                 <span>Get Started</span>
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </Link>

//               {/* Carousel Indicators */}
//               <div className="flex items-center gap-2">
//                 {carouselSlides.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveSlide(idx)}
//                     aria-label={`Go to slide ${idx + 1}`}
//                     className={`h-2.5 rounded-full transition-all duration-300 ${
//                       idx === activeSlide
//                         ? 'w-8 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]'
//                         : 'w-2.5 bg-slate-700 hover:bg-slate-500'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// const expertiseAreas = [
//   {
//     id: 'market-research',
//     title: 'Market Research',
//     description:
//       'LNBG Analytics produces high-quality, in-depth, and tailored investment research services to help clients navigate financial markets and enhance portfolios.',
//     statLabel: 'Completed Projects',
//     statValue: '30K+',
//     metric: '90% Success',
//     accentColor: 'from-blue-500 to-indigo-600',
//   },
//   {
//     id: 'strategic-consulting',
//     title: 'Strategic Consulting',
//     description:
//       'Unrivaled capabilities, tools, and talent to execute winning strategies across geographies and sectors for nearly five decades.',
//     statLabel: 'Completed Projects',
//     statValue: '20K+',
//     metric: '88% Success',
//     accentColor: 'from-red-500 to-rose-600',
//   },
//   {
//     id: 'sale-service',
//     title: 'Sale Service',
//     description:
//       'Leveraging extensive regional networks to connect buyers with long-term owners and ensure maximum exposure for client portfolios.',
//     statLabel: 'Completed Projects',
//     statValue: '18K+',
//     metric: '98% Success',
//     accentColor: 'from-amber-500 to-orange-600',
//   },
// ];

// export default function ExpertiseBentoSection() {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
//       {/* Background Subtle Mesh */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#1e1b4b_0%,transparent_50%)] pointer-events-none" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#4c0519_0%,transparent_50%)] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Header Section */}
//         <div className="max-w-3xl mb-16 space-y-4">
//           <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider">
//             Excellence &amp; Innovation
//           </div>
//           <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
//             We Believe Passion, Skill &amp; Drive Create Top-Performing Companies.
//           </h2>
//           <p className="text-slate-400 text-base leading-relaxed">
//             As an established Wealth Manager with a resolute focus on preserving and growing wealth, we provide bespoke, discretionary, and advisory investment services across high-net-worth individuals, family offices, and businesses.
//           </p>
//         </div>

//         {/* Bento Grid Container */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
//           {/* Main Hero Card: Key Performance Indicators */}
//           <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
//             <div>
//               <h3 className="text-xl font-bold text-white mb-2">Operational Performance</h3>
//               <p className="text-slate-400 text-sm mb-8">
//                 Measuring real-time growth strategies and economic indicators.
//               </p>

//               <div className="space-y-6">
//                 <div>
//                   <div className="flex justify-between text-sm font-semibold mb-2">
//                     <span className="text-slate-200">Strategy &amp; Analysis</span>
//                     <span className="text-red-400">88%</span>
//                   </div>
//                   <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
//                     <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full w-[88%]" />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="flex justify-between text-sm font-semibold mb-2">
//                     <span className="text-slate-200">Economic Growth</span>
//                     <span className="text-red-400">95%</span>
//                   </div>
//                   <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
//                     <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full w-[95%]" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-8 border-t border-slate-800/80 mt-8 flex items-center justify-between">
//               <div>
//                 <span className="text-xs text-slate-400 block">Global Reach</span>
//                 <span className="text-lg font-bold text-white">Multi-Regional</span>
//               </div>
//               <Link
//                 href="/contact"
//                 className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-red-600/20"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>

//           {/* Interactive Expertise Navigator */}
//           <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
//             <div>
//               {/* Tab Selector Buttons */}
//               <div className="flex flex-wrap gap-2 mb-8 bg-slate-950/60 p-1.5 rounded-2xl border border-slate-800/80">
//                 {expertiseAreas.map((area, index) => (
//                   <button
//                     key={area.id}
//                     onClick={() => setActiveTab(index)}
//                     className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
//                       activeTab === index
//                         ? 'bg-slate-800 text-white shadow-md border border-slate-700'
//                         : 'text-slate-400 hover:text-white hover:bg-slate-900'
//                     }`}
//                   >
//                     {area.title}
//                   </button>
//                 ))}
//               </div>

//               {/* Active Tab Panel Content */}
//               <div className="space-y-6 min-h-[180px]">
//                 <h4 className="text-2xl font-bold text-white">
//                   {expertiseAreas[activeTab].title}
//                 </h4>
//                 <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
//                   {expertiseAreas[activeTab].description}
//                 </p>
//               </div>
//             </div>

//             {/* Bottom Metrics Bar */}
//             <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-slate-800">
//               <div className="bg-slate-950/50 rounded-2xl p-4 border border-slate-800/50">
//                 <span className="text-xs text-slate-400 block mb-1">
//                   {expertiseAreas[activeTab].statLabel}
//                 </span>
//                 <span className="text-3xl font-extrabold text-white">
//                   {expertiseAreas[activeTab].statValue}
//                 </span>
//               </div>
//               <div className="bg-slate-950/50 rounded-2xl p-4 border border-slate-800/50">
//                 <span className="text-xs text-slate-400 block mb-1">Performance Standard</span>
//                 <span className="text-3xl font-extrabold text-red-400">
//                   {expertiseAreas[activeTab].metric}
//                 </span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Market Research',
    description:
      'LNBG Analytics produces high-quality, in-depth, and tailored investment and financial research services to help clients successfully navigate financial markets, enhance portfolios, and make strategic decisions.',
    projects: '30K+',
    successRate: '90%',
  },
  {
    id: 2,
    title: 'Strategic Consulting',
    description:
      'We offer creative solutions that have helped thousands of companies across all geographies develop and execute winning strategies with unrivaled tools, technology, and partner ecosystems.',
    projects: '20K+',
    successRate: '88%',
  },
  {
    id: 3,
    title: 'Sale Service',
    description:
      'Our team manages an extensive network connecting known buyers throughout the region with long-term owners to maximize portfolio market exposure.',
    projects: '18K+',
    successRate: '98%',
  },
];

export default function ExpertiseAccordionSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="bg-[#0A101D] text-white py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-md border border-red-500/20">
              Core Capabilities
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Driven by Skill. Focused on Top Performance.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We work closely with high-net-worth individuals, private clients, family offices, and businesses to provide bespoke investment advisory services backed by rigorous analysis.
            </p>

            {/* Performance Metrics */}
            <div className="space-y-5 pt-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-300">Strategy &amp; Analysis</span>
                  <span className="text-red-400">88%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full w-[88%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-300">Economic Growth</span>
                  <span className="text-red-400">95%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full w-[95%]" />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/20 transition-all"
              >
                Get Started Today
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion Cards */}
          <div className="lg:col-span-7 space-y-4">
            {services.map((service, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={service.id}
                  onClick={() => setExpandedIndex(idx)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-slate-900 border-red-500/50 p-6 shadow-xl shadow-red-950/20'
                      : 'bg-slate-900/40 border-slate-800/80 p-5 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-mono font-bold ${isExpanded ? 'text-red-500' : 'text-slate-500'}`}>
                        0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <span className={`text-xl transition-transform duration-300 ${isExpanded ? 'rotate-45 text-red-500' : 'text-slate-500'}`}>
                      +
                    </span>
                  </div>

                  {/* Expanded Content Body */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-800/60 space-y-5 animate-fadeIn">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="text-xs text-slate-400">Completed Projects</div>
                          <div className="text-2xl font-extrabold text-white font-mono">{service.projects}</div>
                        </div>
                        <div className="h-8 w-px bg-slate-800" />
                        <div>
                          <div className="text-xs text-slate-400">Success Rate</div>
                          <div className="text-2xl font-extrabold text-red-400 font-mono">{service.successRate}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}