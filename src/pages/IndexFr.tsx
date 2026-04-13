import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  Calendar,
  Gift,
  ArrowRight,
  Eye,
  Sparkles,
  Film,
  Heart,
  Star,
  Wallet,
} from "lucide-react";
import {
  Navbar,
  Footer,
  SectionHeader,
  FilmCard,
  EditorialCard,
  StatusBadge,
  EventCard,
} from "@/components/shared";
import { films, articles, events, IMAGES } from "@/lib/dataFr";

export default function IndexEs() {
  const featuredFilm = films[0];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="AGARRA Cinema"
            className="w-full h-full object-cover object-[70%_center] opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C8A97E]/10 border border-[#C8A97E]/20 rounded-full px-4 py-1.5 mb-8">
              <Sparkles size={14} className="text-[#C8A97E]" />
              <span className="text-xs text-[#C8A97E] font-medium">
                Cinéma Indépendant Ibéro-américain
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F0EB] leading-[1.05] tracking-tight">
              Cada película independiente se convierte en un{" "}
              <span className="text-[#C8A97E] italic">chaîne en direct</span>
            </h1>

            <p className="mt-6 text-lg text-[#9A9590] leading-relaxed max-w-lg">
              AGARRA est une plateforme sélectionnée où le cinéma indépendant rencontre la communauté. Regardez des films, participez à des événements en direct et obtenez des récompenses — le tout dans une expérience premium.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/explore">
                <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium rounded-md px-8 py-6 text-base">
                  Explorer les Films
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/pass">
                <Button
                  variant="outline"
                  className="border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E]/10 !bg-transparent rounded-md px-8 py-6 text-base"
                >
                  Rejoindre le Pass AGARRA
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-[#9A9590]">
              <div className="flex items-center gap-2">
                <Film size={16} className="text-[#C8A97E]" />
                <span>+120 Films</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[#C8A97E]" />
                <span>+18K Membres</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#C8A97E]" />
                <span>Événements Hebdomadaires</span>
              </div>
            </div>
          </div>

          {/* Featured Film Hero Card */}
          <div className="hidden lg:block">
            <Link to={`/film/${featuredFilm.id}`} className="group block">
              <div className="relative bg-[#141414] border border-[#262626] rounded-xl overflow-hidden hover:border-[#C8A97E]/30 transition-all duration-500 glow-hover">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={featuredFilm.image}
                    alt={featuredFilm.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {featuredFilm.tags.map((tag) => (
                      <StatusBadge key={tag} label={tag} />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-[#F5F0EB] group-hover:text-[#C8A97E] transition-colors">
                    {featuredFilm.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#9A9590]">
                    {featuredFilm.director} · {featuredFilm.country} · {featuredFilm.year}
                  </p>
                  <p className="mt-3 text-sm text-[#9A9590] leading-relaxed line-clamp-2">
                    {featuredFilm.shortDescription}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <Button size="sm" className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] rounded-md text-xs font-medium">
                      <Play size={14} className="mr-1 fill-[#0A0A0A]" /> Regarder
                    </Button>
                    <Button size="sm" className="bg-transparent border border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E]/10 rounded-md text-xs">
                      <Users size={14} className="mr-1" /> Rejoindre la Chaîne
                    </Button>
                    <Button size="sm" className="bg-transparent border border-[#262626] text-[#9A9590] hover:border-[#C8A97E]/30 hover:text-[#C8A97E] rounded-md text-xs hover:bg-transparent">
                      <Calendar size={14} className="mr-1" /> Événement
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Why AGARRA ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          title="Pourquoi AGARRA ?"
          subtitle="Plus que du streaming. Un écosystème vivant pour le cinéma indépendant."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Eye size={28} />,
              title: "Cinéma Indépendant Curé",
              description:
                "Chaque film est sélectionné à la main pour son mérite artistique et sa signification culturelle. Pas d'algorithmes — juste un bon goût et un soin éditorial.",
            },
            {
              icon: <Heart size={28} />,
              title: "Participation du Public en Direct",
              description:
                "Rejoignez des watch parties, des Q&A en direct avec des réalisateurs et des discussions. Le cinéma devient une expérience sociale et partagée.",
            },
            {
              icon: <Wallet size={28} />,
              title: "Récompenses et Accès",
              description:
                "Obtenez des objets de collection et débloquez des accès exclusifs. Votre participation a une valeur réelle dans l'écosystème AGARRA.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-[#141414] border border-[#262626] rounded-lg p-8 hover:border-[#C8A97E]/30 transition-all duration-300 glow-hover group"
            >
              <div className="text-[#C8A97E] group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-[#F5F0EB]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-[#9A9590] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Live Channels ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          title="Chaînes en Direct"
          subtitle="Des communautés actives avec des événements, des récompenses et des discussions."
          action="Regarder canales"
          actionLink="/explore"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {films.slice(0, 6).map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Comment ça Marche"
            subtitle="Trois étapes simples pour rejoindre l'expérience AGARRA."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Regarder",
                description:
                  "Explora nuestra colección curada de cine iberoamericano. Cada título es seleccionado por su valor.",
                icon: <Play size={32} className="fill-[#C8A97E]" />,
              },
              {
                step: "02",
                title: "Participar",
                description:
                  "Únete a eventos en vivo, Q&As, y discusiones en comunidad. Cada canal es un ser vivo.",
                icon: <Users size={32} />,
              },
              {
                step: "03",
                title: "Ganar",
                description:
                  "Obtén recompensas, desbloquea beneficios exclusivos y elabora tu propio pasaporte de cine.",
                icon: <Gift size={32} />,
              },
            ].map((item) => (
              <div key={item.step} className="relative group">
                <div className="bg-[#141414] border border-[#262626] rounded-lg p-8 hover:border-[#C8A97E]/30 transition-all duration-300 h-full">
                  <span className="font-display text-5xl font-bold text-[#C8A97E]/15">
                    {item.step}
                  </span>
                  <div className="mt-4 text-[#C8A97E]">{item.icon}</div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-[#F5F0EB]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#9A9590] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Upcoming Events ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          title="Próximos Événements"
          subtitle="Q&A en direct, watch parties et panels de discussion prévus cette semaine."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* ─── From the Journal ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          title="Du Journal"
          subtitle="Interviews, notes de festivals et perspectives critiques sur le cinéma indépendant."
          action="Lire la suite"
          actionLink="/journal"
        />
        <div className="space-y-6">
          <EditorialCard article={articles[0]} featured />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <EditorialCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F5F0EB] leading-tight">
            El cine es mejor cuando se{" "}
            <span className="text-[#C8A97E] italic">partagé</span>
          </h2>
          <p className="mt-6 text-lg text-[#9A9590] max-w-2xl mx-auto leading-relaxed">
            Rejoignez AGARRA et faites partie d'une communauté qui valorise la narration indépendante et les échanges culturels.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/pass">
              <Button className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium rounded-md px-8 py-6 text-base">
                Rejoindre le Pass AGARRA
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/explore">
              <Button
                variant="outline"
                className="border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E]/10 !bg-transparent rounded-md px-8 py-6 text-base"
              >
                Explorer les Films
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}