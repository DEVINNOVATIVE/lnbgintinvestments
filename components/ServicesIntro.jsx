export default function ServicesIntro() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-widest">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              We provide a wide range of{' '}
              <span className="text-gradient">strategic services</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              LNBIG INT INVESTMENTS provides access to a wide range of strategic services such as
              planning and surveying, construction, installation and commissioning works. We
              partner with leading-edge digital companies to expand our portfolio and pass on
              those services to our clients.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our team of experienced professionals works closely with each client to understand
              their unique needs and deliver tailored solutions that drive measurable results.
              From strategic planning to execution, we are committed to excellence at every stage.
            </p>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Services"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card-hover p-5 border border-slate-100 animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-lg">4+</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Service Areas</div>
                  <div className="text-xs text-slate-500">Comprehensive coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
