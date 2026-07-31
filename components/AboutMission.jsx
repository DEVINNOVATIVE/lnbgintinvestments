

// 'use client';

// import Image from 'next/image';
// import { CheckCircle2, Target, Award, ShieldCheck } from 'lucide-react';

// const checkpoints = [
//   'Solution for small & large businesses',
//   'Ease you get credit loan amount in your bank account'
  
// ];

// export default function AboutMission() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
//       {/* Background Decorative Glow Effects */}
//       <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left Column: Mission Content */}
//           <div className="lg:col-span-6 space-y-8">
//             {/* Pill Tag */}
//             <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 shadow-sm">
//               <Target className="w-4 h-4 text-red-600" />
//               <span className="text-xs font-bold uppercase tracking-wider text-red-600">
//                 Our Mission & Vision
//               </span>
//             </div>

//             {/* Main Headline */}
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
//               Our mission is to provide access to a wide range of{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-500">
//                 strategic services
//               </span>
//             </h2>

//             {/* Mission Statement Description */}
//             <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
//              Our vision is to increase stakeholders’ value through employing effective technology, sales and marketing practices, to serve the needs of our customers, while increasing international and domestic market share, and to conduct ourselves with integrity, speed, and flexibility. When dealing with Employees, Customers, and the Community, we never compromise on our high level of standards and Environmental awareness.
//             </p>

//             {/* Checkpoints List */}
//             <div className="space-y-4 pt-2">
//               {checkpoints.map((item, i) => (
//                 <div 
//                   key={i} 
//                   className="flex items-start gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100 group"
//                 >
//                   <div className="w-7 h-7 rounded-full bg-red-100 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
//                     <CheckCircle2 className="w-4 h-4 text-red-600 group-hover:text-white transition-colors duration-300" />
//                   </div>
//                   <span className="text-slate-700 text-sm font-medium leading-relaxed">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Founder Profile Card */}
//             <div className="pt-6 border-t border-slate-200/80 flex items-center gap-5">
//               <div className="relative w-16 h-16 rounded-full overflow-hidden border-2  shadow-lg flex-shrink-0">
//                 <Image
//                   src="/assets/founder.png" // Ensure this image is saved in public/assets/
//                   alt="Lord Neil B Gibson"
//                   fill
//                   quality={100}
//                   unoptimized
//                   className="object-cover object-top"
//                 />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-slate-900 leading-snug">
//                   Lord Neil B Gibson
//                 </h4>
//                 <p className="text-sm font-semibold text-slate-500">
//                   CEO &amp; Company Founder
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Modern Image Collage & Badge Overlay */}
//           <div className="lg:col-span-6 relative">
//             <div className="grid grid-cols-12 gap-4 items-center">
              
//               {/* Top Image Card (Crypto Trade) */}
//               <div className="col-span-7 relative group rounded-3xl overflow-hidden shadow-2xl border border-white/50">
//                 <div className="relative h-64 sm:h-72 w-full">
//                   <Image
//                     src="/assets/crypto-trade.jpg"
//                     alt="Automated Crypto Trading Solution"
//                     fill
//                     quality={100}
//                     unoptimized
//                     className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
//                   <div className="absolute bottom-4 left-4 right-4 text-white">
//                     <div className="text-xs font-semibold uppercase tracking-wider text-red-400">Trading Technology</div>
//                     <div className="text-sm font-bold">Automated Systems</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Stat Badge */}
//               <div className="col-span-5 bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-2">
//                 <div className="w-10 h-10 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center">
//                   <ShieldCheck className="w-5 h-5 text-red-500" />
//                 </div>
//                 <div className="text-2xl font-black text-white">100%</div>
//                 <div className="text-xs text-slate-400 font-medium leading-tight">
//                   Integrity &amp; Compliance Standards
//                 </div>
//               </div>

//               {/* Bottom Main Image Card (Meeting) */}
//               <div className="col-span-12 relative group rounded-3xl overflow-hidden shadow-2xl border border-white/50 mt-2">
//                 <div className="relative h-72 sm:h-80 w-full">
//                   <Image
//                     src="/assets/lnbg-meeting-2.jpg"
//                     alt="LNBG International Meeting"
//                     fill
//                     quality={100}
//                     unoptimized
//                     className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
//                   {/* Floating Overlay Content */}
//                   <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
//                     <div>
//                       <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/80 text-white text-xs font-semibold backdrop-blur-md mb-2">
//                         <Award className="w-3.5 h-3.5" /> Global Standards
//                       </span>
//                       <h3 className="text-lg font-bold">Professional Network</h3>
//                     </div>
//                   </div>
//                 </div>
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
import { CheckCircle2, Target } from 'lucide-react';

const checkpoints = [
  'Solution for small & large businesses',
  'Ease you get credit loan amount in your bank account',
];

export default function AboutMission() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mission Content */}
          <div className="lg:col-span-6 space-y-8">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 shadow-sm">
              <Target className="w-4 h-4 text-red-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Our Mission &amp; Vision
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Our mission is to provide access to a wide range of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-500">
                strategic services
              </span>
            </h2>

            {/* Mission Statement Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Our vision is to increase stakeholders’ value through employing effective technology, sales and marketing practices, to serve the needs of our customers, while increasing international and domestic market share, and to conduct ourselves with integrity, speed, and flexibility. When dealing with Employees, Customers, and the Community, we never compromise on our high level of standards and Environmental awareness.
            </p>

            {/* Checkpoints List */}
            <div className="space-y-4 pt-2">
              {checkpoints.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100 group"
                >
                  <div className="w-7 h-7 rounded-full bg-red-100 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Founder Profile Card */}
            <div className="pt-6 border-t border-slate-200/80 flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2shadow-lg flex-shrink-0">
                <Image
                  src="/assets/founder.png"
                  alt="Lord Neil B Gibson"
                  fill
                  quality={100}
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 leading-snug">
                  Lord Neil B Gibson
                </h4>
                <p className="text-sm font-semibold text-slate-500">
                  CEO &amp; Company Founder
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Overlapping Layered Image Collage using ONLY m1.jpg & m2.jpg */}
          <div className="lg:col-span-6 relative pb-12 sm:pb-16 lg:pb-20 pr-6 sm:pr-12">
            
            {/* Primary Main Image: m1.jpg */}
            <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-white/80 group">
              <Image
                src="/assets/m1.jpg"
                alt="LNBG International Team Meeting"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Overlapping Foreground Image: m2.jpg */}
            <div className="absolute bottom-0 right-0 w-[70%] sm:w-[65%] h-[230px] sm:h-[280px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-8 border-white group z-20">
              <Image
                src="/assets/m2.jpg"
                alt="LNBG Strategic Planning"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}