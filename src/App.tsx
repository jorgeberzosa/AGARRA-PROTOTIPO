import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './lib/LanguageContext';
import Index from './pages/Index';
import Explore from './pages/Explore';
import FilmDetail from './pages/FilmDetail';
import Pass from './pages/Pass';
import Journal from './pages/Journal';
import Creators from './pages/Creators';
import { PasswordGate } from './components/PasswordGate';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <PasswordGate>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/film/:id" element={<FilmDetail />} />
              <Route path="/pass" element={<Pass />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/creators" element={<Creators />} />
            </Routes>
          </BrowserRouter>
        </PasswordGate>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;