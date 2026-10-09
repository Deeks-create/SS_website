/**
 * Struggle of Student (SS) - Central Brand & Site Configuration
 * Verified facts are explicitly indicated. All demo placeholders can easily be replaced here.
 */

export const SITE_CONFIG = {
  name: "Struggle of Student",
  shortName: "SS",
  taglines: {
    primary: "YOUR TALENT • YOUR SKILLS • YOUR OPPORTUNITY",
    secondary: "DREAM • LEARN • GROW • TOGETHER",
    mainMessage: "More Than Just a Platform. It's a Student Community."
  },
  hero: {
    headline: "YOUR TALENT.\nYOUR SKILLS.\nYOUR OPPORTUNITY.",
    subtext: "Struggle of Student is a student community built to help students showcase, learn, connect and grow.",
    ribbon: "SHOWCASE • LEARN • CONNECT • GROW"
  },
  verifiedFacts: {
    founderName: "Chanti Nelathalli",
    founderRole: "Founder, Struggle of Student",
    activeTeamCount: 14,
    pastWorkshop: {
      title: "Unmute Yourself",
      date: "4 October 2026",
      time: "6:00 PM IST",
      location: "Hyderabad / Online Workshop",
      organizer: "Struggle of Student Group"
    }
  },
  /**
   * Official SS Social Media Links
   * Set a value to null if no official link has been provided yet.
   * Do NOT guess or fabricate URLs — leave null and the UI will handle it safely.
   */
  socialLinks: {
    // Legacy single whatsapp field kept for backward-compat with Footer icon
    instagram: "https://www.instagram.com/struggle.of.student?stkn=MWpjOXNmNG5kZmdmNg==",
    whatsapp: "https://whatsapp.com/channel/0029VbDGVdIJpe8hBlo7jK44",
    // Full official links
    whatsappCommunity: "https://whatsapp.com/channel/0029VbDGVdIJpe8hBlo7jK44",
    whatsappGroup: "https://chat.whatsapp.com/I9OSqm30mAM5wEnUhDN17Y",
    youtube: "https://m.youtube.com/%40struggleofstudents-o30?si=hhQWZQV8CW3QmNvI&fbclid=PAb21jcAUpiaRleHRuA2FlbQIxMQBwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABpwoLuDDd43nbKDfUlg6kycar_AHeuw2Yf7uM5RwQ3BinQd7ERyZ1q5rBf88-_aem_X4BB4KehHVXYKoD0iURC9Q",
    twitter: "https://x.com/Struggleofstdnt",
    facebook: null as string | null, // Official link not yet available
  },
  contactInfo: {
    address: "Hyderabad, Telangana, India",
    email: "contact@struggleofstudent.org",
    phone: "+91 98765 43210",
    hours: "Monday - Saturday: 9:00 AM - 7:00 PM IST"
  }
};
