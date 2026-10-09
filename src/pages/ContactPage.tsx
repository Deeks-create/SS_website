import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-brand-dark/50 text-slate-100 pt-24 pb-24 relative z-10 overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-red/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* 1. CINEMATIC HERO BANNER */}
        <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-brand-card/95 via-brand-card/90 to-black border border-brand-red/40 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/15 border border-brand-red/40 text-xs font-extrabold text-brand-red tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>COMMUNITY CONTACT & HELP</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                GET IN <span className="text-brand-red drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">TOUCH WITH SS.</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Have questions about student events, campus ambassador roles, talent bookings, or community partnerships? Reach out to our core team!
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-cyan-400 font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>Prompt WhatsApp Response • Email Guidance • Campus Queries</span>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl relative aspect-[16/10] group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                  alt="SS Community Hub & Desk" 
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-semibold">
                  <span>SS Community Help Desk</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-red text-white text-[10px] font-extrabold">CONTACT</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. CONTACT DETAILS & FORM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Col: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border/80 space-y-6 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white font-display uppercase">Contact Information</h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-black/60 border border-brand-border">
                  <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase">Location</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{SITE_CONFIG.contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-black/60 border border-brand-border">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase">Email Address</h4>
                    <a href={`mailto:${SITE_CONFIG.contactInfo.email}`} className="text-xs text-slate-400 hover:text-white transition mt-0.5 block">
                      {SITE_CONFIG.contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-black/60 border border-brand-border">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase">Phone / WhatsApp</h4>
                    <a href={`tel:${SITE_CONFIG.contactInfo.phone}`} className="text-xs text-slate-400 hover:text-white transition mt-0.5 block">
                      {SITE_CONFIG.contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-brand-border/60">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Follow & Connect</h4>
                <div className="flex items-center gap-3">
                  <a
                    href={SITE_CONFIG.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-2xl bg-black border border-brand-border text-xs font-bold text-slate-300 hover:text-white hover:border-brand-red transition flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4 text-brand-red" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={SITE_CONFIG.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-2xl bg-black border border-brand-border text-xs font-bold text-slate-300 hover:text-white hover:border-emerald-500 transition flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-card/90 border border-brand-border/80 shadow-2xl backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white font-display mb-6">Send Us A Message</h3>

              {sent ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold text-center">
                  ✓ Message sent successfully! We will get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                        placeholder="yourname@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                      placeholder="e.g. Event Inquiry / Campus Ambassador"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-brand-red hover:bg-brand-red-hover text-white text-sm font-extrabold tracking-wide transition shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

