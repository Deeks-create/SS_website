import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { SSLogo } from '../brand/SSLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Opportunities', path: '/opportunities' },
    { name: 'Events', path: '/events' },
    { name: 'Sessions', path: '/meetings' },
    { name: 'Services', path: '/services' },
    { name: 'Placements', path: '/placements' },
    { name: 'Team', path: '/team' },
    { name: 'Connect', path: '/connect' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-dark/98 backdrop-blur-xl border-b border-brand-border py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Left: SS Logo */}
        <Link to="/" className="group flex items-center focus:outline-none">
          <SSLogo variant="navbar" />
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] px-3 py-1.5 rounded-none">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-2 lg:px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-none relative ${
                isActive(link.path)
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red" />
              )}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden xl:flex items-center gap-3">
          <Link
            to="/admin"
            className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1.5 px-3 py-1.5 border border-transparent hover:border-white/10 transition"
            title="Admin Dashboard (Prototype)"
          >
            <ShieldCheck className="w-4 h-4 text-brand-red/60" />
            <span>Admin</span>
          </Link>
          <Link
            to="/join"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-brand-red/90 hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:-translate-y-px rounded-none"
          >
            <span>JOIN SS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-brand-dark/99 border-b border-brand-border shadow-2xl backdrop-blur-xl">
          <div className="px-5 py-6 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider border-l-2 transition-all ${
                  isActive(link.path)
                    ? 'border-brand-red text-white pl-5'
                    : 'border-transparent text-slate-400 hover:text-white hover:border-white/20 hover:pl-5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-brand-border space-y-3 mt-4">
              <Link
                to="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-red text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-brand-red/20 active:scale-[0.99]"
              >
                Join SS Community
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-brand-border text-slate-400 text-sm font-semibold"
              >
                <ShieldCheck className="w-4 h-4 text-brand-red/60" />
                Admin Dashboard Prototype
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
