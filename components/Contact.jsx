'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2, User, MessageSquare, Loader2, AlertCircle } from 'lucide-react';

const EMPTY_FORM = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState(EMPTY_FORM);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setForm(EMPTY_FORM);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: MapPin, title: 'Our Office', value: 'Arawak chamber Mandar house 3rd floor johsons ghut tortola Tortola Central, VG1110, British Virgin Islands' },
    { icon: Mail, title: 'Email Us', value: 'lnbg@lnbgllc.com' },
    { icon: Phone, title: 'Call Us', value: '+44 7887 447527' },
    { icon: Clock, title: 'Office Hours', value: 'Sat - Wed: 8:00  - 4:00' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-widest">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            We&apos;d Love To <span className="text-gradient">Hear From You</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our team is ready to discuss your investment goals and explore how we can help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Let&apos;s talk business</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Reach out through any of the channels below. We respond within 24 hours.
            </p>
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-card transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{info.title}</div>
                    <div className="text-slate-500 text-sm mt-0.5">{info.value}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-white p-8 md:p-10 rounded-3xl shadow-card border border-slate-100"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-scale-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          disabled={sending}
                          placeholder="Your full name"
                          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition disabled:opacity-60"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          disabled={sending}
                          placeholder="you@example.com"
                          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition disabled:opacity-60"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      disabled={sending}
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        disabled={sending}
                        placeholder="Tell us about your Project*..."
                        className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition resize-none disabled:opacity-60"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3.5 rounded-xl font-semibold hover:shadow-glow hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                  >
                    {sending ? (
                      <>
                        Sending...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
