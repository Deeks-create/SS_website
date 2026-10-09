import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Music, Video, Camera, Mic, Palette, Film, ChevronRight, ArrowRight } from 'lucide-react';

export const TalentShowcasePage: React.FC = () => {

  const talentCategories = [
    { name: "Singing", icon: "Music", count: 18, id: "opp-talent-singing", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600" },
    { name: "Dancing", icon: "Sparkles", count: 14, id: "opp-talent-dancing", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=600" },
    { name: "Stand-up Comedy", icon: "Mic", count: 9, id: "opp-talent-comedy", image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=600" },
    { name: "Anchoring & Hosting", icon: "Mic", count: 12, id: "opp-talent-anchoring", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600" },
    { name: "Writing & Poetry", icon: "Mic", count: 8, id: "opp-talent-writing", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600" },
    { name: "Instrumental Music", icon: "Music", count: 15, id: "opp-talent-music", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600" },
    { name: "Acting & Drama", icon: "Film", count: 10, id: "opp-talent-acting", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600" },
    { name: "Photography & Video", icon: "Camera", count: 22, id: "opp-talent-photography", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600" },
    { name: "Art & Design", icon: "Palette", count: 19, id: "opp-talent-art", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=600" }
  ];

  const samplePerformers = [
    {
      name: "Rohan Sharma",
      category: "Instrumental Music",
      college: "JNTU Hyderabad",
      title: "Acoustic Guitar Cover - Fusion Medley",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Priya Varma",
      category: "Singing",
      college: "Osmania University",
      title: "Classical Vocal Solo Performance",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Arjun Rao",
      category: "Stand-up Comedy",
      college: "CBIT Hyderabad",
      title: "Hostel Life & Exam Struggles Stand-up",
      image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark/50 text-slate-100 pt-24 pb-24 relative z-10 overflow-x-hidden">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/opportunities" className="hover:text-white transition">Opportunities Hub</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400 font-bold">Talent Showcase</span>
        </div>

        {/* HERO BANNER */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-r from-brand-card/95 via-brand-card/90 to-black border border-cyan-500/40 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-xs font-extrabold text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STUDENT TALENT DISCOVERY STAGE</span>
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                GIVE YOUR PASSION A <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">REAL STAGE.</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Struggle of Student provides an open stage for student musicians, dancers, comedians, poets, artists, and creators. Select your category and submit your portfolio link to get featured across SS platforms and live campus gigs!
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-300">
                <span className="px-3 py-1 rounded-full bg-black/80 border border-brand-border">🎤 Live Campus Gigs</span>
                <span className="px-3 py-1 rounded-full bg-black/80 border border-brand-border">🌟 Community Feature</span>
                <span className="px-3 py-1 rounded-full bg-black/80 border border-brand-border">🎸 SS Band Opportunities</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-cyan-500/30 aspect-[16/10] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Student Musical Performance Stage" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-semibold">
                  <span>SS Live Campus Talent Stage</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CREATIVE TALENT CATEGORIES GRID */}
        <div>
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">DISCOVER CREATIVE TALENTS</span>
            <h2 className="text-3xl font-extrabold text-white font-display uppercase">
              SHOWCASE CATEGORIES
            </h2>
            <p className="text-sm text-slate-400">Click a category to apply.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {talentCategories.map((tc) => (
              <Link
                to={`/opportunities/detail/${tc.id}`}
                key={tc.name}
                className="rounded-3xl bg-brand-card/90 border border-brand-border/80 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group flex flex-col backdrop-blur-xl relative"
              >
                <div className="aspect-[2/1] overflow-hidden relative">
                  <img src={tc.image} alt={tc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                     <h4 className="text-lg font-bold text-white font-display group-hover:text-cyan-400 transition">{tc.name}</h4>
                  </div>
                </div>
                
                <div className="p-4 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400">{tc.count} Student Creators</span>
                  <span className="text-brand-red flex items-center gap-1 group-hover:gap-2 transition-all">
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FEATURED STUDENT PERFORMERS GALLERY */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-display uppercase">
            FEATURED STUDENT PERFORMERS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {samplePerformers.map((p, i) => (
              <div key={i} className="rounded-3xl bg-brand-card/90 border border-brand-border overflow-hidden backdrop-blur-xl group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute top-2 left-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-red text-white text-[10px] font-extrabold uppercase">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-1">
                  <h4 className="text-base font-bold text-white font-display">{p.title}</h4>
                  <p className="text-xs font-semibold text-cyan-400">{p.name} • {p.college}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

