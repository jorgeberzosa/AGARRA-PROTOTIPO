import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  Gift,
  BarChart3,
  MessageCircle,
  Film,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Zap,
  Globe,
} from "lucide-react";
import { Navbar, Footer, SectionHeader } from "@/components/shared";
import { IMAGES } from "@/lib/dataEs";

export default function CreatorsEs() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-16">
        <div className="absolute inset-0">
          <img
            src={IMAGES.director}
            alt="For Creators"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C8A97E]/10 border border-[#C8A97E]/20 rounded-full px-4 py-1.5 mb-8">
            <Film size={14} className="text-[#C8A97E]" />
            <span className="text-xs text-[#C8A97E] font-medium">
              Para Creadores
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F5F0EB] leading-tight">
            Convierte tu película en<br />
            <span className="text-[#C8A97E] italic">un canal vivo</span>
          </h1>

          <p className="mt-6 text-lg text-[#9A9590] max-w-2xl mx-auto leading-relaxed">
            AGARRA te da las herramientas para conectar con tu audiencia, organizar 
            eventos, crear recompensas y generar valor continuo a partir de tu obra.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/creators/dashboard">
              <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium rounded-md px-8 py-6 text-base shadow-[0_0_15px_rgba(200,169,126,0.3)]">
                <Sparkles size={18} className="mr-2" />
                Acceder al Dashboard (Demo Version)
              </Button>
            </Link>
            <Button className="bg-[#1A1A1A] text-[#F5F0EB] hover:bg-[#262626] font-medium rounded-md px-8 py-6 text-base border border-[#C8A97E]/20">
              Aplicar como Creador
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Link to="/pass">
              <Button
                variant="outline"
                className="border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E]/10 !bg-transparent rounded-md px-8 py-6 text-base"
              >
                Ver Plan Creator
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          title="Para Creadores"
          subtitle="Construye tu audiencia de manera directa. Convierte tu película en un canal interactivo y recompensa a tus fans más fieles."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Users size={28} />,
              title: "Activa a tu Audiencia",
              description:
                "Transforma espectadores pasivos en una comunidad comprometida. Construye un canal dedicado alrededor de tu película con discusión, participación y experiencias compartidas.",
            },
            {
              icon: <MessageCircle size={28} />,
              title: "Construye Comunidad",
              description:
                "Crea un espacio donde tu audiencia conecte entre sí y con tu obra. Fomenta conversaciones que extiendan la vida de tu película.",
            },
            {
              icon: <Calendar size={28} />,
              title: "Lanza Eventos",
              description:
                "Organiza sesiones de preguntas y respuestas en vivo, fiestas de visualización, paneles de discusión y estrenos. Reúne a tu audiencia en tiempo real alrededor de tu cine.",
            },
            {
              icon: <Gift size={28} />,
              title: "Desbloquea Recompensas",
              description:
                "Diseña coleccionables exclusivos, pases de acceso anticipado y contenido especial. Dale a tus espectadores más comprometidos algo que coleccionar y atesorar.",
            },
            {
              icon: <BarChart3 size={28} />,
              title: "Perspectivas de Audiencia",
              description:
                "Entiende quién mira, participa e interactúa. Usa datos para tomar decisiones informadas sobre la distribución y la construcción de comunidad.",
            },
            {
              icon: <Globe size={28} />,
              title: "Distribución Global",
              description:
                "Llega a audiencias en todo el mundo iberoamericano y más allá. AGARRA conecta tu película con espectadores que valoran la narrativa independiente.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#141414] border border-[#262626] rounded-lg p-8 hover:border-[#C8A97E]/30 transition-all duration-300 glow-hover group"
            >
              <div className="text-[#C8A97E] group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-[#F5F0EB]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm text-[#9A9590] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works for Creators */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            title="Cómo Funciona"
            subtitle="Desde la presentación hasta un canal próspero en cuatro pasos simples."
          />
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Aplica y Envía",
                description:
                  "Envía tu película a través de nuestro portal de creadores. Nuestro equipo curatorial revisa cada envío por su mérito artístico y relevancia cultural.",
              },
              {
                step: "02",
                title: "Lanza tu Canal",
                description:
                  "Una vez aprobada, tu película se convierte en un canal vivo. Agrega contexto editorial, configura tu espacio comunitario y ajusta tus recompensas.",
              },
              {
                step: "03",
                title: "Involucra a tu Audiencia",
                description:
                  "Organiza eventos, inicia conversaciones y construye una comunidad alrededor de tu trabajo. AGARRA proporciona las herramientas, tú aportas la visión.",
              },
              {
                step: "04",
                title: "Crece y Gana",
                description:
                  "A medida que tu comunidad crece, también lo hace tu impacto. Accede a análisis, reparto de ingresos y apoyo para presentaciones en festivales.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 bg-[#141414] border border-[#262626] rounded-lg p-8 hover:border-[#C8A97E]/30 transition-all duration-300 group"
              >
                <span className="font-display text-4xl font-bold text-[#C8A97E]/20 shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#F5F0EB] group-hover:text-[#C8A97E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#9A9590] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F5F0EB] mb-4">
            ¿Listo para empezar tu canal?
          </h2>
          <p className="text-[#9A9590] mb-8 max-w-2xl mx-auto">
            Únete a la próxima generación de cine independiente. Manda tu película
            y revisaremos tu aplicación en 48 horas.
          </p>
          <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium rounded-md px-8 py-6 text-base">
            Enviar tu película
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}