import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Activity, ArrowUpRight, Users, PlayCircle, MousePointerClick, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Cockpit() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-[#F5F0EB]">
            {language === 'es' ? 'Cockpit' : 'Cockpit'}
          </h1>
          <p className="text-[#9A9590] mt-1">
            {language === 'es' ? 'Resumen operativo mensual' : 'Monthly operational overview'}
          </p>
        </div>
        
        {/* Traffic Light UI */}
        <div className="flex items-center gap-3 bg-[#141414] border border-[#262626] rounded-full px-4 py-2">
          <span className="text-sm text-[#9A9590] font-medium mr-2">Status</span>
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <span className="text-sm text-green-500 font-medium">
            {language === 'es' ? 'Canal Activo' : 'Active Channel'}
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: language === 'es' ? 'Impresiones' : 'Impressions', value: '24.5K', change: '+12%', icon: Activity },
          { title: language === 'es' ? 'Clics Landing' : 'Landing Clicks', value: '3,240', change: '+5.4%', icon: MousePointerClick },
          { title: language === 'es' ? 'Registros' : 'Registrations', value: '452', change: '+18%', icon: Users },
          { title: language === 'es' ? 'Asistentes (Prom.)' : 'Attendees (Avg)', value: '310', change: '+2%', icon: PlayCircle },
        ].map((metric, i) => (
          <div key={i} className="bg-[#141414] border border-[#262626] rounded-xl p-5 hover:border-[#C8A97E]/30 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#9A9590] text-sm font-medium">{metric.title}</p>
                <h3 className="text-2xl font-bold text-[#F5F0EB] mt-1">{metric.value}</h3>
              </div>
              <div className="p-2 bg-[#1A1A1A] rounded-lg">
                <metric.icon size={20} className="text-[#C8A97E]" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <ArrowUpRight size={16} className="text-green-500 mr-1" />
              <span className="text-green-500 font-medium">{metric.change}</span>
              <span className="text-[#9A9590] ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Next Event Card */}
        <div className="lg:col-span-2 bg-[#141414] border border-[#262626] rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8A97E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C8A97E]/10 border border-[#C8A97E]/20 text-[#C8A97E] text-xs font-semibold px-2 py-1 rounded mb-4">
                <Calendar size={12} />
                {language === 'es' ? 'PRÓXIMO EVENTO' : 'NEXT EVENT'}
              </div>
              <h2 className="text-2xl font-bold text-[#F5F0EB]">Q&A Director - Premiere Online</h2>
              <p className="text-[#9A9590] mt-2">Viernes, 24 de Abril • 20:00h (CET)</p>
            </div>
            <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94]">
              {language === 'es' ? 'Gestionar Evento' : 'Manage Event'}
            </Button>
          </div>
          
          <div className="mt-8 relative z-10">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-[#9A9590]">{language === 'es' ? 'Meta Registros: 250' : 'Registration Goal: 250'}</span>
              <span className="text-[#C8A97E] font-medium">180 / 250 (72%)</span>
            </div>
            <div className="w-full bg-[#1A1A1A] rounded-full h-2">
              <div className="bg-[#C8A97E] h-2 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#F5F0EB] mb-4">
            {language === 'es' ? 'Tareas Pendientes' : 'Pending Tasks'}
          </h3>
          <ul className="space-y-4">
            {[
              { text: language === 'es' ? 'Aprobar copy campaña email' : 'Approve email campaign copy', done: false },
              { text: language === 'es' ? 'Subir vertical trailer' : 'Upload vertical trailer', done: true },
              { text: language === 'es' ? 'Confirmar moderador Q&A' : 'Confirm Q&A moderator', done: false },
            ].map((task, i) => (
              <li key={i} className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  checked={task.done} 
                  readOnly 
                  className="mt-1 w-4 h-4 rounded border-[#333] bg-[#1A1A1A] text-[#C8A97E] focus:ring-[#C8A97E]/30"
                />
                <span className={`text-sm ${task.done ? 'text-[#666] line-through' : 'text-[#E5E5E5]'}`}>
                  {task.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
