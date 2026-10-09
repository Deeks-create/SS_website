export type OpportunityCategory = 
  | 'All'
  | 'Internships'
  | 'Jobs'
  | 'Campus Ambassador'
  | 'Volunteering'
  | 'Events'
  | 'Talent Showcase'
  | 'Leadership'
  | 'Online Sessions'
  | 'Workshops'
  | 'Student Projects'
  | 'Collaborations'
  | 'Career Development'
  | 'Personal Growth'
  | 'Creative & Other';

export interface OpportunityCategoryInfo {
  slug: string;
  title: OpportunityCategory;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  iconName: string;
  count: number;
  accentColor: string; // e.g. 'brand-red', 'cyan-400', 'emerald-400'
  badgeText: string;
}

export interface Opportunity {
  id: string;
  title: string;
  category: OpportunityCategory;
  categorySlug?: string;
  type: 'Full-time' | 'Part-time' | 'Project' | 'Volunteer' | 'Ambassador' | 'Workshop' | 'Talent' | 'Job' | 'Session';

  shortDescription: string;
  fullDescription: string;
  requirements: string[];
  perks: string[];
  learningOutcomes?: string[];
  responsibilities?: string[];
  skillsNeeded?: string[];
  duration?: string; // e.g. "3 Months"
  workMode?: string; // e.g. "Remote", "Hybrid", "On-site"
  experienceLevel?: string; // e.g. "Entry Level / Freshers"
  eligibility?: string;
  companyName?: string;
  location: string;
  isRemote: boolean;
  deadline: string;
  status: 'Open' | 'Closing Soon' | 'Filled';
  image?: string;
  isSampleData: true; // Explicitly marked as prototype/sample data
  isJob?: boolean;
  isInternship?: boolean;
  isFeatured?: boolean;
  volunteerRoles?: VolunteerRole[];
  meetingUrl?: string;
  eventDate?: string;
  eventTime?: string;
  formType?: 'talent' | 'internship' | 'job' | 'ambassador' | 'volunteer' | 'standard';
}

export interface VolunteerRole {
  id: string;
  title: string;
  description: string;
  capacity: number;
  filled: number;
}

export interface SSEvent {
  id: string;
  title: string;
  tagline?: string;
  image: string;
  date: string;
  time: string;
  isUpcoming: boolean;
  isOnline: boolean;
  location: string;
  venueDetails?: string;
  description: string;
  topics?: string[];
  organizer: string;
  registrationOpen: boolean;
  volunteerRoles: VolunteerRole[];
  meetingUrl?: string;
  isVerifiedFact?: boolean; // True for real confirmed events like "Unmute Yourself"
  isSampleData?: boolean;
}

export interface OnlineMeeting {
  id: string;
  title: string;
  speaker: string;
  topic: string;
  date: string;
  time: string;
  capacity: number;
  registeredCount: number;
  meetingUrl: string;
  isSampleData: true;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image?: string;
  isFounder?: boolean;
  isPlaceholder?: boolean; // Clearly demarcated as team role placeholder
  isVerifiedFact?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whatWeProvide: string[];
  whoCanApproach: string[];
  iconName: string;
}

export interface PlacementItem {
  id: string;
  companyPlaceholder: string; // Text placeholder e.g., "Premier Tech Startup"
  category: string;
  studentsPlacedCount: number;
  roles: string[];
  quote?: string;
  isSampleData: true;
}

export interface JoinApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  course: string;
  year: string;
  city: string;
  skills: string;
  interestedIn: string[];
  whyJoin: string;
  submittedAt: string;
}

export interface ServiceEnquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  service: string;
  message: string;
  submittedAt: string;
}

export interface VolunteerRegistration {
  id: string;
  eventId: string;
  roleId: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  submittedAt: string;
}

export interface TalentSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  talentCategory: string;
  title: string;
  description: string;
  portfolioUrl: string;
  submittedAt: string;
}

export interface AmbassadorApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  yearOfStudy: string;
  city: string;
  whyAmbassador: string;
  submittedAt: string;
}

export interface OpportunityApplication {
  id: string;
  opportunityId: string;
  opportunityTitle: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  course?: string;
  year?: string;
  skills?: string;
  resumeUrl?: string;
  portfolioUrl?: string;
  availability?: string;
  experienceLevel?: string;
  talentStyle?: string;
  talentFormat?: string; // Solo/Group
  socialProfile?: string;
  previousExperience?: string;
  note?: string; // why interested / introduction
  submittedAt: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  subtext: string;
  isVerifiedFact: boolean;
}
