import { SSEvent } from '../types';

/**
 * EVENTS DATA
 * Verified facts are explicitly indicated.
 * Sample upcoming events are provided for prototype demonstration and marked accordingly.
 */
export const INITIAL_EVENTS: SSEvent[] = [
  // VERIFIED PAST EVENT (Fact)
  {
    id: "event-unmute-yourself-2026",
    title: "Unmute Yourself — Online Workshop",
    tagline: "Break barriers, find your voice, and elevate your communication skills.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200", // High quality placeholder or asset
    date: "4 October 2026",
    time: "6:00 PM IST",
    isUpcoming: false,
    isOnline: true,
    location: "Hyderabad / Online Workshop",
    venueDetails: "Live Interactive Session via SS Meeting Platform",
    description: "An intensive interactive workshop organized by Struggle of Student Group to help students overcome public speaking anxiety, master interview preparation, and build employability skills for their future careers.",
    topics: [
      "Effective Communication Strategies",
      "Overcoming Stage Fear & Public Speaking",
      "Interview Preparation & Body Language",
      "Employability Skills for Modern Careers"
    ],
    organizer: "Struggle of Student Group",
    registrationOpen: false,
    volunteerRoles: [],
    isVerifiedFact: true,
    isSampleData: false
  },

  // SAMPLE UPCOMING EVENTS (Prototype)
  {
    id: "event-student-connect-2026",
    title: "SS Student Connect 2026",
    tagline: "The annual grand gathering of student leaders, creators, and innovators.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200",
    date: "15 November 2026",
    time: "4:00 PM - 8:00 PM IST",
    isUpcoming: true,
    isOnline: false,
    location: "Hyderabad Auditorium, Telangana",
    venueDetails: "Main Cultural Center, Jubilee Hills, Hyderabad",
    description: "Connect with hundreds of passionate students across colleges. Experience live talent showcases, keynotes from young achievers, interactive panel discussions, and career networking.",
    topics: [
      "Building College Communities",
      "Talent Showcase & Performance",
      "Networking & Internship Guidance",
      "Student Founder Discussions"
    ],
    organizer: "Struggle of Student Team",
    registrationOpen: true,
    volunteerRoles: [
      {
        id: "role-coordinator",
        title: "Event Coordinator",
        description: "Guide stage flow, manage speaker schedules, and coordinate session transitions.",
        capacity: 10,
        filled: 7 // 7/10 filled demo
      },
      {
        id: "role-registration",
        title: "Registration Desk Host",
        description: "Welcome attendees, verify check-in QR badges, and distribute SS delegate kits.",
        capacity: 5,
        filled: 5 // 5/5 filled demo (FULL)
      },
      {
        id: "role-media",
        title: "Media & Photography Crew",
        description: "Capture photo/video highlights, conduct quick attendee interviews, and stream updates.",
        capacity: 6,
        filled: 4
      }
    ],
    meetingUrl: "https://meet.ss-demo.local/student-connect-2026",
    isSampleData: true
  },
  {
    id: "event-career-launch",
    title: "Career Launch & Employability Masterclass",
    tagline: "Bridge the gap between academic learning and industry expectations.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    date: "28 November 2026",
    time: "5:00 PM - 7:00 PM IST",
    isUpcoming: true,
    isOnline: true,
    location: "Online Interactive Masterclass",
    venueDetails: "SS Virtual Auditorium (Zoom Link provided on registration)",
    description: "Learn actionable strategies to craft high-converting tech/non-tech resumes, optimize your LinkedIn profile, and navigate off-campus job applications.",
    topics: [
      "Resume Structuring & ATS Compliance",
      "LinkedIn Networking Strategy",
      "Handling Technical & HR Interview Rounds"
    ],
    organizer: "SS Career Guidance Wing",
    registrationOpen: true,
    volunteerRoles: [
      {
        id: "role-online-mod",
        title: "Online Session Moderator",
        description: "Manage Q&A chat, moderate participant queries, and launch live polls.",
        capacity: 4,
        filled: 2
      }
    ],
    meetingUrl: "https://meet.ss-demo.local/career-launch-session",
    isSampleData: true
  },
  {
    id: "event-talent-night",
    title: "SS Campus Talent Showcase Night",
    tagline: "Celebrating student singers, musicians, anchors, dancers, and comedy acts.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    date: "12 December 2026",
    time: "6:30 PM - 9:30 PM IST",
    isUpcoming: true,
    isOnline: false,
    location: "Open Air Amphitheatre, Hyderabad",
    venueDetails: "State Youth Cultural Grounds, Hyderabad",
    description: "An energetic evening spotlighting student talent from across colleges! Featuring live performances by the SS Band and guest student acts.",
    topics: [
      "Live Musical Acts & SS Band",
      "Standup Comedy & Spoken Word",
      "Dance & Performance Art",
      "Student Creator Recognition"
    ],
    organizer: "SS Cultural & Talent Wing",
    registrationOpen: true,
    volunteerRoles: [
      {
        id: "role-stage-hand",
        title: "Stage & Sound Assistant",
        description: "Assist band equipment setup, microphone management, and stage cues.",
        capacity: 6,
        filled: 6 // 6/6 Full demo
      },
      {
        id: "role-hospitality",
        title: "Performer Hospitality",
        description: "Welcome performer teams, manage green room logistics, and ensure smooth scheduling.",
        capacity: 4,
        filled: 3
      }
    ],
    isSampleData: true
  }
];
