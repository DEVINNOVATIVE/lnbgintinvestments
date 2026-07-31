// import Link from 'next/link';
// import { ChevronRight } from 'lucide-react';

// export default function PageHero({ title, subtitle }) {
//   return (
//     <section className="relative py-28 bg-slate-900 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-25"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')",
//         }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900" />
//       <div className="absolute inset-0 bg-grid-dark opacity-30" />

//       {/* Floating shapes */}
//       <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-float" />
//       <div className="absolute bottom-10 left-20 w-56 h-56 bg-rose-500/10 rounded-full blur-3xl animate-float delay-300" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
//         {subtitle && (
//           <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-5">
//             <span className="w-2 h-2 bg-red-500 rounded-full" />
//             <span className="text-red-300 text-xs font-semibold uppercase tracking-widest">
//               {subtitle}
//             </span>
//           </div>
//         )}
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>

//         {/* Breadcrumb */}
//         <nav className="flex items-center justify-center gap-2 text-sm text-slate-400">
//           <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
//           <ChevronRight className="w-4 h-4" />
//           <span className="text-white">{title}</span>
//         </nav>
//       </div>
//     </section>
//   );
// }
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronRight } from 'lucide-react';

export default function PageHero({ title = "About Us - LNBG INT INVESTMENTS",check = false }) {
  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full flex items-center justify-center overflow-hidden bg-slate-950">

        {/* Background Image */}
        <Image
          src="/assets/hero.jpg"
          alt="Page Hero Background"
          fill
          priority
          quality={100}
          unoptimized // Keeps background imagery crisp & clear
          className="object-cover object-center opacity-70"
        />

        {/* Light Overlay for Crisp Text Readability */}
        <div className="absolute " />

        {/* Hero Title */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            {title}
          </h1>
        </div>
      </section>

      {/* Light Breadcrumb Sub-Bar */}
      <div className="w-full bg-[#f7f7f7] border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-red-600 transition-colors"
            >
              <Home className="w-5 h-5 text-black font-bold" />
              <span>Home</span>
            </Link>


            <ChevronRight className="w-3.5 h-3.5 text-black font-bold" />
            {
              check && (
                <>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 hover:text-red-600 transition-colors"
                  >

                    <span>Service</span>
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-black font-bold" />
                </>
              )
            }


            <span className="text-slate-500">
              {title.split('-')[0].trim()}
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
}