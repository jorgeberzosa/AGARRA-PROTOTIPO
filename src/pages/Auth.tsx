import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/AuthContext';
import { toast } from 'sonner';
import { Film, User, Lock, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // We'll set this up next

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();
  // Temporarily fallback to simple english/spanish strings until i18n is setup fully
  // The plan covers setting up i18n
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const success = await login(email, password);
      if (success) {
        toast.success(t('auth.login_success', 'Sesión iniciada con éxito'));
        navigate('/');
      } else {
        toast.error(t('auth.login_error', 'Email o contraseña incorrectos'));
      }
    } else {
      if (!name || !email || !password) {
        toast.error(t('auth.missing_fields', 'Por favor llena todos los campos'));
        return;
      }
      const success = await register(name, email, password);
      if (success) {
        toast.success(t('auth.register_success', 'Cuenta creada con éxito'));
        navigate('/');
      } else {
        toast.error(t('auth.register_error', 'El email ya está en uso'));
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#C8A97E] blur-[150px] opacity-10 rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#1A1A1A] blur-[150px] opacity-30 rounded-full" />
      </div>

      <div className="w-full max-w-md bg-[#141414] border border-[#262626] rounded-2xl p-8 relative z-10 shadow-2xl">
        <div className="flex justify-center mb-8">
          <div className="bg-[#C8A97E]/10 p-3 rounded-full border border-[#C8A97E]/20">
            <Film size={32} className="text-[#C8A97E]" />
          </div>
        </div>

        <h2 className="font-display text-3xl font-bold text-center text-[#F5F0EB] mb-2">
          {isLogin ? t('auth.login_title', 'Bienvenido de nuevo') : t('auth.register_title', 'Crea tu Pasaporte')}
        </h2>
        <p className="text-sm text-[#9A9590] text-center mb-8">
          {isLogin 
            ? t('auth.login_desc', 'Ingresa tus credenciales para continuar') 
            : t('auth.register_desc', 'Únete al ecosistema de cine independiente')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-sm font-medium text-[#F5F0EB]">{t('auth.name_label', 'Nombre Completo')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User size={16} className="text-[#9A9590]" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-[#262626] text-[#F5F0EB] text-sm rounded-lg focus:ring-[#C8A97E] focus:border-[#C8A97E] block pl-10 p-3 transition-colors"
                  placeholder="Ej. María García"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-sm font-medium text-[#F5F0EB]">{t('auth.email_label', 'Correo Electrónico')}</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail size={16} className="text-[#9A9590]" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#262626] text-[#F5F0EB] text-sm rounded-lg focus:ring-[#C8A97E] focus:border-[#C8A97E] block pl-10 p-3 transition-colors"
                placeholder="nombre@ejemplo.com"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-[#F5F0EB]">{t('auth.password_label', 'Contraseña')}</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock size={16} className="text-[#9A9590]" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#262626] text-[#F5F0EB] text-sm rounded-lg focus:ring-[#C8A97E] focus:border-[#C8A97E] block pl-10 p-3 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium py-6 text-base mt-4 rounded-xl">
            {isLogin ? t('auth.login_btn', 'Ingresar') : t('auth.register_btn', 'Registrarse')}
          </Button>
        </form>

        <div className="mt-8 text-center border-t border-[#262626] pt-6">
          <p className="text-sm text-[#9A9590]">
            {isLogin ? t('auth.no_account', '¿No tienes cuenta?') : t('auth.has_account', '¿Ya tienes cuenta?')}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setName('');
                setEmail('');
                setPassword('');
              }}
              className="ml-2 font-medium text-[#C8A97E] hover:text-[#D4BA94] transition-colors"
            >
              {isLogin ? t('auth.register_link', 'Regístrate aquí') : t('auth.login_link', 'Inicia sesión')}
            </button>
          </p>
        </div>
      </div>
      
      {/* Quick link back home */}
      <button 
        onClick={() => navigate('/')} 
        className="mt-8 text-sm text-[#9A9590] hover:text-[#F5F0EB] transition-colors bg-[#141414] px-4 py-2 border border-[#262626] rounded-full z-10"
      >
        {t('auth.back', 'Volver al Inicio')}
      </button>

      {/* Demo Credentials Hint */}
      <div className="mt-6 bg-[#1A1A1A] p-4 border border-[#262626] rounded-xl text-xs text-[#9A9590] max-w-md w-full z-10 text-center">
        <strong className="text-[#C8A97E] block mb-2">Credenciales Demo:</strong>
        <p>admin@demo.com / pass@demo.com / creators@demo.com</p>
        <p className="mt-1 opacity-70">Pass: password</p>
      </div>
    </div>
  );
}
