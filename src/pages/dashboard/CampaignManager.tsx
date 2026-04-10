import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Network, PenTool, Calendar as CalendarIcon, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CampaignManager() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold text-[#F5F0EB] flex items-center gap-3">
             ALTAVOZ: <span className="text-[#C8A97E]">Campaign Engine</span>
          </h1>
          <p className="text-[#9A9590] mt-1">
            {language === 'es' ? 'Motor de campaña y generación de assets' : 'Campaign engine and asset generation'}
          </p>
        </div>
        <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94]">
          {language === 'es' ? 'Nueva Campaña' : 'New Campaign'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Generative Engine */}
        <div className="lg:col-span-2 bg-[#141414] border border-[#262626] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-xl font-bold text-[#F5F0EB] flex items-center gap-2">
                <PenTool size={20} className="text-[#C8A97E]" />
                {language === 'es' ? 'Generador de Copys (Fase Lanzamiento)' : 'Copy Generator (Launch Phase)'}
             </h2>
             <span className="bg-[#1A1A1A] text-[#C8A97E] text-xs px-2 py-1 rounded">Beta</span>
          </div>

          <div className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-sm font-medium text-[#9A9590] mb-1">Tono</label>
                  <select className="w-full bg-[#0A0A0A] border border-[#333] rounded-md px-4 py-2 text-[#F5F0EB] appearance-none">
                     <option>Inspiracional / Emotivo</option>
                     <option>Directo / Promocional</option>
                     <option>Misterioso</option>
                  </select>
               </div>
               <div>
                  <label className="block text-sm font-medium text-[#9A9590] mb-1">Canal</label>
                  <select className="w-full bg-[#0A0A0A] border border-[#333] rounded-md px-4 py-2 text-[#F5F0EB] appearance-none">
                     <option>Instagram Caption</option>
                     <option>Email Subject Line</option>
                     <option>WhatsApp Direct</option>
                  </select>
               </div>
             </div>

             <Button className="w-full bg-[#1A1A1A] text-[#F5F0EB] hover:bg-[#262626] border border-[#333]">
               Generate / Regenerate
             </Button>

             <div className="bg-[#0A0A0A] border border-[#333] rounded-md p-4 mt-4 relative">
                 <p className="text-[#E5E5E5] text-sm leading-relaxed">
                   "Una inmersión profunda que no te dejará indiferente. 🎬 Acompáñanos este viernes en la premiere oficial de [Título]. Charlaremos en vivo con el director y descubriremos los secretos detrás de cámara. Asegura tu acceso anticipado ahora: [Link]"
                 </p>
                 <div className="absolute top-2 right-2 flex gap-2">
                   <button className="p-1.5 bg-[#1A1A1A] hover:bg-[#262626] rounded text-[#9A9590] transition-colors"><MessageSquare size={14}/></button>
                   <button className="p-1.5 bg-[#1A1A1A] hover:bg-[#262626] rounded text-[#9A9590] transition-colors"><Send size={14}/></button>
                 </div>
             </div>
          </div>
        </div>

        {/* Phase Organizer */}
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
           <h3 className="text-lg font-bold text-[#F5F0EB] flex items-center gap-2 mb-4">
              <Network size={20} className="text-[#C8A97E]" />
              {language === 'es' ? 'Secuencia de Campaña' : 'Campaign Sequence'}
           </h3>
           
           <div className="relative border-l border-[#333] ml-3 space-y-6">
              {[
                  { phase: 'Pre-launch', status: 'done', date: 'Oct 12' },
                  { phase: 'Convocatoria Oficial', status: 'current', date: 'Oct 15' },
                  { phase: 'Reminder (72h)', status: 'pending', date: 'Oct 21' },
                  { phase: 'Last Call', status: 'pending', date: 'Oct 24' },
                  { phase: 'Post-event Reactivation', status: 'pending', date: 'Oct 26' }
              ].map((step, i) => (
                  <div key={i} className="pl-6 relative">
                     <div className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-[#141414] ${
                        step.status === 'done' ? 'bg-green-500' : step.status === 'current' ? 'bg-[#C8A97E]' : 'bg-[#333]'
                     }`}></div>
                     <h4 className={`text-sm font-medium ${step.status === 'pending' ? 'text-[#666]' : 'text-[#F5F0EB]'}`}>{step.phase}</h4>
                     <p className="text-xs text-[#666] mt-0.5"><CalendarIcon size={10} className="inline mr-1" />{step.date}</p>
                  </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
