import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Info, 
  UserCheck, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { TeamMember } from '../types';
import { getTeamMembers } from '../services/storage';

export const TeamPage: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setTeam(getTeamMembers());
  }, []);

  const handleImageError = (id: string) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  const founder = team.find(t => t.isFounder) || {
    id: "founder-chanti",
    image: "/chanti.jpeg",
    name: "Chanti Nelathalli",
    role: "Founder, Struggle of Student",
    department: "Leadership & Strategy",
    bio: "Founder of Struggle of Student, building a student-focused community around talent, skills, and opportunities.",
    isFounder: true,
    isVerifiedFact: true,
    isPlaceholder: false
  };

  const sampleMembers = team.filter(t => !t.isFounder);

  // Helper to extract initials for fallback avatars
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen text-slate-100 overflow-x-hidden">

      {/* ── CINEMATIC HERO ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1800"
            alt=""
            className="w-full h-full object-cover filter brightness-15 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent" />
        </div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">Core Organizational Team</span>
              <Sparkles className="w-4 h-4 text-brand-red" />
            </div>
            <h1 className="font-display font-black uppercase leading-none tracking-tight mb-6">
              <span className="block text-6xl sm:text-8xl text-white">THE PEOPLE</span>
              <span className="block text-6xl sm:text-8xl text-brand-red" style={{ textShadow: '0 0 60px rgba(225,29,72,0.4)' }}>BEHIND SS.</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed max-w-xl font-light mb-4">
              Struggle of Student is driven by <strong className="text-white">14 active team members</strong> leading community initiatives,
              campus outreach, technical solutions, and student opportunities.
            </p>
            <div className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 text-xs text-slate-400">
              <Info className="w-4 h-4 text-white/40 shrink-0" />
              <span><strong className="text-white">Sample Demo Profiles:</strong> Profiles below are structured representations pending official SS verification.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">


        {/* 1. FOUNDER SPOTLIGHT */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder image */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] bg-brand-card border border-brand-border overflow-hidden">
                {founder.image && !failedImages[founder.id] ? (
                  <img
                    src={founder.image}
                    alt={founder.name}
                    onError={() => handleImageError(founder.id)}
                    className="w-full h-full object-cover filter brightness-80"
                  />
                ) : (
                  <img src="/chanti.jpeg" alt="Chanti Nelathalli" className="w-full h-full object-cover filter brightness-80" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white border border-white/30 px-2.5 py-1 bg-black/60 backdrop-blur-sm">Founder</span>
                </div>
              </div>
            </div>
            {/* Founder info */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-brand-red" />
                <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">Founder & Leader</span>
              </div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-brand-red text-white px-3 py-1">
                FOUNDER
              </span>
              <h2 className="font-display font-black uppercase text-4xl sm:text-6xl text-white leading-none">
                {founder.name}
              </h2>
              <p className="text-sm font-bold text-brand-red uppercase tracking-widest">
                {founder.role} · <span className="text-slate-400 font-normal normal-case tracking-normal">{founder.department}</span>
              </p>
              <blockquote className="text-lg text-slate-300 leading-relaxed font-light italic border-l-2 border-brand-red pl-6 max-w-2xl">
                "{founder.bio}"
              </blockquote>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Verified SS Fact</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 15 ACTIVE TEAM MEMBERS SECTION */}
        <div className="mt-20">
          
          {/* Section Sub-Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">ACTIVE TEAM ROSTER</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase mt-1">
                14 ACTIVE TEAM MEMBERS
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 text-xs font-bold border border-brand-border flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>14 Individual Team Profile Cards</span>
              </span>
            </div>
          </div>

          {/* Team grid — premium editorial cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            
            {/* Founder card removed */}

            {/* 13 SAMPLE DEMO TEAM MEMBER PROFILE CARDS */}
            {sampleMembers.map((member, idx) => {
              const hasImageFailed = failedImages[member.id];

              return (
                <motion.div
                  key={member.id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl bg-brand-card/90 border border-brand-border/80 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 overflow-hidden flex flex-col justify-between group backdrop-blur-xl relative"
                >
                  {/* Portrait Container */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/80 flex items-center justify-center">
                    {member.image && !hasImageFailed ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        onError={() => handleImageError(member.id)}
                        loading="lazy"
                        className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-b from-cyan-950/40 via-black to-brand-card flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-extrabold text-xl font-display mb-2">
                          {getInitials(member.name)}
                        </div>
                        <span className="text-xs font-bold text-white uppercase">{member.name}</span>
                        <span className="text-[10px] text-cyan-400 font-semibold">{member.role}</span>
                      </div>
                    )}

                    {/* Gradient Overlay & Tag */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-full bg-slate-950/80 text-cyan-400 border border-cyan-500/30 text-[9px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                        {member.department}
                      </span>
                    </div>

                    <div className="absolute top-2 right-2">
                      <span className="px-1.5 py-0.5 rounded bg-black/70 text-slate-400 text-[9px] font-mono">
                        #{idx + 2}
                      </span>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-display group-hover:text-cyan-400 transition truncate">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-brand-red truncate mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Bottom Demarcation Tag */}
                    <div className="pt-2 border-t border-brand-border/60 flex items-center justify-between text-[9px] font-semibold text-slate-400">
                      <span className="inline-flex items-center gap-1 text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        Demo Profile
                      </span>
                      <span className="text-cyan-400">SS Active Team</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        <div className="mt-16 text-center text-xs text-slate-500 max-w-xl mx-auto border-t border-white/5 pt-8">
          <p>
            All sample member names, roles and photographs are stored in <code className="text-brand-red font-mono text-[11px]">src/data/team.ts</code> for simple replacement once SS confirms verified team rosters.
          </p>
        </div>

      </div>
    </div>
  );
};

