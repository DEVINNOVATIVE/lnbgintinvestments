'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/serviceData';
import { getServiceIcon } from '@/lib/serviceIcons';
import { Calendar, User, ArrowRight } from 'lucide-react';
import ServicesSidebar from '@/components/ServicesSidebar';

const ITEMS_PER_PAGE = 4;

export default function ServicesListing() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleServices = services.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function handlePageChange(page) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* ── LEFT: SERVICE POST LIST ───────── */}
          <div className="lg:col-span-2 space-y-8">
            {visibleServices.map((service) => {
              const Icon = getServiceIcon(service.iconName);
              return (
                <article
                  key={service.slug}
                  className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-slate-100"
                >
                  <Link href={`/services/${service.slug}`} className="block relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                  </Link>

                  <div className="p-6">
                

                    <h2 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-red-600 transition-colors leading-snug">
                      <Link href={`/services/${service.slug}`}>{service.specialTitle}</Link>
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.fullDesc}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-red-600 text-sm font-semibold hover:gap-3 transition-all"
                    >
                      READ MORE <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}

            {/* ── PAGINATION ────────────────────── */}
            <div className="flex items-center justify-center gap-1.5 pt-4">
              {/* Prev */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-slate-200 text-slate-400 hover:border-red-300 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm font-medium"
              >
                ‹
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    currentPage === page
                      ? 'bg-red-600 text-white shadow-glow'
                      : 'border border-slate-200 text-slate-600 hover:border-red-300 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-slate-200 text-slate-400 hover:border-red-300 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm font-medium"
              >
                ›
              </button>
            </div>

            {/* Page info */}
            <p className="text-center text-xs text-slate-400 -mt-2">
              Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, services.length)} of {services.length} services
            </p>
          </div>

          {/* ── RIGHT SIDEBAR ─────────────────── */}
          <ServicesSidebar />
        </div>
      </div>
    </section>
  );
}
