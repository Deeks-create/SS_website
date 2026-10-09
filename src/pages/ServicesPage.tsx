import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, CalendarCheck, Code2, HeartHandshake, Briefcase, ArrowRight, X, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { SS_SERVICES } from '../data/services';
import { ServiceItem } from '../types';
import { submitServiceEnquiry } from '../services/storage';

export const ServicesPage: React.FC = () => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    service: '',
    message: ''
  });

  const [enquirySuccess, setEnquirySuccess] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Music': return <Music className="w-5 h-5 text-brand-red" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-teal-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-brand-red" />;
      default: return <Briefcase className="w-5 h-5 text-cyan-400" />;
    }
  };

  const serviceImages: Record<string, string> = {
    "service-band": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    "service-event-management": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    "service-it-solutions": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    "service-guidance": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    "service-careers": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.email || !enquiryForm.phone || !enquiryForm.service) {
      return;
    }

    submitServiceEnquiry(enquiryForm);
    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setSelectedServiceModal(null);
      setEnquiryForm({ name: '', email: '', phone: '', college: '', service: '', message: '' });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 overflow-x-hidden">

      {/* ── CINEMATIC HERO ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1800"
            alt=""
            className="w-full h-full object-cover filter brightness-15 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">Community Services & Solutions</span>
              <Sparkles className="w-4 h-4 text-brand-red" />
            </div>
            <h1 className="font-display font-black uppercase leading-none tracking-tight mb-6">
              <span className="block text-6xl sm:text-8xl text-white">MORE WAYS</span>
              <span className="block text-6xl sm:text-8xl text-brand-red" style={{ textShadow: '0 0 60px rgba(225,29,72,0.4)' }}>SS CAN HELP.</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed max-w-xl font-light">
              From live music band performances and college fest management to IT project development,
              campus ambassador networks, and peer support.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 space-y-16 relative z-10">

        {/* 2. SERVICES — alternating editorial layout */}
        <div className="space-y-px bg-brand-border">
          {SS_SERVICES.map((service, idx) => {
            const img = serviceImages[service.id] || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600";
            const isEven = idx % 2 === 0;

            return (
              <div key={service.id} className="bg-brand-dark group overflow-hidden hover:bg-white/[0.01] transition-colors">
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isEven ? '' : 'lg:[direction:rtl]'}`}>
                  {/* Image side */}
                  <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden" style={{ direction: 'ltr' }}>
                    <img
                      src={img}
                      alt={service.title}
                      className="w-full h-full object-cover filter brightness-60 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4" style={{ direction: 'ltr' }}>
                      <div className="w-10 h-10 bg-brand-red/90 flex items-center justify-center">
                        {getIcon(service.iconName)}
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center space-y-6" style={{ direction: 'ltr' }}>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-black text-white/10 font-display">{String(idx + 1).padStart(2, '0')}</span>
                      <div className="w-8 h-[2px] bg-brand-red" />
                    </div>
                    <h3 className="font-display font-black uppercase text-3xl sm:text-4xl text-white group-hover:text-brand-red transition-colors leading-none">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light max-w-lg">
                      {service.shortDescription}
                    </p>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">What We Provide</span>
                      <ul className="space-y-2">
                        {service.whatWeProvide.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          setSelectedServiceModal(service);
                          setEnquiryForm(prev => ({ ...prev, service: service.title }));
                        }}
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white text-xs font-bold uppercase tracking-wider transition-all hover:bg-brand-red/90 hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]"
                      >
                        Send Enquiry
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ENQUIRY MODAL */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-brand-card border border-cyan-500/40 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-4">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/60 border border-brand-border text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-bold text-brand-red uppercase">
              SERVICE ENQUIRY
            </span>

            <h3 className="text-2xl font-bold text-white font-display">
              {selectedServiceModal.title}
            </h3>

            {enquirySuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-base font-bold text-center">
                ✓ Your enquiry has been received! Our team will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={enquiryForm.name}
                    onChange={e => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={enquiryForm.email}
                      onChange={e => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                      placeholder="name@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={enquiryForm.phone}
                      onChange={e => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">College / Organization</label>
                  <input
                    type="text"
                    value={enquiryForm.college}
                    onChange={e => setEnquiryForm({ ...enquiryForm, college: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="e.g. JNTU Hyderabad"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Message / Details</label>
                  <textarea
                    rows={3}
                    required
                    value={enquiryForm.message}
                    onChange={e => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="Tell us about your event, requirement, or dates..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-sm font-extrabold tracking-wide transition shadow-lg shadow-brand-red/30 mt-4"
                >
                  Submit Service Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


