
// 'use client';

// import Image from 'next/image';
// import { Sparkles, Building2, TrendingUp, ShieldCheck } from 'lucide-react';

// export default function ServicesIntro() {
//   return (
//     <section className="py-20 lg:py-28 bg-slate-50/50 relative overflow-hidden">
//       {/* Background Decorative Blur Glows */}
//       <div className="absolute top-1/3 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-[130px] pointer-events-none" />
//       <div className="absolute -bottom-20 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left Column: Modern Content Hierarchy */}
//           <div className="lg:col-span-7 space-y-8">
            
//             {/* Category Tag */}
//             <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100/80 rounded-full px-4 py-1.5 shadow-sm">
//               <Sparkles className="w-4 h-4 text-red-600" />
//               <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">
//                 Leading Financial Advisory
//               </span>
//             </div>

//             {/* Main Title */}
//             <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-[1.18] tracking-tight">
//               LNBG INT INVESTMENTS is one of the leading financial advisors to the local{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-500">
//                 Investment Management
//               </span>{' '}
//               industry.
//             </h2>

//             {/* Text Paragraphs */}
//             <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
//               <p className="p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-sm backdrop-blur-sm">
//                 Our integrated teams of professionals from our Audit, Tax, and Advisory practices provide our clients with an in-depth understanding of the markets in which they operate, offering strategies spanning the fund lifecycle from value creation to realization.
//               </p>

//               <p>
//                 We aim to provide you with a tailored service of the highest standard. <strong className="text-slate-900 font-bold">LNBG INT INVESTMENTS</strong> is focused on our objectives of building trusted relationships and delivering quality service through project teams that directly support you and your investment activity.
//               </p>

//               <p>
//                 We offer professional services to clients of all sizes, at local and global levels. Our firm’s broad range of clients include investment managers, wealth managers, fund administrators, and service providers who focus on mutual funds, hedge funds, private equity funds, infrastructure funds, and alternative investment funds.
//               </p>
//             </div>

//             {/* Key Value Badges */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
//               <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
//                 <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
//                   <Building2 className="w-5 h-5 text-red-600" />
//                 </div>
//                 <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
//                   Global Reach
//                 </span>
//               </div>

//               <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
//                 <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
//                   <TrendingUp className="w-5 h-5 text-red-600" />
//                 </div>
//                 <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
//                   Value Creation
//                 </span>
//               </div>

//               <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
//                 <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
//                   <ShieldCheck className="w-5 h-5 text-red-600" />
//                 </div>
//                 <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
//                   Tailored Advice
//                 </span>
//               </div>
//             </div>

//           </div>

//           {/* Right Column: Layered Framed Image Collage */}
//           <div className="lg:col-span-5 relative pt-6 lg:pt-0">
//             <div className="grid grid-cols-12 gap-4 items-center w-full relative">
              
//               {/* Image Card 1: London Bridge Background Image */}
//               <div className="col-span-6 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500">
//                 <div className="relative h-64 sm:h-80 w-full">
//                   <Image
//                     src="/assets/service2.jpg"
//                     alt="LNBG Global Reach"
//                     fill
//                     quality={100}
//                     unoptimized
//                     className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
//                 </div>
//               </div>

//               {/* Image Card 2: Strategy Document & Handshake Overlay */}
//               <div className="col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group -translate-y-6 hover:shadow-2xl hover:shadow-red-600/15 transition-all duration-500 z-10">
//                 <div className="relative h-72 sm:h-96 w-full">
//                   <Image
//                     src="/assets/service1.jpg"
//                     alt="Financial Strategy Advisory"
//                     fill
//                     quality={100}
//                     unoptimized
//                     className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
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
import { Sparkles, Building2, TrendingUp, ShieldCheck, Award } from 'lucide-react';

export default function ServicesIntro() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Hierarchy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100/80 rounded-full px-4 py-1.5 shadow-sm">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Leading Financial Advisory
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.18] tracking-tight">
              LNBG INT INVESTMENTS is one of the leading financial advisors to the local{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-500">
                Investment Management
              </span>{' '}
              industry.
            </h2>

            <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p className="p-4 rounded-2xl bg-white/90 border border-slate-100 shadow-sm backdrop-blur-sm">
                Our integrated teams of professionals from our Audit, Tax, and Advisory practices provide our clients with an in-depth understanding of the markets in which they operate, offering strategies spanning the fund lifecycle from value creation to realization.
              </p>
              <p>
                We aim to provide you with a tailored service of the highest standard. <strong className="text-slate-900 font-bold">LNBG INT INVESTMENTS</strong> is focused on our objectives of building trusted relationships and delivering quality service.
              </p>
              <p>
                We offer professional services to clients of all sizes, at local and global levels including investment managers, wealth managers, and fund administrators.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                <Building2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Global Reach</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                <TrendingUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Value Creation</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Tailored Advice</span>
              </div>
            </div>
          </div>

          {/* Right Column: STRUCTURE 1 - Overlapping Stack with Glass Badge */}
          <div className="lg:col-span-6 relative pb-12 sm:pb-16 lg:pb-20 pr-4 sm:pr-8 pl-4">
            
            {/* Primary Large Image */}
            <div className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <Image
                src="/assets/service1.jpg"
                alt="LNBG Financial Advisory Services"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute bottom-0 right-0 w-[60%] sm:w-[55%] h-[220px] sm:h-[260px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-[6px] border-white bg-white group z-20">
              <Image
                src="/assets/service2.jpg"
                alt="Investment Strategy & Planning"
                fill
                quality={100}
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Floating Glassmorphic Badge */}
            <div className="absolute top-6 left-0 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 z-30">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-red-600/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-red-600">Top Rated</div>
                <div className="text-sm font-bold text-slate-900">Financial Advisors</div>
              </div>
            </div>

          </div>
          

        </div>
      </div>
    </section>
  );
}