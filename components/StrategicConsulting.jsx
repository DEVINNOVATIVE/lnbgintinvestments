import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const points = [
  'We provide access to a wide range of strategic services such as planning and surveying, construction, installation and commissioning works.',
  'We help our clients to develop and implement strategies that align with their business objectives and drive sustainable growth.',
  'Our professional network spans across 25+ countries, giving us deep market insight and local expertise.',
];

export default function StrategicConsulting() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Strategic Consulting"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card-hover p-5 border border-slate-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">25+</div>
                  <div className="text-xs text-slate-500">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-widest">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Strategic <span className="text-gradient">Consulting</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              LNBIG INT INVESTMENTS provides strategic consulting services that help businesses
              navigate complex challenges and seize opportunities. Our approach combines deep
              industry knowledge with practical solutions.
            </p>
            <ul className="space-y-3 mb-8">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-red-50 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-700 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
