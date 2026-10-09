/**
 * SS Community Assistant — Knowledge Base
 * All facts are sourced directly from site data files.
 * Explicitly marks verified facts vs. prototype/sample data.
 */

import { SITE_CONFIG } from '../../data/siteConfig';
import { OPPORTUNITY_CATEGORIES } from '../../data/opportunityCategories';
import { SS_SERVICES } from '../../data/services';
import { FOUNDER_MEMBER, ALL_TEAM_MEMBERS } from '../../data/team';
import { SAMPLE_MEETINGS } from '../../data/meetings';

// ─── Re-export raw data for use by intent engine ─────────────────────────────
export { SITE_CONFIG, OPPORTUNITY_CATEGORIES, SS_SERVICES, FOUNDER_MEMBER, ALL_TEAM_MEMBERS, SAMPLE_MEETINGS };

// ─── Verified site routes (sourced from App.tsx) ─────────────────────────────
export const ROUTES = {
  home: '/',
  about: '/about',
  opportunities: '/opportunities',
  internships: '/opportunities/internships',
  jobs: '/opportunities/jobs',
  campusAmbassador: '/opportunities/campus-ambassador',
  volunteering: '/opportunities/volunteering',
  events_opp: '/opportunities/events',
  talentShowcase: '/opportunities/talent-showcase',
  leadership: '/opportunities/leadership',
  onlineSessions: '/opportunities/sessions',
  workshops: '/opportunities/workshops',
  projects: '/opportunities/projects',
  collaborations: '/opportunities/collaborations',
  careerDevelopment: '/opportunities/career-development',
  personalGrowth: '/opportunities/personal-growth',
  events: '/events',
  meetings: '/meetings',
  services: '/services',
  placements: '/placements',
  team: '/team',
  join: '/join',
  contact: '/contact',
} as const;

// ─── Curated FAQ Knowledge ────────────────────────────────────────────────────
export const KNOWLEDGE = {
  organization: {
    fullName: SITE_CONFIG.name,
    shortName: SITE_CONFIG.shortName,
    tagline: SITE_CONFIG.taglines.primary,
    mission: SITE_CONFIG.hero.subtext,
    location: SITE_CONFIG.contactInfo.address,
  },

  founder: {
    name: FOUNDER_MEMBER.name, // VERIFIED FACT
    role: FOUNDER_MEMBER.role,
    bio: FOUNDER_MEMBER.bio,
    isVerified: true,
  },

  team: {
    count: SITE_CONFIG.verifiedFacts.activeTeamCount, // VERIFIED: 14
    members: ALL_TEAM_MEMBERS,
  },

  contact: {
    email: SITE_CONFIG.contactInfo.email,
    phone: SITE_CONFIG.contactInfo.phone,
    hours: SITE_CONFIG.contactInfo.hours,
    instagram: SITE_CONFIG.socialLinks.instagram,
    whatsapp: SITE_CONFIG.socialLinks.whatsapp,
    whatsappCommunity: SITE_CONFIG.socialLinks.whatsappCommunity,
    whatsappGroup: SITE_CONFIG.socialLinks.whatsappGroup,
  },

  pastWorkshop: {
    title: SITE_CONFIG.verifiedFacts.pastWorkshop.title, // "Unmute Yourself" — VERIFIED
    date: SITE_CONFIG.verifiedFacts.pastWorkshop.date,
    description: 'A live online workshop focused on communication skills and employability, conducted by the SS student community.',
    isVerified: true,
  },

  opportunityCategories: OPPORTUNITY_CATEGORIES,
  services: SS_SERVICES,
  meetings: SAMPLE_MEETINGS,
};
