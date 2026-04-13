import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './lib/LanguageContext';
import { AuthProvider } from './lib/AuthContext';
import './lib/i18n';
import AuthPage from './pages/Auth';
import Index from './pages/Index';
import Explore from './pages/Explore';
import FilmDetail from './pages/FilmDetail';
import Pass from './pages/Pass';
import Journal from './pages/Journal';
import Creators from './pages/Creators';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import Cockpit from './pages/dashboard/Cockpit';
import OnRoadSetup from './pages/dashboard/OnRoadSetup';
import MediaLibrary from './pages/dashboard/MediaLibrary';
import CampaignManager from './pages/dashboard/CampaignManager';
import EventManager from './pages/dashboard/EventManager';
import AudienceCRM from './pages/dashboard/AudienceCRM';
import { PasswordGate } from './components/PasswordGate';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AuthProvider>
        <TooltipProvider>
        <PasswordGate>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/film/:id" element={<FilmDetail />} />
              <Route path="/pass" element={<Pass />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/creators" element={<Creators />} />
              <Route path="/creators/dashboard" element={<DashboardLayout />}>
                <Route index element={<Cockpit />} />
                <Route path="setup" element={<OnRoadSetup />} />
                <Route path="media" element={<MediaLibrary />} />
                <Route path="campaign" element={<CampaignManager />} />
                <Route path="events" element={<EventManager />} />
                <Route path="audience" element={<AudienceCRM />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PasswordGate>
        </TooltipProvider>
      </AuthProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;