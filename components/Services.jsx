'use client';

import Link from 'next/link';
import { Target, BarChart3, Building2, LineChart, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Business Strategy',
    desc: 'Partnering with some of the leading-edge digital companies allows us to expand',
    featured: true, // Red background by default
  },
  {
    icon: BarChart3,
    title: 'Asset Management',
    desc: 'LNBG INT INVESTMENT asset management services are built around portfolio management',
    featured: false, // Red background by default
  },
  {
    icon: Building2,
    title: 'Corporate Investments',
    desc: 'LNBG INT INVESTMENTS aim is to carry out highly selective investments in',
    featured: false, // White default, turns Red on hover
  },
  {
    icon: LineChart,
    title: 'Markets Research',
    desc: 'LNBG INT INVESTMENTS for the past 25 years designed and implemented virtually',
    featured: false, // White default, turns Red on hover
  },
];

export default function Services() {
  return (
    <section className="py-8 bg-slate-50/70 relative overflow-hidden">
      {/* Background Decorative Blur Glows */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
              What we do
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Services</span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Comprehensive financial and strategic solutions tailored to accelerate your business potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isDefaultRed = service.featured;

            return (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl transition-all duration-500 border flex flex-col justify-between text-center overflow-hidden cursor-pointer ${
                  isDefaultRed
                    ? 'bg-gradient-to-b from-red-600 via-red-650 to-red-700 border-red-600 text-white shadow-xl shadow-red-600/20 hover:-translate-y-2'
                    : 'bg-white border-slate-100/80 text-slate-900 shadow-lg shadow-slate-200/50 hover:bg-gradient-to-b hover:from-red-600 hover:to-red-700 hover:border-red-600 hover:text-white hover:shadow-xl hover:shadow-red-600/20 hover:-translate-y-2'
                }`}
              >
                {/* SVG Topographic Pattern Effect on Red Background */}
                <div 
                  className={`absolute inset-0 pointer-events-none opacity-10 transition-opacity duration-500 ${
                    isDefaultRed ? 'opacity-15' : 'opacity-0 group-hover:opacity-15'
                  }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm48 25c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm-43-7c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm63 31c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
                  }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  
                  {/* Icon Circle Container */}
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md transition-all duration-500 ${
                      isDefaultRed
                        ? 'bg-white text-red-600 group-hover:scale-110'
                        : 'bg-red-600 text-white group-hover:bg-white group-hover:text-red-600 group-hover:scale-110'
                    }`}
                  >
                    <Icon className="w-9 h-9 stroke-[1.8] transition-colors duration-500" />
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`text-xl font-extrabold mb-4 transition-colors duration-300 ${
                      isDefaultRed ? 'text-white' : 'text-slate-900 group-hover:text-white'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-8 transition-colors duration-300 font-normal ${
                      isDefaultRed ? 'text-red-50' : 'text-slate-500 group-hover:text-red-100'
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* READ MORE CTA */}
                <div className="relative z-10 pt-2 border-t border-white/10 group-hover:border-white/20">
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                      isDefaultRed
                        ? 'text-white group-hover:text-white'
                        : 'text-slate-600 group-hover:text-white'
                    }`}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}