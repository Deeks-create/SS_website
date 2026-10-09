import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Search, 
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
  Target,
  Zap
} from 'lucide-react';
import { OPPORTUNITY_CATEGORIES } from '../../data/opportunityCategories';
import { Opportunity } from '../../types';
import { getOpportunities } from '../../services/storage';

export const CategoryDetailPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Closing Soon'>('All');

  useEffect(() => {
    setOpportunities(getOpportunities());
  }, []);

  const categoryMeta = OPPORTUNITY_CATEGORIES.find(c => c.slug === categorySlug) || {
    slug: categorySlug || 'general',
    title: 'Student Opportunities',
    shortTitle: 'Opportunities',
    description: 'Explore curated student opportunities across tech, creative, events, and leadership.',
    longDescription: 'Struggle of Student connects college students with real capability building, mentorship, and practical roles.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    iconName: 'Sparkles',
    count: 5,
    accentColor: 'brand-red',
    badgeText: 'Explore Pathway'
  };

  const categoryListings = opportunities.filter(o => o.categorySlug === categorySlug || (categorySlug === 'other' && o.categorySlug === 'other'));

  const filteredListings = categoryListings.filter(o => {
    const matchesSearch = searchQuery === '' ||
      o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const relatedOpportunities = opportunities
    .filter(o => o.categorySlug !== categorySlug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-dark/50 text-slate-100 pt-24 pb-24 relative z-10 overflow-x-hidden">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* 1. BREADCRUMB NAVIGATION */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/opportunities" className="hover:text-white transition">Opportunities Hub</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400 font-bold">{categoryMeta.title}</span>
        </div>

        {/* 2. CATEGORY DISTINCTIVE HERO BANNER */}
        <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-brand-card/95 via-brand-card/90 to-black border border-brand-red/40 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/15 border border-brand-red/40 text-xs font-extrabold text-brand-red tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{categoryMeta.badgeText}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                {categoryMeta.title} <span className="text-brand-red drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">PATHWAY</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {categoryMeta.longDescription}
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-cyan-400 font-semibold">
                <Zap className="w-4 h-4" />
                <span>Structured Sample Listings • Clear Eligibility • Learning Outcomes</span>
              </div>
            </div>

            {/* Hero Category Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl relative aspect-[16/10] group">
                <img 
                  src={categoryMeta.image} 
                  alt={categoryMeta.title} 
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-semibold">
                  <span>{categoryMeta.title} Gallery</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-red text-white text-[10px] font-extrabold">
                    {categoryListings.length} LISTINGS
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. WHAT SS OFFERS IN THIS CATEGORY SECTION */}
        <div className="p-8 rounded-3xl bg-brand-card/80 border border-brand-border/80 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-red font-bold text-sm">
                <Target className="w-4 h-4" />
                <span>Targeted Capability</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structured sample roles designed around real industry workflows and student skill requirements.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Users className="w-4 h-4" />
                <span>Peer & Mentor Guidance</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with 14 active SS team coordinators for guidance, portfolio reviews, and workshop access.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Outcomes</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Gain verified project certificates, portfolio credits, and direct referrals for future opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* 4. SEARCH & STATUS FILTER CONTROL BAR */}
        <div className="p-4 rounded-3xl bg-brand-card/90 border border-brand-border/80 space-y-4 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={`Search ${categoryMeta.title}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-black/80 border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red transition"
              />
            </div>

            {/* Status Pills */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-bold mr-1">Status:</span>
              {(['All', 'Open', 'Closing Soon'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
                    statusFilter === st
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/20'
                      : 'bg-black/60 text-slate-400 hover:text-white border border-brand-border'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* 5. CATEGORY LISTINGS GRID */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white font-display uppercase">
              {categoryMeta.title} Sample Listings ({filteredListings.length})
            </h3>
          </div>

          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((opp) => (
                <motion.div
                  key={opp.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-3xl bg-brand-card/90 border border-brand-border hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.18)] transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-bold text-brand-red uppercase">
                        {opp.category}
                      </span>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        opp.status === 'Open' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {opp.status}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition mb-2 font-display">
                      {opp.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {opp.shortDescription}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-400 mb-6 bg-black/60 p-3 rounded-2xl border border-brand-border">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-brand-red" />
                        <span>{opp.location} {opp.isRemote && '(Remote)'}</span>
                      </div>
                      {opp.duration && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>Duration: {opp.duration}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>Deadline: {opp.deadline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">
                      {opp.isJob ? "Demo Job" : "Demo Listing"}
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
          ) : (
            <div className="text-center py-16 bg-brand-card/90 rounded-3xl border border-brand-border">
              <Info className="w-12 h-12 text-slate-500 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-white font-display">No listings match your filter</h4>
              <p className="text-xs text-slate-400 mt-1">Try resetting search query or status filter.</p>
            </div>
          )}
        </div>

        {/* 6. RELATED OPPORTUNITIES SECTION */}
        <div className="pt-8 border-t border-brand-border/60 space-y-6">
          <h3 className="text-xl font-bold text-white font-display uppercase">
            EXPLORE RELATED OPPORTUNITY PATHWAYS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedOpportunities.map((rel) => (
              <Link
                key={rel.id}
                to={`/opportunities/detail/${rel.id}`}
                className="p-5 rounded-2xl bg-brand-card/80 border border-brand-border hover:border-cyan-500/40 transition group flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 text-[10px] font-bold uppercase">
                    {rel.category}
                  </span>
                  <h5 className="text-sm font-bold text-white mt-2 group-hover:text-cyan-400 transition">
                    {rel.title}
                  </h5>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/40 text-[10px] text-cyan-400 font-bold flex items-center justify-between mt-3">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 7. CALL TO JOIN SS COMMUNITY */}
        <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-brand-card/95 via-brand-card/85 to-black border border-brand-red/40 text-center max-w-4xl mx-auto space-y-4 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase">
            WANT TO ACCESS MORE {categoryMeta.title.toUpperCase()} OPPORTUNITIES?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Join the Struggle of Student network to get direct notifications about new campus ambassador roles, student workshops, and partner internships.
          </p>
          <div className="pt-2">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white text-xs font-extrabold tracking-wider transition shadow-xl shadow-brand-red/30"
            >
              <span>JOIN SS COMMUNITY NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

