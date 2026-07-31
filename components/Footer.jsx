
'use client';

import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';
import { footerQuickLinks } from '@/lib/serviceData';
export default function Footer() {
  return (
    <footer className="bg-[#0B1426] text-slate-300 relative overflow-hidden">
      {/* Top subtle glow divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
      
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-800/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: About Us */}
          <div className="space-y-6">
            <h3 className="text-white font-extrabold text-lg lg:text-xl tracking-tight relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-red-600 rounded-full -mb-1" />
            </h3>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              LNBG INT INVESTMENTS is a IBC (International Business Company). We are also known by the Acronym. “LNBG”. LNBG is a company offering an alternative to Traditional funding.
            </p>

            {/* Social Icons (Circular Buttons) */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/profile.php?id=100054225712026#"
                target="_blank"

                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:border-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <Facebook className="w-4 h-4" />
              </Link>

              {/* Twitter */}
              <Link     
                href="https://x.com/lordneilgibson?lang=en"
                target="_blank"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:border-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <Twitter className="w-4 h-4" />
              </Link>

              {/* LinkedIn */}
              <Link 
                href="https://www.linkedin.com/in/lord-neil-gibson-846a2b98"
                target="_blank"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:border-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <Linkedin className="w-4 h-4" />
              </Link>

              {/* Pinterest (Custom SVG Icon) */}
              <Link
                href="#"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:border-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </Link>

              {/* Google+ (Custom SVG Icon) */}
              <Link
                href="https://www.google.com/search?q=lord+Neil+Gibson+International+Investment+Limited+Ltd&amp;stick=H4sIAAAAAAAAA"
                target="_blank" 
                aria-label="Google Plus"
                className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:border-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md font-bold text-xs"
              >
                G+
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6 md:pl-8">
            <h3 className="text-white font-extrabold text-lg lg:text-xl tracking-tight relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-red-600 rounded-full -mb-1" />
            </h3>

            <ul className="space-y-3.5 text-sm sm:text-base">
              {footerQuickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.slug ? `/services/${link.slug}` : link.href}
                    className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-white font-extrabold text-lg lg:text-xl tracking-tight relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-red-600 rounded-full -mb-1" />
            </h3>

            <div className="space-y-5 text-sm sm:text-base">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-300 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-slate-400 leading-relaxed font-normal pt-1">
                  Arawak chamber Mandar house 3rd floor johsons ghut tortola Tortola Central, VG1110, British Virgin Islands
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-300 shadow-sm">
                  <Phone className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <a 
                  href="tel:+447887447527" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
                >
                  +44-7887-447527
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-300 shadow-sm">
                  <Mail className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <a 
                  href="mailto:lnbg@lnbgllc.com" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
                >
                  lnbg@lnbgllc.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800/80 bg-[#070E1B] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
          Copyright {new Date().getFullYear()} LNBG LLC. All Rights Reserved By LNBG INT INVESTMENTS
        </div>
      </div>
    </footer>
  );
}
