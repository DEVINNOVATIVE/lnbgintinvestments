// import Navbar from '@/components/Navbar';
// import PageHero from '@/components/PageHero';
// import ServicesIntro from '@/components/ServicesIntro';
// import Services8 from '@/components/Services8';
// import WhyChooseUs from '@/components/WhyChooseUs';
// import RequestCallback from '@/components/RequestCallback';
// import Footer from '@/components/Footer';
// import Contact from '@/components/Contact';

// export default function ServicesPage() {
//   return (
//     <>
//       <Navbar />
//       <PageHero title="Our Services - LNBG INT INVESTMENTS" subtitle="What We Offer" />
//       <ServicesIntro />
//       <Services8 />
//       {/* <WhyChooseUs /> */}
//       {/* <RequestCallback /> */}
//        <Contact />
//       <Footer />
//     </>
//   );
// }
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/serviceData';
import {
  Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers,
  Home as HomeIcon, Search, Calendar, User, ArrowRight, ChevronRight,
  Folder, Phone, Mail, MapPin, Tag,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

const iconMap = { Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers, HomeIcon };

const ITEMS_PER_PAGE = 4;

const categories = [
  { label: 'Business', count: 3 },
  { label: 'Design', count: 2 },
  { label: 'Determine', count: 6 },
  { label: 'Develop', count: 1 },
  { label: 'Earnestly', count: 2 },
  { label: 'Literature', count: 6 },
  { label: 'Popular', count: 1 },
  { label: 'Uncategorized', count: 3 },
  { label: 'Zealously', count: 5 },
];

const archives = [
  { label: 'March 2022', count: 1 },
  { label: 'December 2021', count: 2 },
  { label: 'September 2021', count: 9 },
];

const galleryImages = [
  'https://images.pexels.com/photos/16282318/pexels-photo-16282318.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/8837261/pexels-photo-8837261.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/17382268/pexels-photo-17382268.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/7640743/pexels-photo-7640743.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/9099824/pexels-photo-9099824.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/38390573/pexels-photo-38390573.jpeg?auto=compress&cs=tinysrgb&w=300',
];

const tags = ['Automate', 'Business', 'Company', 'Excuse', 'Goodness', 'Happen', 'Instruments', 'Postman', 'Sales', 'Success'];

const heroImage = 'https://images.pexels.com/photos/12841258/pexels-photo-12841258.jpeg?auto=compress&cs=tinysrgb&w=1920';

function SectionHeading({ title }) {
  return (
    <div className="mb-5">
      <h4 className="text-base font-bold text-slate-900">{title}</h4>
      <div className="mt-1.5 w-8 h-0.5 bg-red-600 rounded-full" />
    </div>
  );
}

export default function ServicesPage() {
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
    <div className="bg-white">
      {/* ── HERO BANNER ───────────────────────── */}
      {/* <section className="relative h-[340px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Services</h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Services</span>
          </nav>
        </div>
      </section> */}
      <Navbar/>
      <PageHero title="Service - LNBG INT INVESTMENTS" subtitle="What We Offer" />


      {/* ── MAIN CONTENT ──────────────────────── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* ── LEFT: SERVICE POST LIST ───────── */}
            <div className="lg:col-span-2 space-y-8">
              {visibleServices.map((service) => {
                const Icon = iconMap[service.iconName] || Target;
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
                      <div className="flex items-center gap-4 text-xs text-slate-400 mb-2.5">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" /> {service.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" /> {service.date}
                        </span>
                      </div>

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
            <aside className="lg:col-span-1 space-y-8 sticky top-4">
              {/* Search */}
              <div>
                <div className="flex gap-0">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className="flex-1 px-4 py-2.5 border border-slate-200 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-slate-700 placeholder:text-slate-400"
                  />
                  <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-r-lg transition-colors whitespace-nowrap">
                    Search
                  </button>
                </div>
              </div>

              {/* Category List */}
              <div>
                <SectionHeading title="Category List" />
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat.label}>
                      <button className="w-full flex items-center justify-between py-2 text-sm text-slate-600 hover:text-red-600 transition-colors group">
                        <span className="flex items-center gap-2.5">
                          <Folder className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors flex-shrink-0" />
                          {cat.label}
                        </span>
                        <span className="text-xs text-slate-500 group-hover:text-red-500 transition-colors">
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Archives */}
              <div>
                <SectionHeading title="Archives" />
                <ul className="space-y-1">
                  {archives.map((arc) => (
                    <li key={arc.label}>
                      <button className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-red-600 transition-colors group py-1.5">
                        <Folder className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors flex-shrink-0" />
                        {arc.label} ({arc.count})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              <div>
                <SectionHeading title="Gallery" />
                <div className="grid grid-cols-3 gap-1.5">
                  {galleryImages.map((img, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
                      <img
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <SectionHeading title="Tags" />
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1.5 border border-slate-200 text-slate-600 text-xs font-medium rounded hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
