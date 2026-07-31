// import { Target, BarChart3, Building2, LineChart, Cpu, ShieldCheck, Globe, Bitcoin, ArrowRight } from 'lucide-react';

// const services = [
//   { icon: Target, title: 'Business Strategy', desc: 'Partnering with some of the leading-edge digital companies allows us to expand our portfolio and pass on those services to' },
//   { icon: BarChart3, title: 'Asset Management', desc: 'LNBG INT INVESTMENT asset management services are built around portfolio management   Research and dealing; innovative product development, marketing, and' },
//   { icon: Building2, title: 'Corporate Investments', desc: 'LNBG INT INVESTMENTS aim is to carry out highly selective investments in regions and entities where there is high potential' },
//   { icon: LineChart, title: 'Markets Research', desc: 'LNBG INT INVESTMENTS for the past 25 years designed and implemented virtually every type of business research for hundreds of' },
//   { icon: Cpu, title: 'Real Estate Investment', desc: 'A REIT Management Company (RMC) identifies a project and raises public money through an Initial public offering (IPO). The RMC' },
//   { icon: ShieldCheck, title: 'Global Services', desc: 'Partnering with some of the leading-edge digital companies allows us to expand our portfolio and pass on those services to' },
//   { icon: Globe, title: 'Bond Market', desc: 'Offering unrivalled services to our clients as we follow evolving trends within the marketplace and pursue measured growth. Challenge: LNBG' },
//   { icon: Bitcoin, title: 'Commodity Investments', desc: 'LNBG INT INVESTMENTS offers commodity funds investment in raw materials or primary agricultural products, precious metals, such as gold and' },
// ];

// export default function Services8() {
//   return (
//     <section className="py-12 bg-slate-50 relative overflow-hidden">
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50" />
//       <div className="absolute inset-0 bg-grid opacity-20" />

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-1.5 mb-4">
//             <span className="w-2 h-2 bg-red-600 rounded-full" />
//             <span className="text-xs font-semibold uppercase tracking-widest">What we offer</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//             Our <span className="text-gradient">Services</span>
//           </h2>
//           <p className="text-slate-500 max-w-2xl mx-auto">
//             Comprehensive solutions designed to accelerate your business growth across every dimension.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, i) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={i}
//                 className="group relative bg-white p-7 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-100 hover:border-red-200 hover:-translate-y-2 overflow-hidden"
//               >
//                 {/* Hover gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/50 group-hover:to-transparent transition-all duration-500" />

//                 <div className="relative z-10">
//                   <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                     <Icon className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.desc}</p>
//                   <div className="flex items-center gap-2 text-red-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
//                     READ MORE
//                     <ArrowRight className="w-4 h-4" />
//                   </div>
//                 </div>

//                 {/* Bottom accent bar */}
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-rose-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import {
  Briefcase,
  TrendingUp,
  Building2,
  BarChart3,
  Building,
  Globe2,
  Landmark,
  Coins,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    slug: 'business-strategy',
    icon: Briefcase,
    title: 'Business Strategy',
    desc: 'Partnering with leading-edge digital companies allows us to expand our portfolio and pass on strategic solutions to our clients.'
  },
  {
    slug: 'asset-management',
    icon: TrendingUp,
    title: 'Asset Management',
    desc: 'LNBG INT INVESTMENT asset management services are built around portfolio management, research, dealing, and innovative product development.'
  },
  {
    slug: 'corporate-investments',
    icon: Building2,
    title: 'Corporate Investments',
    desc: 'LNBG INT INVESTMENTS aims to carry out highly selective investments in regions and entities where there is exceptional growth potential.'
  },
  {
    slug: 'markets-research',
    icon: BarChart3,
    title: 'Markets Research',
    desc: 'LNBG INT INVESTMENTS has designed and implemented virtually every type of business research for hundreds of global entities over 25 years.'
  },
  {
    slug: 'real-estate-investment',
    icon: Building,
    title: 'Real Estate Investment',
    desc: 'A REIT Management Company (RMC) identifies premier projects and raises capital through structured public offerings.'
  },
  {
    slug: 'global-services',
    icon: Globe2,
    title: 'Global Services',
    desc: 'Partnering with top-tier international digital and financial platforms to expand global capabilities for our client base.'
  },
  {
    slug: 'bond-market',
    icon: Landmark,
    title: 'Bond Market',
    desc: 'Offering unrivaled services as we track evolving marketplace trends and pursue measured capital growth across fixed-income instruments.'
  },
  {
    slug: 'commodity-investments',
    icon: Coins,
    title: 'Commodity Investments',
    desc: 'LNBG INT INVESTMENTS offers commodity fund investments in primary agricultural products, raw materials, and precious metals like gold.'
  },
];

export default function Services8() {
  return (
    <section className="py-8 sm:py-12 bg-slate-50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-1.5 mb-4 border border-red-200/60 shadow-sm">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-widest">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-500">
              Services
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive financial and investment solutions designed to accelerate your capital growth across every dimension.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group relative bg-white p-7 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300 border border-slate-200/80 hover:border-red-200 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-red-50/20 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-rose-700 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-red-600/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>
                </div>

                {/* Read More Link */}
                <Link href={`/services/${service.slug}`} className="text-red-600 text-xs cursor-pointer font-bold uppercase tracking-wider group-hover:translate-x-1 transition-all duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>


                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}