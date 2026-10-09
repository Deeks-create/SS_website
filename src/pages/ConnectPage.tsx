import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Instagram,
  MessageCircle,
  Youtube,
  Twitter,
  Facebook,
  ChevronRight,
  ExternalLink,
  Users,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

// ─── types ──────────────────────────────────────────────────────────────────
interface SocialCard {
  platform: string;
  label: string;
  description: string;
  url: string | null;
  cta: string;
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
  badge?: string;
}

// ─── card data ───────────────────────────────────────────────────────────────
const buildCards = (links: typeof SITE_CONFIG.socialLinks): SocialCard[] => [
  {
    platform: 'WhatsApp Community',
    label: 'WhatsApp Community',
    description:
      'Join the official SS WhatsApp Channel for the latest news, opportunities, and announcements broadcast straight to you.',
    url: links.whatsappCommunity,
    cta: 'Join Community',
    icon: <MessageCircle className="w-7 h-7" />,
    gradient: 'from-emerald-500/20 via-emerald-600/10 to-transparent',
    glowColor: 'shadow-emerald-500/30',
    badge: 'Official Channel',
  },
  {
    platform: 'WhatsApp Group',
    label: 'WhatsApp Group',
    description:
      'Be part of our active student WhatsApp group where you can network, collaborate, and share ideas with peers.',
    url: links.whatsappGroup,
    cta: 'Join Group',
    icon: <Users className="w-7 h-7" />,
    gradient: 'from-green-500/20 via-green-600/10 to-transparent',
    glowColor: 'shadow-green-500/30',
    badge: 'Active Community',
  },
  {
    platform: 'Instagram',
    label: 'Instagram',
    description:
      'Follow us on Instagram for reels, event highlights, student stories, and behind-the-scenes content from SS.',
    url: links.instagram,
    cta: 'Follow Us',
    icon: <Instagram className="w-7 h-7" />,
    gradient: 'from-pink-500/20 via-purple-600/10 to-transparent',
    glowColor: 'shadow-pink-500/30',
  },
  {
    platform: 'YouTube',
    label: 'YouTube',
    description:
      'Subscribe to our YouTube channel for workshop recordings, student vlogs, success stories, and more.',
    url: links.youtube,
    cta: 'Subscribe',
    icon: <Youtube className="w-7 h-7" />,
    gradient: 'from-red-600/20 via-red-500/10 to-transparent',
    glowColor: 'shadow-red-500/30',
  },
  {
    platform: 'Twitter / X',
    label: 'Twitter / X',
    description:
      'Follow @Struggleofstdnt on X for quick updates, student tips, and community discussions.',
    url: links.twitter,
    cta: 'Follow on X',
    icon: <Twitter className="w-7 h-7" />,
    gradient: 'from-sky-500/20 via-sky-600/10 to-transparent',
    glowColor: 'shadow-sky-500/30',
  },
  {
    platform: 'Facebook',
    label: 'Facebook',
    description:
      'Official Facebook page coming soon. Stay tuned — we\'ll share the link here once it\'s ready.',
    url: links.facebook,
    cta: 'Coming Soon',
    icon: <Facebook className="w-7 h-7" />,
    gradient: 'from-blue-600/10 via-blue-700/5 to-transparent',
    glowColor: 'shadow-blue-500/10',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

// ─── component ───────────────────────────────────────────────────────────────
export const ConnectPage: React.FC = () => {
  const cards = buildCards(SITE_CONFIG.socialLinks);

  return (
    <div className="min-h-screen bg-brand-dark/50 text-slate-100 pt-24 pb-28 relative z-10 overflow-x-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-brand-red/12 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-60 right-0 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400 font-bold">Connect With Us</span>
        </nav>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-extrabold text-brand-red uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            OFFICIAL COMMUNITY CHANNELS
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
            CONNECT WITH{' '}
            <span className="text-brand-red drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              STRUGGLE OF STUDENT
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Join thousands of ambitious students on our official channels. Get the latest opportunities,
            event updates, workshop recordings, and community support — all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-300">
            <span className="px-3 py-1 rounded-full bg-black/70 border border-brand-border">🎯 Opportunities First</span>
            <span className="px-3 py-1 rounded-full bg-black/70 border border-brand-border">📢 Real-time Updates</span>
            <span className="px-3 py-1 rounded-full bg-black/70 border border-brand-border">🤝 Student Community</span>
          </div>
        </motion.div>

        {/* Social Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card) => {
            const isActive = !!card.url;

            const cardContent = (
              <motion.div
                variants={cardVariants}
                className={`group relative rounded-3xl border p-6 flex flex-col gap-4 h-full transition-all duration-300
                  ${isActive
                    ? `bg-gradient-to-br ${card.gradient} border-white/10 hover:border-white/25 hover:shadow-2xl ${card.glowColor} cursor-pointer`
                    : 'bg-white/[0.02] border-white/5 opacity-55 cursor-not-allowed'
                  }`}
              >
                {/* Badge */}
                {card.badge && isActive && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider">
                    {card.badge}
                  </span>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                  ${isActive ? 'bg-white/10 text-white group-hover:scale-110' : 'bg-white/5 text-slate-600'}
                  transition-transform duration-300`}>
                  {card.icon}
                </div>

                {/* Text */}
                <div className="flex-1 space-y-2">
                  <h2 className={`text-lg font-extrabold font-display ${isActive ? 'text-white' : 'text-slate-600'}`}>
                    {card.label}
                  </h2>
                  <p className={`text-sm leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                    {card.description}
                  </p>
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-2 text-sm font-bold mt-2
                  ${isActive ? 'text-white' : 'text-slate-600'}`}>
                  {isActive ? (
                    <>
                      <span>{card.cta}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  ) : (
                    <span className="text-slate-500 text-xs font-semibold italic">Link coming soon</span>
                  )}
                </div>
              </motion.div>
            );

            return isActive ? (
              <a
                key={card.platform}
                href={card.url!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${card.label} — ${card.cta} (opens in new tab)`}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-3xl block"
              >
                {cardContent}
              </a>
            ) : (
              <div key={card.platform} aria-label={`${card.label} — not yet available`}>
                {cardContent}
              </div>
            );
          })}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="p-8 rounded-3xl bg-gradient-to-r from-brand-red/15 via-brand-card/80 to-cyan-500/10 border border-brand-red/30 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-extrabold text-white font-display uppercase">
              Ready to be part of something bigger?
            </h3>
            <p className="text-sm text-slate-400">
              Join the SS community and start your journey of growth, talent, and opportunity.
            </p>
          </div>
          <Link
            to="/join"
            className="shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-red hover:bg-red-700 text-white font-extrabold text-sm tracking-wider transition-colors shadow-xl shadow-brand-red/30"
          >
            <span>JOIN SS NOW</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

