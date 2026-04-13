import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  Calendar,
  Gift,
  Bookmark,
  Wallet,
  Clock,
  MapPin,
  Star,
  ArrowLeft,
  Share2,
  Heart,
  MessageCircle,
  Eye,
  ChevronRight,
} from "lucide-react";
import {
  Navbar,
  Footer,
  StatusBadge,
  EventCard,
  RewardCard,
  EditorialCard,
} from "@/components/shared";
import { films, events, rewards, articles } from "@/lib/dataFr";

export default function FilmDetailEs() {
  const { id } = useParams<{ id: string }>();
  const film = films.find((f) => f.id === id) || films[0];
  const filmEvents = events.slice(0, 2);
  const filmRewards = rewards.slice(0, 4);
  const relatedArticles = articles.slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ─── Cinematic Hero ─── */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={film.backdrop || film.image}
            alt={film.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Explore
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {film.tags.map((tag) => (
              <StatusBadge key={tag} label={tag} />
            ))}
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F5F0EB] leading-tight">
            {film.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#9A9590]">
            <span className="text-[#F5F0EB] font-medium">{film.director}</span>
            <span className="text-[#262626]">|</span>
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {film.country}
            </span>
            <span className="text-[#262626]">|</span>
            <span>{film.year}</span>
            <span className="text-[#262626]">|</span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {film.runtime}
            </span>
            <span className="text-[#262626]">|</span>
            <span>{film.genre.join(", ")}</span>
          </div>

          {film.festivalSelection && (
            <div className="mt-4 inline-flex items-center gap-2 bg-[#C8A97E]/10 border border-[#C8A97E]/20 rounded-full px-4 py-1.5">
              <Star size={14} className="text-[#C8A97E]" />
              <span className="text-xs text-[#C8A97E] font-medium">
                {film.festivalSelection}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Synopsis */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#F5F0EB] mb-4">
                Sinopsis
              </h2>
              <p className="text-[#9A9590] leading-relaxed text-base">
                {film.synopsis}
              </p>
            </div>

            {/* Why This Film Matters */}
            <div className="bg-[#141414] border border-[#262626] rounded-lg p-8">
              <h2 className="font-display text-2xl font-bold text-[#C8A97E] mb-4">
                Por qué importa esta película
              </h2>
              <p className="text-[#9A9590] leading-relaxed text-base italic">
                {film.whyItMatters}
              </p>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#F5F0EB] mb-6">
                Próximos Eventos
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {filmEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>

            {/* Rewards */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#F5F0EB] mb-6">
                Recompensas Disponibles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {filmRewards.map((reward) => (
                  <RewardCard key={reward.id} reward={reward} />
                ))}
              </div>
            </div>

            {/* Community Activity */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#F5F0EB] mb-6">
                Actividad de la Comunidad
              </h2>
              <div className="space-y-4">
                {[
                  {
                    user: "María G.",
                    action: "se unió al canal",
                    time: "hace 2 horas",
                  },
                  {
                    user: "Carlos R.",
                    action: "obtuvo Acceso Anticipado",
                    time: "hace 5 horas",
                  },
                  {
                    user: "Ana L.",
                    action: "confirmó asistencia a Q&A en vivo",
                    time: "hace 8 horas",
                  },
                  {
                    user: "Diego M.",
                    action: "dejó una reseña",
                    time: "hace 1 día",
                  },
                  {
                    user: "Valentina S.",
                    action: "coleccionó el NFT del Director's Cut",
                    time: "hace 2 días",
                  },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[#141414] border border-[#262626] rounded-lg p-4 hover:border-[#262626]/80 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#C8A97E]/15 flex items-center justify-center text-[#C8A97E] text-sm font-semibold shrink-0">
                      {activity.user.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#F5F0EB]">
                        <span className="font-medium">{activity.user}</span>{" "}
                        <span className="text-[#9A9590]">{activity.action}</span>
                      </p>
                    </div>
                    <span className="text-xs text-[#9A9590] shrink-0">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Editorial */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#F5F0EB] mb-6">
                Editorial Relacionada
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedArticles.map((article) => (
                  <EditorialCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sticky Action Panel */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Action Card */}
              <div className="bg-[#141414] border border-[#262626] rounded-lg p-6 space-y-4">
                <Button className="w-full bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium rounded-md py-6 text-base">
                  <Play size={18} className="mr-2 fill-[#0A0A0A]" /> Ver Ahora
                </Button>
                <Button className="w-full bg-transparent border border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E]/10 rounded-md py-6 text-base">
                  <Users size={18} className="mr-2" /> Unirse al Canal
                </Button>
                <Button className="w-full bg-transparent border border-[#262626] text-[#9A9590] hover:border-[#C8A97E]/30 hover:text-[#C8A97E] hover:bg-transparent rounded-md py-6 text-base">
                  <Wallet size={18} className="mr-2" /> Guardar en Wallet
                </Button>
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 text-[#9A9590] hover:text-[#C8A97E] hover:bg-[#C8A97E]/5"
                  >
                    <Heart size={16} className="mr-1" /> Me gusta
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 text-[#9A9590] hover:text-[#C8A97E] hover:bg-[#C8A97E]/5"
                  >
                    <Bookmark size={16} className="mr-1" /> Guardar
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex-1 text-[#9A9590] hover:text-[#C8A97E] hover:bg-[#C8A97E]/5"
                  >
                    <Share2 size={16} className="mr-1" /> Compartir
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-[#141414] border border-[#262626] rounded-lg p-6">
                <h3 className="text-sm font-semibold text-[#F5F0EB] uppercase tracking-wider font-body mb-4">
                  Estadísticas del Canal
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#9A9590] flex items-center gap-2">
                      <Eye size={20} className="text-[#C8A97E]" /> Miembros
                    </span>
                    <span className="text-sm text-[#F5F0EB] font-medium">
                      {film.members.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#9A9590] flex items-center gap-2">
                      <Calendar size={14} className="text-[#C8A97E]" /> Eventos
                    </span>
                    <span className="text-sm text-[#F5F0EB] font-medium">
                      {filmEvents.length} próximos
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#9A9590] flex items-center gap-2">
                      <MessageCircle size={14} className="text-[#C8A97E]" /> Activity
                    </span>
                    <span className="text-sm text-[#6B8F71] font-medium">
                      Very Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Next Event */}
              {film.upcomingEvent && (
                <div className="bg-[#141414] border border-[#C8A97E]/20 rounded-lg p-6">
                  <h3 className="text-sm font-semibold text-[#C8A97E] uppercase tracking-wider font-body mb-3">
                    Next Event
                  </h3>
                  <p className="text-sm text-[#F5F0EB] leading-relaxed">
                    {film.upcomingEvent}
                  </p>
                  <Button
                    size="sm"
                    className="mt-4 w-full bg-transparent border border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E]/10 rounded-md text-xs"
                  >
                    <Calendar size={14} className="mr-1" /> RSVP
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}