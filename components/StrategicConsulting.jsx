// import { CheckCircle, ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// const points = [
//   'We provide access to a wide range of strategic services such as planning and surveying, construction, installation and commissioning works.',
//   'We help our clients to develop and implement strategies that align with their business objectives and drive sustainable growth.',
//   'Our professional network spans across 25+ countries, giving us deep market insight and local expertise.',
// ];

// export default function StrategicConsulting() {
//   return (
//     <section className="py-24 bg-slate-50 relative overflow-hidden">
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50" />
//       <div className="absolute inset-0 bg-grid opacity-20" />

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left: image */}
//           <div className="relative order-2 lg:order-1">
//             <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
//               <img
//                 src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Strategic Consulting"
//                 className="w-full h-[460px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
//             </div>
//             {/* Floating badge */}
//             <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card-hover p-5 border border-slate-100 animate-float">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
//                   <ArrowRight className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-slate-900">25+</div>
//                   <div className="text-xs text-slate-500">Years Experience</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right: content */}
//           <div className="order-1 lg:order-2">
//             <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-1.5 mb-5">
//               <span className="w-2 h-2 bg-red-600 rounded-full" />
//               <span className="text-xs font-semibold uppercase tracking-widest">Our Approach</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
//               Strategic <span className="text-gradient">Consulting</span>
//             </h2>
//             <p className="text-slate-600 leading-relaxed mb-6">
//               LNBIG INT INVESTMENTS provides strategic consulting services that help businesses
//               navigate complex challenges and seize opportunities. Our approach combines deep
//               industry knowledge with practical solutions.
//             </p>
//             <ul className="space-y-3 mb-8">
//               {points.map((p, i) => (
//                 <li key={i} className="flex items-start gap-3 group">
//                   <div className="w-6 h-6 rounded-full bg-red-50 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
//                     <CheckCircle className="w-4 h-4 text-red-600 group-hover:text-white transition-colors duration-300" />
//                   </div>
//                   <span className="text-slate-700 text-sm leading-relaxed">{p}</span>
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href="/contact"
//               className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
//             >
//               Get in touch
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const carouselSlides = [
  {
    title: 'Market Research',
    description:
      'LNBG Analytics produces high-quality, in-depth, and tailored investment and financial research services to help clients successfully navigate financial markets, enhance their portfolios, and make strategic decisions. As one of the top investment research firms, our enthusiastic and exclusive team of financial research analysts delivers distinguished industry and economic insights that aid our clients achieve their goals constantly.',
    completedProjects: '30K',
    successRate: '90%',
  },
  {
    title: 'Strategic Consulting',
    description:
      'In an era of disruption, strategy is more important than ever. We offer creative solutions that have helped thousands of companies across all geographies and sectors develop and execute winning strategies. We’ve been a strategy thought leader for nearly five decades, and we bring unrivaled capabilities, tools, technologies, and talent to every engagement, augmented by an ecosystem of best-of-breed partners that provide specialized expertise.',
    completedProjects: '20K',
    successRate: '88%',
  },
  {
    title: 'Sale Service',
    description:
      'Our team of industry experts manages an extensive network that allows us access to known buyers throughout the region. This includes recent buyers in numerous product types, as well as long-term owners and capital partners. We leverage our relationships to ensure that our clients’ portfolios receive maximum exposure to the market.',
    completedProjects: '18K',
    successRate: '98%',
  },
];

export default function ExpertiseSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#0B1426] text-white py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* --- Left Column (Fixed Text & Progress Bars) --- */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-[1.2] text-white tracking-tight">
              We Believe, The Passion Trying &amp; Skill Can Make A Top-Performing Company.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              As an established Wealth Manager, with a resolute focus on preserving and growing our clients’ wealth, what matters to our clients matters equally to us. We work closely with high net worth individuals, private clients, family offices and businesses to provide bespoke, discretionary and advisory investment services
            </p>

            {/* Progress Bars */}
            <div className="space-y-6 pt-4">
              {/* Progress 1 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white tracking-wide">Strategy &amp; Analysis</span>
                  <span className="text-xs font-bold text-slate-300">88%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full w-[88%] transition-all duration-1000 ease-out" />
                </div>
              </div>

              {/* Progress 2 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white tracking-wide">Economic Growth</span>
                  <span className="text-xs font-bold text-slate-300">95%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full w-[95%] transition-all duration-1000 ease-out" />
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column (Carousel Expertise Content) --- */}
          <div className="lg:col-span-6 lg:border-l lg:border-slate-800/80 lg:pl-12 flex flex-col justify-between min-h-[460px] relative">
            
            <div className="space-y-6 transition-opacity duration-500 ease-in-out">
              {/* Tagline */}
              <div className="text-xs font-bold uppercase tracking-widest text-red-500">
                OUR EXPERTISE
              </div>

              {/* Slide Title */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {carouselSlides[activeSlide].title}
              </h3>

              {/* Slide Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {carouselSlides[activeSlide].description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-slate-200 text-base sm:text-lg font-bold mb-1">
                    Completed projects
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {carouselSlides[activeSlide].completedProjects}
                  </div>
                </div>

                <div>
                  <div className="text-slate-200 text-base sm:text-lg font-bold mb-1">
                    Success Rate
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {carouselSlides[activeSlide].successRate}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-lg shadow-red-600/20 active:scale-[0.98] transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* --- Carousel Navigation Indicators (Pill Style) --- */}
            <div className="flex items-center gap-3 pt-8 mt-auto">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full focus:outline-none ${
                    idx === activeSlide
                      ? 'w-10 h-3 bg-red-600 flex items-center justify-center'
                      : 'w-3 h-3 border-2 border-slate-600 hover:border-slate-400 bg-transparent'
                  }`}
                >
                  {idx === activeSlide && (
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                  )}
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
