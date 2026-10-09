/**
 * SS Community Assistant — Intent Engine
 * Enhanced NLP layer with text normalization, fuzzy matching, and dynamic intent routing.
 */

import { IntentKey, Intent, ChatResponse, ActionButton } from './types';
import { KNOWLEDGE, ROUTES } from './knowledge';

// ─── Normalizer & Fuzzy Matching ──────────────────────────────────────────────

function normalizeText(text: string): string {
  let s = text.toLowerCase().trim();
  // Remove punctuation
  s = s.replace(/[.,?/#!$%^&*;:{}=\-_`~()]/g, '');
  // Collapse spaces
  s = s.replace(/\s{2,}/g, ' ');

  const slangMap: Record<string, string> = {
    'watsapp': 'whatsapp',
    'wtsp': 'whatsapp',
    'whatsap': 'whatsapp',
    'grp': 'group',
    'comunity': 'community',
    'communtiy': 'community',
    'ur': 'your',
    'wanna': 'want to',
    'regster': 'register',
    'comdy': 'comedy',
    'ambasador': 'ambassador',
    'bcoz': 'because',
    'plz': 'please',
    'pls': 'please',
    'info': 'information'
  };

  return s.split(' ').map(w => slangMap[w] || w).join(' ');
}

function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));
  for (let i = 0; i <= a.length; i += 1) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + indicator
      );
    }
  }
  return matrix[a.length][b.length];
}

function isFuzzyMatch(word: string, target: string): boolean {
  if (word === target) return true;
  if (target.length <= 4) return word === target; // exact match for short words
  const threshold = target.length > 7 ? 2 : 1;
  return levenshtein(word, target) <= threshold;
}

function containsKeywordFuzzy(normalizedInput: string, keywordPhrase: string): boolean {
  const inputWords = normalizedInput.split(' ');
  const kwWords = keywordPhrase.split(' ');
  
  // if single word keyword
  if (kwWords.length === 1) {
    return inputWords.some(w => isFuzzyMatch(w, kwWords[0]));
  }
  
  // if multi-word keyword, check if words appear in sequence fuzzily
  for (let i = 0; i <= inputWords.length - kwWords.length; i++) {
    let match = true;
    for (let j = 0; j < kwWords.length; j++) {
      if (!isFuzzyMatch(inputWords[i + j], kwWords[j])) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}

// ─── Specific Opportunity Mapping ─────────────────────────────────────────────
const SPECIFIC_OPPS = [
  { keyword: 'standup comedy', route: '/opportunities/detail/opp-talent-comedy', label: 'Stand-Up Comedy' },
  { keyword: 'standup', route: '/opportunities/detail/opp-talent-comedy', label: 'Stand-Up Comedy' },
  { keyword: 'comedy', route: '/opportunities/detail/opp-talent-comedy', label: 'Stand-Up Comedy' },
  { keyword: 'singing', route: '/opportunities/detail/opp-talent-singing', label: 'Singing' },
  { keyword: 'singer', route: '/opportunities/detail/opp-talent-singing', label: 'Singing' },
  { keyword: 'dance', route: '/opportunities/detail/opp-talent-dancing', label: 'Dancing' },
  { keyword: 'dancing', route: '/opportunities/detail/opp-talent-dancing', label: 'Dancing' },
  { keyword: 'dancer', route: '/opportunities/detail/opp-talent-dancing', label: 'Dancing' },
  { keyword: 'beatbox', route: '/opportunities/detail/opp-talent-music', label: 'Music & Beatboxing' },
  { keyword: 'music', route: '/opportunities/detail/opp-talent-music', label: 'Music' },
  { keyword: 'poetry', route: '/opportunities/detail/opp-talent-writing', label: 'Poetry & Writing' },
  { keyword: 'spoken word', route: '/opportunities/detail/opp-talent-writing', label: 'Spoken Word' },
  { keyword: 'anchor', route: '/opportunities/detail/opp-talent-anchoring', label: 'Anchoring' },
  { keyword: 'anchoring', route: '/opportunities/detail/opp-talent-anchoring', label: 'Anchoring' },
];

// ─── Intent Definitions ───────────────────────────────────────────────────────
const INTENTS: Intent[] = [
  {
    key: 'greeting',
    weight: 1,
    keywords: ['hi', 'hello', 'hey', 'hiya', 'sup', 'good morning', 'good afternoon', 'good evening', 'howdy', 'what can you do', 'help me'],
  },
  {
    key: 'whatsapp_community',
    weight: 6,
    keywords: ['whatsapp community', 'join ss community', 'whatsapp channel', 'community link', 'join the community'],
  },
  {
    key: 'whatsapp_group',
    weight: 6,
    keywords: ['whatsapp group', 'group link'],
  },
  {
    key: 'whatsapp_ambiguous',
    weight: 5,
    keywords: ['whatsapp', 'whatsapp link'],
  },
  {
    key: 'about_ss',
    weight: 2,
    keywords: ['what is ss', 'what is struggle', 'about ss', 'about struggle', 'tell me about', 'what does ss do', 'ss mission', 'ss community', 'what is this', 'who are you', 'who is ss', 'what you do', 'explain ss'],
  },
  {
    key: 'founder',
    weight: 5,
    keywords: ['founder', 'chanti', 'chanti nelathalli', 'who started', 'who created', 'who built', 'who founded', 'who runs ss', 'who leads ss', 'who is in charge'],
  },
  {
    key: 'team',
    weight: 4,
    keywords: ['team', 'members', 'core team', 'our team', 'meet the team', 'team members', 'who are the members', 'staff', 'organizers', 'coordinators', '14 members'],
  },
  {
    key: 'join',
    weight: 3,
    keywords: ['join', 'register', 'sign up', 'membership', 'become a member', 'become part', 'be part', 'how to join', 'join ss', 'enroll', 'apply to join', 'want to join', 'i want to join', 'community registration', 'get started'],
  },
  {
    key: 'internship',
    weight: 4,
    keywords: ['internship', 'intern', 'internships', 'work experience', 'summer intern', 'apprenticeship', 'paid intern', 'unpaid intern', 'student internship', 'find internship', 'get an internship'],
  },
  {
    key: 'job',
    weight: 4,
    keywords: ['job', 'jobs', 'employment', 'full time', 'fresher role', 'entry level', 'fresher', 'fresh graduate', 'fresher job', 'job opening', 'job listing', 'apply for job', 'work'],
  },
  {
    key: 'campus_ambassador',
    weight: 5,
    keywords: ['ambassador', 'campus ambassador', 'campus rep', 'ca program', 'ca role', 'become ambassador', 'college representative', 'represent ss', 'campus leader'],
  },
  {
    key: 'volunteer',
    weight: 4,
    keywords: ['volunteer', 'volunteering', 'event desk', 'help organize', 'help at event', 'event volunteer', 'volunteer for event', 'volunteer work', 'event crew', 'event support', 'event staff'],
  },
  {
    key: 'talent',
    weight: 4,
    keywords: [
      'talent', 'showcase', 'talent showcase', 'perform', 'performance', 'artist', 'art', 'creative',
      'show my talent', 'display talent', 'perform on stage', 'my talent'
    ],
  },
  {
    key: 'leadership',
    weight: 4,
    keywords: ['leadership', 'lead', 'team lead', 'leader', 'management role', 'organizing role', 'student lead', 'student leader', 'head a team', 'run a project'],
  },
  {
    key: 'events',
    weight: 3,
    keywords: ['event', 'events', 'fest', 'meetup', 'gathering', 'campus event', 'student event', 'upcoming event', 'schedule', 'hackathon', 'conference', 'summit'],
  },
  {
    key: 'online_sessions',
    weight: 4,
    keywords: ['online session', 'session', 'webinar', 'zoom', 'google meet', 'online class', 'virtual class', 'live session', 'online meeting', 'attend session', 'online learning'],
  },
  {
    key: 'workshops',
    weight: 3,
    keywords: ['workshop', 'bootcamp', 'masterclass', 'training', 'skill workshop', 'hands on', 'communication workshop', 'unmute', 'unmute yourself', 'resume workshop', 'interview prep', 'workshops'],
  },
  {
    key: 'band',
    weight: 5,
    keywords: ['band', 'ss band', 'music performance', 'live music', 'concert', 'music group', 'student band', 'musical group', 'band performance'],
  },
  {
    key: 'event_management',
    weight: 5,
    keywords: ['event management', 'event planning', 'organize event', 'event organizer', 'plan event', 'event coordination', 'stage management'],
  },
  {
    key: 'it_solutions',
    weight: 5,
    keywords: ['it solutions', 'it', 'web development', 'web dev', 'website', 'technical solution', 'tech solution', 'build website', 'digital', 'software', 'development services', 'ss it'],
  },
  {
    key: 'guidance',
    weight: 4,
    keywords: ['guidance', 'student problem', 'student problems', 'help', 'peer support', 'counseling', 'career confusion', 'career guidance', 'help with studies', 'college advice', 'problem', 'struggling', 'issue', 'need help', 'advice', 'public speaking fear', 'stage fear', 'confidence'],
  },
  {
    key: 'services',
    weight: 2,
    keywords: ['service', 'services', 'what services', 'what do you offer', 'offering', 'offerings', 'what do you provide'],
  },
  {
    key: 'placements',
    weight: 4,
    keywords: ['placement', 'placements', 'placed', 'job placement', 'campus placement', 'career support', 'job offer', 'company placement', 'placed students'],
  },
  {
    key: 'contact',
    weight: 3,
    keywords: ['contact', 'reach', 'email', 'phone', 'instagram', 'social', 'get in touch', 'reach out', 'message', 'dm', 'enquiry', 'inquiry'],
  },
  {
    key: 'opportunities',
    weight: 2,
    keywords: ['opportunity', 'opportunities', 'what opportunities', 'explore', 'find opportunities', 'all opportunities'],
  },
];


// ─── Scoring ─────────────────────────────────────────────────────────────────
function scoreIntent(normalizedInput: string, intent: Intent): number {
  let score = 0;
  for (const keyword of intent.keywords) {
    if (normalizedInput === keyword) {
      score += 10 * (intent.weight ?? 1); // exact match
    } else if (normalizedInput.includes(keyword)) {
      score += 5 * (intent.weight ?? 1); // substring match
    } else if (containsKeywordFuzzy(normalizedInput, keyword)) {
      score += 3 * (intent.weight ?? 1); // fuzzy match
    }
  }
  return score;
}

let dynamicSpecificOppResponse: ChatResponse | null = null;

function detectIntent(input: string): IntentKey {
  const normalized = normalizeText(input);
  
  // 1. Check for specific opportunities first (dynamic matching)
  for (const opp of SPECIFIC_OPPS) {
    if (normalized.includes(opp.keyword) || containsKeywordFuzzy(normalized, opp.keyword)) {
      dynamicSpecificOppResponse = {
        text: `Awesome! You can find all the details and the application form for **${opp.label}** on its dedicated opportunity page.`,
        actions: [
          btn(`Register for ${opp.label}`, opp.route, 'primary'),
          btn('View All Opportunities', ROUTES.opportunities, 'outline')
        ]
      };
      return 'specific_opportunity';
    }
  }
  
  dynamicSpecificOppResponse = null;

  // 2. Generic intent scoring
  let bestIntent: IntentKey = 'unknown';
  let bestScore = 0;
  for (const intent of INTENTS) {
    const score = scoreIntent(normalized, intent);
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent.key;
    }
  }
  return bestScore > 0 ? bestIntent : 'unknown';
}

// ─── Response Builder ─────────────────────────────────────────────────────────
function btn(label: string, route: string, variant: ActionButton['variant'] = 'primary', external?: boolean): ActionButton {
  return { label, route, variant, external };
}

const RESPONSES: Record<IntentKey, () => ChatResponse> = {
  specific_opportunity: () => dynamicSpecificOppResponse || RESPONSES.unknown(),
  
  whatsapp_community: () => ({
    text: `Here is the official link to join the **Struggle of Student WhatsApp Community**. Stay updated on all the latest opportunities, events, and workshops!`,
    actions: [
      btn('Join WhatsApp Community', KNOWLEDGE.contact.whatsappCommunity || KNOWLEDGE.contact.whatsapp || '', 'primary', true),
    ]
  }),
  
  whatsapp_group: () => ({
    text: `Here is the official invite link for the **Struggle of Student WhatsApp Group** where you can chat with other members.`,
    actions: [
      btn('Join WhatsApp Group', KNOWLEDGE.contact.whatsappGroup || 'https://chat.whatsapp.com/I9OSqm30mAM5wEnUhDN17Y', 'primary', true),
    ]
  }),
  
  whatsapp_ambiguous: () => ({
    text: `We have both a **WhatsApp Community** (for official announcements) and a **WhatsApp Group** (for chatting with peers). Which one would you like to join?`,
    actions: [
      btn('WhatsApp Community', KNOWLEDGE.contact.whatsappCommunity || KNOWLEDGE.contact.whatsapp || '', 'primary', true),
      btn('WhatsApp Group', KNOWLEDGE.contact.whatsappGroup || 'https://chat.whatsapp.com/I9OSqm30mAM5wEnUhDN17Y', 'secondary', true),
    ]
  }),

  greeting: () => ({
    text: `Hi there! I'm the SS Community Assistant — here to help you explore everything Struggle of Student has to offer.\n\nWhether you're looking for internships, want to showcase your talent, join the community, or understand what SS is all about — I've got you.\n\nWhat are you looking for today?`,
    actions: [
      btn('Explore Opportunities', ROUTES.opportunities),
      btn('Join SS', ROUTES.join),
      btn('Upcoming Events', ROUTES.events),
      btn('Meet the Team', ROUTES.team),
    ],
  }),

  about_ss: () => ({
    text: `**Struggle of Student (SS)** is a student-community platform built to help students across colleges **showcase their talent, build real skills, and discover opportunities.**\n\nFounded by **${KNOWLEDGE.founder.name}**, SS runs talent showcases, campus ambassador programs, online workshops, volunteering drives, internship listings, and much more.\n\n📍 Based in Hyderabad — active across multiple campuses.\n\nTagline: *"${KNOWLEDGE.organization.tagline}"*`,
    actions: [
      btn('About SS', ROUTES.about),
      btn('Join the Community', ROUTES.join),
      btn('See Our Services', ROUTES.services),
    ],
  }),

  founder: () => ({
    text: `**${KNOWLEDGE.founder.name}** is the **Founder of Struggle of Student**.\n\n"${KNOWLEDGE.founder.bio}"\n\nThis is a verified fact. You can meet the full SS team on our Team page.`,
    actions: [
      btn('Meet the SS Team', ROUTES.team),
      btn('About SS', ROUTES.about),
    ],
  }),

  team: () => {
    const count = KNOWLEDGE.team.count;
    return {
      text: `The SS core team has **${count} active members** working across departments like Event Management, Community Outreach, Technology, Design, Campus Leadership, and Career Guidance.\n\nThe team is led by Founder **${KNOWLEDGE.founder.name}**.\n\n*(Team profiles shown are illustrative placeholders — actual member details are managed by the SS team.)*`,
      actions: [
        btn('Meet the Team', ROUTES.team),
        btn('Contact SS', ROUTES.contact),
      ],
    };
  },

  join: () => ({
    text: `Joining SS is completely free! Fill out the **Community Registration Form** to get connected with the SS student network.\n\nYou'll be able to:\n• Explore internships, events and workshops\n• Participate in talent showcases\n• Volunteer at campus events\n• Become a Campus Ambassador\n\nJust share a few details and the team will reach out via WhatsApp/Email.`,
    actions: [
      btn('Join SS — Register Now', ROUTES.join, 'primary'),
      btn('Learn About SS First', ROUTES.about, 'outline'),
    ],
  }),

  internship: () => ({
    text: `SS curates student internship listings across areas like:\n• Web Development & UI/UX Design\n• AI/ML & Data Analytics\n• Digital Marketing & Content Writing\n• Graphic Design & Video Editing\n\nThese are curated for college students seeking early-career experience. All listings are sample/prototype data — contact SS for verified live openings.`,
    actions: [
      btn('Browse Internships', ROUTES.internships, 'primary'),
      btn('All Opportunities', ROUTES.opportunities, 'outline'),
      btn('Join SS to Apply', ROUTES.join, 'secondary'),
    ],
  }),

  job: () => ({
    text: `SS lists entry-level and fresher job roles for final-year students and fresh graduates, including:\n• Web Development & Software roles\n• Social Media & Marketing\n• Data Analytics\n• Event Operations\n\n*(Current listings are sample/prototype data. Contact SS for confirmed openings.)*`,
    actions: [
      btn('Browse Jobs', ROUTES.jobs, 'primary'),
      btn('Career Development', ROUTES.careerDevelopment, 'outline'),
      btn('Placements Info', ROUTES.placements, 'secondary'),
    ],
  }),

  campus_ambassador: () => ({
    text: `The **SS Campus Ambassador Program** lets you represent Struggle of Student at your college campus.\n\nAs a Campus Ambassador you can:\n• Organize SS workshops and meetups on your campus\n• Lead a student chapter\n• Earn leadership certificates and rewards\n• Grow your network across colleges\n\nThis is a great opportunity for students who want real leadership experience.`,
    actions: [
      btn('Apply as Campus Ambassador', ROUTES.campusAmbassador, 'primary'),
      btn('Join SS First', ROUTES.join, 'outline'),
    ],
  }),

  volunteer: () => ({
    text: `SS regularly runs volunteering opportunities at campus events and meetups. As a volunteer you get:\n• Hands-on event coordination experience\n• Volunteer recognition certificates\n• Real logistics and desk management skills\n• Networking with students across campuses\n\nCheck the Events page for upcoming events that need volunteers, or explore the dedicated Volunteering listings.`,
    actions: [
      btn('Volunteer Opportunities', ROUTES.volunteering, 'primary'),
      btn('Upcoming Events', ROUTES.events, 'outline'),
      btn('Join SS', ROUTES.join, 'secondary'),
    ],
  }),

  talent: () => ({
    text: `The **SS Talent Showcase** is a stage for every student creative — singers, dancers, comedians, beatboxers, spoken word artists, poets, anchors, and more.\n\nYou can submit your audio/video portfolio across **12+ creative categories** and get visibility among student communities across campuses.\n\nThis is your stage — no matter what your art form is.`,
    actions: [
      btn('Explore Talent Showcase', ROUTES.talentShowcase, 'primary'),
      btn('All Opportunity Categories', ROUTES.opportunities, 'outline'),
      btn('Join SS to Participate', ROUTES.join, 'secondary'),
    ],
  }),

  leadership: () => ({
    text: `SS offers **Leadership Opportunities** for students who want to step up and take charge:\n• Student Team Lead roles\n• Event Organizing Chair positions\n• Community Coordinator roles\n• Campus Chapter Heads\n\nLeadership at SS means real responsibility — managing student teams, planning events, and driving community initiatives.`,
    actions: [
      btn('Leadership Opportunities', ROUTES.leadership, 'primary'),
      btn('Campus Ambassador Program', ROUTES.campusAmbassador, 'outline'),
    ],
  }),

  events: () => ({
    text: `SS organizes a range of student events including:\n• Campus meetups and networking events\n• Cultural fests and talent nights\n• Hackathons and competitions\n• Virtual Q&A sessions\n\nCheck the Events page for upcoming dates. You can also register to volunteer at events.`,
    actions: [
      btn('View All Events', ROUTES.events, 'primary'),
      btn('Volunteer at an Event', ROUTES.volunteering, 'outline'),
      btn('Online Sessions', ROUTES.meetings, 'secondary'),
    ],
  }),

  online_sessions: () => {
    const sessions = KNOWLEDGE.meetings;
    const upcoming = sessions[0];
    return {
      text: `SS hosts **interactive online sessions** via Zoom/Google Meet, including:\n• Career & employability masterclasses\n• Public speaking practice circles\n• Campus Ambassador orientation meets\n\nUpcoming sample session: **"${upcoming?.title}"** — *${upcoming?.date}, ${upcoming?.time}*\n\n*(Session dates and details shown are prototype data — check the Online Sessions page for confirmed timings.)*`,
      actions: [
        btn('View Online Sessions', ROUTES.meetings, 'primary'),
        btn('Workshops & Bootcamps', ROUTES.workshops, 'outline'),
      ],
    };
  },

  workshops: () => ({
    text: `SS workshops are hands-on skill-building sessions for college students. A past highlight:\n\n📌 **"Unmute Yourself"** — ${KNOWLEDGE.pastWorkshop.date}\nA live workshop focused on communication skills and employability. *(Verified past event)*\n\nUpcoming workshops cover resume writing, interview prep, portfolio building, and technical bootcamps.`,
    actions: [
      btn('Browse Workshops', ROUTES.workshops, 'primary'),
      btn('Online Sessions', ROUTES.meetings, 'outline'),
    ],
  }),

  band: () => ({
    text: `**SS Band & Music Performance** brings together student vocalists and instrumentalists for live performances.\n\nThey perform at:\n• College cultural events & fests\n• Youth summits\n• Community music showcases\n\nIf you're a student musician or an event organizer looking for live performance, SS Band is the right fit.`,
    actions: [
      btn('View SS Services', ROUTES.services, 'primary'),
      btn('Contact SS', ROUTES.contact, 'outline'),
    ],
  }),

  event_management: () => ({
    text: `**SS Event Management** provides end-to-end planning and execution for student events, including:\n• Student volunteer team deployment\n• Stage setup & technical support\n• Registration desk logistics\n• Cross-campus digital promotion\n\nIdeal for college clubs, department heads, or youth event organizers.`,
    actions: [
      btn('Explore SS Services', ROUTES.services, 'primary'),
      btn('Contact SS', ROUTES.contact, 'outline'),
    ],
  }),

  it_solutions: () => ({
    text: `**SS IT & Technical Solutions** bridges student tech talent with real projects:\n• Custom website and portal development for college fests\n• UI/UX design and branding assets\n• Technical mentorship and open-source collaboration\n\nPerfect for student startups, college clubs, or developers seeking collaborative projects.`,
    actions: [
      btn('View IT Solutions', ROUTES.services, 'primary'),
      btn('Contact the SS Team', ROUTES.contact, 'outline'),
    ],
  }),

  guidance: () => ({
    text: `SS provides **Student Guidance & Peer Support** — a network to help students navigate:\n• Academic challenges and career confusion\n• Public speaking hesitation and stage fear\n• How to find campus projects and communities\n• Communication and confidence building\n\nIf you're facing a student problem, the SS team is here to help. Reach out through the Contact page or join SS to access peer mentorship.`,
    actions: [
      btn('Get in Touch', ROUTES.contact, 'primary'),
      btn('Student Guidance Service', ROUTES.services, 'outline'),
      btn('Join SS Community', ROUTES.join, 'secondary'),
    ],
  }),

  services: () => {
    const serviceNames = KNOWLEDGE.services.map(s => `• ${s.title}`).join('\n');
    return {
      text: `SS offers **5 core services** for students and event organizers:\n\n${serviceNames}\n\nEach service is designed specifically for student communities and campus organizations.`,
      actions: [
        btn('Explore All Services', ROUTES.services, 'primary'),
        btn('Contact SS', ROUTES.contact, 'outline'),
      ],
    };
  },

  placements: () => ({
    text: `The **SS Placements** section showcases the career outcomes and industry connections the SS community has supported. It highlights roles across tech, marketing, design, and event management.\n\n*(Placement data shown is illustrative prototype content — verified placement statistics are managed by the SS team. Contact SS for confirmed details.)*`,
    actions: [
      btn('View Placements', ROUTES.placements, 'primary'),
      btn('Career Development', ROUTES.careerDevelopment, 'outline'),
      btn('Join SS', ROUTES.join, 'secondary'),
    ],
  }),

  contact: () => ({
    text: `Here's how to reach the SS team:\n\n📧 **Email:** ${KNOWLEDGE.contact.email}\n📞 **Phone:** ${KNOWLEDGE.contact.phone}\n🕐 **Hours:** ${KNOWLEDGE.contact.hours}\n📍 **Location:** ${KNOWLEDGE.organization.location}\n\nYou can also connect via Instagram or WhatsApp — links are on the Contact page.`,
    actions: [
      btn('Contact Page', ROUTES.contact, 'primary'),
      btn('Join SS Community', ROUTES.join, 'outline'),
    ],
  }),

  opportunities: () => {
    const count = KNOWLEDGE.opportunityCategories.length;
    return {
      text: `SS has **${count} opportunity categories** — from internships and jobs to talent showcases, volunteering, online sessions, workshops, campus ambassador roles, and much more.\n\nThere's something for every student — whether you're looking to build career skills, showcase creativity, or lead campus initiatives.`,
      actions: [
        btn('Explore All Opportunities', ROUTES.opportunities, 'primary'),
        btn('Internships', ROUTES.internships, 'outline'),
        btn('Talent Showcase', ROUTES.talentShowcase, 'outline'),
        btn('Join SS', ROUTES.join, 'secondary'),
      ],
    };
  },

  unknown: () => ({
    text: `I'm not exactly sure about that. But don't worry, you can explore the website or contact the SS team for confirmation.\n\nI can help you with topics like joining SS, internships, events, talent showcase (like singing or comedy), campus ambassador programs, online sessions, services, the founding team, or our WhatsApp groups.`,
    actions: [
      btn('Contact SS Team', ROUTES.contact, 'primary'),
      btn('Explore Opportunities', ROUTES.opportunities, 'outline'),
    ],
  }),
};

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Main function: given user input, return a ChatResponse.
 * This is the ONLY function the UI needs to call.
 */
export async function getResponse(userInput: string): Promise<ChatResponse> {
  // Simulate slight processing delay (100-300ms) for realism
  await new Promise(resolve => setTimeout(resolve, 120 + Math.random() * 180));

  const intent = detectIntent(userInput);
  const responseBuilder = RESPONSES[intent] ?? RESPONSES['unknown'];
  return responseBuilder();
}

/**
 * Suggested quick-reply prompts shown when the chat opens.
 */
export const SUGGESTED_PROMPTS = [
  'Join WhatsApp Community',
  'Register for Comedy',
  'Find internships',
  'Upcoming events',
  'Who founded SS?',
  'Contact the team',
];
