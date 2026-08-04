// import { CheckCircle } from 'lucide-react';

// const checkpoints = [
//   'Solution for small & large businesses',
//   'Creation of automated process control systems through our professional network',
//   'Algorithmic trading solution to support automated crypto trading for buy-side and sell-side clients.',
// ];

// export default function Mission() {
//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60" />

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left content */}
//           <div className="animate-slide-in-left">
//             <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 rounded-full px-4 py-1.5 mb-5">
//               <span className="w-2 h-2 bg-red-600 rounded-full" />
//               <span className="text-xs font-semibold uppercase tracking-widest">Our Mission</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
//               Our mission is to provide access to a wide range of {' '}
//               <span className="text-gradient">strategic services</span>
//             </h2>
//             <p className="text-slate-600 mb-6 leading-relaxed">
//               Our vision is to increase stakeholders’ value through employing effective technology, sales and marketing practices, to serve the needs of our customers, while increasing international and domestic market share, and to conduct ourselves with integrity, speed, and flexibility. When dealing with Employees, Customers, and the Community, we never compromise on our high level of standards and Environmental awareness.
//             </p>
//             <ul className="space-y-3 mb-8">
//               {checkpoints.map((item, i) => (
//                 <li key={i} className="flex items-start gap-3 group">
//                   <div className="w-6 h-6 rounded-full bg-red-50 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
//                     <CheckCircle className="w-4 h-4 text-red-600 group-hover:text-white transition-colors duration-300" />
//                   </div>
//                   <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right images - collage */}
//           <div className="grid grid-cols-2 gap-4 animate-slide-in-right relative">
//             <div className="rounded-2xl overflow-hidden h-64 shadow-card hover:shadow-card-hover transition-shadow duration-300 group relative">
//               <img
//                 src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Business meeting"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
//             </div>
//             <div className="rounded-2xl overflow-hidden h-64 mt-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 group relative">
//               <img
//                 src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Mobile trading"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
//             </div>
//             <div className="rounded-2xl overflow-hidden h-48 col-span-2 shadow-card hover:shadow-card-hover transition-shadow duration-300 group relative">
//               <img
//                 src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Team collaboration"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
//               <div className="absolute bottom-4 left-4 text-white">
//                 <div className="text-sm font-semibold">Collaborative Excellence</div>
//                 <div className="text-xs text-white/70">Building partnerships that last</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Award, ShieldCheck } from 'lucide-react';

const checkpoints = [
  'Solution for small & large businesses',
  'Creation of automated process control systems through our professional network',
  'Algorithmic trading solution to support automated crypto trading for buy-side and sell-side clients.',
];

export default function Mission() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 shadow-sm">
                <Target className="w-4 h-4 text-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Our Mission & Vision
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight"
            >
              Our mission is to provide access to a wide range of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-500">
                strategic services
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
            >
              Our vision is to increase stakeholders’ value through employing effective technology, sales, and marketing practices to serve the needs of our customers. We aim to increase international and domestic market share while conducting ourselves with integrity, speed, and flexibility—never compromising on high standards or environmental awareness.
            </motion.p>

            <div className="space-y-4 pt-2">
              {checkpoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100 group"
                >
                  <div className="w-7 h-7 rounded-full bg-red-100 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="pt-6 border-t border-slate-200/80 flex items-center gap-5"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 shadow-lg flex-shrink-0">
                <Image
                  src="/assets/founder.jpeg"
                  alt="Lord Neil B Gibson"
                  fill
                  quality={100}
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 leading-snug">Lord Neil B Gibson</h4>
                <p className="text-sm font-semibold text-slate-500">CEO &amp; Company Founder</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="col-span-7 relative group rounded-3xl overflow-hidden shadow-2xl border border-white/50"
              >
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src="/assets/crypto-trade.jpg"
                    alt="Automated Crypto Trading Solution"
                    fill
                    quality={100}
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold uppercase tracking-wider text-red-400">Trading Technology</div>
                    <div className="text-sm font-bold">Automated Systems</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="col-span-5 bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-2"
              >
                <div className="w-10 h-10 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                </div>
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-slate-400 font-medium leading-tight">
                  Integrity &amp; Compliance Standards
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-12 relative group rounded-3xl overflow-hidden shadow-2xl border border-white/50 mt-2"
              >
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="/assets/lnbg-meeting-2.jpg"
                    alt="LNBG International Meeting"
                    fill
                    quality={100}
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/80 text-white text-xs font-semibold backdrop-blur-md mb-2">
                        <Award className="w-3.5 h-3.5" /> Global Standards
                      </span>
                      <h3 className="text-lg font-bold">Professional Network</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}