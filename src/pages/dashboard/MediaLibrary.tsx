import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Image as ImageIcon, Video, Folder, MoreHorizontal, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MediaLibrary() {
  const { language } = useLanguage();

  const assets = [
    { id: 1, name: 'Main_Poster_2026.jpg', type: 'image', category: 'Poster', size: '2.4 MB', approved: true },
    { id: 2, name: 'Trailer_Subbed_1080p.mp4', type: 'video', category: 'Trailer', size: '145 MB', approved: true },
    { id: 3, name: 'Reel_Vertical_TikTok.mp4', type: 'video', category: 'Social', size: '12 MB', approved: true },
    { id: 4, name: 'Director_Interview_Raw.mov', type: 'video', category: 'B-Roll', size: '1.2 GB', approved: false },
    { id: 5, name: 'Press_Kit_FINAL.pdf', type: 'doc', category: 'EPK', size: '4.1 MB', approved: true },
    { id: 6, name: 'Still_Hero_Banner.jpg', type: 'image', category: 'Still', size: '3.2 MB', approved: true },
  ];

  const getIcon = (type: string) => {
    if (type === 'video') return <Video size={24} className="text-blue-400" />;
    if (type === 'image') return <ImageIcon size={24} className="text-purple-400" />;
    return <Folder size={24} className="text-yellow-400" />;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold text-[#F5F0EB]">
            {language === 'es' ? 'Librería de Medios' : 'Media Library'}
          </h1>
          <p className="text-[#9A9590] mt-1">
            {language === 'es' ? 'Gestión centralizada de assets' : 'Centralized asset management'}
          </p>
        </div>
        <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94]">
          {language === 'es' ? 'Subir Material' : 'Upload Assets'}
        </Button>
      </div>

      <div className="flex gap-4 border-b border-[#262626] pb-4">
        {['Todo', 'Imágenes', 'Videos', 'Documentos', 'Aprobados'].map((tab, i) => (
          <button 
            key={i} 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              i === 0 ? 'bg-[#1A1A1A] text-[#F5F0EB] border border-[#333]' : 'text-[#9A9590] hover:text-[#F5F0EB]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {assets.map((asset) => (
          <div key={asset.id} className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden group hover:border-[#C8A97E]/30 transition-all">
            <div className="h-40 bg-[#0E0E0E] flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20 bg-center bg-cover" 
                style={asset.type === 'image' ? { backgroundImage: 'url(https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800)' } : {}}
              ></div>
              <div className="relative z-10 p-4 rounded-full bg-[#1A1A1A]/80 shadow-lg">
                {getIcon(asset.type)}
              </div>
              {asset.approved && (
                <div className="absolute top-3 left-3 bg-green-500/20 text-green-500 text-xs px-2 py-1 rounded font-medium border border-green-500/20">
                  Approved
                </div>
              )}
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-[#F5F0EB] text-sm font-medium truncate pr-2" title={asset.name}>
                  {asset.name}
                </h3>
                <button className="text-[#666] hover:text-[#F5F0EB]">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="flex justify-between items-center text-xs text-[#666]">
                <span className="bg-[#1A1A1A] px-2 py-1 rounded">{asset.category}</span>
                <span>{asset.size}</span>
              </div>
              
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Button variant="outline" className="w-full text-xs h-8 border-[#C8A97E]/30 text-[#C8A97E] hover:bg-[#C8A97E]/10 bg-transparent flex items-center justify-center gap-2">
                    <Megaphone size={14} />
                    {language === 'es' ? 'Usar en Campaña' : 'Use in Campaign'}
                 </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
