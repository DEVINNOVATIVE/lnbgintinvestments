// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { Users, Smile, Briefcase, Award } from 'lucide-react';

// const stats = [
//   { icon: Users, value: 38, suffix: '', label: 'Team Members' },
//   { icon: Smile, value: 2348, suffix: '', label: 'Happy Clients' },
//   { icon: Briefcase, value: 43, suffix: '', label: 'Completed Projects' },
//   { icon: Award, value: 50, suffix: '', label: 'Winning Awards' },
// ];

// function useInView(ref) {
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
//       { threshold: 0.3 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [ref]);
//   return inView;
// }

// function Counter({ value, suffix = '' }) {
//   const ref = useRef(null);
//   const inView = useInView(ref);
//   const [display, setDisplay] = useState(0);

//   useEffect(() => {
//     if (!inView) return;
//     let start = 0;
//     const duration = 2000;
//     const steps = 60;
//     const increment = value / steps;
//     const interval = duration / steps;
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setDisplay(value);
//         clearInterval(timer);
//       } else {
//         setDisplay(Math.floor(start));
//       }
//     }, interval);
//     return () => clearInterval(timer);
//   }, [inView, value]);

//   return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
// }

// export default function Stats() {
//   return (
//     <section className="relative py-20 overflow-hidden bg-slate-900">
//       <div className="absolute inset-0 bg-grid-dark opacity-30" />
//       <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-800 to-slate-900" />
//       <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <div key={i} className="group text-center text-white relative">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
//                   <Icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
//                   <Counter value={stat.value} suffix={stat.suffix} />
//                 </div>
//                 <div className="text-sm text-red-100/80 uppercase tracking-wider">{stat.label}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 38, label: 'EMPLOYEES' },
  { value: 2348, label: 'PROJECTS WITH 100%' },
  { value: 43, label: 'AWARD' },
  { value: 50, label: 'SERVICES' },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{display.toLocaleString()}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#111d30]">
      {/* Background ambient lighting for modern depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          {stats.map((stat, i) => (
            <div key={i} className="group text-center">
              {/* Number Container with Red Superscript Plus */}
              <div className="inline-flex items-start justify-center mb-3">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
                  <Counter value={stat.value} />
                </span>
                <span className="text-red-600 font-bold text-xl sm:text-2xl lg:text-3xl ml-1 -mt-1 sm:-mt-2">
                  +
                </span>
              </div>

              {/* Label */}
              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
