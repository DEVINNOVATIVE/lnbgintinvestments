import Link from 'next/link';
import { services } from '@/lib/serviceData';
import { Download, ArrowRight } from 'lucide-react';
import ServiceDetailSidebar from '@/components/ServiceDetailSidebar';

export default function ServiceDetail({ service }) {
  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const prev = services[(currentIndex - 1 + services.length) % services.length];
  const next = services[(currentIndex + 1) % services.length];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── LEFT / MAIN CONTENT ───────────────────── */}
          <div className="lg:col-span-2">
            {/* Hero image */}
            <div className="rounded-2xl overflow-hidden mb-8 shadow-card">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[340px] md:h-[420px] object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-5">
              {service.specialTitle}
            </h1>

            {/* Full description */}
            <p className="text-slate-600 leading-relaxed mb-8 text-[15px]">
              {service.fullDesc}
            </p>

            {/* Challenge */}
            <div className="mb-7">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Challenge:</h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {service.challenge}
              </p>
            </div>

            {/* Results & Benefits */}
            <div className="mb-9">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Result and client benefits:</h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {service.resultAndBenefits}
              </p>
            </div>

            {/* Download PDF button */}
            {/* <a
              href="#pdf"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-glow mb-10"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a> */}

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {service.galleryImages.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-card group">
                  <img
                    src={img}
                    alt={`${service.title} gallery ${i + 1}`}
                    className="w-full h-44 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Prev / Next service navigation */}
            <div className=" items-center hidden md:flex justify-between mt-10 pt-8 border-t border-slate-100 gap-4">
              <Link
                href={`/services/${prev.slug}`}
                className="group flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-card transition-all duration-300 flex-1 min-w-0"
              >
                <ArrowRight className="w-5 h-5 text-red-600 rotate-180 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                <div className="min-w-0">
                  <div className="text-xs text-slate-400 uppercase tracking-wide">Previous</div>
                  <div className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors truncate">{prev.title}</div>
                </div>
              </Link>

              <Link href="/services" className="text-slate-400 hover:text-red-600 transition-colors flex-shrink-0 px-2 text-xs font-medium uppercase tracking-wide">
                All Services
              </Link>

              <Link
                href={`/services/${next.slug}`}
                className="group flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-card transition-all duration-300 flex-1 min-w-0 justify-end text-right"
              >
                <div className="min-w-0">
                  <div className="text-xs text-slate-400 uppercase tracking-wide">Next</div>
                  <div className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors truncate">{next.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ─────────────────────────── */}
          <ServiceDetailSidebar activeSlug={service.slug} />
        </div>
      </div>
    </section>
  );
}
