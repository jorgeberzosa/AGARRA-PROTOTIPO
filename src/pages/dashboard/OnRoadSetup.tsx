import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Upload, CheckCircle2, Film, FileText, Globe } from 'lucide-react';

export default function OnRoadSetup() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-display font-bold text-[#F5F0EB]">
          {language === 'es' ? 'On Road Setup' : 'On Road Setup'}
        </h1>
        <p className="text-[#9A9590] mt-1">
          {language === 'es' ? 'Configuración inicial y preparación de título' : 'Initial setup and title preparation'}
        </p>
      </div>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-medium text-[#F5F0EB]">
            {language === 'es' ? 'Puntuación de Preparación' : 'Preparation Score'}
          </h2>
          <span className="text-xl font-bold text-[#C8A97E]">85%</span>
        </div>
        <div className="w-full bg-[#1A1A1A] rounded-full h-3">
          <div className="bg-gradient-to-r from-[#C8A97E]/60 to-[#C8A97E] h-3 rounded-full" style={{ width: '85%' }}></div>
        </div>
        <p className="text-sm text-[#9A9590] mt-3">
          {language === 'es' 
            ? '¡Casi listo! Faltan algunos materiales de prensa para completar el perfil.' 
            : 'Almost ready! Some press materials are missing to complete the profile.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Fields */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-4">
             <h3 className="text-lg font-bold text-[#F5F0EB] flex items-center gap-2">
               <Film size={20} className="text-[#C8A97E]" />
               {language === 'es' ? 'Metadatos de la Película' : 'Film Metadata'}
             </h3>
             <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-sm font-medium text-[#9A9590] mb-1">Título</label>
                  <input type="text" defaultValue="La Fortaleza" className="w-full bg-[#0A0A0A] border border-[#333] rounded-md px-4 py-2 text-[#F5F0EB] focus:outline-none focus:border-[#C8A97E]/50" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-[#9A9590] mb-1">Director</label>
                  <input type="text" defaultValue="Carlos Mendoza" className="w-full bg-[#0A0A0A] border border-[#333] rounded-md px-4 py-2 text-[#F5F0EB] focus:outline-none focus:border-[#C8A97E]/50" />
               </div>
               <div className="col-span-2">
                  <label className="block text-sm font-medium text-[#9A9590] mb-1">Sinopsis</label>
                  <textarea rows={3} defaultValue="Una profunda inmersión en..." className="w-full bg-[#0A0A0A] border border-[#333] rounded-md px-4 py-2 text-[#F5F0EB] focus:outline-none focus:border-[#C8A97E]/50"></textarea>
               </div>
             </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
             <h3 className="text-lg font-bold text-[#F5F0EB] flex items-center gap-2 mb-4">
               <Upload size={20} className="text-[#C8A97E]" />
               {language === 'es' ? 'Materiales y Assets' : 'Materials & Assets'}
             </h3>
             <div className="border-2 border-dashed border-[#333] rounded-lg p-8 text-center hover:bg-[#1A1A1A] transition-colors cursor-pointer">
               <Upload size={32} className="text-[#666] mx-auto mb-3" />
               <p className="text-[#F5F0EB] font-medium">Click para subir archivos</p>
               <p className="text-[#666] text-sm mt-1">Soporta MP4, JPG, PDF, SRT</p>
             </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 h-fit">
          <h3 className="text-lg font-bold text-[#F5F0EB] mb-4">
            {language === 'es' ? 'Checklist de Lanzamiento' : 'Launch Checklist'}
          </h3>
          <ul className="space-y-4">
            {[
              { text: 'Información Básica', done: true },
              { text: 'Póster Alta Resolución', done: true },
              { text: 'Trailer Oficial', done: true },
              { text: 'Subtítulos (ES/EN)', done: false },
              { text: 'Press Kit (EPK)', done: false },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 border-b border-[#262626] pb-3 last:border-0">
                <CheckCircle2 size={20} className={item.done ? "text-green-500" : "text-[#333]"} />
                <span className={item.done ? "text-[#E5E5E5]" : "text-[#9A9590]"}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
