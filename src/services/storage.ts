import { 
  SSEvent, 
  Opportunity, 
  TeamMember, 
  PlacementItem, 
  OnlineMeeting, 
  JoinApplication, 
  ServiceEnquiry, 
  VolunteerRegistration,
  TalentSubmission,
  AmbassadorApplication,
  OpportunityApplication
} from '../types';
import { INITIAL_EVENTS } from '../data/events';
import { SAMPLE_OPPORTUNITIES } from '../data/opportunities';
import { FOUNDER_MEMBER, SAMPLE_TEAM_MEMBERS, ALL_TEAM_MEMBERS } from '../data/team';
import { SAMPLE_PLACEMENTS } from '../data/placements';
import { SAMPLE_MEETINGS } from '../data/meetings';

const KEYS = {
  EVENTS: 'ss_events_v1',
  OPPORTUNITIES: 'ss_opportunities_v2',
  TEAM: 'ss_team_v3',
  PLACEMENTS: 'ss_placements_v1',
  MEETINGS: 'ss_meetings_v1',
  APPLICATIONS: 'ss_join_applications_v1',
  ENQUIRIES: 'ss_service_enquiries_v1',
  VOLUNTEERS: 'ss_volunteer_registrations_v1',
  REGISTERED_MEETINGS: 'ss_registered_meetings_v1',
  TALENT_SUBMISSIONS: 'ss_talent_submissions_v1',
  AMBASSADOR_APPS: 'ss_ambassador_apps_v1',
  OPP_APPLICATIONS: 'ss_opp_applications_v1',
  MEETING_REGISTRATIONS: 'ss_meeting_registrations_v1',
};

// Initialize default storage data
export const initStorage = () => {
  if (!localStorage.getItem(KEYS.EVENTS)) {
    localStorage.setItem(KEYS.EVENTS, JSON.stringify(INITIAL_EVENTS));
  }
  if (!localStorage.getItem(KEYS.OPPORTUNITIES)) {
    localStorage.setItem(KEYS.OPPORTUNITIES, JSON.stringify(SAMPLE_OPPORTUNITIES));
  }
  if (!localStorage.getItem(KEYS.TEAM)) {
    localStorage.setItem(KEYS.TEAM, JSON.stringify(ALL_TEAM_MEMBERS));
  }
  if (!localStorage.getItem(KEYS.PLACEMENTS)) {
    localStorage.setItem(KEYS.PLACEMENTS, JSON.stringify(SAMPLE_PLACEMENTS));
  }
  if (!localStorage.getItem(KEYS.MEETINGS)) {
    localStorage.setItem(KEYS.MEETINGS, JSON.stringify(SAMPLE_MEETINGS));
  }
  if (!localStorage.getItem(KEYS.APPLICATIONS)) {
    localStorage.setItem(KEYS.APPLICATIONS, JSON.stringify([]));
  }
  if (!localStorage.getItem(KEYS.ENQUIRIES)) {
    localStorage.setItem(KEYS.ENQUIRIES, JSON.stringify([]));
  }
  if (!localStorage.getItem(KEYS.VOLUNTEERS)) {
    localStorage.setItem(KEYS.VOLUNTEERS, JSON.stringify([]));
  }
  if (!localStorage.getItem(KEYS.REGISTERED_MEETINGS)) {
    localStorage.setItem(KEYS.REGISTERED_MEETINGS, JSON.stringify([]));
  }
  if (!localStorage.getItem(KEYS.TALENT_SUBMISSIONS)) {
    localStorage.setItem(KEYS.TALENT_SUBMISSIONS, JSON.stringify([]));
  }
  if (!localStorage.getItem(KEYS.AMBASSADOR_APPS)) {
    localStorage.setItem(KEYS.AMBASSADOR_APPS, JSON.stringify([]));
  }
  if (!localStorage.getItem(KEYS.OPP_APPLICATIONS)) {
    localStorage.setItem(KEYS.OPP_APPLICATIONS, JSON.stringify([]));
  }
};

// --- EVENTS & VOLUNTEER REGISTRATIONS ---
export const getEvents = (): SSEvent[] => {
  initStorage();
  const data = localStorage.getItem(KEYS.EVENTS);
  return data ? JSON.parse(data) : INITIAL_EVENTS;
};

export const saveEvent = (event: SSEvent): SSEvent[] => {
  const events = getEvents();
  const index = events.findIndex(e => e.id === event.id);
  if (index >= 0) {
    events[index] = event;
  } else {
    events.unshift(event);
  }
  localStorage.setItem(KEYS.EVENTS, JSON.stringify(events));
  return events;
};

export const deleteEvent = (eventId: string): SSEvent[] => {
  const events = getEvents().filter(e => e.id !== eventId);
  localStorage.setItem(KEYS.EVENTS, JSON.stringify(events));
  return events;
};

export const registerVolunteer = (registration: Omit<VolunteerRegistration, 'id' | 'submittedAt'>): { success: boolean; message: string } => {
  const events = getEvents();
  const eventIndex = events.findIndex(e => e.id === registration.eventId);
  if (eventIndex === -1) return { success: false, message: "Event not found." };

  const event = events[eventIndex];
  const roleIndex = event.volunteerRoles.findIndex(r => r.id === registration.roleId);
  if (roleIndex === -1) return { success: false, message: "Volunteer role not found." };

  const role = event.volunteerRoles[roleIndex];
  if (role.filled >= role.capacity) {
    return { success: false, message: "Volunteer slots for this role are already full." };
  }

  // Update filled count
  role.filled += 1;
  events[eventIndex] = event;
  localStorage.setItem(KEYS.EVENTS, JSON.stringify(events));

  // Save registration record
  const registrations: VolunteerRegistration[] = JSON.parse(localStorage.getItem(KEYS.VOLUNTEERS) || '[]');
  const newReg: VolunteerRegistration = {
    ...registration,
    id: `vol-${Date.now()}`,
    submittedAt: new Date().toISOString()
  };
  registrations.unshift(newReg);
  localStorage.setItem(KEYS.VOLUNTEERS, JSON.stringify(registrations));

  return { success: true, message: "Successfully applied as volunteer!" };
};

export const getVolunteerRegistrations = (): VolunteerRegistration[] => {
  initStorage();
  return JSON.parse(localStorage.getItem(KEYS.VOLUNTEERS) || '[]');
};

// --- OPPORTUNITIES ---
export const getOpportunities = (): Opportunity[] => {
  initStorage();
  const raw = localStorage.getItem(KEYS.OPPORTUNITIES);
  if (!raw) return SAMPLE_OPPORTUNITIES;
  try {
    const opps: Opportunity[] = JSON.parse(raw);
    if (!Array.isArray(opps) || opps.length < SAMPLE_OPPORTUNITIES.length) {
      localStorage.setItem(KEYS.OPPORTUNITIES, JSON.stringify(SAMPLE_OPPORTUNITIES));
      return SAMPLE_OPPORTUNITIES;
    }
    return opps;
  } catch {
    localStorage.setItem(KEYS.OPPORTUNITIES, JSON.stringify(SAMPLE_OPPORTUNITIES));
    return SAMPLE_OPPORTUNITIES;
  }
};

export const saveOpportunity = (opp: Opportunity): Opportunity[] => {
  const opps = getOpportunities();
  const index = opps.findIndex(o => o.id === opp.id);
  if (index >= 0) {
    opps[index] = opp;
  } else {
    opps.unshift(opp);
  }
  localStorage.setItem(KEYS.OPPORTUNITIES, JSON.stringify(opps));
  return opps;
};

export const updateOpportunityStatus = (oppId: string, status: 'Open' | 'Closing Soon' | 'Filled'): Opportunity[] => {
  const opps = getOpportunities();
  const index = opps.findIndex(o => o.id === oppId);
  if (index >= 0) {
    opps[index].status = status;
    localStorage.setItem(KEYS.OPPORTUNITIES, JSON.stringify(opps));
  }
  return opps;
};

// --- OPPORTUNITY APPLICATIONS ---
export const submitOpportunityApplication = (app: Omit<OpportunityApplication, 'id' | 'submittedAt'>): OpportunityApplication => {
  initStorage();
  const apps: OpportunityApplication[] = JSON.parse(localStorage.getItem(KEYS.OPP_APPLICATIONS) || '[]');
  const newApp: OpportunityApplication = {
    ...app,
    id: `opp-app-${Date.now()}`,
    submittedAt: new Date().toLocaleString()
  };
  apps.unshift(newApp);
  localStorage.setItem(KEYS.OPP_APPLICATIONS, JSON.stringify(apps));
  return newApp;
};

export const getOpportunityApplications = (): OpportunityApplication[] => {
  initStorage();
  return JSON.parse(localStorage.getItem(KEYS.OPP_APPLICATIONS) || '[]');
};

// --- TALENT SUBMISSIONS ---
export const submitTalentSubmission = (submission: Omit<TalentSubmission, 'id' | 'submittedAt'>): TalentSubmission => {
  initStorage();
  const list: TalentSubmission[] = JSON.parse(localStorage.getItem(KEYS.TALENT_SUBMISSIONS) || '[]');
  const newSub: TalentSubmission = {
    ...submission,
    id: `talent-${Date.now()}`,
    submittedAt: new Date().toLocaleString()
  };
  list.unshift(newSub);
  localStorage.setItem(KEYS.TALENT_SUBMISSIONS, JSON.stringify(list));
  return newSub;
};

export const getTalentSubmissions = (): TalentSubmission[] => {
  initStorage();
  return JSON.parse(localStorage.getItem(KEYS.TALENT_SUBMISSIONS) || '[]');
};

// --- CAMPUS AMBASSADOR APPLICATIONS ---
export const submitAmbassadorApplication = (app: Omit<AmbassadorApplication, 'id' | 'submittedAt'>): AmbassadorApplication => {
  initStorage();
  const apps: AmbassadorApplication[] = JSON.parse(localStorage.getItem(KEYS.AMBASSADOR_APPS) || '[]');
  const newApp: AmbassadorApplication = {
    ...app,
    id: `ca-${Date.now()}`,
    submittedAt: new Date().toLocaleString()
  };
  apps.unshift(newApp);
  localStorage.setItem(KEYS.AMBASSADOR_APPS, JSON.stringify(apps));
  return newApp;
};

export const getAmbassadorApplications = (): AmbassadorApplication[] => {
  initStorage();
  return JSON.parse(localStorage.getItem(KEYS.AMBASSADOR_APPS) || '[]');
};

// --- JOIN APPLICATIONS ---
export const submitJoinApplication = (appData: Omit<JoinApplication, 'id' | 'submittedAt'>): JoinApplication => {
  initStorage();
  const apps: JoinApplication[] = JSON.parse(localStorage.getItem(KEYS.APPLICATIONS) || '[]');
  const newApp: JoinApplication = {
    ...appData,
    id: `app-${Date.now()}`,
    submittedAt: new Date().toLocaleString()
  };
  apps.unshift(newApp);
  localStorage.setItem(KEYS.APPLICATIONS, JSON.stringify(apps));
  return newApp;
};

export const getJoinApplications = (): JoinApplication[] => {
  initStorage();
  return JSON.parse(localStorage.getItem(KEYS.APPLICATIONS) || '[]');
};

// --- SERVICE ENQUIRIES ---
export const submitServiceEnquiry = (enquiryData: Omit<ServiceEnquiry, 'id' | 'submittedAt'>): ServiceEnquiry => {
  initStorage();
  const enquiries: ServiceEnquiry[] = JSON.parse(localStorage.getItem(KEYS.ENQUIRIES) || '[]');
  const newEnquiry: ServiceEnquiry = {
    ...enquiryData,
    id: `enq-${Date.now()}`,
    submittedAt: new Date().toLocaleString()
  };
  enquiries.unshift(newEnquiry);
  localStorage.setItem(KEYS.ENQUIRIES, JSON.stringify(enquiries));
  return newEnquiry;
};

export const getServiceEnquiries = (): ServiceEnquiry[] => {
  initStorage();
  return JSON.parse(localStorage.getItem(KEYS.ENQUIRIES) || '[]');
};

// --- ONLINE MEETINGS & REGISTRATION ---
export const getMeetings = (): OnlineMeeting[] => {
  initStorage();
  return JSON.parse(localStorage.getItem(KEYS.MEETINGS) || '[]');
};

export const getRegisteredMeetingIds = (): string[] => {
  initStorage();
  const records = JSON.parse(localStorage.getItem(KEYS.MEETING_REGISTRATIONS) || '[]');
  // Extract unique meeting IDs the current user (in demo, all records) has registered for
  return [...new Set(records.map((r: any) => r.meetingId))] as string[];
};

export const registerForMeeting = (
  meetingId: string, 
  studentData: { fullName: string; email: string; phone: string; college: string }
): boolean => {
  const meetings = getMeetings();
  const meeting = meetings.find(m => m.id === meetingId);
  
  if (meeting && meeting.registeredCount < meeting.capacity) {
    meeting.registeredCount += 1;
    localStorage.setItem(KEYS.MEETINGS, JSON.stringify(meetings));

    const records = JSON.parse(localStorage.getItem(KEYS.MEETING_REGISTRATIONS) || '[]');
    records.push({
      id: `meet-reg-${Date.now()}`,
      meetingId,
      ...studentData,
      registeredAt: new Date().toISOString()
    });
    localStorage.setItem(KEYS.MEETING_REGISTRATIONS, JSON.stringify(records));
    return true;
  }
  return false;
};

// --- TEAM MANAGEMENT ---
export const getTeamMembers = (): TeamMember[] => {
  initStorage();
  const raw = localStorage.getItem(KEYS.TEAM);
  if (!raw) return ALL_TEAM_MEMBERS;
  try {
    const team: TeamMember[] = JSON.parse(raw);
    if (!Array.isArray(team) || team.length !== ALL_TEAM_MEMBERS.length) {
      localStorage.setItem(KEYS.TEAM, JSON.stringify(ALL_TEAM_MEMBERS));
      return ALL_TEAM_MEMBERS;
    }
    return team;
  } catch {
    localStorage.setItem(KEYS.TEAM, JSON.stringify(ALL_TEAM_MEMBERS));
    return ALL_TEAM_MEMBERS;
  }
};

export const saveTeamMember = (member: TeamMember): TeamMember[] => {
  const team = getTeamMembers();
  const index = team.findIndex(t => t.id === member.id);
  if (index >= 0) {
    team[index] = member;
  } else {
    team.push(member);
  }
  localStorage.setItem(KEYS.TEAM, JSON.stringify(team));
  return team;
};

// --- PLACEMENTS ---
export const getPlacements = (): PlacementItem[] => {
  initStorage();
  return JSON.parse(localStorage.getItem(KEYS.PLACEMENTS) || '[]');
};

export const savePlacement = (placement: PlacementItem): PlacementItem[] => {
  const placements = getPlacements();
  const index = placements.findIndex(p => p.id === placement.id);
  if (index >= 0) {
    placements[index] = placement;
  } else {
    placements.unshift(placement);
  }
  localStorage.setItem(KEYS.PLACEMENTS, JSON.stringify(placements));
  return placements;
};
