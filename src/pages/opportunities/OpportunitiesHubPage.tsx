import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Sparkles, 
  Briefcase, 
  Building, 
  Award, 
  HeartHandshake, 
  Calendar, 
  ShieldCheck, 
  Video, 
  GraduationCap, 
  Code2, 
  Users, 
  TrendingUp, 
  Zap, 
  Layers, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';
import { OPPORTUNITY_CATEGORIES } from '../../data/opportunityCategories';
import { Opportunity, OpportunityCategory } from '../../types';
import { getOpportunities } from '../../services/storage';

export const OpportunitiesHubPage: React.FC = () => {
  const navigate = useNavigate();
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  useEffect(() => {
    setOpportunities(getOpportunities());
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-brand-red" />;
      case 'Building': return <Building className="w-5 h-5 text-rose-400" />;
      case 'Award': return <Award className="w-5 h-5 text-emerald-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-amber-400" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-brand-red" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-rose-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-400" />;
      case 'Video': return <Video className="w-5 h-5 text-indigo-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-brand-red" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-rose-400" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-rose-400" />;
      default: return <Layers className="w-5 h-5 text-teal-400" />;
    }
  };

  const featuredOpportunities = opportunities.filter(o => o.isFeatured).slice(0, 3);
  
  const filteredListings = opportunities.filter(o => {
    const matchesSearch = searchQuery === '' || 
      o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || 
      (activeFilter === 'Internships' && o.isInternship) ||
      (activeFilter === 'Jobs' && o.isJob) ||
      (activeFilter === 'Campus Ambassador' && o.categorySlug === 'campus-ambassador');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-brand-dark/50 text-slate-100 pt-24 pb-24 relative z-10 overflow-x-hidden">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-red/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1. BOLD CINEMATIC HERO BANNER */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-r from-brand-card/95 via-brand-card/90 to-black border border-brand-red/40 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/15 border border-brand-red/40 text-xs font-extrabold text-brand-red tracking-wider uppercase backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-brand-red" />
                  <span>SS OPPORTUNITIES DISCOVERY HUB</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display uppercase tracking-tight leading-[1.04]">
                YOUR NEXT <span className="text-brand-red drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">OPPORTUNITY</span><br />
                STARTS HERE.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Discover student internships, campus ambassador leadership, volunteer roles, tech projects, talent stages, and skill masterclasses.
              </p>

              {/* SEARCH BAR */}
              <div className="relative max-w-xl pt-2">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 z-10" />
                <input
                  type="text"
                  placeholder="Search across all 14 categories (e.g. Web Dev, Campus Ambassador, UI/UX, Workshops)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-black/90 border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red shadow-xl transition backdrop-blur-md placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Hero Visual Collage Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl p-4 bg-gradient-to-b from-brand-card/90 via-black to-black border border-brand-red/30 shadow-2xl relative overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Student Opportunity Collaboration" 
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-red text-white text-[10px] font-extrabold uppercase">
                      14 EXPLORATION CATEGORIES
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">Connecting Students to Practical Growth</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. 14 OPPORTUNITY CATEGORIES GRID */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest text-rose-400 uppercase">EXPLORE BY CATEGORY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display uppercase mt-1">
                14 OPPORTUNITY PATHWAYS
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Click any category card below to navigate to dedicated sample listings, requirements, and application guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {OPPORTUNITY_CATEGORIES.map((cat) => (
              <motion.div
                key={cat.slug}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => navigate(`/opportunities/${cat.slug}`)}
                className="rounded-3xl bg-brand-card/90 border border-brand-border/80 hover:border-brand-red/50 hover:shadow-[0_0_25px_rgba(225,29,72,0.2)] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group backdrop-blur-xl relative"
              >
                {/* Visual Category Header Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-brand-border/60">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/80 text-rose-400 border border-brand-red/30 text-[9px] font-extrabold uppercase backdrop-blur-md">
                      {cat.badgeText}
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-3">
                    <span className="text-[10px] font-bold text-slate-300 bg-black/80 px-2 py-0.5 rounded-full border border-brand-border">
                      {cat.count} Listings
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 rounded-lg bg-black/80 border border-brand-border">
                        {getCategoryIcon(cat.iconName)}
                      </div>
                      <h3 className="text-lg font-bold text-white font-display group-hover:text-rose-400 transition truncate">
                        {cat.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-snug line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-bold text-rose-400 group-hover:text-white transition">
                    <span>Explore Pathway</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. FEATURED HIGHLIGHTED OPPORTUNITIES */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-brand-red uppercase">HANDPICKED SELECTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase mt-1">
                FEATURED OPPORTUNITIES
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredOpportunities.map((opp) => (
              <motion.div
                key={opp.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl bg-brand-card/90 border border-brand-red/40 hover:border-brand-red hover:shadow-[0_0_25px_rgba(220,38,38,0.25)] transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-brand-red/15 border border-brand-red/30 text-xs font-bold text-brand-red uppercase">
                      {opp.category}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      {opp.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition mb-2 font-display">
                    {opp.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {opp.shortDescription}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-400 mb-6 bg-black/60 p-3 rounded-2xl border border-brand-border">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-red" />
                      <span>{opp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>Deadline: {opp.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase">
                    Demo Listing
                  </span>
                  <Link
                    to={`/opportunities/detail/${opp.id}`}
                    className="px-5 py-2.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white text-xs font-extrabold transition shadow-md shadow-brand-red/20 flex items-center gap-1.5"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. CAMPUS AMBASSADOR PROGRAM SPOTLIGHT BANNER */}
        <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-brand-card/95 via-brand-card/85 to-black border border-brand-red/40 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-extrabold text-emerald-400 uppercase">
                SPOTLIGHT PROGRAM
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display uppercase">
                SS CAMPUS AMBASSADOR PROGRAM 2026
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Become the official student leader representing Struggle of Student at your institution. Connect peers to workshops, organize campus initiatives, and earn official leadership certificates and rewards.
              </p>

              <div className="pt-2">
                <Link
                  to="/opportunities/campus-ambassador"
                  className="px-8 py-3.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white text-xs font-extrabold tracking-wider transition shadow-xl shadow-brand-red/30 inline-flex items-center gap-2"
                >
                  <span>EXPLORE CAMPUS AMBASSADOR PROGRAM</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-brand-border aspect-[16/10]">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" 
                  alt="SS Campus Ambassadors" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 5. ALL SAMPLE LISTINGS GRID WITH SEARCH FILTER */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl font-bold text-white font-display uppercase">
              RECENT OPPORTUNITY LISTINGS ({filteredListings.length})
            </h3>

            <div className="flex items-center gap-2">
              {['All', 'Internships', 'Jobs', 'Campus Ambassador'].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                    activeFilter === f
                      ? 'bg-brand-red text-white'
                      : 'bg-black/60 text-slate-400 hover:text-white border border-brand-border'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((opp) => (
              <div
                key={opp.id}
                className="p-6 rounded-3xl bg-brand-card/90 border border-brand-border hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-slate-800/90 text-rose-400 border border-brand-red/20 text-[10px] font-bold uppercase">
                      {opp.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 bg-black/60 px-2 py-0.5 rounded">
                      {opp.workMode || opp.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-rose-400 transition mb-1 font-display">
                    {opp.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {opp.shortDescription}
                  </p>

                  {opp.duration && (
                    <div className="text-[11px] text-slate-400 mb-4">
                      ⏱️ Duration: <strong className="text-white">{opp.duration}</strong>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">
                    {opp.isJob ? "Demo Job" : opp.isInternship ? "Demo Internship" : "Demo Listing"}
                  </span>
                  <Link
                    to={`/opportunities/detail/${opp.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-rose-400 transition"
                  >
                    <span>View Listing</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

