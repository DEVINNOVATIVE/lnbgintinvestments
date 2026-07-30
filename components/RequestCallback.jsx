import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function RequestCallback() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/95 via-red-800/90 to-slate-900/85" />
      <div className="absolute inset-0 bg-grid-dark opacity-20" />

      <div className="absolute top-10 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Request a Free Call Back
            </h2>
            <p className="text-red-100 text-lg max-w-xl">
              Discover how LNBIG INT Investments can help grow your business. Our team is ready to assist you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-red-700 px-7 py-3.5 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+447867447127"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
