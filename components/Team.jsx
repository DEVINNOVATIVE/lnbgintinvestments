'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Mail, ArrowRight, Sparkles, Award, Users, Globe as Globe2 } from 'lucide-react';

const team = [
  {
    name: 'Lord Neil B Gibson',
    role: 'CEO & Founder',
    image: '/assets/founder.jpeg',
    bio: 'Visionary leader with 25+ years steering global investment strategy and corporate growth.',
    tags: ['Strategy', 'Leadership'],
    socials: { linkedin: '#', twitter: '#', email: 'neil@lnbg-int.com' },
    featured: true,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Chief Investment Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f44?auto=format&fit=crop&w=600&q=80',
    bio: 'Heads portfolio management with deep expertise across equities, fixed income, and alternatives.',
    tags: ['Portfolio', 'Equities'],
    socials: { linkedin: '#', twitter: '#', email: 'sarah@lnbg-int.com' },
  },
  {
    name: 'James Carter',
    role: 'Head of Asset Management',
    image: 'https://images.unsplash.com/photo-1560250097-0219db962ad3?auto=format&fit=crop&w=600&q=80',
    bio: 'Leads asset allocation strategy and innovative product development across global markets.',
    tags: ['Assets', 'Global'],
    socials: { linkedin: '#', twitter: '#', email: 'james@lnbg-int.com' },
  },
  {
    name: 'Elena Rodriguez',
    role: 'Director of Research',
    image: 'https://images.unsplash.com/photo-1580489944761-6a2a4ba3b1c9?auto=format&fit=crop&w=600&q=80',
    bio: 'Drives market intelligence and proprietary research powering our investment decisions.',
    tags: ['Research', 'Analytics'],
    socials: { linkedin: '#', twitter: '#', email: 'elena@lnbg-int.com' },
  },
  {
    name: 'Michael Chen',
    role: 'Head of Corporate Investments',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Identifies high-growth opportunities and structures selective corporate investments.',
    tags: ['M&A', 'Growth'],
    socials: { linkedin: '#', twitter: '#', email: 'michael@lnbg-int.com' },
  },
  {
    name: 'Amelia Thompson',
    role: 'Head of Global Services',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
    bio: 'Builds international partnerships across 25+ countries to expand client capabilities.',
    tags: ['Global', 'Partnerships'],
    socials: { linkedin: '#', twitter: '#', email: 'amelia@lnbg-int.com' },
  },
  {
    name: 'David Okafor',
    role: 'Director of Real Estate',
    image: 'https://images.unsplash.com/photo-1500648766842-4b1ad8d7f1f0?auto=format&fit=crop&w=600&q=80',
    bio: 'Manages REIT structures and premier real estate projects across emerging markets.',
    tags: ['Real Estate', 'REIT'],
    socials: { linkedin: '#', twitter: '#', email: 'david@lnbg-int.com' },
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Compliance',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    bio: 'Ensures uncompromising regulatory standards and risk governance across all operations.',
    tags: ['Compliance', 'Risk'],
    socials: { linkedin: '#', twitter: '#', email: 'priya@lnbg-int.com' },
  },
];

const stats = [
  { icon: Users, value: '120+', label: 'Team Members' },
  { icon: Globe2, value: '25+', label: 'Countries' },
  { icon: Award, value: '15+', label: 'Industry Awards' },
  { icon: Sparkles, value: '98%', label: 'Client Retention' },
];

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-600/10 border border-slate-200/80 hover:border-red-200 transition-all duration-500 hover:-translate-y-2 ${
        member.featured ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${member.featured ? 'h-72 lg:h-80' : 'h-64'}`}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          quality={100}
          unoptimized
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider text-white bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Social icons - slide in on hover */}
        <div className="absolute bottom-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <a
            href={member.socials.linkedin}
            aria-label={`${member.name} LinkedIn`}
            className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={member.socials.twitter}
            aria-label={`${member.name} Twitter`}
            className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${member.socials.email}`}
            aria-label={`Email ${member.name}`}
            className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className={`font-black text-slate-900 mb-1 ${member.featured ? 'text-2xl' : 'text-lg'}`}>
          {member.name}
        </h3>
        <p className="text-sm font-bold text-red-600 mb-3">{member.role}</p>
        <p className={`text-slate-500 leading-relaxed ${member.featured ? 'text-base' : 'text-sm'}`}>
          {member.bio}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-red-50/80 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f940_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f940_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-5 shadow-sm"
          >
            <Users className="w-4 h-4 text-red-600" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">Meet The Experts</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-500">
              Team
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-slate-500 text-base sm:text-lg leading-relaxed mt-4"
          >
            A world-class group of investment professionals, strategists, and advisors dedicated to accelerating your capital growth.
          </motion.p>
        </div>

        {/* Stats band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-red-200 hover:bg-white hover:shadow-lg hover:shadow-red-600/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/20 flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none">{s.value}</div>
                  <div className="text-xs font-semibold text-slate-500 mt-1">{s.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {team.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-3xl px-8 py-6">
            <div className="text-left">
              <h3 className="text-xl font-black text-slate-900">Want to join our team?</h3>
              <p className="text-sm text-slate-500 mt-1">We&apos;re always looking for exceptional talent.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-red-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
