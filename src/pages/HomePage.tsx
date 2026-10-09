import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Zap,
  Users,
  Star,
  Play
} from 'lucide-react';
import { SSLogo } from '../components/brand/SSLogo';
import { SITE_CONFIG } from '../data/siteConfig';
import { SAMPLE_OPPORTUNITIES } from '../data/opportunities';
import { INITIAL_EVENTS } from '../data/events';
import { FOUNDER_MEMBER } from '../data/team';

// Scroll reveal wrapper
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredOpps = selectedCategory === 'All'
    ? SAMPLE_OPPORTUNITIES.slice(0, 6)
    : SAMPLE_OPPORTUNITIES.filter(o => o.category === selectedCategory).slice(0, 6);

  const pastWorkshop = INITIAL_EVENTS.find(e => e.id === 'event-unmute-yourself-2026');

  return (
    <div className="min-h-screen text-slate-100 overflow-x-hidden pt-20">

      {/* ── 1. CINEMATIC HERO ─────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">

        {/* Background: deep layered gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0d0305] to-[#050505]" />

        {/* Ambient glows */}
        <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-brand-red/20 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-burgundy/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Background editorial large text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <span className="text-[27vw] lg:text-[17vw] font-black text-white/[0.02] uppercase tracking-[-0.05em] font-display whitespace-nowrap">
            SS
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left: Editorial headline */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Eyebrow label */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-brand-red" />
                <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">
                  Student Community Platform
                </span>
              </div>

              {/* Editorial headline — reduced ~20-25% from previous sizes */}
              <div className="space-y-0">
                <h1 className="font-display font-black uppercase leading-[0.92] tracking-tight">
                  <span className="block text-[clamp(3rem,8vw,5.5rem)] text-white">
                    YOUR
                  </span>
                  <span className="block text-[clamp(3rem,8vw,5.5rem)] text-brand-red"
                    style={{ textShadow: '0 0 60px rgba(225,29,72,0.4)' }}>
                    TALENT.
                  </span>
                  <span className="block text-[clamp(3rem,8vw,5.5rem)] text-white">
                    YOUR
                  </span>
                  <span className="block text-[clamp(2.25rem,6vw,4.5rem)] text-white/40">
                    FUTURE.
                  </span>
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg font-light">
                {SITE_CONFIG.hero.subtext}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <Link
                  to="/join"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white text-sm font-bold tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-brand-red/90 hover:shadow-[0_0_40px_rgba(225,29,72,0.5)] overflow-hidden"
                >
                  <span className="relative z-10">Join SS Community</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  to="/opportunities"
                  className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-wider uppercase rounded-sm transition-all duration-300 hover:border-white/50 hover:bg-white/5"
                >
                  <span>Explore Opportunities</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Verified stat strip */}
              <div className="flex items-center gap-6 border-t border-white/10 pt-6">
                <div>
                  <span className="text-3xl font-black text-brand-red font-display">14</span>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Active Team Members</p>
                  <p className="text-[10px] text-emerald-500 font-semibold">✓ Verified</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Zap className="w-4 h-4 text-brand-red" />
                  <span className="uppercase tracking-widest font-semibold">Showcase · Learn · Connect · Grow</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Hero image — balanced composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="relative w-[80%] mx-auto -mt-12 lg:-mt-16">
                {/* Main image with wider aspect for more visibility */}
                <div className="aspect-square lg:aspect-[4/5] xl:aspect-[1/1.1] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                    alt="Students collaborating"
                    className="w-full h-full object-cover filter brightness-75"
                  />
                  {/* Subtle overlay gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent" />

                  {/* Bottom caption — clean, non-cluttering */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs text-white/70 italic">
                      "More than a platform. A student movement."
                    </p>
                  </div>

                  {/* Small SS badge inside bottom-right corner */}
                  <div className="absolute bottom-4 right-4 bg-brand-red/90 backdrop-blur-sm px-3 py-2 text-center z-10">
                    <span className="text-sm font-black text-white font-display block leading-none">SS</span>
                    <span className="text-[8px] text-white/80 font-bold uppercase tracking-wider">Community</span>
                  </div>
                </div>

                {/* Bottom accent strip */}
                <div className="h-1 bg-gradient-to-r from-brand-red via-rose-400 to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── 1.5 OPPORTUNITY SPOTLIGHT ──────────────────────── */}
      <section className="relative py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-brand-red" />
                  <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">
                    Featured
                  </span>
                </div>
                <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-white leading-tight">
                  Opportunity<br /><span className="text-white/30">Spotlight</span>
                </h2>
              </div>
              <Link
                to="/opportunities"
                className="group flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-brand-red transition-colors"
              >
                <span>View All Opportunities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpps.slice(0, 3).map((opp, index) => (
                <Link key={opp.id} to={`/opportunities/detail/${opp.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1 * index }}
                    className="group relative h-full bg-brand-card/80 backdrop-blur-md border border-white/5 hover:border-brand-red/30 p-8 flex flex-col transition-all duration-500 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 px-3 py-1">
                        {opp.type}
                      </span>
                      {opp.isHot && (
                        <div className="flex items-center gap-1 text-orange-400">
                          <Sparkles className="w-3 h-3" />
                          <span className="text-[10px] uppercase font-bold tracking-widest">Hot</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand-red transition-colors line-clamp-2">
                      {opp.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-8 line-clamp-3 font-light">
                      {opp.shortDescription}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">{opp.company}</span>
                      <ArrowRight className="w-4 h-4 text-brand-red opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. ABOUT SS EDITORIAL STRIP ──────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-[#0a0205]" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-brand-burgundy/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

            {/* Left: Big editorial text */}
            <Reveal className="lg:col-span-6">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-brand-red" />
                  <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">About SS</span>
                </div>
                <h2 className="font-display font-black uppercase leading-tight text-5xl sm:text-6xl text-white">
                  MORE THAN<br />
                  <span className="text-brand-red">A PLATFORM.</span><br />
                  IT'S A<br />
                  <span className="text-white/30">COMMUNITY.</span>
                </h2>
                <p className="text-slate-400 text-base leading-relaxed max-w-md font-light">
                  SS — <strong className="text-white font-semibold">Struggle of Student</strong> — brings students
                  together through talent discovery, skill building, campus leadership, events, career support, and meaningful connections.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  {[
                    { label: 'Talent & Expression', icon: Star },
                    { label: 'Real Opportunities', icon: Briefcase },
                    { label: 'Peer Support', icon: Users },
                  ].map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-brand-red" />
                      <span className="text-xs text-slate-400 font-medium">{label}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white/30 hover:border-brand-red hover:text-brand-red transition-colors pb-0.5 group"
                >
                  <span>Discover our story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            {/* Right: Collage composition */}
            <Reveal className="lg:col-span-6" delay={0.15}>
              <div className="relative">
                {/* Main image */}
                <div className="relative overflow-hidden rounded-none aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900"
                    alt="Student community"
                    className="w-full h-full object-cover filter brightness-70 hover:brightness-80 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. FIVE PILLARS ───────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#070507]" />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between mb-20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-brand-red" />
                  <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">What SS Offers</span>
                </div>
                <h2 className="font-display font-black uppercase text-5xl sm:text-6xl text-white leading-none">
                  FIVE CORE<br />
                  <span className="text-white/30">PILLARS</span>
                </h2>
              </div>
              <span className="hidden lg:block text-[9vw] font-black text-white/[0.04] font-display leading-none select-none">05</span>
            </div>
          </Reveal>

          {/* Asymmetric pillar layout */}
          <div className="space-y-px">
            {[
              { n: '01', title: 'Talent Platform', desc: 'Showcase your unique talent — from music and performance to art, anchoring, comedy and tech.', tag: 'Showcase', url: '/opportunities' },
              { n: '02', title: 'Campus Ambassador', desc: 'Represent SS, build your campus network and lead student initiatives across institutions.', tag: 'Leadership', url: '/opportunities' },
              { n: '03', title: 'Skill Development', desc: 'Build communication, leadership, teamwork and practical employability skills.', tag: 'Growth', url: '/meetings' },
              { n: '04', title: 'Career & Roles', desc: 'Discover roles across technology, media, photography, editing, social media and management.', tag: 'Opportunity', url: '/opportunities' },
              { n: '05', title: 'Future Support', desc: 'Find internships, jobs, guidance and peer support for promising student ideas.', tag: 'Career', url: '/placements' },
            ].map((pillar, i) => (
              <Reveal key={pillar.n} delay={i * 0.06}>
                <Link
                  to={pillar.url}
                  className="group flex items-center gap-8 lg:gap-16 py-8 px-6 border-t border-white/5 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <span className="text-4xl sm:text-5xl font-black text-white/10 group-hover:text-brand-red/30 transition-colors font-display flex-shrink-0 w-16">
                    {pillar.n}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-red transition-colors font-display uppercase">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors mt-1 max-w-xl">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-red border border-brand-red/30 bg-brand-red/5 rounded-full">
                      {pillar.tag}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-brand-red group-hover:translate-x-2 transition-all" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED OPPORTUNITIES ─────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070507] to-brand-dark" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-brand-red" />
                  <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">Opportunities Platform</span>
                </div>
                <h2 className="font-display font-black uppercase text-5xl sm:text-6xl text-white leading-none">
                  WHAT'S YOUR<br />
                  <span className="text-white/30">NEXT MOVE?</span>
                </h2>
              </div>
              <Link
                to="/opportunities"
                className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white/30 hover:border-brand-red hover:text-brand-red transition-colors pb-0.5 group flex-shrink-0"
              >
                View all opportunities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* Category filter */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
              {['All', 'Campus Ambassador', 'Internships', 'Volunteering', 'Projects', 'Workshops'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold whitespace-nowrap uppercase tracking-wider transition-all rounded-none border ${
                    selectedCategory === cat
                      ? 'bg-brand-red text-white border-brand-red'
                      : 'border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Opportunity list — editorial style */}
          <div className="space-y-px">
            {filteredOpps.map((opp, i) => (
              <Reveal key={opp.id} delay={i * 0.05}>
                <Link
                  to={`/opportunities?id=${opp.id}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 px-4 border-t border-white/5 hover:bg-white/[0.02] transition-all duration-300 relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider ${
                      opp.status === 'Open'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>{opp.status}</span>
                    <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider border border-brand-red/30 px-2.5 py-1">
                      {opp.category}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-red transition-colors font-display">
                      {opp.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">
                      {opp.shortDescription}
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-6 text-xs text-slate-500 flex-shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3 h-3" />
                      {opp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {opp.deadline}
                    </span>
                  </div>

                  <ArrowRight className="hidden sm:block w-5 h-5 text-white/20 group-hover:text-brand-red group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. STATS EDITORIAL SECTION ────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-card/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5">
            {[
              { num: '14', label: 'Active Team Members', sub: '✓ Verified Fact', numColor: 'text-brand-red' },
              { num: '10+', label: 'Student Opportunities', sub: 'Sample Prototype Metric', numColor: 'text-white' },
              { num: '5+', label: 'Community Initiatives', sub: 'Sample Prototype Metric', numColor: 'text-white' },
              { num: '∞', label: 'Student Potential', sub: 'Growing Network', numColor: 'text-brand-red' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="p-10 border-r border-b border-white/5 last:border-r-0">
                <div>
                  <span className={`text-5xl sm:text-6xl font-black font-display ${stat.numColor}`}>{stat.num}</span>
                  <p className="text-sm font-bold text-white uppercase mt-3">{stat.label}</p>
                  <p className="text-[10px] text-slate-500 mt-1 font-medium">{stat.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PAST WORKSHOP BANNER ───────────────────────── */}
      {pastWorkshop && (
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-[#0a0205] to-brand-dark" />
          <div className="absolute inset-0 opacity-50">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1400"
              alt=""
              className="w-full h-full object-cover filter brightness-20 saturate-50"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/95" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-brand-red" />
                  <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">Past Featured Workshop</span>
                  <span className="text-xs font-semibold text-emerald-400">✓ Verified SS Event</span>
                </div>
                <h2 className="font-display font-black uppercase text-5xl sm:text-7xl text-white leading-none mb-8">
                  "{pastWorkshop.title}"
                </h2>
                <p className="text-slate-300 text-base leading-relaxed max-w-2xl mb-8">
                  {pastWorkshop.description}
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-400 mb-10">
                  <span className="flex items-center gap-2 border border-white/10 px-4 py-2">
                    <Calendar className="w-3 h-3 text-brand-red" />
                    {pastWorkshop.date} · {pastWorkshop.time}
                  </span>
                  <span className="flex items-center gap-2 border border-white/10 px-4 py-2">
                    📍 {pastWorkshop.location}
                  </span>
                  <span className="flex items-center gap-2 border border-white/10 px-4 py-2">
                    🎙️ {pastWorkshop.organizer}
                  </span>
                </div>
                {pastWorkshop.topics && (
                  <div className="flex flex-wrap gap-3 mb-10">
                    {pastWorkshop.topics.map((topic, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-all group"
                >
                  <span>View All SS Events</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 7. FOUNDER SPOTLIGHT SECTION REMOVED */}

      {/* ── 8. FINAL CTA ──────────────────────────────────── */}
      <section className="relative py-40 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0205] to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-burgundy/20 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")'
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <Reveal>
            <SSLogo variant="hero" />
            <h2 className="font-display font-black uppercase text-5xl sm:text-7xl text-white leading-none mt-8 mb-4">
              BE PART OF<br />SOMETHING BIGGER.
            </h2>
            <p className="text-white/70 text-base max-w-xl mx-auto mb-10 font-light">
              Showcase your talent. Build your skills. Find opportunities. Grow with a community of ambitious students.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/join"
                className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-red text-sm font-black uppercase tracking-wider hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-2xl"
              >
                Join SS Community Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/opportunities"
                className="group inline-flex items-center gap-2 px-10 py-5 border-2 border-white/50 text-white text-sm font-black uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all"
              >
                Explore Opportunities
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};
