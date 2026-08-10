// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowUpRight } from 'lucide-react';

// const team = [
//   {
//     name: 'Neil B Gibson',
//     role: 'CEO/ Founder',
//     image: '/assets/ceo.jpeg',
//   },
//   {
//     name: 'Rached Arfaoui',
//     role: 'Managing Director',
//     image: '/assets/rashed-1.png',
//   },
//   {
//     name: 'Ladd Tanner',
//     role: 'President',
//     image: '/assets/linda-heath.png',
//   },
//   {
//     name: 'Habib Rehman',
//     role: 'Marketing & Development',
//     image: '/assets/habib-rehman.png',
//   },
// ];

// export default function Team() {
//   return (
//     <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
//       {/* Background Soft Ambient Light */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
//         {/* Minimal Header */}
//         <div className="text-center max-w-2xl mx-auto mb-20">
//           <p className="text-base font-bold font-mono tracking-[0.3em] text-red-600 uppercase mb-3">
//             Leadership
//           </p>
//           <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900">
//             Meet Our <span className="font-semibold text-slate-900">Team</span>
//           </h2>
//         </div>

//         {/* Circular Image Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {team.map((member, index) => (
//             <motion.div
//               key={member.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group flex flex-col items-center text-center"
//             >
//               {/* Circular Avatar Container with Gradient Glow Ring */}
//               <div className="relative w-48 h-48 sm:w-52 sm:h-52 mb-6">
//                 {/* Glow ring on hover */}
//                 <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
//                 {/* Border ring */}
//                 <div className="relative w-full h-full rounded-full p-1 bg-slate-50 border border-slate-200 group-hover:border-transparent transition-colors duration-500 shadow-sm">
//                   <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       fill
//                       unoptimized
//                       className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Minimal Meta */}
//               <h3 className="text-lg font-medium text-slate-900 group-hover:text-red-600 transition-colors duration-300">
//                 {member.name}
//               </h3>
//               <p className="text-xs font-mono tracking-wider text-slate-500 uppercase mt-1">
//                 {member.role}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Sleek CTA Line */}
//         <div className="mt-20 pt-8 border-t border-slate-100 flex items-center justify-between text-sm">
//           <span className="text-slate-500 font-light">Interested in working with us?</span>
//           <Link 
//             href="/contact" 
//             className="group inline-flex items-center gap-2 font-medium text-slate-900 hover:text-red-600 transition-colors"
//           >
//             Get in touch
//             <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Globe, ShieldCheck, Sparkles, Users } from 'lucide-react';

const team = [
  {
    name: 'Neil B Gibson',
    role: 'CEO / Founder',
    image: '/assets/ceo.jpeg',
    bio: 'Driving global strategy and corporate vision across all markets.',
  },
  {
    name: 'Rached Arfaoui',
    role: 'Managing Director',
    image: '/assets/rashed-1.png',
    bio: 'Overseeing operational excellence and strategic partner relations.',
  },
  {
    name: 'Ladd Tanner',
    role: 'President',
    image: '/assets/linda-heath.png',
    bio: 'Leading organizational expansion and executive governance.',
  },
  {
    name: 'Habib Rehman',
    role: 'Marketing & Development',
    image: '/assets/habib-rehman.png',
    bio: 'Directing global brand strategies and technical product development.',
  },
];

const metrics = [
  { label: 'Years of Combined Expertise', value: '45+' },
  { label: 'Global Operational Hubs', value: '12' },
  { label: 'Client Retention Rate', value: '98%' },
];

const coreValues = [
  {
    icon: VisionIcon,
    title: 'Vision-Driven Leadership',
    description: 'Guiding teams with clarity and long-term strategic foresight.',
  },
  {
    icon: ExecutionIcon,
    title: 'Agile Execution',
    description: 'Deploying high-impact solutions with speed and precision.',
  },
  {
    icon: GlobalIcon,
    title: 'Global Scale',
    description: 'Delivering consistent excellence across international borders.',
  },
];

function VisionIcon() {
  return <Sparkles className="w-5 h-5 text-red-500" />;
}
function ExecutionIcon() {
  return <ShieldCheck className="w-5 h-5 text-red-500" />;
}
function GlobalIcon() {
  return <Globe className="w-5 h-5 text-red-500" />;
}

export default function Team() {
  return (
    <section className="py-28 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-semibold tracking-widest uppercase mb-4"
          >
            <Users className="w-3.5 h-3.5" />
            Executive Leadership
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-6"
          >
            Driven by Vision, <br className="hidden sm:inline" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              Backed by Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed font-light"
          >
            Our leadership team brings together decades of cross-industry expertise to drive operational excellence and continuous technological growth.
          </motion.p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm hover:border-red-500/40 hover:bg-slate-900/80 transition-all duration-500 shadow-xl"
            >
              {/* Avatar Ring Container */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 mb-6">
                {/* Subtle Glow Ring on Hover */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />

                <div className="relative w-full h-full rounded-full p-1 bg-slate-800 border border-slate-700/80 group-hover:border-transparent transition-colors duration-500 shadow-inner">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 176px, 192px"
                      unoptimized
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Member Metadata */}
              <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-xs font-mono tracking-widest text-red-500 uppercase mt-1 mb-3">
                {member.role}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-2">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Supporting Metric Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md"
        >
          {metrics.map((item, idx) => (
            <div key={idx} className="text-center sm:border-r last:border-r-0 border-slate-800/80 last:pr-0">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {item.value}
              </p>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Values Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/60 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 shrink-0">
                  <Icon />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {value.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-slate-900 via-slate-900/90 to-red-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-medium text-white">
              Ready to work with our team?
            </h4>
            <p className="text-sm text-slate-400 font-light">
              Let's build scalable strategies and high-performing products together.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-red-600/20"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}