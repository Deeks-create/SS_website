import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Send, 
  Info,
  Calendar,
  Gift
} from 'lucide-react';
export const CampusAmbassadorPage: React.FC = () => {

  const responsibilities = [
    {
      title: "Sharing SS Updates & Opportunities",
      desc: "Distribute official SS announcements, workshop notifications, and internship openings across your college WhatsApp groups and student networks."
    },
    {
      title: "Connecting Ambitious Peers",
      desc: "Identify talented student singers, coders, speakers, and artists on your campus and connect them to SS talent stages and project teams."
    },
    {
      title: "Supporting Event Participation",
      desc: "Encourage student registrations for regional SS workshops (like 'Unmute Yourself') and online career masterclasses."
    },
    {
      title: "Organizing Campus Initiatives",
      desc: "Help organize college meetups, study circles, and hackathon teams alongside the core SS 14 team members."
    }
  ];

  const skillsGained = [
    { name: "Public Speaking & Communication", desc: "Gain stage presence and confidence communicating with large student groups." },
    { name: "Team Leadership & Coordination", desc: "Learn real project management, task delegation, and desk ops." },
    { name: "Networking & Relationship Building", desc: "Build a regional network of campus leaders, faculty contacts, and tech mentors." }
  ];

  const selectionProcess = [
    { step: "01", name: "Submit Application", desc: "Fill out the sample online application form below." },
    { step: "02", name: "Brief Orientation Call", desc: "Short online chat with the SS core team to discuss your college network." },
    { step: "03", name: "Welcome Kit & Onboarding", desc: "Receive official SS Campus Ambassador badge, guidelines, and resource kit." },
    { step: "04", name: "Monthly Leadership Execution", desc: "Lead monthly initiatives and track leadership points." }
  ];

  return (
    <div className="min-h-screen bg-brand-dark/50 text-slate-100 pt-24 pb-24 relative z-10 overflow-x-hidden">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-brand-red/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1. BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/opportunities" className="hover:text-white transition">Opportunities Hub</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-emerald-400 font-bold">Campus Ambassador Program</span>
        </div>

        {/* 2. HERO SPLIT SECTION */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-r from-brand-card/95 via-brand-card/90 to-black border border-emerald-500/40 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-xs font-extrabold text-emerald-400 uppercase tracking-wider backdrop-blur-md">
                  <Award className="w-4 h-4" />
                  <span>FLAGSHIP CAMPUS LEADERSHIP PROGRAM</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display uppercase tracking-tight leading-[1.04]">
                BE THE VOICE OF <span className="text-emerald-400 drop-shadow-[0_0_25px_rgba(52,211,153,0.4)]">SS ON YOUR CAMPUS.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Represent Struggle of Student at your college, organize student initiatives, connect peers to real opportunities, and build executive leadership skills.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-300 pt-2">
                <span className="px-3 py-1 rounded-full bg-black/80 border border-brand-border">📜 Official Leadership Certificate</span>
                <span className="px-3 py-1 rounded-full bg-black/80 border border-brand-border">🎁 Stipend & Performance Rewards</span>
                <span className="px-3 py-1 rounded-full bg-black/80 border border-brand-border">⭐ Priority Internship Referrals</span>
              </div>
            </div>

            {/* Hero Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl p-4 bg-gradient-to-b from-brand-card/90 via-black to-black border border-emerald-500/30 shadow-2xl relative overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000" 
                    alt="Students Collaborating on Campus" 
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase">
                      STUDENT LEADERS
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">Leading Initiatives Across 50+ Institutions</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. RESPONSIBILITIES SECTION */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">WHAT YOU WILL DO</span>
            <h2 className="text-3xl font-extrabold text-white font-display uppercase">
              KEY AMBASSADOR RESPONSIBILITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibilities.map((res, i) => (
              <div 
                key={i} 
                className="p-6 rounded-3xl bg-brand-card/90 border border-brand-border hover:border-emerald-500/40 transition flex items-start gap-4 backdrop-blur-xl"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">{res.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">{res.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SKILLS GAINED & INCENTIVES */}
        <div className="p-8 lg:p-12 rounded-3xl bg-brand-card/80 border border-brand-border/80 backdrop-blur-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">YOUR GROWTH</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase mt-1">
                SKILLS GAINED & PROPOSED REWARDS
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-black/60 px-3 py-1.5 rounded-full border border-brand-border">
              <Info className="w-4 h-4 text-cyan-400" />
              <span>Certificates & rewards are sample features subject to SS confirmation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsGained.map((sk, i) => (
              <div key={i} className="p-6 rounded-2xl bg-black/80 border border-brand-border space-y-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <h4 className="text-sm font-bold text-white font-display">{sk.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{sk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. SELECTION PROCESS & ELIGIBILITY */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">HOW TO GET STARTED</span>
            <h2 className="text-3xl font-extrabold text-white font-display uppercase">
              SELECTION WORKFLOW
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionProcess.map((sp) => (
              <div key={sp.step} className="p-6 rounded-3xl bg-brand-card/90 border border-brand-border text-center space-y-2">
                <span className="text-3xl font-extrabold text-emerald-400 font-display">{sp.step}</span>
                <h4 className="text-sm font-bold text-white font-display">{sp.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{sp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CALL TO ACTION */}
        <div className="p-8 lg:p-12 rounded-3xl bg-brand-card/90 border border-emerald-500/40 shadow-2xl backdrop-blur-xl max-w-3xl mx-auto text-center space-y-6">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 uppercase">
            JOIN THE MOVEMENT
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase">
            READY TO BECOME A CAMPUS AMBASSADOR?
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Take the first step towards building your leadership profile and representing Struggle of Student at your college.
          </p>
          <Link
            to="/opportunities/detail/opp-ca-2026"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-base font-extrabold tracking-wide transition shadow-xl shadow-emerald-500/20"
          >
            <span>PROCEED TO APPLICATION</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

