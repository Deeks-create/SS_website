import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Award, ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { PlacementItem } from '../types';
import { getPlacements } from '../services/storage';

export const PlacementsPage: React.FC = () => {
  const [placements, setPlacements] = useState<PlacementItem[]>([]);

  useEffect(() => {
    setPlacements(getPlacements());
  }, []);

  const placementImages = [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <div className="min-h-screen bg-brand-dark/50 text-slate-100 pt-24 pb-24 relative z-10 overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* 1. CINEMATIC HERO BANNER */}
        <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-brand-card/95 via-brand-card/90 to-black border border-brand-red/40 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/15 border border-brand-red/40 text-xs font-extrabold text-brand-red tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CAREER & PLACEMENTS HUB</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                FROM OPPORTUNITY <span className="text-brand-red drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">TO CAREER.</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Sample outcomes demonstrating how Struggle of Student helps members transform raw talent into real industry internships and job placements.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-cyan-400 font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>Tech Startups • Creative Agencies • Media Houses • Corporate Internships</span>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl relative aspect-[16/10] group">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" 
                  alt="Student Career Growth & Placement" 
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-semibold">
                  <span>Student Career Success</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-red text-white text-[10px] font-extrabold">CAREERS</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. PLACEMENT CARDS GRID WITH VISUAL BANNER TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placements.map((item, idx) => {
            const img = placementImages[idx % placementImages.length];

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-brand-card/90 border border-brand-border/80 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-xl group"
              >
                {/* Image Tile */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-brand-border/60">
                  <img 
                    src={img} 
                    alt={item.companyPlaceholder} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-red/90 text-white text-[10px] font-extrabold uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-400 transition">
                      {item.companyPlaceholder}
                    </h3>

                    <div className="mt-2 text-2xl font-extrabold text-brand-red font-display">
                      {item.studentsPlacedCount} Students Placed
                    </div>

                    <div className="mt-4 space-y-2">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Roles Secured</h4>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.roles.map((role, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {item.quote && (
                      <blockquote className="mt-4 pt-3 border-t border-brand-border/60 text-xs italic text-slate-400">
                        "{item.quote}"
                      </blockquote>
                    )}
                  </div>

                  <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-[10px] font-semibold text-slate-500">
                    <span>Sample Placement Outcome</span>
                    <span className="text-cyan-400 uppercase font-bold">Prototype Data</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. CTA BANNER */}
        <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-brand-card/95 via-brand-card/85 to-black border border-cyan-500/30 text-center max-w-4xl mx-auto space-y-4 backdrop-blur-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase">
            LOOKING FOR YOUR NEXT CAREER STEP?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Explore open opportunities or join the SS Campus Ambassador network to start building your portfolio today.
          </p>
          <div className="pt-2">
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white text-xs font-extrabold tracking-wider transition shadow-xl shadow-brand-red/30 hover:-translate-y-0.5"
            >
              <span>EXPLORE OPEN ROLES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

