import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';
import {
  LayoutDashboard,
  Settings,
  Image,
  Megaphone,
  CalendarDays,
  Users,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { id: 'cockpit', path: '/creators/dashboard', icon: LayoutDashboard, en: 'Cockpit', es: 'Cockpit' },
  { id: 'setup', path: '/creators/dashboard/setup', icon: Settings, en: 'On Road Setup', es: 'On Road Setup' },
  { id: 'media', path: '/creators/dashboard/media', icon: Image, en: 'Media Library', es: 'Media Library' },
  { id: 'campaign', path: '/creators/dashboard/campaign', icon: Megaphone, en: 'ALTAVOZ', es: 'ALTAVOZ' },
  { id: 'events', path: '/creators/dashboard/events', icon: CalendarDays, en: 'Event Manager', es: 'Gestor de Eventos' },
  { id: 'audience', path: '/creators/dashboard/audience', icon: Users, en: 'Audience CRM', es: 'CRM Audiencia' },
];

export default function DashboardLayout() {
  const { language } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-[#0A0A0A] text-[#F5F0EB]">
      
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 w-full z-30 flex items-center justify-between p-4 border-b border-[#262626] bg-[#0E0E0E]">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="AGARRA Logo" className="h-6 w-auto" />
        </Link>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#C8A97E]">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-50 flex flex-col w-64 bg-[#0E0E0E] border-r border-[#262626] transform transition-transform duration-300 ease-in-out shrink-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full overflow-y-auto p-4">
          <div className="mb-8 px-4 py-2 mt-2 md:mt-0">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="AGARRA Logo" className="h-8 w-auto" />
            </Link>
            <div className="text-xs text-[#C8A97E] uppercase tracking-wider mt-1 font-medium">Creators OS</div>
          </div>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/creators/dashboard' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200
                    ${isActive 
                      ? 'bg-[#1A1A1A] text-[#C8A97E] border border-[#C8A97E]/30' 
                      : 'text-[#9A9590] hover:bg-[#141414] hover:text-[#F5F0EB]'
                    }
                  `}
                >
                  <item.icon size={20} className={isActive ? "text-[#C8A97E]" : "text-[#9A9590]"} />
                  <span className="font-medium text-sm">
                    {language === 'es' ? item.es : item.en}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#262626] mt-4">
            <Link 
              to="/creators"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-[#9A9590] hover:bg-[#141414] hover:text-[#F5F0EB] transition-all duration-200"
            >
              <LogOut size={20} />
              <span className="font-medium text-sm">
                {language === 'es' ? 'Salir del OS' : 'Exit OS'}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-[#0A0A0A] pt-16 md:pt-0">
        <div className="flex-1 p-6 md:p-10 w-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
