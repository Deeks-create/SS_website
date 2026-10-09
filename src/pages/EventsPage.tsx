import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, CheckCircle2, AlertCircle, X, ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { SSEvent, VolunteerRole } from '../types';
import { getEvents, registerVolunteer } from '../services/storage';

export const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<SSEvent[]>([]);
  const [activeTab, setActiveTab] = useState<'UPCOMING' | 'PAST'>('UPCOMING');
  
  // Volunteer Modal State
  const [selectedEventForVol, setSelectedEventForVol] = useState<SSEvent | null>(null);
  const [selectedRole, setSelectedRole] = useState<VolunteerRole | null>(null);
  
  const [volForm, setVolForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: ''
  });
  const [volSuccessMsg, setVolSuccessMsg] = useState('');
  const [volErrorMsg, setVolErrorMsg] = useState('');

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const upcomingEvents = events.filter(e => e.isUpcoming);
  const pastEvents = events.filter(e => !e.isUpcoming);

  const handleApplyVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEventForVol || !selectedRole) return;

    if (!volForm.fullName || !volForm.email || !volForm.phone || !volForm.college) {
      setVolErrorMsg('Please fill in all form fields.');
      return;
    }

    const res = registerVolunteer({
      eventId: selectedEventForVol.id,
      roleId: selectedRole.id,
      fullName: volForm.fullName,
      email: volForm.email,
      phone: volForm.phone,
      college: volForm.college
    });

    if (res.success) {
      setVolSuccessMsg(res.message);
      setEvents(getEvents());
      setVolForm({ fullName: '', email: '', phone: '', college: '' });
      setTimeout(() => {
        setVolSuccessMsg('');
        setSelectedEventForVol(null);
        setSelectedRole(null);
      }, 2500);
    } else {
      setVolErrorMsg(res.message);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 overflow-x-hidden">

      {/* ── CINEMATIC HERO ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1800"
            alt=""
            className="w-full h-full object-cover filter brightness-20 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold text-brand-red tracking-[0.3em] uppercase">SS Events & Workshops</span>
              <Sparkles className="w-4 h-4 text-brand-red" />
            </div>
            <h1 className="font-display font-black uppercase leading-none tracking-tight mb-6">
              <span className="block text-6xl sm:text-8xl text-white">COMMUNITY</span>
              <span className="block text-6xl sm:text-8xl text-brand-red" style={{ textShadow: '0 0 60px rgba(225,29,72,0.4)' }}>EVENTS.</span>
            </h1>
            <p className="text-slate-300 text-base leading-relaxed max-w-xl font-light">
              Interactive sessions, skill masterclasses, campus gatherings, and volunteer desk coordination for SS events across colleges.
            </p>
            <div className="flex flex-wrap gap-3 mt-6 text-xs font-semibold text-slate-400">
              {['🎤 Workshops & Seminars', '👥 Campus Meetups', '🤝 Volunteer Roles'].map(t => (
                <span key={t} className="border border-white/10 px-4 py-2">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 space-y-12 relative z-10">

        {/* TAB SWITCHER */}
        <div className="flex items-center gap-0 border border-white/10 w-fit">
          <button
            onClick={() => setActiveTab('UPCOMING')}
            className={`px-8 py-3 text-xs font-bold tracking-widest uppercase transition ${
              activeTab === 'UPCOMING'
                ? 'bg-brand-red text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Upcoming ({upcomingEvents.length})
          </button>
          <button
            onClick={() => setActiveTab('PAST')}
            className={`px-8 py-3 text-xs font-bold tracking-widest uppercase transition border-l border-white/10 ${
              activeTab === 'PAST'
                ? 'bg-brand-red text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Past Events ({pastEvents.length})
          </button>
        </div>

        {/* 3. UPCOMING EVENTS LIST */}
        {activeTab === 'UPCOMING' && (
          <div className="space-y-px bg-brand-border">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-brand-dark p-8 sm:p-10 space-y-8 group overflow-hidden border-l-2 border-transparent hover:border-brand-red transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-6 border-b border-brand-border/60 items-center">
                  
                  {/* Event Visual Photo Banner */}
                  <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[16/10] border border-brand-border">
                    <img 
                      src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-brand-red text-white text-xs font-extrabold uppercase shadow-md">
                        {event.isOnline ? "ONLINE EVENT" : "ON-CAMPUS EVENT"}
                      </span>
                    </div>
                  </div>

                  {/* Event Information */}
                  <div className="lg:col-span-7 space-y-4 text-left">
                    <div className="flex items-center gap-2">
                      {event.isVerifiedFact ? (
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                          ✓ Verified SS Event
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full">
                          Demo Event
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                      {event.title}
                    </h2>
                    {event.tagline && (
                      <p className="text-xs sm:text-sm font-semibold text-cyan-400 italic">{event.tagline}</p>
                    )}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{event.description}</p>

                    {/* Date & Time Info Bar */}
                    <div className="flex flex-wrap items-center gap-4 p-3 rounded-xl bg-black/80 border border-brand-border text-xs font-semibold text-slate-300">
                      <div className="flex items-center gap-1.5 text-brand-red font-bold">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{event.time}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VOLUNTEER ROLES CAPACITY TRACKING SECTION */}
                <div>
                  <h3 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-red" />
                    Volunteer Opportunities & Capacity
                  </h3>

                  {event.volunteerRoles && event.volunteerRoles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {event.volunteerRoles.map((role) => {
                        const isFull = role.filled >= role.capacity;
                        return (
                          <div 
                            key={role.id}
                            className={`p-5 rounded-2xl border transition flex flex-col justify-between ${
                              isFull 
                                ? 'bg-black/40 border-brand-border opacity-70' 
                                : 'bg-black/80 border-brand-border hover:border-cyan-500/40'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <h4 className="text-xs font-bold text-white">{role.title}</h4>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  isFull 
                                    ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                }`}>
                                  {role.filled} / {role.capacity} spots filled
                                </span>
                              </div>

                              <p className="text-[11px] text-slate-400 mb-4">{role.description}</p>
                            </div>

                            <button
                              disabled={isFull}
                              onClick={() => {
                                setSelectedEventForVol(event);
                                setSelectedRole(role);
                                setVolErrorMsg('');
                              }}
                              className={`w-full py-2.5 rounded-xl text-xs font-extrabold transition flex items-center justify-center gap-1.5 ${
                                isFull
                                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                                  : 'bg-brand-red hover:bg-brand-red-hover text-white shadow-md shadow-brand-red/20'
                              }`}
                            >
                              {isFull ? (
                                <span>Volunteer Slots Full</span>
                              ) : (
                                <>
                                  <UserCheck className="w-4 h-4" />
                                  <span>Apply as Volunteer</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 italic">No volunteer roles open for this event.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. PAST EVENTS */}
        {activeTab === 'PAST' && (
          <div className="space-y-px bg-brand-border">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className={`bg-brand-dark p-8 sm:p-10 group overflow-hidden border-l-2 transition-all duration-300 ${
                  event.isVerifiedFact ? 'border-brand-red' : 'border-transparent hover:border-white/20'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                  <div className="lg:col-span-5 relative overflow-hidden aspect-[16/10]">
                    <img
                      src={event.image || 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'}
                      alt={event.title}
                      className="w-full h-full object-cover filter brightness-60 group-hover:brightness-75 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 border border-white/20 px-2.5 py-1 bg-black/60 backdrop-blur-sm">Past Workshop</span>
                      {event.isVerifiedFact && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 px-2.5 py-1 bg-black/60 backdrop-blur-sm">✓ Verified</span>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="font-display font-black uppercase text-3xl sm:text-4xl text-white leading-none">
                      "{event.title}"
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-400 pt-2">
                      <span>📅 Date: {event.date}</span>
                      <span>•</span>
                      <span>⏰ Time: {event.time}</span>
                      <span>•</span>
                      <span>📍 Location: {event.location}</span>
                      <span>•</span>
                      <span className="text-cyan-400">Organized by {event.organizer}</span>
                    </div>

                    {event.topics && (
                      <div className="pt-3 border-t border-brand-border">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Topics Covered</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.topics.map((t, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-lg bg-black border border-brand-border text-xs font-semibold text-slate-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* VOLUNTEER APPLICATION MODAL */}
      {selectedEventForVol && selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-brand-card border border-cyan-500/40 rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl space-y-4">
            <button
              onClick={() => {
                setSelectedEventForVol(null);
                setSelectedRole(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/60 border border-brand-border text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-bold text-brand-red uppercase">
              VOLUNTEER REGISTRATION
            </span>

            <h3 className="text-xl font-bold text-white font-display">
              {selectedRole.title}
            </h3>

            <p className="text-xs text-slate-400">
              Event: <strong>{selectedEventForVol.title}</strong><br />
              Spots available: <strong>{selectedRole.capacity - selectedRole.filled}</strong> remaining
            </p>

            {volSuccessMsg ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold text-center">
                ✓ {volSuccessMsg}
              </div>
            ) : (
              <form onSubmit={handleApplyVolunteer} className="space-y-3 pt-2">
                {volErrorMsg && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
                    {volErrorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={volForm.fullName}
                    onChange={e => setVolForm({ ...volForm, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={volForm.email}
                    onChange={e => setVolForm({ ...volForm, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="yourname@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={volForm.phone}
                    onChange={e => setVolForm({ ...volForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">College & City</label>
                  <input
                    type="text"
                    required
                    value={volForm.college}
                    onChange={e => setVolForm({ ...volForm, college: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="e.g. Osmania University, Hyderabad"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-sm font-extrabold tracking-wide transition shadow-lg shadow-brand-red/30 mt-4"
                >
                  Submit Volunteer Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


