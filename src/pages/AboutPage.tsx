import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Target, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SSLogo } from '../components/brand/SSLogo';

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

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 overflow-x-hidden">

      {/* ── 1. FULL-BLEED HERO ────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1800"
            alt=""
            className="w-full h-full object-cover filter brightness-25 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-transparent" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-red/15 rounded-full blur-[150px] pointer-events-none" />

        {/* Editorial hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">About Struggle of Student</span>
              <Sparkles className="w-4 h-4 text-brand-red" />
            </div>

            <h1 className="font-display font-black uppercase leading-[0.88] tracking-tight mb-6">
              <span className="block text-7xl sm:text-8xl lg:text-[10rem] text-white">MORE</span>
              <span className="block text-7xl sm:text-8xl lg:text-[10rem] text-white">THAN</span>
              <span className="block text-7xl sm:text-8xl lg:text-[10rem] text-brand-red"
                style={{ textShadow: '0 0 80px rgba(225,29,72,0.4)' }}>
                A PLATFORM.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl font-light mb-8">
              Struggle of Student (SS) is a student-focused community built around talent discovery,
              practical skill building, leadership, and career opportunities across institutions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/team"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-wider transition-all hover:bg-brand-red/90 hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:-translate-y-px"
              >
                Meet Our 15 Team Members
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/opportunities"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all hover:border-white/40 hover:bg-white/5"
              >
                Explore Opportunities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. EDITORIAL RED SEPARATOR ───────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      {/* ── 3. PULL QUOTE ────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#070205]" />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-white/70 italic leading-relaxed tracking-tight max-w-5xl mx-auto">
              "SS turns student struggles into{' '}
              <span className="text-white font-bold not-italic">growth opportunities</span>{' '}
              — connecting talent, skills, and real-world experience across campus communities."
            </p>
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="w-16 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold text-brand-red uppercase tracking-[0.3em]">The SS Mission</span>
              <div className="w-16 h-[2px] bg-brand-red" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. WHO WE ARE + VISION ───────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-burgundy/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
            {/* Image */}
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                    alt="Student Team"
                    className="w-full h-full object-cover filter brightness-70 hover:brightness-80 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                {/* Corner badge */}
                <div className="absolute -bottom-6 -right-6 bg-brand-red p-6 text-center shadow-2xl shadow-brand-red/40">
                  <Users className="w-8 h-8 text-white mx-auto mb-1" />
                  <p className="text-xs text-white font-bold uppercase tracking-wider">15 Active</p>
                  <p className="text-[10px] text-white/70">Team Members</p>
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal className="lg:col-span-7" delay={0.15}>
              <div className="space-y-6 lg:pl-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-brand-red" />
                  <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">Who We Are</span>
                </div>
                <h2 className="font-display font-black uppercase text-5xl sm:text-6xl text-white leading-none">
                  BUILT BY<br />STUDENTS,<br />
                  <span className="text-white/30">FOR STUDENTS.</span>
                </h2>
                <p className="text-slate-400 text-base leading-relaxed font-light max-w-lg">
                  SS is an active student ecosystem founded by{' '}
                  <strong className="text-white font-semibold">Chanti Nelathalli</strong>{' '}
                  alongside a core team of <strong className="text-white font-semibold">15 active members</strong>.
                  We exist to empower students across colleges to connect, learn from one another, and build real-world capability.
                </p>
                <div className="space-y-3">
                  {[
                    'Peer mentorship & student guidance',
                    'Talent showcases across 12+ categories',
                    'Live career workshops & masterclasses',
                    'Campus ambassador leadership programs',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span className="text-sm text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Vision — reversed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text */}
            <Reveal className="lg:col-span-7">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-brand-red" />
                  <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">Our Vision</span>
                </div>
                <h2 className="font-display font-black uppercase text-5xl sm:text-6xl text-white leading-none">
                  NO STUDENT<br />LEFT BEHIND.<br />
                  <span className="text-white/30">NO DREAM TOO SMALL.</span>
                </h2>
                <p className="text-slate-400 text-base leading-relaxed font-light max-w-lg">
                  To create a vibrant, inclusive environment where no student feels isolated in their journey.
                  We aim to ensure that every student's talent finds an audience, every skill finds expression,
                  and every dream finds an opportunity.
                </p>
              </div>
            </Reveal>

            {/* Image */}
            <Reveal className="lg:col-span-5" delay={0.15}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
                    alt="Vision"
                    className="w-full h-full object-cover filter brightness-70 hover:brightness-80 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <Target className="w-4 h-4 text-brand-red" />
                    <span className="text-xs font-bold text-white uppercase">Inclusive Vision</span>
                  </div>
                </div>
                {/* Red strip */}
                <div className="h-1 bg-brand-red" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. THREE CORE IMPACT AREAS ───────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#070205]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">How We Help</span>
            </div>
            <h2 className="font-display font-black uppercase text-5xl sm:text-6xl text-white leading-none mb-16">
              THREE CORE<br /><span className="text-white/30">IMPACT AREAS</span>
            </h2>
          </Reveal>

          {/* Horizontal strip layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brand-border">
            {[
              {
                img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
                tag: 'Talent Stage',
                title: 'Talent & Expression',
                desc: 'Platforms for musicians, speakers, artists, content creators, and anchors to showcase their capabilities.',
                delay: 0,
              },
              {
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
                tag: 'Masterclasses',
                title: 'Skills & Guidance',
                desc: 'Interactive sessions like our verified "Unmute Yourself" workshop on communication and employability.',
                delay: 0.1,
              },
              {
                img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
                tag: 'Campus Leaders',
                title: 'Leadership & Growth',
                desc: 'Ambassador programs and event volunteer roles that teach practical team coordination and leadership.',
                delay: 0.2,
              },
            ].map((area) => (
              <Reveal key={area.title} delay={area.delay} className="bg-brand-dark group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={area.img}
                    alt={area.title}
                    className="w-full h-full object-cover filter brightness-60 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red border border-brand-red/50 px-2.5 py-1 bg-black/60 backdrop-blur-sm">
                      {area.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white font-display uppercase mb-2">{area.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{area.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY SS EXISTS ─────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600"
            alt=""
            className="w-full h-full object-cover filter brightness-15 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/98 via-brand-dark/80 to-brand-dark/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-brand-red" />
                <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">Our Purpose</span>
              </div>
              <h2 className="font-display font-black uppercase text-5xl sm:text-7xl text-brand-red drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] leading-none mb-8">
                WHY SS<br /><span className="text-rose-400">EXISTS</span>
              </h2>
              <p className="text-rose-400 font-semibold text-base leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-6">
                College life can often be daunting. Students frequently face challenges in finding the right guidance,
                gaining practical stage confidence, discovering internship roles, or simply finding like-minded peers
                who share their passions.
              </p>
              <p className="text-rose-400 font-semibold text-base leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-10">
                Struggle of Student was created to bridge this gap. By offering a platform that combines talent stages,
                campus leadership, skill masterclasses, and peer support, SS turns student struggles into growth opportunities.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-rose-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {['Peer Mentorship', 'Talent Stages', 'Career Guidance'].map((item) => (
                  <span key={item} className="flex items-center gap-2 border border-rose-500/50 bg-black/40 px-4 py-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7. FOUNDER SPOTLIGHT ─────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#06030a]" />
        {/* Ambient burgundy glow behind founder portrait */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-brand-red/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute right-1/3 bottom-0 w-[400px] h-[300px] bg-brand-burgundy/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* LEFT — Founder Portrait */}
            <Reveal className="lg:col-span-5">
              <div className="relative">
                {/* Subtle red glow behind photo */}
                <div className="absolute -inset-4 bg-brand-red/10 rounded-2xl blur-2xl" />
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0c0409] border border-brand-red/20">
                  {/* Founder photo placeholder — awaiting genuine Chanti Nelathalli photo */}
                  <img src="/chanti.jpeg" alt="Chanti Nelathalli" className="w-full h-full object-cover" />
                  {/* Gradient overlay — bottom fade to dark */}
                  
                  {/* Red bottom strip */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red" />
                  {/* Founder badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 px-2.5 py-1 bg-black/70 backdrop-blur-sm">
                      Founder
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — Founder Info */}
            <Reveal className="lg:col-span-7" delay={0.15}>
              <div className="space-y-6 lg:pl-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-white/8 font-display leading-none">01</span>
                  <div className="w-10 h-[2px] bg-brand-red" />
                  <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">Founder &amp; Leader</span>
                </div>

                <h2 className="font-display font-black uppercase leading-none">
                  <span className="block text-4xl sm:text-6xl text-white">CHANTI</span>
                  <span className="block text-4xl sm:text-6xl text-white/30">NELATHALLI</span>
                </h2>

                <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-brand-red text-white px-3 py-1">
                  Founder, Struggle of Student
                </span>

                <blockquote className="text-base sm:text-lg text-slate-300 leading-relaxed font-light italic border-l-2 border-brand-red pl-6 max-w-xl">
                  "Founder of Struggle of Student, building a student-focused community around talent, skills, and opportunities."
                </blockquote>

                <div className="pt-2 flex flex-wrap gap-3">
                  {[
                    'Community Leadership',
                    'Talent Discovery',
                    'Student Empowerment',
                  ].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 border border-brand-border px-3 py-1.5">
                      <CheckCircle2 className="w-3 h-3 text-brand-red" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Verified Founder — Confirmed SS Fact</span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── 8. CTA ───────────────────────────────────────── */}
      <section className="py-40 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <SSLogo variant="hero" />
            <h2 className="font-display font-black uppercase text-5xl sm:text-7xl text-white leading-none mt-8 mb-4">
              READY TO<br />GROW WITH US?
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-10 font-light">
              Join 15 active team members and growing student leaders across campuses.
            </p>
            <Link
              to="/join"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-brand-red text-white text-sm font-black uppercase tracking-wider hover:bg-brand-red/90 transition-all hover:-translate-y-0.5 shadow-2xl shadow-brand-red/30"
            >
              Join SS Community Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

