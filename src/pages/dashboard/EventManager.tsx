import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Calendar, Video, Clock, Users, PlusCircle, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EventManager() {
  const { language } = useLanguage();

  const events = [
    { 
      id: 1, 
      title: 'Premiere Online + Q&A Director', 
      type: 'Live Screening', 
      date: 'Viernes, 24 Abril 2026', 
      time: '20:00h CET',
      registered: 180,
      capacity: 250,
      status: 'upcoming' 
    },
    { 
      id: 2, 
      title: 'Charla Temática: Cine Documental', 
      type: 'Panel', 
      date: 'Martes, 12 Mayo 2026', 
      time: '18:30h CET',
      registered: 45,
      capacity: 100,
      status: 'draft' 
    },
    { 
      id: 3, 
      title: 'Visionado Especial Sponsors', 
      type: 'Private Screening', 
      date: 'Miércoles, 10 Marzo 2026', 
      time: '19:00h CET',
      registered: 50,
      capacity: 50,
      status: 'past' 
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold text-[#F5F0EB]">
            {language === 'es' ? 'Gestor de Eventos' : 'Event Manager'}
          </h1>
          <p className="text-[#9A9590] mt-1">
            {language === 'es' ? 'Planificación y check-in digital' : 'Scheduling and digital check-in'}
          </p>
        </div>
        <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] flex items-center gap-2">
          <PlusCircle size={18} />
          {language === 'es' ? 'Crear Evento' : 'Create Event'}
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <div className="xl:col-span-2 space-y-4">
            {events.map((evt) => (
               <div key={evt.id} className="bg-[#141414] border border-[#262626] rounded-xl p-5 hover:border-[#C8A97E]/30 transition-all flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                  <div>
                     <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                           evt.status === 'upcoming' ? 'bg-[#C8A97E]/10 text-[#C8A97E] border border-[#C8A97E]/20' :
                           evt.status === 'draft' ? 'bg-[#333]/50 text-[#9A9590] border border-[#333]' :
                           'bg-[#1A1A1A] text-[#666] border border-[#262626]'
                        }`}>
                           {evt.status}
                        </span>
                        <span className="text-xs text-[#9A9590] flex items-center gap-1"><Video size={12}/> {evt.type}</span>
                     </div>
                     <h3 className="text-lg font-bold text-[#F5F0EB]">{evt.title}</h3>
                     <div className="flex items-center gap-4 mt-2 text-sm text-[#9A9590]">
                        <span className="flex items-center gap-1"><Calendar size={14} className="text-[#C8A97E]" /> {evt.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14} className="text-[#C8A97E]" /> {evt.time}</span>
                     </div>
                  </div>

                  <div className="flex items-center gap-6 w-full md:w-auto">
                     <div className="text-right">
                        <div className="text-sm font-medium text-[#F5F0EB] flex items-center gap-1.5 justify-end">
                           <Users size={14} /> {evt.registered} / {evt.capacity}
                        </div>
                        <div className="text-xs text-[#666] mt-0.5">Registrados</div>
                     </div>
                     
                     <div className="flex gap-2">
                        <Button variant="outline" className="h-9 px-3 border-[#333] text-[#9A9590] hover:text-[#F5F0EB] hover:bg-[#1A1A1A]">
                           <Settings size={16} />
                        </Button>
                        {evt.status === 'upcoming' && (
                           <Button className="h-9 bg-[#1A1A1A] text-[#C8A97E] border border-[#C8A97E]/30 hover:bg-[#C8A97E]/10">
                              Check-in
                           </Button>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Check-in Simulator widget */}
         <div className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#C8A97E]/20 rounded-xl p-6 h-fit relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-[#C8A97E]/5">
               <LogOut size={120} />
            </div>
            <div className="relative z-10">
               <h3 className="text-xl font-bold text-[#F5F0EB] mb-2">{language === 'es' ? 'Sistema Check-in' : 'Check-in System'}</h3>
               <p className="text-sm text-[#9A9590] mb-6">Valida el acceso presencial u online de tu audiencia escaneando QRs o códigos manuales.</p>
               
               <div className="bg-[#000] p-6 rounded-lg border border-[#333] text-center mb-6 border-dashed">
                  <div className="w-full aspect-square max-w-[120px] mx-auto bg-[#1A1A1A] rounded-md flex items-center justify-center">
                     <span className="text-[#333] text-sm">QR Scanner<br/>(Simulated)</span>
                  </div>
               </div>

               <div className="space-y-3">
                  <input type="text" placeholder="Código de ticket manual..." className="w-full bg-[#1A1A1A] border border-[#333] rounded-md px-4 py-2 text-[#F5F0EB] text-sm focus:outline-none focus:border-[#C8A97E]/50" />
                  <Button className="w-full bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94]">
                     Validar Acceso
                  </Button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
