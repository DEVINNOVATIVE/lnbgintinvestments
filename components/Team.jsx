'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const team = [
  {
    name: 'Neil B Gibson',
    role: 'CEO/ Founder',
    image: '/assets/ceo.jpeg',
  },
  {
    name: 'Rached Arfaoui',
    role: 'Managing Director',
    image: '/assets/rashed-1.png',
  },
  {
    name: 'Ladd Tanner',
    role: 'Vice President',
    image: '/assets/linda-heath.png',
  },
  {
    name: 'Habib Rehman',
    role: 'Marketing & Development',
    image: '/assets/habib-rehman.png',
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Minimal Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-base font-bold font-mono tracking-[0.3em] text-red-600 uppercase mb-3">
            Leadership
          </p>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
            Meet Our <span className="font-semibold text-slate-900">Team</span>
          </h2>
        </div>

        {/* Circular Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Circular Avatar Container with Gradient Glow Ring */}
              <div className="relative w-48 h-48 sm:w-52 sm:h-52 mb-6">
                {/* Glow ring on hover */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                {/* Border ring */}
                <div className="relative w-full h-full rounded-full p-1 bg-slate-50 border border-slate-200 group-hover:border-transparent transition-colors duration-500 shadow-sm">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      unoptimized
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Minimal Meta */}
              <h3 className="text-lg font-medium text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-xs font-mono tracking-wider text-slate-500 uppercase mt-1">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sleek CTA Line */}
        <div className="mt-20 pt-8 border-t border-slate-100 flex items-center justify-between text-sm">
          <span className="text-slate-500 font-light">Interested in working with us?</span>
          <Link 
            href="/contact" 
            className="group inline-flex items-center gap-2 font-medium text-slate-900 hover:text-red-600 transition-colors"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>

      </div>
    </section>
  );
}