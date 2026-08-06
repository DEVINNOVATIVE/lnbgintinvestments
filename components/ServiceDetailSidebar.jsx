import Link from 'next/link';
import { services } from '@/lib/serviceData';
import { getServiceIcon } from '@/lib/serviceIcons';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ServiceDetailSidebar({ activeSlug }) {
  return (
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
              +1 818 575 0663
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
            const SIcon = getServiceIcon(s.iconName);
            const isActive = s.slug === activeSlug;
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
  );
}
