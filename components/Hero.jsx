// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { ArrowRight, ChevronLeft, ChevronRight, PhoneCall, Sparkles, TrendingUp } from 'lucide-react';

// const carouselSlides = [
//   {
//     image: '/assets/bn1-5-3.jpg',
//     tag: 'WELCOME TO LNBG INTERNATIONAL INVESTMENT',
//     icon: Sparkles,
//     titleLine1: 'Make a ',
//     highlight: 'unique planning',
//     titleLine2: ' for your business',
//     description:
//       'Providing tailored investment strategies and expert financial planning to elevate your enterprise.',
//   },
//   {
//     image: '/assets/bn2-5-3.jpg',
//     tag: 'IMPROVE YOUR BUSINESS',
//     icon: TrendingUp,
//     titleLine1: 'We will help you To ',
//     highlight: 'grow up',
//     titleLine2: ' your business',
//     description:
//       'Strategic insights, asset management, and research services built to accelerate your corporate vision.',
//   },
// ];

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
//   };

//   const activeSlide = carouselSlides[currentSlide];
//   const TagIcon = activeSlide.icon;

//   return (
//     <section className="relative min-h-[700px] lg:min-h-[760px] flex items-center overflow-hidden bg-slate-950">
//       <motion.div
//         key={activeSlide.image}
//         initial={{ opacity: 0, scale: 1.05 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.9, ease: 'easeOut' }}
//         className="absolute inset-0"
//       >
//         <Image
//           src={activeSlide.image}
//           alt="Hero Background"
//           fill
//           priority
//           quality={100}
//           unoptimized
//           className="object-cover object-center"
//         />
//       </motion.div>

//       <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent z-10" />
//       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 z-10" />

//       <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           className="max-w-2xl lg:max-w-3xl"
//         >
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="inline-flex items-center gap-2 bg-slate-900/80 border border-white/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 shadow-md"
//           >
//             <TagIcon className="w-4 h-4 text-red-500" />
//             <span className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
//               {activeSlide.tag}
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] mb-6 tracking-tight drop-shadow-md"
//           >
//             {activeSlide.titleLine1}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-400">
//               {activeSlide.highlight}
//             </span>
//             {activeSlide.titleLine2}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal drop-shadow"
//           >
//             {activeSlide.description}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             className="flex flex-wrap gap-4"
//           >
//             <Link
//               href="/services"
//               className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
//             >
//               Our Services
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Link>

//             <Link
//               href="/contact"
//               className="group inline-flex items-center gap-2.5 bg-slate-900/80 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-sm font-bold hover:bg-white hover:text-slate-900 hover:border-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
//             >
//               <PhoneCall className="w-4 h-4 text-red-400 group-hover:text-slate-900 group-hover:rotate-12 transition-all duration-300" />
//               Contact Us
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 12 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.35 }}
//         className="absolute bottom-8 right-6 sm:right-10 z-30 flex items-center gap-3"
//       >
//         <button
//           onClick={handlePrev}
//           aria-label="Previous Slide"
//           className="w-11 h-11 rounded-full bg-slate-900/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-lg"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         <div className="flex items-center gap-2 px-2">
//           {carouselSlides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentSlide(idx)}
//               aria-label={`Go to slide ${idx + 1}`}
//               className={`h-2.5 rounded-full transition-all duration-300 ${
//                 idx === currentSlide ? 'w-8 bg-red-600' : 'w-2.5 bg-white/40 hover:bg-white/70'
//               }`}
//             />
//           ))}
//         </div>

//         <button
//           onClick={handleNext}
//           aria-label="Next Slide"
//           className="w-11 h-11 rounded-full bg-slate-900/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-lg"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </motion.div>
//     </section>
//   );
// }

'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, Globe as Globe2, Star, Sparkles } from 'lucide-react';

const stats = [
  { icon: ShieldCheck, value: 'BVI', label: 'Licensed IBC' },
  { icon: TrendingUp, value: '$1.2B+', label: 'Assets Managed' },
  { icon: Globe2, value: '25+', label: 'Active Countries' },
  { icon: Star, value: '98%', label: 'Satisfaction' },
];

export default function MinimalInteractiveHero() {
  // Mouse coordinates tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics spring
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms based on cursor position
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-60, 60]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-60, 60]);
  
  const textX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const cardsRotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const cardsRotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX / innerWidth - 0.5);
    mouseY.set(e.clientY / innerHeight - 0.5);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#030712] pt-24 pb-12 selection:bg-red-500 selection:text-white"
    >
      
      {/* Dynamic Parallax Glow Orb Following Mouse */}
      <motion.div 
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center z-0"
      >
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-red-600/25 to-rose-500/15 rounded-full blur-[160px] animate-pulse" />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center my-auto">
        
        {/* Interactive Headline & Badge Group */}
        <motion.div style={{ x: textX, y: textY }} className="space-y-6">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-slate-900/90 border border-red-500/30 backdrop-blur-xl rounded-full px-4 py-1.5 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span className="text-slate-200 text-xs font-semibold tracking-wide">
              LNBG International Investment
            </span>
          </motion.div>

          {/* High Impact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight"
          >
            Capital that moves <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              markets forward.
            </span>
          </motion.h1>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-8 py-4 rounded-full text-sm font-bold shadow-xl shadow-red-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/our-services"
              className="inline-flex items-center gap-2.5 bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md border border-white/15 text-white px-8 py-4 rounded-full text-sm font-bold hover:border-red-500/40 transition-all duration-200"
            >
              Explore Services
            </Link>
          </motion.div>

        </motion.div>

        {/* 3D Tilting Glass Stat Cards */}
        <motion.div
          style={{
            rotateX: cardsRotateX,
            rotateY: cardsRotateY,
            transformStyle: 'preserve-3d',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 [perspective:1000px]"
        >
          {stats.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:bg-slate-800/80 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-950/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-white leading-none mb-1 font-mono">
                    {card.value}
                  </div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    {card.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}