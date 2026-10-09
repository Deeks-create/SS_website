import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, Clock, Users, CheckCircle2, ExternalLink, Sparkles, MonitorPlay, X } from 'lucide-react';
import { OnlineMeeting } from '../types';
import { getMeetings, getRegisteredMeetingIds, registerForMeeting } from '../services/storage';

export const MeetingsPage: React.FC = () => {
  const [meetings, setMeetings] = useState<OnlineMeeting[]>([]);
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);
  const [toastMsg, setToastMsg] = useState<string>('');

  // Modal State
  const [selectedMeeting, setSelectedMeeting] = useState<OnlineMeeting | null>(null);
  const [regForm, setRegForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: ''
  });
  const [regErrorMsg, setRegErrorMsg] = useState('');
  const [regSuccessMsg, setRegSuccessMsg] = useState('');

  useEffect(() => {
    setMeetings(getMeetings());
    setRegisteredIds(getRegisteredMeetingIds());
  }, []);

  const submitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMeeting) return;

    if (!regForm.fullName || !regForm.email || !regForm.phone || !regForm.college) {
      setRegErrorMsg('Please fill in all form fields.');
      return;
    }

    const success = registerForMeeting(selectedMeeting.id, {
      fullName: regForm.fullName,
      email: regForm.email,
      phone: regForm.phone,
      college: regForm.college
    });

    if (success) {
      setMeetings(getMeetings());
      setRegisteredIds(getRegisteredMeetingIds());
      setRegSuccessMsg("Successfully registered for the session!");
      setRegForm({ fullName: '', email: '', phone: '', college: '' });
      setTimeout(() => {
        setRegSuccessMsg('');
        setSelectedMeeting(null);
      }, 2500);
    } else {
      setRegErrorMsg("Failed to register. The session may be full.");
    }
  };

  const meetingThumbnails = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
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
                  <span>VIRTUAL SESSIONS & MEETINGS</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                SS <span className="text-brand-red drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">ONLINE SESSIONS</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Join live interactive video sessions, peer practice circles, speaker masterclasses, and career guidance webinars across colleges.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-cyan-400 font-semibold">
                <MonitorPlay className="w-4 h-4" />
                <span>Live Webinars • Interactive Q&A • Skill Circles</span>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl relative aspect-[16/10] group">
                <img 
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Live Online Student Webinar" 
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-semibold">
                  <span>Interactive Virtual Room</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold uppercase">
                    LIVE ROOMS
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {toastMsg && (
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold text-center animate-in fade-in shadow-xl">
            ✓ {toastMsg}
          </div>
        )}

        {/* 2. MEETINGS GRID WITH VISUAL THUMBNAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meetings.map((meeting, idx) => {
            const isRegistered = registeredIds.includes(meeting.id);
            const isFull = meeting.registeredCount >= meeting.capacity;
            const thumb = meetingThumbnails[idx % meetingThumbnails.length];

            return (
              <motion.div 
                key={meeting.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-brand-card/90 border border-brand-border/80 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-xl group"
              >
                {/* Meeting Banner Visual */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-brand-border/60">
                  <img 
                    src={thumb} 
                    alt={meeting.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-red/90 text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md flex items-center gap-1">
                      <Video className="w-3 h-3" />
                      ONLINE SESSION
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-3">
                    <span className="text-[10px] font-bold text-slate-300 bg-black/80 px-2 py-0.5 rounded-full border border-brand-border">
                      {meeting.registeredCount} / {meeting.capacity} Spots Filled
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 font-display group-hover:text-cyan-400 transition">
                      {meeting.title}
                    </h3>

                    <p className="text-xs font-semibold text-brand-red mb-3">
                      Speaker: {meeting.speaker}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {meeting.topic}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-300 bg-black/80 p-3 rounded-2xl border border-brand-border">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-brand-red" />
                        <span>{meeting.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{meeting.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-brand-border/60">
                    {isRegistered ? (
                      <div className="space-y-2">
                        <div className="w-full py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold text-center flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>You're Registered</span>
                        </div>

                        {meeting.meetingUrl ? (
                          <a
                            href={meeting.meetingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-extrabold transition flex items-center justify-center gap-1.5 shadow-md shadow-brand-red/20"
                          >
                            <span>Join Meeting Room</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <div className="w-full py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 text-xs font-semibold text-center italic">
                            Meeting link not provided yet
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        disabled={isFull}
                        onClick={() => {
                          setSelectedMeeting(meeting);
                          setRegErrorMsg('');
                        }}
                        className={`w-full py-3 rounded-xl text-xs font-extrabold transition ${
                          isFull
                            ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                            : 'bg-brand-red hover:bg-brand-red-hover text-white shadow-md shadow-brand-red/20'
                        }`}
                      >
                        {isFull ? 'Session Capacity Full' : 'Register for Free'}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* SESSION REGISTRATION MODAL */}
      {selectedMeeting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-brand-card border border-cyan-500/40 rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl space-y-4">
            <button
              onClick={() => {
                setSelectedMeeting(null);
                setRegErrorMsg('');
              }}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/60 border border-brand-border text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-bold text-brand-red uppercase">
              SESSION REGISTRATION
            </span>

            <h3 className="text-xl font-bold text-white font-display">
              {selectedMeeting.title}
            </h3>

            <p className="text-xs text-slate-400">
              Speaker: <strong>{selectedMeeting.speaker}</strong><br />
              Spots available: <strong>{selectedMeeting.capacity - selectedMeeting.registeredCount}</strong> remaining
            </p>

            {regSuccessMsg ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold text-center">
                ✓ {regSuccessMsg}
              </div>
            ) : (
              <form onSubmit={submitRegistration} className="space-y-3 pt-2">
                {regErrorMsg && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
                    {regErrorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={regForm.fullName}
                    onChange={e => setRegForm({ ...regForm, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={regForm.email}
                    onChange={e => setRegForm({ ...regForm, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="yourname@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={regForm.phone}
                    onChange={e => setRegForm({ ...regForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">College & City</label>
                  <input
                    type="text"
                    required
                    value={regForm.college}
                    onChange={e => setRegForm({ ...regForm, college: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
                    placeholder="e.g. Osmania University, Hyderabad"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-sm font-extrabold tracking-wide transition shadow-lg shadow-brand-red/30 mt-4"
                >
                  Confirm Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};


