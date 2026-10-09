import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Phone, MapPin, Heart, ArrowUpRight, Youtube, Twitter } from 'lucide-react';
import { SSLogo } from '../brand/SSLogo';
import { SITE_CONFIG } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-300 border-t border-brand-border/60 relative overflow-hidden">
      {/* Red accent line top edge */}
      <div className="h-1 bg-gradient-to-r from-brand-red via-red-500 to-brand-red"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <SSLogo variant="footer" />
            <p className="text-slate-400 text-sm max-w-md leading-relaxed mt-4">
              {SITE_CONFIG.hero.subtext}
            </p>
            <div className="pt-2">
              <span className="inline-block bg-brand-red/10 border border-brand-red/30 px-3 py-1 rounded-full text-xs font-bold text-brand-red uppercase tracking-wider">
                {SITE_CONFIG.taglines.secondary}
              </span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-brand-border/40 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link to="/" className="hover:text-brand-red transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-red transition">About SS</Link></li>
              <li><Link to="/opportunities" className="hover:text-brand-red transition">Opportunities</Link></li>
              <li><Link to="/events" className="hover:text-brand-red transition">Events & Workshops</Link></li>
              <li><Link to="/meetings" className="hover:text-brand-red transition">Online Sessions</Link></li>
              <li><Link to="/services" className="hover:text-brand-red transition">Services</Link></li>
            </ul>
          </div>

          {/* Col 4: Community & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-brand-border/40 pb-2">
              Get Involved
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link to="/join" className="hover:text-brand-red transition flex items-center gap-1 font-bold text-white">Join SS Community <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" /></Link></li>
              <li><Link to="/opportunities?cat=Campus%20Ambassador" className="hover:text-brand-red transition">Campus Ambassador</Link></li>
              <li><Link to="/team" className="hover:text-brand-red transition">Our Team (14 Active)</Link></li>
              <li><Link to="/placements" className="hover:text-brand-red transition">Student Placements</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition">Contact & Enquiries</Link></li>
              <li><Link to="/connect" className="text-cyan-400 hover:text-cyan-300 transition font-semibold">Connect With Us ↗</Link></li>
              <li><Link to="/admin" className="text-slate-500 hover:text-slate-300 transition text-xs">Admin Prototype Login</Link></li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-brand-border/40 pb-2">
              Connect With SS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>{SITE_CONFIG.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contactInfo.email}`} className="hover:text-white transition">
                  {SITE_CONFIG.contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.contactInfo.phone}`} className="hover:text-white transition">
                  {SITE_CONFIG.contactInfo.phone}
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-3">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all"
                aria-label="SS Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 transition-all"
                aria-label="SS WhatsApp Community"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 transition-all"
                aria-label="SS YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-500 transition-all"
                aria-label="SS Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <Link
              to="/connect"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-1"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              View all official links
            </Link>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-brand-border/40 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Struggle of Student (SS). All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with passion for students</span>
            <Heart className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
            <span>• Prototype Version 1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
