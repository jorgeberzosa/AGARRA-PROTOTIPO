import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { Button } from './ui/button';

export const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('agarra_access') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // La contraseña por defecto es agarra2026
    if (password === 'agarra2026') {
      localStorage.setItem('agarra_access', 'true');
      setIsAuthenticated(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center font-body">
      <Lock className="text-[#C8A97E] w-12 h-12 mb-6" />
      <h1 className="text-3xl font-display font-bold text-[#F5F0EB] mb-2">Prototipo Privado</h1>
      <p className="text-[#9A9590] mb-8 max-w-sm">
        Esta plataforma está actualmente bloqueada para el público. Introduce la contraseña de acceso.
      </p>
      
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full bg-[#1A1A1A] border border-[#262626] rounded-md py-3 px-4 text-[#F5F0EB] placeholder-[#9A9590] focus:outline-none focus:border-[#C8A97E]/50 transition-all text-center"
        />
        {error && <p className="text-red-500 text-sm">Contraseña incorrecta</p>}
        <Button type="submit" className="w-full bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94]">
          Acceder al prototipo
        </Button>
      </form>
    </div>
  );
};
