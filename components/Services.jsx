import Link from 'next/link';
import { services } from '@/lib/serviceData';
import { getServiceIcon } from '@/lib/serviceIcons';
import { ArrowRight } from 'lucide-react';

const FEATURED_COUNT = 4;

export default function Services() {
  const featuredServices = services.slice(0, FEATURED_COUNT);

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
          {featuredServices.map((service, i) => {
            const Icon = getServiceIcon(service.iconName);
            const isDefaultRed = i === 0;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative p-8 rounded-2xl transition-all duration-500 border flex flex-col justify-between text-center overflow-hidden ${
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
                    className={`text-sm leading-relaxed mb-8 transition-colors duration-300 font-normal line-clamp-3 ${
                      isDefaultRed ? 'text-red-50' : 'text-slate-500 group-hover:text-red-100'
                    }`}
                  >
                    {service.shortDesc}
                  </p>
                </div>

                {/* READ MORE CTA */}
                <div className="relative z-10 pt-2 border-t border-white/10 group-hover:border-white/20">
                  <span
                    className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                      isDefaultRed
                        ? 'text-white group-hover:text-white'
                        : 'text-slate-600 group-hover:text-white'
                    }`}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>

              </Link>
            );
          })}
        </div>

        {/* View all services */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-bold tracking-wide shadow-lg shadow-slate-200/50 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-red-600/20 transition-all duration-300 group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}