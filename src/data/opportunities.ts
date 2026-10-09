import { Opportunity } from '../types';

export const SAMPLE_OPPORTUNITIES: Opportunity[] = [
  // ==========================================
  // 1. SAMPLE INTERNSHIPS (8 REQUIRED LISTINGS)
  // ==========================================
  {
    id: "opp-intern-web-dev",
    title: "Web Development Intern",
    category: "Internships",
    categorySlug: "internships",
    formType: "internship",
    type: "Part-time",
    isInternship: true,
    companyName: "SS Tech Innovation Lab",
    shortDescription: "Build modern web applications, interactive student tools, and React/Tailwind interfaces.",
    fullDescription: "Join the SS Tech Innovation Lab as a Web Development Intern. You will collaborate with student developers to build responsive web pages, integrate REST APIs, optimize frontend performance, and deploy user-friendly web features.",
    responsibilities: [
      "Develop reusable React/TypeScript UI components with CSS/Tailwind",
      "Collaborate with UI/UX designers to implement pixel-perfect user interfaces",
      "Fix frontend bugs and optimize mobile responsiveness across browsers",
      "Participate in weekly developer code reviews and sprint planning"
    ],
    requirements: [
      "Familiarity with HTML, CSS, JavaScript, and modern frameworks (React/Vue/Next.js)",
      "Basic understanding of Git and GitHub version control",
      "Eagerness to learn clean code practices and web performance optimization"
    ],
    skillsNeeded: ["React", "TypeScript", "HTML/CSS", "TailwindCSS", "Git"],
    perks: [
      "Official Internship Certificate & Recommendation Letter",
      "Mentorship from senior software engineers",
      "Flexible working hours with remote flexibility",
      "Live portfolio project to showcase on GitHub and resume"
    ],
    learningOutcomes: [
      "Master production component architecture in React & TypeScript",
      "Gain real experience with collaborative Git pull requests & code reviews",
      "Understand web accessibility and responsive layout optimization"
    ],
    duration: "3 Months",
    workMode: "Remote / Flexible",
    experienceLevel: "Beginner / Intermediate Students",
    eligibility: "Open to B.Tech / BCA / MCA / B.Sc students in 2nd, 3rd or 4th year",
    location: "Remote / Hyderabad",
    isRemote: true,
    deadline: "30 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    isSampleData: true,
    isFeatured: true
  },
  {
    id: "opp-intern-ui-ux",
    title: "UI/UX Design Intern",
    category: "Internships",
    categorySlug: "internships",
    formType: "internship",
    type: "Part-time",
    isInternship: true,
    companyName: "SS Creative Design Studio",
    shortDescription: "Craft user wireframes, mobile app mockups, and visual design systems for student platforms.",
    fullDescription: "As a UI/UX Design Intern, you will conduct user research with student focus groups, design high-fidelity Figma prototypes, create design tokens, and refine app navigation flows.",
    responsibilities: [
      "Design user flows, wireframes, and interactive Figma prototypes",
      "Conduct student usability tests and gather qualitative user feedback",
      "Maintain and expand the SS visual design system and UI component guidelines",
      "Work closely with web developers during UI implementation"
    ],
    requirements: [
      "Proficiency in Figma, Adobe XD, or similar design software",
      "Strong visual design sense, typography, and color theory understanding",
      "Portfolio or Behance link showing sample wireframes or UI screens"
    ],
    skillsNeeded: ["Figma", "Wireframing", "User Research", "Prototyping", "Design Systems"],
    perks: [
      "Certificate of Internship Completion & Design Portfolio Endorsement",
      "1-on-1 design critique sessions with industry mentors",
      "Publication of case studies on SS Design publication"
    ],
    learningOutcomes: [
      "Build a complete UI/UX case study from user research to interactive prototype",
      "Understand accessibility compliance (WCAG) and responsive mobile design"
    ],
    duration: "3 Months",
    workMode: "Remote",
    experienceLevel: "Students with Figma basics",
    eligibility: "Open to all students interested in product design & UI/UX",
    location: "Remote",
    isRemote: true,
    deadline: "25 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-intern-ai-ml",
    title: "AI/ML Intern",
    category: "Internships",
    categorySlug: "internships",
    formType: "internship",
    type: "Project",
    isInternship: true,
    companyName: "SS Data & AI Lab",
    shortDescription: "Develop machine learning models, NLP text classifiers, and data pipelines for educational insights.",
    fullDescription: "Explore practical artificial intelligence by building Python ML pipelines, fine-tuning LLM prompts, analyzing student feedback datasets, and evaluating model accuracy metrics.",
    responsibilities: [
      "Clean, preprocess, and structure raw tabular and text datasets using pandas/numpy",
      "Train baseline classification and clustering models using Scikit-Learn or PyTorch",
      "Experiment with LLM APIs and prompt engineering for student Q&A assistance",
      "Document experimental results and present insights to team leads"
    ],
    requirements: [
      "Good understanding of Python programming, NumPy, and Pandas",
      "Basic knowledge of machine learning concepts (supervised/unsupervised learning)",
      "Enthusiasm for data science, AI tools, and predictive analytics"
    ],
    skillsNeeded: ["Python", "Pandas", "Scikit-Learn", "PyTorch/TensorFlow", "Prompt Engineering"],
    perks: [
      "Internship Certificate & Research Project Attribution",
      "Access to GPU cloud notebooks and ML dataset repositories",
      "Mentorship from data science professionals"
    ],
    learningOutcomes: [
      "Build end-to-end data preprocessing and ML model training pipelines in Python",
      "Learn practical LLM integration techniques for real-world applications"
    ],
    duration: "4 Months",
    workMode: "Remote",
    experienceLevel: "Intermediate Python skills",
    eligibility: "Open to CS / IT / ECE / Data Science students",
    location: "Remote",
    isRemote: true,
    deadline: "05 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-intern-data",
    title: "Data Analytics Intern",
    category: "Internships",
    categorySlug: "internships",
    formType: "internship",
    type: "Part-time",
    isInternship: true,
    companyName: "SS Analytics Hub",
    shortDescription: "Analyze student participation trends, build PowerBI/Tableau dashboards, and derive growth metrics.",
    fullDescription: "Transform raw event and student engagement data into actionable visual reports. Learn data visualization, SQL queries, and analytical storytelling to support strategic decisions.",
    responsibilities: [
      "Write SQL queries to extract data from analytics databases",
      "Build interactive dashboards in PowerBI, Tableau, or Google Looker Studio",
      "Analyze event attendee retention, registration conversion, and feedback ratings",
      "Present weekly metric digests to community growth coordinators"
    ],
    requirements: [
      "Basic proficiency in SQL and Excel/Google Sheets",
      "Familiarity with data visualization tools (PowerBI/Tableau/Python matplotlib)",
      "Analytical mindset with attention to numerical detail"
    ],
    skillsNeeded: ["SQL", "Excel / Sheets", "PowerBI / Tableau", "Data Storytelling"],
    perks: [
      "Official Data Analytics Internship Certificate",
      "Real business analytics portfolio projects",
      "Mentorship on industry analytics tools"
    ],
    learningOutcomes: [
      "Master complex SQL queries and data transformations",
      "Design executive dashboards that communicate business insights effectively"
    ],
    duration: "3 Months",
    workMode: "Remote",
    experienceLevel: "Basic SQL & Excel knowledge",
    eligibility: "Open to all undergraduate & postgraduate students",
    location: "Remote",
    isRemote: true,
    deadline: "28 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-intern-marketing",
    title: "Digital Marketing Intern",
    category: "Internships",
    categorySlug: "internships",
    formType: "internship",
    type: "Part-time",
    isInternship: true,
    companyName: "SS Digital Growth Wing",
    shortDescription: "Manage social media campaigns, SEO content optimization, and digital outreach to college students.",
    fullDescription: "Drive organic reach and student engagement across Instagram, LinkedIn, YouTube, and WhatsApp. Learn performance marketing, content strategy, copy testing, and analytics tracking.",
    responsibilities: [
      "Draft engaging captions, social posts, and WhatsApp newsletter updates",
      "Execute organic social media campaigns for upcoming student masterclasses",
      "Track post engagement metrics, reach, CTR, and follower growth trends",
      "Collaborate with graphic designers and video editors for campaign assets"
    ],
    requirements: [
      "Active presence on social media platforms (Instagram, LinkedIn, YouTube)",
      "Good copywriting skills and understanding of Gen-Z communication styles",
      "Basic understanding of digital marketing metrics (reach, impressions, CTR)"
    ],
    skillsNeeded: ["Social Media Marketing", "Copywriting", "SEO Basics", "Canva", "Analytics"],
    perks: [
      "Digital Marketing Certificate & Recommendation Letter",
      "Hands-on campaign budget experience & performance bonuses",
      "Growth marketing mentorship"
    ],
    learningOutcomes: [
      "Execute digital campaigns with measurable student conversion metrics",
      "Build a portfolio of published social campaigns reaching thousands of students"
    ],
    duration: "3 Months",
    workMode: "Remote / Hybrid",
    experienceLevel: "Creative & proactive students",
    eligibility: "Open to all streams (BBA, B.Com, B.Tech, Degree)",
    location: "Remote / Hyderabad",
    isRemote: true,
    deadline: "20 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-intern-content",
    title: "Content Writing Intern",
    category: "Internships",
    categorySlug: "internships",
    formType: "internship",
    type: "Part-time",
    isInternship: true,
    companyName: "SS Editorial Desk",
    shortDescription: "Write student achievement stories, workshop summaries, blogs, and newsletter articles.",
    fullDescription: "Join the SS Editorial Desk to research and write compelling articles about student success, career tips, college event highlights, and skill development guides.",
    responsibilities: [
      "Write clear, engaging blog posts, newsletters, and student spotlights",
      "Interview student leaders and workshop speakers for featured write-ups",
      "Proofread content for clarity, grammar, tone, and brand consistency",
      "Optimize web articles for search engine visibility (SEO)"
    ],
    requirements: [
      "Excellent written English communication skills",
      "Ability to research topics independently and summarize key takeaways",
      "Sample writing pieces or blog links"
    ],
    skillsNeeded: ["Content Writing", "Copy Editing", "Storytelling", "SEO Writing", "Research"],
    perks: [
      "Published writing credits on SS official website & medium publication",
      "Content Writing Internship Certificate",
      "1-on-1 editorial feedback and writing refinement"
    ],
    learningOutcomes: [
      "Develop a professional portfolio of published student journalism and career articles",
      "Learn SEO keyword integration and structured web writing techniques"
    ],
    duration: "3 Months",
    workMode: "Remote",
    experienceLevel: "Passionate student writers",
    eligibility: "Open to all undergraduate & postgraduate students",
    location: "Remote",
    isRemote: true,
    deadline: "18 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-intern-graphic",
    title: "Graphic Design Intern",
    category: "Internships",
    categorySlug: "internships",
    formType: "internship",
    type: "Part-time",
    isInternship: true,
    companyName: "SS Brand & Creative Lab",
    shortDescription: "Design eye-catching event posters, social media banners, and digital graphics for SS initiatives.",
    fullDescription: "Bring SS campaigns to life visually! Design event promotional creatives, carousel posts, brand banners, and digital certificates using Photoshop, Illustrator, or Canva.",
    responsibilities: [
      "Create promotional graphics for campus workshops, meetups, and online sessions",
      "Design Instagram carousel slides and LinkedIn infographic banners",
      "Adhere to SS brand color palettes (black, red, white, cyan accent) and typography",
      "Deliver print-ready poster files for college event displays"
    ],
    requirements: [
      "Proficiency in Photoshop, Illustrator, Canva, or Figma",
      "Strong understanding of composition, visual hierarchy, and typography",
      "Design portfolio or Behance link"
    ],
    skillsNeeded: ["Photoshop", "Illustrator", "Canva", "Visual Hierarchy", "Branding"],
    perks: [
      "Graphic Design Internship Certificate & Recommendation Letter",
      "Published artwork featured across campus promotional materials",
      "Creative direction mentorship"
    ],
    learningOutcomes: [
      "Build a commercial design portfolio with high-visibility community reach",
      "Master fast-turnaround marketing graphic production and brand guidelines"
    ],
    duration: "3 Months",
    workMode: "Remote",
    experienceLevel: "Creative visual artists",
    eligibility: "Open to all students with design skills",
    location: "Remote",
    isRemote: true,
    deadline: "22 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-intern-video",
    title: "Video Editing Intern",
    category: "Internships",
    categorySlug: "internships",
    formType: "internship",
    type: "Part-time",
    isInternship: true,
    companyName: "SS Video & Media Unit",
    shortDescription: "Edit dynamic Instagram Reels, event recap videos, YouTube shorts, and student interview clips.",
    fullDescription: "Transform raw event video footage and workshop recordings into engaging short-form video content (Reels, Shorts) with captions, sound effects, and transitions.",
    responsibilities: [
      "Edit short-form vertical video reels for Instagram and YouTube Shorts",
      "Add dynamic captions, motion graphics, and background audio tracks",
      "Color grade raw event clips and assemble workshop highlight teasers",
      "Archive and organize video project assets in media cloud drive"
    ],
    requirements: [
      "Proficiency in Premiere Pro, DaVinci Resolve, CapCut, or After Effects",
      "Understanding of video pacing, audio balancing, and hook creation",
      "Sample video edit links or Google Drive portfolio"
    ],
    skillsNeeded: ["Premiere Pro", "CapCut", "Video Editing", "Motion Graphics", "Audio Editing"],
    perks: [
      "Video Editing Internship Certificate & Credits on video releases",
      "Access to stock video & audio asset libraries",
      "Mentorship from experienced video creators"
    ],
    learningOutcomes: [
      "Master high-engagement short-form video editing techniques for social platforms",
      "Create a reel portfolio featuring event recaps and student interviews"
    ],
    duration: "3 Months",
    workMode: "Remote",
    experienceLevel: "Basic to intermediate video editing",
    eligibility: "Open to all students with video editing skills",
    location: "Remote",
    isRemote: true,
    deadline: "24 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },

  // ==========================================
  // 2. SAMPLE JOBS (8 REQUIRED LISTINGS - CLEARLY MARKED DEMO)
  // ==========================================
  {
    id: "opp-job-web-dev",
    title: "Junior Web Developer",
    category: "Jobs",
    categorySlug: "jobs",
    formType: "job",
    type: "Full-time",
    isJob: true,
    companyName: "Premier Tech Startup (Demo Partner)",
    shortDescription: "Entry-level full-stack frontend development role working with React, TypeScript, and modern web APIs.",
    fullDescription: "DEMO LISTING FOR PROTOTYPE DEMONSTRATION. A sample junior web developer position for recent computer science or IT graduates. Responsible for developing responsive client-side web interfaces and integrating backend microservices.",
    responsibilities: [
      "Develop responsive frontend interfaces using React, TypeScript, and TailwindCSS",
      "Integrate RESTful APIs and handle asynchronous data workflows",
      "Participate in agile code reviews and automated testing processes",
      "Maintain component libraries and resolve UI bugs"
    ],
    requirements: [
      "Bachelor's degree in Computer Science, IT, or equivalent practical experience",
      "Proficiency in JavaScript (ES6+), React, HTML5, and CSS3",
      "Familiarity with Git, REST APIs, and modern build tools (Vite/Webpack)"
    ],
    skillsNeeded: ["React", "TypeScript", "JavaScript", "REST API", "Git"],
    perks: [
      "Competitive entry-level CTC package (Sample Range: 4-6 LPA)",
      "Health insurance & wellness benefits",
      "Flexible hybrid working environment"
    ],
    learningOutcomes: ["Full-cycle production software development experience"],
    duration: "Full-time Permanent",
    workMode: "Hybrid / On-site",
    experienceLevel: "Entry Level / Freshers (0-1 Year Experience)",
    eligibility: "Recent Graduates (B.Tech / MCA / B.Sc Computer Science)",
    location: "Hyderabad / Bangalore (Demo Location)",
    isRemote: false,
    deadline: "15 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-job-designer",
    title: "Graphic Designer",
    category: "Jobs",
    categorySlug: "jobs",
    formType: "job",
    type: "Full-time",
    isJob: true,
    companyName: "Creative Digital Agency (Demo Partner)",
    shortDescription: "Full-time design role creating digital assets, brand identity collateral, and social media campaigns.",
    fullDescription: "DEMO LISTING FOR PROTOTYPE DEMONSTRATION. Sample entry-level graphic designer role responsible for executing visual branding, social media graphics, marketing banners, and print collateral.",
    responsibilities: [
      "Create visual design assets for multi-channel marketing campaigns",
      "Design digital banners, ad creatives, presentation pitch decks, and print flyers",
      "Maintain brand visual standards and typography consistency",
      "Collaborate with marketing teams to brainstorm campaign visual concepts"
    ],
    requirements: [
      "Degree or Diploma in Graphic Design, Fine Arts, or self-taught portfolio",
      "Strong command over Adobe Photoshop, Illustrator, and Figma",
      "Solid understanding of typography, grid systems, and visual composition"
    ],
    skillsNeeded: ["Photoshop", "Illustrator", "Figma", "Branding", "Typography"],
    perks: ["Competitive salary package", "Creative freedom & campaign ownership", "Team learning budget"],
    learningOutcomes: ["Commercial creative agency campaign experience"],
    duration: "Full-time Permanent",
    workMode: "On-site / Hybrid",
    experienceLevel: "Entry Level (0-1 Year)",
    eligibility: "Design Graduates or self-taught designers with portfolio",
    location: "Hyderabad (Demo Location)",
    isRemote: false,
    deadline: "10 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-job-social-media",
    title: "Social Media Executive",
    category: "Jobs",
    categorySlug: "jobs",
    formType: "job",
    type: "Full-time",
    isJob: true,
    companyName: "Growth Media Company (Demo Partner)",
    shortDescription: "Manage social accounts, plan content calendars, engage audiences, and analyze performance metrics.",
    fullDescription: "DEMO LISTING FOR PROTOTYPE DEMONSTRATION. Sample role for a creative social media executive to manage multi-platform organic reach, community interaction, content scheduling, and trend tracking.",
    responsibilities: [
      "Plan and execute monthly content calendars across Instagram, LinkedIn, and YouTube",
      "Write engaging post captions and community response messages",
      "Monitor analytics dashboards and adjust publishing schedule for optimal reach",
      "Coordinate video shoots and graphic design deliverables with creative teams"
    ],
    requirements: [
      "Degree in Mass Communication, Marketing, or Business Administration",
      "Proven track record of managing active social media channels",
      "Excellent written communication and copywriting skills"
    ],
    skillsNeeded: ["Social Media Strategy", "Copywriting", "Community Management", "Analytics"],
    perks: ["Competitive CTC package", "Content creation equipment access", "Growth incentives"],
    learningOutcomes: ["End-to-end brand social media management"],
    duration: "Full-time Permanent",
    workMode: "Hybrid",
    experienceLevel: "Freshers / 0-1 Year",
    eligibility: "Open to Mass Comm, BBA, B.Com and Degree graduates",
    location: "Hyderabad (Demo Location)",
    isRemote: true,
    deadline: "12 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-job-event-coord",
    title: "Event Coordinator",
    category: "Jobs",
    categorySlug: "jobs",
    formType: "job",
    type: "Full-time",
    isJob: true,
    companyName: "Live Events & Experiential (Demo Partner)",
    shortDescription: "Coordinate venue logistics, vendor relations, stage production, and guest delegate check-ins.",
    fullDescription: "DEMO LISTING FOR PROTOTYPE DEMONSTRATION. Sample event coordinator position focused on managing stage setups, venue logistics, audio-visual technicians, and delegate registration desks for large events.",
    responsibilities: [
      "Manage venue bookings, stage equipment, and vendor negotiations",
      "Coordinate volunteer teams during live event execution",
      "Supervise delegate check-in desks and stage schedules",
      "Resolve on-site logistical issues promptly during event operations"
    ],
    requirements: [
      "Bachelor's degree in any discipline",
      "Strong organizational, multi-tasking, and communication skills",
      "Prior experience in college fest organization or event volunteering is a plus"
    ],
    skillsNeeded: ["Event Logistics", "Vendor Management", "Team Coordination", "Problem Solving"],
    perks: ["Competitive salary package", "On-site travel allowances", "Networking with industry leaders"],
    learningOutcomes: ["Large-scale live event production & logistics management"],
    duration: "Full-time Permanent",
    workMode: "On-site",
    experienceLevel: "Freshers with fest organizing experience",
    eligibility: "Open to all graduates",
    location: "Hyderabad (Demo Location)",
    isRemote: false,
    deadline: "08 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-job-content-writer",
    title: "Content Writer",
    category: "Jobs",
    categorySlug: "jobs",
    formType: "job",
    type: "Full-time",
    isJob: true,
    companyName: "Digital Publishing Network (Demo Partner)",
    shortDescription: "Write SEO articles, website copy, press releases, and promotional marketing materials.",
    fullDescription: "DEMO LISTING FOR PROTOTYPE DEMONSTRATION. Sample entry-level content writer role focused on producing high-quality articles, landing page copy, email newsletters, and press announcements.",
    responsibilities: [
      "Write original, well-researched blog posts and web articles",
      "Conduct keyword research and optimize content for SEO rankings",
      "Collaborate with marketing teams for email campaign copy",
      "Proofread content to ensure flawless grammar and tone consistency"
    ],
    requirements: [
      "Bachelor's degree in Journalism, English, Mass Communication, or related field",
      "Flawless written English grammar and vocabulary",
      "Familiarity with SEO writing techniques and WordPress/CMS platforms"
    ],
    skillsNeeded: ["SEO Copywriting", "Editing", "Content Strategy", "WordPress"],
    perks: ["Competitive CTC package", "Remote working flexibility", "Writing mentorship"],
    learningOutcomes: ["Commercial content strategy & SEO publishing workflow"],
    duration: "Full-time Permanent",
    workMode: "Remote / Hybrid",
    experienceLevel: "0-1 Year Experience",
    eligibility: "Graduates in English, Journalism, Mass Comm or any stream with writing skills",
    location: "Remote / Hyderabad",
    isRemote: true,
    deadline: "14 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-job-video-editor",
    title: "Video Editor",
    category: "Jobs",
    categorySlug: "jobs",
    formType: "job",
    type: "Full-time",
    isJob: true,
    companyName: "Media Production House (Demo Partner)",
    shortDescription: "Edit promotional videos, YouTube documentaries, social media reels, and event recaps.",
    fullDescription: "DEMO LISTING FOR PROTOTYPE DEMONSTRATION. Sample video editor role responsible for video assembly, color correction, audio mixing, motion graphics, and multi-format exports.",
    responsibilities: [
      "Assemble raw video footage into polished, engaging video edits",
      "Perform color grading, audio leveling, and noise reduction",
      "Create motion graphic titles and lower thirds in After Effects",
      "Deliver optimized video files for YouTube, Instagram, and web platforms"
    ],
    requirements: [
      "Proficiency in Adobe Premiere Pro, After Effects, and DaVinci Resolve",
      "Strong sense of narrative pacing, visual storytelling, and rhythm",
      "Comprehensive video editing portfolio reel"
    ],
    skillsNeeded: ["Premiere Pro", "After Effects", "Color Grading", "Sound Design"],
    perks: ["Competitive CTC package", "High-end editing workstation provided", "Project bonuses"],
    learningOutcomes: ["Full commercial video post-production workflow"],
    duration: "Full-time Permanent",
    workMode: "On-site / Hybrid",
    experienceLevel: "Entry Level (0-1 Year)",
    eligibility: "Open to all graduates with editing portfolio",
    location: "Hyderabad (Demo Location)",
    isRemote: false,
    deadline: "18 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-job-comm-coord",
    title: "Community Coordinator",
    category: "Jobs",
    categorySlug: "jobs",
    formType: "job",
    type: "Full-time",
    isJob: true,
    companyName: "Student Network Ops (Demo Partner)",
    shortDescription: "Manage student community groups, answer queries, organize meetups, and drive member engagement.",
    fullDescription: "DEMO LISTING FOR PROTOTYPE DEMONSTRATION. Sample role for a proactive community manager to maintain vibrant student discussion channels, resolve member queries, and organize weekly meetups.",
    responsibilities: [
      "Moderate online community channels (WhatsApp, Telegram, Discord)",
      "Welcome new student members and orient them to community perks",
      "Organize weekly online meetup sessions and peer discussion circles",
      "Gather member feedback and report community sentiment trends"
    ],
    requirements: [
      "Strong empathetic communication and interpersonal skills",
      "Passion for student welfare, networking, and community building",
      "Ability to handle queries patiently and professionally"
    ],
    skillsNeeded: ["Community Management", "Communication", "Event Planning", "Empathy"],
    perks: ["Competitive salary package", "Network expansion opportunities", "Health benefits"],
    learningOutcomes: ["Large-scale community management & engagement strategy"],
    duration: "Full-time Permanent",
    workMode: "Hybrid / Remote",
    experienceLevel: "Freshers / Entry Level",
    eligibility: "Open to all graduates",
    location: "Hyderabad / Remote",
    isRemote: true,
    deadline: "20 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-job-data-analyst",
    title: "Junior Data Analyst",
    category: "Jobs",
    categorySlug: "jobs",
    formType: "job",
    type: "Full-time",
    isJob: true,
    companyName: "Business Intelligence Solutions (Demo Partner)",
    shortDescription: "Analyze operational data, build SQL queries, create Tableau reports, and support decision making.",
    fullDescription: "DEMO LISTING FOR PROTOTYPE DEMONSTRATION. Sample junior data analyst position focused on data extraction, transformation, visualization, and metric reporting for business teams.",
    responsibilities: [
      "Extract and transform relational data using SQL and Python",
      "Build and maintain automated dashboards in PowerBI / Tableau",
      "Identify trends, anomalies, and insights in business datasets",
      "Present quantitative findings to team leaders in simple visual formats"
    ],
    requirements: [
      "Degree in Statistics, Mathematics, Computer Science, Economics, or Engineering",
      "Strong proficiency in SQL, Excel, and Python data libraries (pandas)",
      "Hands-on experience building charts in PowerBI or Tableau"
    ],
    skillsNeeded: ["SQL", "Python", "PowerBI", "Excel", "Data Visualization"],
    perks: ["Competitive entry-level CTC package", "Mentorship from senior data architects", "Annual bonus"],
    learningOutcomes: ["Enterprise data analytics & BI dashboard development"],
    duration: "Full-time Permanent",
    workMode: "Hybrid",
    experienceLevel: "Entry Level / Freshers (0-1 Year)",
    eligibility: "Graduates with strong quantitative background",
    location: "Hyderabad (Demo Location)",
    isRemote: false,
    deadline: "22 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },

  // ==========================================
  // 3. CAMPUS AMBASSADOR PROGRAM LISTING
  // ==========================================
  {
    id: "opp-ca-2026",
    title: "SS Campus Ambassador Program 2026",
    category: "Campus Ambassador",
    categorySlug: "campus-ambassador",
    formType: "ambassador",
    type: "Ambassador",
    shortDescription: "Represent SS at your campus, organize student meetups, build leadership networks, and lead student initiatives.",
    fullDescription: "As an SS Campus Ambassador, you will serve as the official voice of Struggle of Student at your institution. You will organize campus workshops, lead student discussions, help peers discover opportunities, and gain direct mentorship from the SS leadership team.",
    responsibilities: [
      "Share official SS updates, workshop announcements, and opportunity postings with college peers",
      "Connect ambitious students with relevant SS community activities and talent stages",
      "Support volunteer coordination during regional on-campus gatherings and events",
      "Help organize campus initiatives, hackathons, and skill masterclasses"
    ],
    requirements: [
      "Currently enrolled undergraduate or postgraduate student in any discipline",
      "Strong communication, networking, and interpersonal skills",
      "Passionate about student growth, peer learning, and community building",
      "Available for 3-5 hours per week"
    ],
    perks: [
      "Official SS Campus Leader Certificate & Recommendation Letter from Founder",
      "Exclusive access to SS leadership workshops & networking roundtables",
      "Monetary stipends & rewards based on campus initiative impact",
      "Direct priority access to future SS partner internships & job referrals"
    ],
    learningOutcomes: [
      "Develop public speaking, team leadership, and campus networking skills",
      "Build a strong personal brand as a student leader in your region"
    ],
    duration: "6 Months (Extendable)",
    workMode: "On Campus / Hybrid",
    experienceLevel: "All Enrolled Students",
    eligibility: "Open to all 1st, 2nd, 3rd & 4th year college students across India",
    location: "Your College Campus / Pan-India",
    isRemote: true,
    deadline: "30 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    isSampleData: true,
    isFeatured: true
  },

  // ==========================================
  // 4. VOLUNTEERING LISTINGS
  // ==========================================
  {
    id: "opp-vol-event-ops",
    title: "Event Coordination Volunteer",
    category: "Volunteering",
    categorySlug: "volunteering",
    formType: "volunteer",
    type: "Volunteer",
    shortDescription: "Manage stage setups, venue logistics, and delegate assistance during SS student events.",
    fullDescription: "Experience live event execution from the inside! Work alongside the core SS team during major student gatherings, workshops, and talent showcases.",
    responsibilities: [
      "Manage delegate registration desks and check-in verifications",
      "Coordinate stage audio-visual timing with performers and guest speakers",
      "Assist attendees with venue directions and query resolution"
    ],
    requirements: ["Enthusiastic team player with problem-solving mindset", "Available on event dates"],
    perks: ["Volunteer Appreciation Certificate", "Free event access & SS volunteer badge", "Networking with leaders"],
    learningOutcomes: ["On-site event logistics management"],
    duration: "Event Days",
    workMode: "On-site",
    location: "Hyderabad & Regional Colleges",
    isRemote: false,
    deadline: "15 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-vol-media-coverage",
    title: "Media & Photography Volunteer",
    category: "Volunteering",
    categorySlug: "volunteering",
    formType: "volunteer",
    type: "Volunteer",
    shortDescription: "Capture high-quality event photos, audience reactions, and live social media updates.",
    fullDescription: "Cover live SS events as an official student media volunteer! Capture candid audience moments, stage performances, and workshop highlights.",
    responsibilities: [
      "Photograph stage speakers, performers, and attendee networking",
      "Shoot short video reels for instant social media upload",
      "Sort and label high-resolution photo archives post event"
    ],
    requirements: ["DSLR camera or good smartphone camera", "Basic photography composition skills"],
    perks: ["Media Volunteer Certificate", "Published photography credits on SS official platforms"],
    learningOutcomes: ["Live event photojournalism experience"],
    duration: "Event Days",
    workMode: "On-site",
    location: "Hyderabad",
    isRemote: false,
    deadline: "12 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },

  // ==========================================
  // 5. EVENTS & ONLINE SESSIONS LISTINGS
  // ==========================================
  {
    id: "opp-evt-annual-meet",
    title: "SS Annual Student Leadership Convention 2026",
    category: "Events",
    categorySlug: "events",
    formType: "standard",
    type: "Ambassador",
    shortDescription: "Regional gathering of 500+ student leaders, performers, and campus ambassadors.",
    fullDescription: "Join fellow student leaders from across colleges for a day of inspiring keynotes, panel discussions, talent performances, and networking circles.",
    responsibilities: ["Participate in workshops", "Network with peer campus leaders"],
    requirements: ["Open to all registered SS members"],
    perks: ["Delegate Pass & Convention Kit", "Certificate of Participation", "Networking Lunch"],
    learningOutcomes: ["Expanded peer network and leadership insights"],
    eventDate: "15 Dec 2026",
    eventTime: "10:00 AM - 5:00 PM IST",
    location: "Auditorium, Hyderabad",
    isRemote: false,
    deadline: "10 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    isSampleData: true,
    isFeatured: true
  },
  {
    id: "opp-session-interview-prep",
    title: "Placement Interview & Communication Masterclass",
    category: "Online Sessions",
    categorySlug: "sessions",
    formType: "standard",
    type: "Session",
    shortDescription: "Live interactive webinar on cracking technical & HR interviews, public speaking, and body language.",
    fullDescription: "Learn proven interview techniques from industry professionals. Discover how to answer behavioral questions, structure technical answers, and project confidence.",
    responsibilities: ["Participate in live Q&A and mock interview practice"],
    requirements: ["Zoom access on laptop or smartphone"],
    perks: ["Interview Preparation Checklist PDF", "Certificate of Attendance"],
    learningOutcomes: ["Increased interview confidence and structured communication"],
    eventDate: "22 Nov 2026",
    eventTime: "6:00 PM IST",
    location: "Online (Zoom / Meet)",
    isRemote: true,
    deadline: "21 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },

  // ==========================================
  // 6. TALENT SHOWCASE LISTING
  // ==========================================
  {
    id: "opp-talent-roster",
    title: "SS Student Talent Roster — Open Submissions",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Showcase your singing, dancing, comedy, beatboxing, poetry, or visual art to thousands of peers.",
    fullDescription: "Struggle of Student provides a dedicated stage for student creators. Submit your audio, video, or portfolio clips across 12 creative categories to get featured on SS official channels and live campus stages!",
    responsibilities: ["Submit your portfolio link", "Perform at SS live events when selected"],
    requirements: ["Must be an active student performer or visual artist"],
    perks: ["Platform visibility to thousands of students", "Stage performance invitations & SS Band gigs"],
    learningOutcomes: ["Stage exposure and audience reach"],
    duration: "Open All Year",
    workMode: "Hybrid / All Colleges",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    isSampleData: true,
    isFeatured: true
  },

  // ==========================================
  // 7. LEADERSHIP LISTINGS
  // ==========================================
  {
    id: "opp-lead-tech-lead",
    title: "Student Tech Team Lead",
    category: "Leadership",
    categorySlug: "leadership",
    formType: "standard",
    type: "Full-time",
    shortDescription: "Lead student developer squads, manage GitHub repositories, and direct open-source projects.",
    fullDescription: "Step into a leadership role directing student open-source software projects. Coordinate developer tasks, perform code reviews, and guide junior student contributors.",
    responsibilities: ["Architecture planning for student web applications", "Code reviews and mentorship for junior coders"],
    requirements: ["Strong experience in React, Node.js or Python", "Good leadership and organization skills"],
    perks: ["Leadership Certificate", "Direct mentorship from tech founders", "Featured tech profile"],
    learningOutcomes: ["Engineering team management experience"],
    duration: "6 Months",
    workMode: "Remote",
    location: "Remote",
    isRemote: true,
    deadline: "30 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },

  // ==========================================
  // 8. WORKSHOPS LISTINGS
  // ==========================================
  {
    id: "opp-ws-unmute",
    title: "Unmute Yourself — Public Speaking & Confidence Workshop",
    category: "Workshops",
    categorySlug: "workshops",
    formType: "standard",
    type: "Workshop",
    shortDescription: "Practical weekend workshop designed to overcome stage fear and master vocal projection.",
    fullDescription: "Based on our verified SS flagship workshop model, learn practical public speaking exercises, vocal modulation, and stage presence techniques.",
    responsibilities: ["Participate in live impromptu speech rounds"],
    requirements: ["Open to all students"],
    perks: ["Workshop Certificate", "Public Speaking Toolkit PDF"],
    learningOutcomes: ["Overcome stage anxiety and deliver compelling presentations"],
    duration: "1 Day Workshop",
    workMode: "On-site / Online",
    location: "Hyderabad & Online",
    isRemote: true,
    deadline: "20 Nov 2026",
    status: "Closing Soon",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },

  // ==========================================
  // 9. STUDENT PROJECTS LISTINGS
  // ==========================================
  {
    id: "opp-proj-student-app",
    title: "Open Source Student App Development",
    category: "Student Projects",
    categorySlug: "projects",
    formType: "standard",
    type: "Project",
    shortDescription: "Build a community mobile app utility for student notes, event tracking, and peer Q&A.",
    fullDescription: "Collaborate with student UI designers, React Native coders, and backend developers to build a real community app deployed on app stores.",
    responsibilities: ["Build app screens", "Integrate Firebase/REST API"],
    requirements: ["Basic React Native or Flutter or Web Dev knowledge"],
    perks: ["App Store credit attribution", "Project Completion Certificate"],
    learningOutcomes: ["End-to-end mobile app development lifecycle"],
    duration: "3 Months",
    workMode: "Remote",
    location: "Remote",
    isRemote: true,
    deadline: "10 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },

  // ==========================================
  // 10. COLLABORATIONS LISTINGS
  // ==========================================
  {
    id: "opp-collab-hackathon",
    title: "Inter-College Hackathon Collaboration",
    category: "Collaborations",
    categorySlug: "collaborations",
    formType: "standard",
    type: "Project",
    shortDescription: "Form cross-disciplinary student teams for upcoming national hackathons and innovation challenges.",
    fullDescription: "Find developer, designer, and pitching partners from other colleges to form competitive hackathon teams.",
    responsibilities: ["Build prototype hackathon projects", "Participate in pitch presentations"],
    requirements: ["Problem-solving mindset and teamwork"],
    perks: ["Hackathon prize sharing", "Inter-college team networking"],
    learningOutcomes: ["Rapid prototyping under hackathon deadlines"],
    duration: "Hackathon Weekend",
    workMode: "Hybrid",
    location: "Hyderabad & Remote",
    isRemote: true,
    deadline: "05 Dec 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },

  // ==========================================
  // 11. CAREER DEVELOPMENT LISTINGS
  // ==========================================
  {
    id: "opp-cd-resume-review",
    title: "Personalized Resume & LinkedIn Review Circle",
    category: "Career Development",
    categorySlug: "career-development",
    formType: "standard",
    type: "Workshop",
    shortDescription: "Get 1-on-1 feedback on your resume ATS score and LinkedIn profile optimization.",
    fullDescription: "Submit your resume for detailed line-by-line feedback from senior student leaders and recruiters.",
    responsibilities: ["Update resume based on review guidelines"],
    requirements: ["Draft resume in PDF format"],
    perks: ["ATS-friendly Resume Template", "Optimized LinkedIn Profile"],
    learningOutcomes: ["High-impact resume crafting that passes ATS filters"],
    duration: "1 Week Cycle",
    workMode: "Remote",
    location: "Remote",
    isRemote: true,
    deadline: "25 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },

  // ==========================================
  // 12. PERSONAL GROWTH LISTINGS
  // ==========================================
  {
    id: "opp-pg-habit-circle",
    title: "Student Growth & Habit Circle",
    category: "Personal Growth",
    categorySlug: "personal-growth",
    formType: "standard",
    type: "Session",
    shortDescription: "Weekly peer circle on time management, study consistency, and goal setting.",
    fullDescription: "Join a weekly 45-minute accountability group with fellow students to set weekly study goals, track habit streaks, and support each other.",
    responsibilities: ["Share weekly goals", "Participate in check-ins"],
    requirements: ["Commitment to weekly 45-min check-in"],
    perks: ["Growth streak badge", "Peer accountability network"],
    learningOutcomes: ["Improved discipline, time management, and focus"],
    duration: "Ongoing",
    workMode: "Remote",
    location: "Remote",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },

  // ==========================================
  // 13. CREATIVE & OTHER LISTINGS
  // ==========================================
  {
    id: "opp-other-art-walk",
    title: "Campus Photography Walk & Creative Meetup",
    category: "Creative & Other",
    categorySlug: "other",
    formType: "standard",
    type: "Project",
    shortDescription: "Weekend photo walk and creative visual art jam session for student photographers and sketch artists.",
    fullDescription: "Gather with fellow student photographers, digital artists, and writers for a weekend creative walk around iconic city landmarks.",
    responsibilities: ["Capture creative photos/sketches", "Share in post-walk exhibition gallery"],
    requirements: ["Camera or smartphone camera", "Enthusiasm for visual art"],
    perks: ["Feature in SS Visual Art Gallery", "Networking with student artists"],
    learningOutcomes: ["Creative inspiration and visual storytelling techniques"],
    duration: "Half Day",
    workMode: "On-site",
    location: "Hyderabad Landmarks",
    isRemote: false,
    deadline: "20 Nov 2026",
    status: "Open",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-singing",
    title: "Singing Showcase",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Showcase your singing abilities, including playback-style, classical, acoustic, indie, or devotional.",
    fullDescription: "Take the stage and let your voice be heard! We are looking for talented singers across all genres—playback, classical, acoustic, indie, and devotional. Whether you perform solo or in a group, this is your chance to shine in front of a massive student audience.",
    responsibilities: ["Perform live at SS campus events", "Submit your best vocal performance links for online featuring"],
    requirements: ["Passion for singing", "Willingness to perform on stage"],
    perks: ["Live campus gig opportunities", "Featured on SS social media"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-dancing",
    title: "Dancing Showcase",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Showcase your dance moves in classical, western, hip-hop, or contemporary styles.",
    fullDescription: "Bring your energy to the dance floor! We invite solo dancers and dance crews to showcase their talent in styles ranging from classical to hip-hop. Top performers get a chance to headline our annual events.",
    responsibilities: ["Choreograph and perform at SS events"],
    requirements: ["Any dance style", "Solo or group"],
    perks: ["Stage exposure", "Networking with other creative students"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-comedy",
    title: "Stand-up Comedy",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Bring the laughs with original comedy, observational humour, and storytelling.",
    fullDescription: "Got jokes? We are looking for the funniest students to perform stand-up comedy, observational humour, and hilarious storytelling. Perfect your set and make the crowd roar at our upcoming open mics and fests.",
    responsibilities: ["Perform 5-10 minute original comedy sets"],
    requirements: ["Original content", "Appropriate for student community"],
    perks: ["Open mic spots", "Audience feedback"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-anchoring",
    title: "Anchoring & Hosting",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Host and MC for massive student events and live online sessions.",
    fullDescription: "Be the voice of SS events! We need confident, energetic anchors and hosts for our upcoming live sessions, hackathons, and cultural fests. If you can command a crowd, this is for you.",
    responsibilities: ["Host live events", "Keep the audience engaged"],
    requirements: ["Strong public speaking skills", "Charisma and stage presence"],
    perks: ["Host high-profile events", "Build your public speaking portfolio"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-acting",
    title: "Acting & Drama",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Participate in skits, short films, and dramatic performances.",
    fullDescription: "Calling all actors! Whether you love stage acting, street plays (nukkad natak), or starring in short films, SS provides opportunities to act in student productions and live stage events.",
    responsibilities: ["Act in student plays and short films", "Attend rehearsals"],
    requirements: ["Acting skills", "Commitment to project timelines"],
    perks: ["Feature in SS media productions", "Stage acting experience"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-music",
    title: "Music & Instruments",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Play your favorite instruments solo or join the SS band.",
    fullDescription: "Are you a skilled instrumentalist? Play the guitar, keyboard, drums, or any other instrument? Join our talent roster to perform solo instrumentals or become part of the official SS student band.",
    responsibilities: ["Perform instrumental covers", "Collaborate with singers for live events"],
    requirements: ["Proficiency in at least one musical instrument"],
    perks: ["Opportunity to join SS Band", "Live performances"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-photography",
    title: "Photography & Videography",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Showcase your visual storytelling through stunning photos and videos.",
    fullDescription: "Capture the world through your lens! Submit your photography portfolios or short video projects. Top visual artists will get featured on SS channels and invited to cover major events as official media partners.",
    responsibilities: ["Submit high-quality photos/videos", "Cover SS events when invited"],
    requirements: ["DSLR or good smartphone camera skills", "Visual storytelling ability"],
    perks: ["Feature in SS galleries", "Official media passes for events"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-art",
    title: "Art, Design & Creative Work",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Display your sketches, digital art, paintings, and creative designs.",
    fullDescription: "Calling all visual artists! Whether you sketch, paint, create digital illustrations, or design graphics, submit your artwork to be featured in our virtual and physical student galleries.",
    responsibilities: ["Submit original artwork for galleries"],
    requirements: ["Original artwork only"],
    perks: ["Digital gallery features", "Merchandise design opportunities"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-writing",
    title: "Writing & Poetry",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Share your poems, short stories, spoken word, and creative writing.",
    fullDescription: "Express yourself through words. Submit your poems, spoken word pieces, essays, and short stories. Selected writers will be published on the SS blog and invited to perform at spoken word events.",
    responsibilities: ["Submit original written or spoken word pieces"],
    requirements: ["Strong creative writing skills", "Original content"],
    perks: ["Published on SS blog", "Spoken word stage opportunities"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  }

];
