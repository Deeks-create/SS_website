import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Calendar, 
  Briefcase, 
  Users, 
  UserCheck, 
  FileText, 
  Plus, 
  Trash2, 
  Edit3, 
  LogOut, 
  CheckCircle2, 
  X,
  Building,
  Headphones
} from 'lucide-react';
import { 
  SSEvent, 
  Opportunity, 
  TeamMember, 
  PlacementItem, 
  JoinApplication, 
  ServiceEnquiry, 
  VolunteerRegistration 
} from '../types';
import { 
  getEvents, 
  saveEvent, 
  deleteEvent, 
  getOpportunities, 
  saveOpportunity, 
  updateOpportunityStatus, 
  getJoinApplications, 
  getServiceEnquiries, 
  getVolunteerRegistrations, 
  getTeamMembers, 
  saveTeamMember, 
  getPlacements, 
  savePlacement 
} from '../services/storage';
import { SSLogo } from '../components/brand/SSLogo';

export const AdminDashboard: React.FC = () => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('ss_admin_auth') === 'true';
  });
  const [loginEmail, setLoginEmail] = useState('admin@ss-demo.local');
  const [loginPassword, setLoginPassword] = useState('demo123');
  const [authError, setAuthError] = useState('');

  // Active Admin Nav Tab
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'EVENTS' | 'OPPORTUNITIES' | 'VOLUNTEERS' | 'APPLICATIONS' | 'ENQUIRIES' | 'TEAM' | 'PLACEMENTS'>('OVERVIEW');

  // Data States
  const [events, setEvents] = useState<SSEvent[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [applications, setApplications] = useState<JoinApplication[]>([]);
  const [enquiries, setEnquiries] = useState<ServiceEnquiry[]>([]);
  const [volunteers, setVolunteers] = useState<VolunteerRegistration[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [placements, setPlacements] = useState<PlacementItem[]>([]);

  // Modals for CRUD
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventLocation, setNewEventLocation] = useState('Hyderabad');

  const [showAddOppModal, setShowAddOppModal] = useState(false);
  const [newOppTitle, setNewOppTitle] = useState('');
  const [newOppCategory, setNewOppCategory] = useState<any>('Campus Ambassador');
  const [newOppLocation, setNewOppLocation] = useState('Remote');

  useEffect(() => {
    if (isAuthenticated) {
      refreshData();
    }
  }, [isAuthenticated]);

  const refreshData = () => {
    setEvents(getEvents());
    setOpportunities(getOpportunities());
    setApplications(getJoinApplications());
    setEnquiries(getServiceEnquiries());
    setVolunteers(getVolunteerRegistrations());
    setTeam(getTeamMembers());
    setPlacements(getPlacements());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail === 'admin@ss-demo.local' && loginPassword === 'demo123') {
      localStorage.setItem('ss_admin_auth', 'true');
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid demo credentials. Use admin@ss-demo.local / demo123');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ss_admin_auth');
    setIsAuthenticated(false);
  };

  const handleDeleteEvent = (id: string) => {
    deleteEvent(id);
    refreshData();
  };

  const handleToggleOppStatus = (id: string, currentStatus: string) => {
    const nextStatus = currentStatus === 'Open' ? 'Closing Soon' : currentStatus === 'Closing Soon' ? 'Filled' : 'Open';
    updateOpportunityStatus(id, nextStatus as any);
    refreshData();
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle) return;

    const newEv: SSEvent = {
      id: `event-${Date.now()}`,
      title: newEventTitle,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
      date: newEventDate || "20 Dec 2026",
      time: "5:00 PM IST",
      isUpcoming: true,
      isOnline: false,
      location: newEventLocation,
      description: "Newly added community event via SS Admin Dashboard.",
      organizer: "Struggle of Student Team",
      registrationOpen: true,
      volunteerRoles: [
        {
          id: `role-${Date.now()}-1`,
          title: "Event Coordinator",
          description: "Manage session logistics and attendee support.",
          capacity: 10,
          filled: 0
        }
      ],
      isSampleData: true
    };

    saveEvent(newEv);
    refreshData();
    setShowAddEventModal(false);
    setNewEventTitle('');
  };

  const handleCreateOpportunity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOppTitle) return;

    const newOpp: Opportunity = {
      id: `opp-${Date.now()}`,
      title: newOppTitle,
      category: newOppCategory,
      categorySlug: String(newOppCategory).toLowerCase().replace(/[^a-z0-9]/g, '-'),
      type: 'Project',

      shortDescription: "Newly created student opportunity via admin dashboard.",
      fullDescription: "Join the SS team to gain hands-on experience and build your portfolio.",
      requirements: ["Enthusiastic college student"],
      perks: ["SS Leadership Certificate"],
      location: newOppLocation,
      isRemote: true,
      deadline: "30 Dec 2026",
      status: "Open",
      isSampleData: true
    };

    saveOpportunity(newOpp);
    refreshData();
    setShowAddOppModal(false);
    setNewOppTitle('');
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4 pt-20">
        <div className="bg-brand-card border border-brand-border rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-3">
            <SSLogo variant="hero" />
            <span className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-bold text-brand-red uppercase">
              ADMINISTRATOR DASHBOARD
            </span>
            <h1 className="text-2xl font-extrabold text-white font-display">
              PROTOTYPE DEMO LOGIN
            </h1>
            <p className="text-xs text-slate-400">
              Demo credentials pre-filled below for testing admin CRUD operations.
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold text-center">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Demo Email</label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Demo Password</label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-black border border-brand-border text-white text-sm focus:outline-none focus:border-brand-red"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-brand-red hover:bg-brand-red-hover text-white text-sm font-extrabold tracking-wide transition shadow-lg shadow-brand-red/30"
            >
              Sign In to Admin Panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  // MAIN SAAS ADMIN PANEL
  return (
    <div className="min-h-screen bg-brand-dark/50 text-slate-100 flex flex-col pt-20 relative z-10">
      {/* Admin Top Navigation */}
      <header className="bg-black border-b border-brand-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-brand-red" />
          <span className="font-display font-extrabold text-lg text-white">SS ADMIN CONTROL PANEL</span>
          <span className="px-2.5 py-0.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-[10px] font-bold text-brand-red uppercase">
            PROTOTYPE MODE
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-xl bg-brand-card hover:bg-red-500/20 text-slate-300 hover:text-red-400 border border-brand-border text-xs font-bold transition flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </header>

      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3 space-y-2">
          {[
            { id: 'OVERVIEW', label: 'Overview Dashboard', icon: LayoutDashboard },
            { id: 'EVENTS', label: 'Manage Events', icon: Calendar, badge: events.length },
            { id: 'OPPORTUNITIES', label: 'Manage Opportunities', icon: Briefcase, badge: opportunities.length },
            { id: 'VOLUNTEERS', label: 'Volunteer Registrations', icon: UserCheck, badge: volunteers.length },
            { id: 'APPLICATIONS', label: 'Join Applications', icon: Users, badge: applications.length },
            { id: 'ENQUIRIES', label: 'Service Enquiries', icon: Headphones, badge: enquiries.length },
            { id: 'TEAM', label: 'Team Members', icon: ShieldCheck, badge: team.length },
            { id: 'PLACEMENTS', label: 'Placements', icon: Building, badge: placements.length },
          ].map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full p-3.5 rounded-2xl text-xs font-bold transition flex items-center justify-between ${
                  active
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20'
                    : 'bg-brand-card text-slate-400 hover:text-white border border-brand-border'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                    active ? 'bg-white text-brand-red' : 'bg-black text-slate-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Main Workspace Area */}
        <main className="lg:col-span-9 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'OVERVIEW' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white font-display uppercase">System Overview</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-5 rounded-3xl bg-brand-card border border-brand-border">
                  <div className="text-3xl font-extrabold text-brand-red font-display">14</div>
                  <div className="text-xs font-bold text-slate-300 uppercase mt-1">Active Team Members</div>
                </div>

                <div className="p-5 rounded-3xl bg-brand-card border border-brand-border">
                  <div className="text-3xl font-extrabold text-white font-display">{events.length}</div>
                  <div className="text-xs font-bold text-slate-300 uppercase mt-1">Events Listed</div>
                </div>

                <div className="p-5 rounded-3xl bg-brand-card border border-brand-border">
                  <div className="text-3xl font-extrabold text-white font-display">{opportunities.length}</div>
                  <div className="text-xs font-bold text-slate-300 uppercase mt-1">Open Opportunities</div>
                </div>

                <div className="p-5 rounded-3xl bg-brand-card border border-brand-border">
                  <div className="text-3xl font-extrabold text-emerald-400 font-display">{volunteers.length}</div>
                  <div className="text-xs font-bold text-slate-300 uppercase mt-1">Volunteer Registrations</div>
                </div>
              </div>

              {/* Recent Activity List */}
              <div className="p-6 rounded-3xl bg-brand-card border border-brand-border space-y-4">
                <h3 className="text-base font-bold text-white font-display">Recent Submissions Overview</h3>

                {applications.length > 0 ? (
                  <div className="space-y-3">
                    {applications.slice(0, 3).map((app) => (
                      <div key={app.id} className="p-4 rounded-2xl bg-black border border-brand-border flex items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-white">{app.fullName}</span> ({app.college})
                          <div className="text-slate-400 mt-0.5">Interested in: {app.interestedIn.join(', ')}</div>
                        </div>
                        <span className="text-[10px] text-slate-500">{app.submittedAt}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">No member applications submitted yet in local storage.</p>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: EVENTS CONTROL */}
          {activeTab === 'EVENTS' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-white font-display uppercase">Events Management</h2>
                <button
                  onClick={() => setShowAddEventModal(true)}
                  className="px-4 py-2 rounded-2xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create New Event</span>
                </button>
              </div>

              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="p-5 rounded-3xl bg-brand-card border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base">{event.title}</span>
                        {event.isVerifiedFact && <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Fact</span>}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">📅 {event.date} • 📍 {event.location}</div>
                      
                      {/* Roles summary */}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {event.volunteerRoles.map(r => (
                          <span key={r.id} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-black text-slate-300 border border-brand-border">
                            {r.title}: {r.filled}/{r.capacity} filled
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs font-bold transition flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: OPPORTUNITIES CONTROL */}
          {activeTab === 'OPPORTUNITIES' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-white font-display uppercase">Opportunities Management</h2>
                <button
                  onClick={() => setShowAddOppModal(true)}
                  className="px-4 py-2 rounded-2xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Opportunity</span>
                </button>
              </div>

              <div className="space-y-4">
                {opportunities.map((opp) => (
                  <div key={opp.id} className="p-5 rounded-3xl bg-brand-card border border-brand-border flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base">{opp.title}</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-red/10 text-brand-red font-bold">
                          {opp.category}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{opp.shortDescription}</div>
                    </div>

                    <button
                      onClick={() => handleToggleOppStatus(opp.id, opp.status)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                        opp.status === 'Open' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      }`}
                    >
                      Status: {opp.status} (Click to toggle)
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: VOLUNTEERS */}
          {activeTab === 'VOLUNTEERS' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white font-display uppercase">Volunteer Applications ({volunteers.length})</h2>
              
              <div className="space-y-3">
                {volunteers.map((vol) => (
                  <div key={vol.id} className="p-4 rounded-2xl bg-brand-card border border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-bold text-white text-sm">{vol.fullName}</span> ({vol.college})
                      <div className="text-slate-400 mt-1">
                        Email: {vol.email} • Phone: {vol.phone}
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500">{vol.submittedAt}</span>
                  </div>
                ))}

                {volunteers.length === 0 && (
                  <p className="text-xs text-slate-500 italic">No volunteer registrations submitted yet.</p>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: JOIN APPLICATIONS */}
          {activeTab === 'APPLICATIONS' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white font-display uppercase">Member Join Applications ({applications.length})</h2>
              
              <div className="space-y-3">
                {applications.map((app) => (
                  <div key={app.id} className="p-5 rounded-3xl bg-brand-card border border-brand-border space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{app.fullName}</span>
                      <span className="text-slate-500 text-[10px]">{app.submittedAt}</span>
                    </div>
                    <div className="text-slate-300">
                      College: {app.college} • Year: {app.year} • City: {app.city}
                    </div>
                    <div className="text-slate-400">
                      Email: {app.email} • Phone: {app.phone}
                    </div>
                    <div className="text-brand-red font-semibold pt-1">
                      Interests: {app.interestedIn.join(', ')}
                    </div>
                  </div>
                ))}

                {applications.length === 0 && (
                  <p className="text-xs text-slate-500 italic">No student join applications submitted yet.</p>
                )}
              </div>
            </div>
          )}

          {/* TAB 6: ENQUIRIES */}
          {activeTab === 'ENQUIRIES' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white font-display uppercase">Service Enquiries ({enquiries.length})</h2>
              
              <div className="space-y-3">
                {enquiries.map((enq) => (
                  <div key={enq.id} className="p-5 rounded-3xl bg-brand-card border border-brand-border space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{enq.name}</span>
                      <span className="text-brand-red font-bold">{enq.service}</span>
                    </div>
                    <div className="text-slate-300">{enq.message}</div>
                    <div className="text-slate-500 text-[10px]">Submitted: {enq.submittedAt}</div>
                  </div>
                ))}

                {enquiries.length === 0 && (
                  <p className="text-xs text-slate-500 italic">No service enquiries submitted yet.</p>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* CREATE EVENT MODAL */}
      {showAddEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-brand-card border border-brand-border rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 relative space-y-4">
            <button onClick={() => setShowAddEventModal(false)} className="absolute top-5 right-5 text-slate-400"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-bold text-white">Create New Event</h3>
            <form onSubmit={handleCreateEvent} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Event Title"
                value={newEventTitle}
                onChange={e => setNewEventTitle(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm"
              />
              <input
                type="text"
                placeholder="Date (e.g. 20 Dec 2026)"
                value={newEventDate}
                onChange={e => setNewEventDate(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm"
              />
              <input
                type="text"
                placeholder="Location"
                value={newEventLocation}
                onChange={e => setNewEventLocation(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm"
              />
              <button type="submit" className="w-full py-3 rounded-xl bg-brand-red text-white text-xs font-bold">Save Event</button>
            </form>
          </div>
        </div>
      )}

      {/* CREATE OPPORTUNITY MODAL */}
      {showAddOppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-brand-card border border-brand-border rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 relative space-y-4">
            <button onClick={() => setShowAddOppModal(false)} className="absolute top-5 right-5 text-slate-400"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-bold text-white">Create Opportunity</h3>
            <form onSubmit={handleCreateOpportunity} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Opportunity Title"
                value={newOppTitle}
                onChange={e => setNewOppTitle(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm"
              />
              <select
                value={newOppCategory}
                onChange={e => setNewOppCategory(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-black border border-brand-border text-white text-sm"
              >
                <option value="Campus Ambassador">Campus Ambassador</option>
                <option value="Internships">Internships</option>
                <option value="Volunteering">Volunteering</option>
                <option value="Projects">Projects</option>
                <option value="Workshops">Workshops</option>
              </select>
              <button type="submit" className="w-full py-3 rounded-xl bg-brand-red text-white text-xs font-bold">Save Opportunity</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

