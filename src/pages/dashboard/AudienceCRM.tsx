import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Users, Filter, Download, Mail, PieChart, TrendingUp, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AudienceCRM() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold text-[#F5F0EB]">CRM & Analytics</h1>
          <p className="text-[#9A9590] mt-1">
            {language === 'es' ? 'Gestión de comunidad y tracking en capas' : 'Community management and layered tracking'}
          </p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="border-[#333] text-[#F5F0EB] hover:bg-[#1A1A1A]">
             <Download size={16} className="mr-2" /> Exportar
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Stats Cards */}
         <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 flex items-center gap-4">
            <div className="p-3 bg-[#C8A97E]/10 text-[#C8A97E] rounded-lg"><Users size={24} /></div>
            <div>
               <p className="text-sm text-[#9A9590]">Total Comunidad</p>
               <h3 className="text-2xl font-bold text-[#F5F0EB]">1,248</h3>
            </div>
         </div>
         <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 flex items-center gap-4">
            <div className="p-3 bg-green-500/10 text-green-500 rounded-lg"><TrendingUp size={24} /></div>
            <div>
               <p className="text-sm text-[#9A9590]">Tasa de Asistencia</p>
               <h3 className="text-2xl font-bold text-[#F5F0EB]">68.4%</h3>
            </div>
         </div>
         <div className="bg-[#141414] border border-[#262626] rounded-xl p-5 flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg"><PieChart size={24} /></div>
            <div>
               <p className="text-sm text-[#9A9590]">Tropa Repetidora</p>
               <h3 className="text-2xl font-bold text-[#F5F0EB]">214 <span className="text-xs text-[#666] font-normal">(VIP)</span></h3>
            </div>
         </div>
      </div>

      {/* User Table Simulator */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
         <div className="p-5 border-b border-[#262626] flex flex-wrap gap-4 justify-between items-center">
            <div className="relative">
               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666]" />
               <input 
                  type="text" 
                  placeholder={language === 'es' ? "Buscar perfil..." : "Search profile..."}
                  className="pl-9 pr-4 py-2 bg-[#0A0A0A] border border-[#333] rounded-md text-sm text-[#F5F0EB] focus:outline-none focus:border-[#C8A97E]/50 w-64"
               />
            </div>
            <div className="flex gap-2">
               <Button variant="outline" className="h-9 px-3 border-[#333] text-[#9A9590] hover:text-[#F5F0EB] hover:bg-[#1A1A1A] text-xs flex items-center gap-2">
                  <Filter size={14} /> Segmentar
               </Button>
               <Button className="h-9 px-4 bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] text-xs flex items-center gap-2">
                  <Mail size={14} /> Enviar Mensaje
               </Button>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-[#9A9590]">
               <thead className="bg-[#0A0A0A]/50 border-b border-[#262626] text-xs uppercase">
                  <tr>
                     <th className="px-6 py-3 font-medium">Usuario / Email</th>
                     <th className="px-6 py-3 font-medium">Estado</th>
                     <th className="px-6 py-3 font-medium">Eventos</th>
                     <th className="px-6 py-3 font-medium">Orígen</th>
                     <th className="px-6 py-3 font-medium text-right">Opt-in</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-[#262626]">
                  {[
                     { name: 'Diana Ramírez', email: 'diana.r@example.com', status: 'VIP Repeater', events: 3, source: 'IG Story', optin: true },
                     { name: 'Carlos Bernal', email: 'carlos.b77@example.com', status: 'Attendee', events: 1, source: 'Newsletter', optin: true },
                     { name: 'Sofía L.', email: 'sofiloor@example.com', status: 'Registered (No Show)', events: 0, source: 'Direct Link', optin: false },
                     { name: 'Juan Pedro M.', email: 'jp.mendoza@example.com', status: 'Attendee', events: 1, source: 'Word of Mouth', optin: true },
                  ].map((user, i) => (
                     <tr key={i} className="hover:bg-[#1A1A1A] transition-colors">
                        <td className="px-6 py-4">
                           <div className="font-medium text-[#F5F0EB]">{user.name}</div>
                           <div className="text-xs">{user.email}</div>
                        </td>
                        <td className="px-6 py-4">
                           <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                              user.status.includes('VIP') ? 'bg-[#C8A97E]/10 text-[#C8A97E] border-[#C8A97E]/20' :
                              user.status.includes('No Show') ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                              'bg-green-500/10 text-green-400 border-green-500/20'
                           }`}>
                              {user.status}
                           </span>
                        </td>
                        <td className="px-6 py-4">{user.events} asistidos</td>
                        <td className="px-6 py-4 text-xs">{user.source}</td>
                        <td className="px-6 py-4 text-right">
                           {user.optin ? <span className="text-green-500 text-xs font-medium">Verificado</span> : <span className="text-[#666] text-xs">Pendiente</span>}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
