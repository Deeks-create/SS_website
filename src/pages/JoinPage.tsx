import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Users, Zap } from 'lucide-react';
import { SSEnergyCanvas } from '../components/ui/SSEnergyCanvas';
import { submitJoinApplication } from '../services/storage';

export const JoinPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preSelectedInterest = searchParams.get('interest') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '1st Year',
    city: 'Hyderabad',
    skills: '',
    interestedIn: preSelectedInterest ? [preSelectedInterest] : ['Volunteering'],
    whyJoin: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    'Talent Showcase',
    'Volunteering',
    'Internships',
    'Jobs',
    'Campus Ambassador',
    'Events',
    'Leadership',
    'Workshops',
    'Projects & Tech'
  ];

  const toggleInterest = (option: string) => {
    if (formData.interestedIn.includes(option)) {
      setFormData({
        ...formData,
        interestedIn: formData.interestedIn.filter(item => item !== option)
      });
    } else {
      setFormData({
        ...formData,
        interestedIn: [...formData.interestedIn, option]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.college) {
      return;
    }

    submitJoinApplication({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      college: formData.college,
      course: formData.course,
      year: formData.year,
      city: formData.city,
      skills: formData.skills,
      interestedIn: formData.interestedIn,
      whyJoin: formData.whyJoin
    });

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 pt-24 pb-24 relative overflow-x-hidden">
      {/* Background Energy Canvas */}
      <SSEnergyCanvas densityMultiplier={0.7} />

      {/* Ambient Glows */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* HERO HEADER */}
        <div className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto">
          {/* Logo — restrained accent size */}
          <img
            src="/assets/logo.png"
            alt="Struggle of Student Official Logo"
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-lg"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/15 border border-brand-red/40 text-xs font-extrabold text-brand-red uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEMBERSHIP & COMMUNITY REGISTRATION</span>
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
            BE PART OF <span className="text-brand-red drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">SS.</span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Showcase your talent. Build your skills. Find opportunities. Grow with a network of ambitious student leaders across campuses.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: VISUAL BANNER LEFT + FORM RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Visual Banner Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 bg-gradient-to-b from-brand-card/90 via-brand-card/80 to-black border border-cyan-500/30 shadow-2xl backdrop-blur-xl space-y-6 overflow-hidden group">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-brand-border">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000" 
                  alt="Student Community Joining" 
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-red text-white text-[10px] font-extrabold uppercase">
                    JOIN THE MOVEMENT
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">Connect With 14 Core Members & Student Leaders</h4>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Why Join Struggle of Student?</span>
                </h4>
                
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/80 border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span><strong>Talent Stage:</strong> Perform or showcase skills at campus events & workshops.</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/80 border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Campus Ambassador:</strong> Lead student teams and earn leadership rewards.</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/80 border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Career Guidance:</strong> Access curated student internships and masterclasses.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-card/90 border border-brand-border/80 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h2 className="text-3xl font-extrabold text-white font-display uppercase">
                    WELCOME TO SS COMMUNITY!
                  </h2>

                  <p className="text-slate-300 text-base max-w-md mx-auto">
                    Your interest registration has been successfully saved. Our team will reach out to you via WhatsApp / Email with upcoming community meetups.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      to="/opportunities"
                      className="px-8 py-3.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white text-sm font-extrabold transition shadow-lg shadow-brand-red/30"
                    >
                      Explore Open Opportunities
                    </Link>
                    <Link
                      to="/"
                      className="px-8 py-3.5 rounded-full bg-black border border-brand-border text-slate-300 hover:text-white text-sm font-extrabold transition"
                    >
                      Return to Homepage
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-brand-border/60 pb-4">
                    <h3 className="text-xl font-bold text-white font-display">Student Registration Form</h3>
                    <p className="text-xs text-slate-400">Fill in your details below to get connected with SS network.</p>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                        placeholder="yourname@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">City *</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                        placeholder="e.g. Hyderabad"
                      />
                    </div>
                  </div>

                  {/* Academic Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">College / Institution *</label>
                      <input
                        type="text"
                        required
                        value={formData.college}
                        onChange={e => setFormData({ ...formData, college: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                        placeholder="e.g. Osmania University / JNTU"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Year of Study</label>
                      <select
                        value={formData.year}
                        onChange={e => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year / Final">4th Year / Final</option>
                        <option value="Postgraduate">Postgraduate</option>
                      </select>
                    </div>
                  </div>

                  {/* Interests Checkboxes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                      What Are You Most Interested In? (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {interestOptions.map((opt) => {
                        const selected = formData.interestedIn.includes(opt);
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => toggleInterest(opt)}
                            className={`px-4 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 ${
                              selected
                                ? 'bg-brand-red text-white shadow-md shadow-brand-red/20'
                                : 'bg-black text-slate-400 hover:text-white border border-brand-border'
                            }`}
                          >
                            {selected && <CheckCircle2 className="w-3.5 h-3.5" />}
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Skills & Statement */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Your Key Skills / Talents</label>
                    <input
                      type="text"
                      value={formData.skills}
                      onChange={e => setFormData({ ...formData, skills: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                      placeholder="e.g. Public Speaking, Graphic Design, Web Dev, Singing, Event Management"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">Why Do You Want To Join SS?</label>
                    <textarea
                      rows={3}
                      value={formData.whyJoin}
                      onChange={e => setFormData({ ...formData, whyJoin: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                      placeholder="Share a short note about your goals and what you hope to achieve..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-brand-red hover:bg-brand-red-hover text-white text-base font-extrabold tracking-wide transition shadow-xl shadow-brand-red/30 flex items-center justify-center gap-2 mt-6"
                  >
                    <span>JOIN THE COMMUNITY</span>
                    <ArrowRight className="w-5 h-5" />
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

