'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { services, getAllCategories } from '@/lib/serviceData';
import { getServiceIcon } from '@/lib/serviceIcons';
import { Calendar, User, ArrowRight } from 'lucide-react';
import ServicesSidebar from '@/components/ServicesSidebar';

const ITEMS_PER_PAGE = 4;

export default function ServicesListing() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryOptions = [
    { label: 'All', count: services.length },
    ...getAllCategories(),
  ];

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((service) => service.categories?.includes(selectedCategory));

  const totalPages = Math.max(1, Math.ceil(filteredServices.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleServices = filteredServices.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  function handlePageChange(page) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* ── LEFT: SERVICE POST LIST ───────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 space-y-8"
          >
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-600"
              >
                No services found for this category yet.
              </motion.div>
            ) : (
              visibleServices.map((service, index) => {
                const Icon = getServiceIcon(service.iconName);
                return (
                  <motion.article
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
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
                  </motion.article>
                );
              })
            )}

            {/* ── PAGINATION ────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex items-center justify-center gap-1.5 pt-4"
            >
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
            </motion.div>

            {/* Page info */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-center text-xs text-slate-400 -mt-2"
            >
              Showing {filteredServices.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredServices.length)} of {filteredServices.length} services
              {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            </motion.p>
          </motion.div>

          {/* ── RIGHT SIDEBAR ─────────────────── */}
          <ServicesSidebar
            categories={categoryOptions}
            activeCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </div>
      </div>
    </section>
  );
}
