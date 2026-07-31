import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/lib/serviceData';
import { Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers, Home as HomeIcon, Download, Phone, Mail, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const iconMap = {
    Target,
    BarChart3,
    Building2,
    LineChart,
    Globe2,
    TrendingUp,
    Layers,
    HomeIcon,
};

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
    const service = getServiceBySlug(params.slug);
    if (!service) return { title: 'Service Not Found' };
    return { title: `${service.title} | LNBIG INT Investments` };
}

export default function ServiceDetailPage({ params }) {
    const service = getServiceBySlug(params.slug);
    if (!service) notFound();

    const Icon = iconMap[service.iconName] || Target;
    const currentIndex = services.findIndex((s) => s.slug === service.slug);
    const prev = services[(currentIndex - 1 + services.length) % services.length];
    const next = services[(currentIndex + 1) % services.length];

    return (
        <>
            <Navbar />
            <PageHero title={`${service.title} - LNBG INT INVESTMENTS`} check = {true} />



            {/* Main content */}
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
                            <a
                                href="#pdf"
                                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-glow mb-10"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </a>

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
                            <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-100 gap-4">
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
                        <div className="lg:col-span-1 space-y-6">
                            {/* Need Help? card */}
                            <div className="bg-slate-700 text-white rounded-2xl p-7">
                                <h3 className="text-xl font-bold mb-5">Need Help?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            Arawak chamber Mandar house 3rd floor johsons ghut tortola (VI), VG1 1050
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                                        <a href="tel:+447867447127" className="text-slate-300 text-sm hover:text-white transition-colors">
                                            +44-7867-447527
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                                        <a href="mailto:lnbig@lnbig.com" className="text-slate-300 text-sm hover:text-white transition-colors">
                                            lnbig@lnbig.com
                                        </a>
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-glow flex items-center justify-center gap-2"
                                >
                                    Contact Us
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* All Services list */}
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-4">All Services</h4>
                                <ul className="space-y-1">
                                    {services.map((s) => {
                                        const SIcon = iconMap[s.iconName] || Target;
                                        const isActive = s.slug === service.slug;
                                        return (
                                            <li key={s.slug}>
                                                <Link
                                                    href={`/services/${s.slug}`}
                                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                                            ? 'bg-red-600 text-white shadow-glow'
                                                            : 'text-slate-700 hover:bg-white hover:text-red-600 hover:shadow-card'
                                                        }`}
                                                >
                                                    <SIcon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-red-500'}`} />
                                                    {s.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                       
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
