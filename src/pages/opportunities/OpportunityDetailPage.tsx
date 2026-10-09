import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Info, 
  ChevronRight,
  Briefcase,
  Users,
  Award,
  Send,
  X,
  Share2
} from 'lucide-react';
import { Opportunity } from '../../types';
import { getOpportunities } from '../../services/storage';
import { DynamicApplicationForm } from '../../components/opportunities/forms/DynamicApplicationForm';

export const OpportunityDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [opportunity, setOpportunity] = useState<Opportunity | null>(null);
  const [showAppModal, setShowAppModal] = useState(false);

  useEffect(() => {
    const opps = getOpportunities();
    const match = opps.find(o => o.id === id) || opps[0];
    setOpportunity(match);
  }, [id]);

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-brand-dark/50 text-slate-100 pt-32 pb-24 text-center">
        <p className="text-slate-400">Loading opportunity details...</p>
      </div>
    );
  }

  const allOpps = getOpportunities();
  const relatedOpps = allOpps.filter(o => o.id !== opportunity.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-dark/50 text-slate-100 pt-24 pb-24 relative z-10 overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/opportunities" className="hover:text-white transition">Opportunities Hub</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/opportunities/${opportunity.categorySlug}`} className="hover:text-white transition">{opportunity.category}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400 font-bold truncate max-w-xs">{opportunity.title}</span>
        </div>

        {/* HERO DETAIL CARD */}
        <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-brand-card/95 via-brand-card/90 to-black border border-brand-red/40 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-red/15 border border-brand-red/40 text-xs font-extrabold text-brand-red uppercase">
                  {opportunity.category}
                </span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  opportunity.status === 'Open' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}>
                  {opportunity.status}
                </span>
                {opportunity.isSampleData && (
                  <span className="text-[10px] font-semibold text-slate-400 bg-black/60 px-2 py-0.5 rounded border border-brand-border">
                    DEMO LISTING
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                {opportunity.title}
              </h1>

              {opportunity.companyName && (
                <p className="text-sm font-bold text-cyan-400">
                  {opportunity.companyName}
                </p>
              )}

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {opportunity.shortDescription}
              </p>

              {/* META STATS BAR */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-black/80 border border-brand-border text-xs">
                  <div className="text-slate-400 font-semibold">Location / Mode</div>
                  <div className="text-white font-bold mt-0.5">{opportunity.location} {opportunity.isRemote && '(Remote)'}</div>
                </div>

                {opportunity.duration && (
                  <div className="p-3 rounded-2xl bg-black/80 border border-brand-border text-xs">
                    <div className="text-slate-400 font-semibold">Duration</div>
                    <div className="text-white font-bold mt-0.5">{opportunity.duration}</div>
                  </div>
                )}

                <div className="p-3 rounded-2xl bg-black/80 border border-brand-border text-xs">
                  <div className="text-slate-400 font-semibold">Deadline</div>
                  <div className="text-brand-red font-bold mt-0.5">{opportunity.deadline}</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowAppModal(true)}
                  className="px-8 py-3.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white text-sm font-extrabold tracking-wider transition shadow-xl shadow-brand-red/30 flex items-center gap-2"
                >
                  <span>APPLY FOR THIS OPPORTUNITY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl relative aspect-[16/10] group">
                <img 
                  src={opportunity.image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"} 
                  alt={opportunity.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* FULL DESCRIPTION & DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border/80 backdrop-blur-xl space-y-4">
              <h3 className="text-xl font-bold text-white font-display uppercase">OVERVIEW & DESCRIPTION</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {opportunity.fullDescription}
              </p>
            </div>

            {/* Responsibilities */}
            {opportunity.responsibilities && opportunity.responsibilities.length > 0 && (
              <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border/80 backdrop-blur-xl space-y-4">
                <h3 className="text-xl font-bold text-white font-display uppercase">RESPONSIBILITIES & KEY TASKS</h3>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {opportunity.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements & Skills */}
            <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border/80 backdrop-blur-xl space-y-4">
              <h3 className="text-xl font-bold text-white font-display uppercase">REQUIREMENTS & SKILLS NEEDED</h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                {opportunity.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              {opportunity.skillsNeeded && (
                <div className="pt-4 border-t border-brand-border/60">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Useful Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skillsNeeded.map((sk, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-black border border-brand-border text-xs font-bold text-cyan-400">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Perks & Learning Outcomes */}
            <div className="p-8 rounded-3xl bg-brand-card/90 border border-brand-border/80 backdrop-blur-xl space-y-4">
              <h3 className="text-xl font-bold text-white font-display uppercase">PERKS & LEARNING OUTCOMES</h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                {opportunity.perks.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* SIDEBAR SUMMARY CARD */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-brand-card/90 border border-brand-border/80 space-y-6 backdrop-blur-xl sticky top-28">
              <h4 className="text-lg font-bold text-white font-display uppercase border-b border-brand-border/60 pb-3">
                SUMMARY AT A GLANCE
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400 block font-semibold">Category</span>
                  <span className="text-white font-bold">{opportunity.category}</span>
                </div>

                <div>
                  <span className="text-slate-400 block font-semibold">Role Type</span>
                  <span className="text-white font-bold">{opportunity.type}</span>
                </div>

                {opportunity.experienceLevel && (
                  <div>
                    <span className="text-slate-400 block font-semibold">Experience Level</span>
                    <span className="text-white font-bold">{opportunity.experienceLevel}</span>
                  </div>
                )}

                {opportunity.eligibility && (
                  <div>
                    <span className="text-slate-400 block font-semibold">Eligibility</span>
                    <span className="text-white font-bold">{opportunity.eligibility}</span>
                  </div>
                )}

                <div>
                  <span className="text-slate-400 block font-semibold">Application Status</span>
                  <span className="text-emerald-400 font-bold">{opportunity.status}</span>
                </div>
              </div>

              <button
                onClick={() => setShowAppModal(true)}
                className="w-full py-3.5 rounded-2xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-extrabold tracking-wider transition shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2"
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* RELATED OPPORTUNITIES */}
        <div className="pt-8 border-t border-brand-border/60 space-y-6">
          <h3 className="text-2xl font-bold text-white font-display uppercase">
            EXPLORE MORE OPPORTUNITIES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedOpps.map((rel) => (
              <Link
                key={rel.id}
                to={`/opportunities/detail/${rel.id}`}
                className="p-6 rounded-3xl bg-brand-card/90 border border-brand-border hover:border-cyan-500/40 transition flex flex-col justify-between group"
              >
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 text-[10px] font-bold uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-white mt-2 group-hover:text-cyan-400 transition font-display">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/60 text-xs font-bold text-cyan-400 flex items-center justify-between mt-4">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* APPLICATION MODAL */}
      {showAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-brand-card border border-cyan-500/40 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-4">
            <button
              onClick={() => setShowAppModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/60 border border-brand-border text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-bold text-brand-red uppercase">
              APPLICATION FORM
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {opportunity.title}
            </h3>

            <div className="pt-2">
              <DynamicApplicationForm 
                opportunity={opportunity} 
                onClose={() => setShowAppModal(false)} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


