import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { EventsPage } from './pages/EventsPage';
import { MeetingsPage } from './pages/MeetingsPage';
import { ServicesPage } from './pages/ServicesPage';
import { PlacementsPage } from './pages/PlacementsPage';
import { TeamPage } from './pages/TeamPage';
import { JoinPage } from './pages/JoinPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { ConnectPage } from './pages/ConnectPage';
import { SSEnergyCanvas } from './components/ui/SSEnergyCanvas';
import { SSChatbot } from './components/chatbot/SSChatbot';
import { initStorage } from './services/storage';

// Helper component to scroll window to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize mock data storage
    initStorage();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col font-sans selection:bg-brand-red selection:text-white relative">
        {/* Global Persistent SS Energy Canvas */}
        <SSEnergyCanvas />

        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/opportunities/detail/:id" element={<OpportunitiesPage />} />
            <Route path="/opportunities/:categorySlug" element={<OpportunitiesPage />} />
            <Route path="/events" element={<EventsPage />} />

            <Route path="/meetings" element={<MeetingsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        <Footer />

        {/* SS Community Assistant — Floating Chatbot (persists across all routes) */}
        <SSChatbot />
      </div>
    </Router>
  );
};

export default App;
