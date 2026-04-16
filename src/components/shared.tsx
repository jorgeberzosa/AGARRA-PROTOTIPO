import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Play,
  Users,
  Calendar,
  Gift,
  Bookmark,
  Search,
  Menu,
  X,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  ChevronRight,
  Film,
  Sparkles,
  Eye,
  Heart,
  Wallet,
  ChevronDown,
  LogOut,
  User as UserIcon,
} from "lucide-react";
import type { Film as FilmType, Article, Event as EventType, Reward } from "@/lib/data";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/lib/AuthContext";

/* ─── Navbar ─── */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();

  const currentLang = i18n.language?.substring(0, 2) || 'es';
  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'it', label: 'IT' },
    { code: 'pt', label: 'PT' },
  ];

  const links = [
    { to: "/explore", label: t('nav.explore', 'Explorar') },
    { to: "/film/la-memoria-del-agua", label: t('nav.channels', 'Canales') },
    { to: "/journal", label: t('nav.journal', 'Diario') },
    { to: "/pass", label: t('nav.pass', 'Pass') },
    { to: "/creators", label: t('nav.creators', 'Para Creadores') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="AGARRA Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive(link.to)
                  ? "text-[#C8A97E]"
                  : "text-[#9A9590] hover:text-[#F5F0EB]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xs font-bold text-[#9A9590] hover:text-[#C8A97E] uppercase focus:outline-none">
              {currentLang} <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#141414] border-[#262626] text-[#F5F0EB]">
              {languages.map((lng) => (
                <DropdownMenuItem key={lng.code} onClick={() => i18n.changeLanguage(lng.code)} className="focus:bg-[#C8A97E]/10 cursor-pointer text-xs">
                  {lng.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-sm text-[#F5F0EB] hover:text-[#C8A97E] focus:outline-none ml-2 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5 focus:ring-0">
                <UserIcon size={14} /> <span className="font-medium">{user.name.split(' ')[0]}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[#141414] border-[#262626]">
                <DropdownMenuItem onClick={() => navigate('/creators/dashboard')} className="focus:bg-[#C8A97E]/10 text-sm cursor-pointer text-[#F5F0EB]">
                  {t('nav.my_account', 'Mi Cuenta')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout} className="focus:bg-red-500/10 text-sm text-red-500 cursor-pointer font-medium mt-1">
                  <LogOut size={14} className="mr-2" /> Salir
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/auth')}
                className="text-[#9A9590] hover:text-[#F5F0EB] hover:bg-transparent"
              >
                {t('nav.signin', 'Ingresar')}
              </Button>
              <Button
                size="sm"
                onClick={() => navigate('/auth')}
                className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium rounded-md"
              >
                {t('nav.join_pass', 'Únete al Pass')}
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-4 text-[#F5F0EB]">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xs font-bold text-[#9A9590] hover:text-[#C8A97E] uppercase focus:outline-none">
              {currentLang} <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#141414] border-[#262626] text-[#F5F0EB]">
              {languages.map((lng) => (
                <DropdownMenuItem key={lng.code} onClick={() => i18n.changeLanguage(lng.code)} className="focus:bg-[#C8A97E]/10 cursor-pointer text-xs">
                  {lng.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#262626]/50 px-6 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-base font-medium ${
                isActive(link.to) ? "text-[#C8A97E]" : "text-[#9A9590]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#262626] flex flex-col gap-3">
            {user ? (
               <div className="flex flex-col gap-3">
                 <div className="flex items-center gap-2 text-[#F5F0EB] px-2 py-1">
                   <UserIcon size={16} /> <span className="font-semibold">{user.name}</span>
                 </div>
                 <Button variant="ghost" onClick={() => { setMobileOpen(false); navigate('/creators/dashboard'); }} className="text-[#9A9590] justify-start hover:bg-transparent">
                   {t('nav.my_account', 'Mi Cuenta')}
                 </Button>
                 <Button variant="ghost" onClick={() => { setMobileOpen(false); logout(); navigate('/'); }} className="text-red-400 justify-start hover:bg-red-500/10">
                   Salir
                 </Button>
               </div>
            ) : (
              <>
                <Button variant="ghost" onClick={() => { setMobileOpen(false); navigate('/auth'); }} className="text-[#9A9590] justify-start hover:bg-transparent">
                  {t('nav.signin', 'Ingresar')}
                </Button>
                <Button onClick={() => { setMobileOpen(false); navigate('/auth'); }} className="bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94] font-medium">
                  {t('nav.join_pass', 'Únete al Pass')}
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Footer ─── */
export function Footer() {
  const { t } = useTranslation();

  const text = {
    desc: t('footer.desc', "Una plataforma curada para cine independiente iberoamericano. Ve, participa, gana."),
    platform: t('footer.platform', "Plataforma"),
    platformLinks: [t('footer.explore', "Explorar"), t('footer.live', "Canales en Vivo"), t('footer.events', "Eventos"), t('footer.rewards', "Recompensas")],
    community: t('footer.community', "Comunidad"),
    communityLinks: [t('footer.journal', "Diario"), t('footer.pass', "AGARRA Pass"), t('footer.creators', "Para Creadores"), t('footer.partners', "Festivales Aliados")],
    about: t('footer.about', "Nosotros"),
    aboutLinks: [t('footer.mission', "Nuestra Misión"), t('footer.team', "Equipo"), t('footer.press', "Prensa"), t('footer.contact', "Contacto")],
    rights: t('footer.rights', "Todos los derechos reservados."),
    legal: [t('footer.privacy', "Privacidad"), t('footer.terms', "Términos"), t('footer.cookies', "Cookies")],
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#262626]/50 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <span className="font-display text-2xl font-bold text-[#C8A97E]">AGARRA</span>
            <p className="mt-4 text-sm text-[#9A9590] leading-relaxed">
              {text.desc}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#F5F0EB] mb-4 font-body uppercase tracking-wider">
              {text.platform}
            </h4>
            <div className="space-y-3">
              <Link to="/explore" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors">{text.platformLinks[0]}</Link>
              <Link to="/" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors">{text.platformLinks[1]}</Link>
              <Link to="/journal" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors">{text.platformLinks[2]}</Link>
              <Link to="/pass" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors">{text.platformLinks[3]}</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#F5F0EB] mb-4 font-body uppercase tracking-wider">
              {text.community}
            </h4>
            <div className="space-y-3">
              <Link to="/journal" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors">{text.communityLinks[0]}</Link>
              <Link to="/pass" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors">{text.communityLinks[1]}</Link>
              <Link to="/creators" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors">{text.communityLinks[2]}</Link>
              <a href="mailto:info@agarra.app" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors cursor-pointer">{text.communityLinks[3]}</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#F5F0EB] mb-4 font-body uppercase tracking-wider">
              {text.about}
            </h4>
            <div className="space-y-3">
              <Link to="/journal" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors">{text.aboutLinks[0]}</Link>
              <a href="mailto:info@agarra.app" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors cursor-pointer">{text.aboutLinks[1]}</a>
              <a href="mailto:info@agarra.app" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors cursor-pointer">{text.aboutLinks[2]}</a>
              <a href="mailto:info@agarra.app" className="block text-sm text-[#9A9590] hover:text-[#C8A97E] transition-colors cursor-pointer">{text.aboutLinks[3]}</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#262626]/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#9A9590]">
            © 2026 AGARRA. {text.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xs text-[#9A9590] hover:text-[#C8A97E] transition-colors cursor-pointer">{text.legal[0]}</Link>
            <Link to="/" className="text-xs text-[#9A9590] hover:text-[#C8A97E] transition-colors cursor-pointer">{text.legal[1]}</Link>
            <Link to="/" className="text-xs text-[#9A9590] hover:text-[#C8A97E] transition-colors cursor-pointer">{text.legal[2]}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Section Header ─── */
export function SectionHeader({
  title,
  subtitle,
  action,
  actionLink,
}: {
  title: string;
  subtitle?: string;
  action?: string;
  actionLink?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
      <div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F5F0EB]">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-[#9A9590] text-base max-w-xl">{subtitle}</p>
        )}
      </div>
      {action && actionLink && (
        <Link
          to={actionLink}
          className="text-[#C8A97E] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all shrink-0"
        >
          {action} <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}

/* ─── Status Badge ─── */
export function StatusBadge({ label }: { label: string }) {
  const colorMap: Record<string, string> = {
    Trending: "bg-[#C8A97E]/15 text-[#C8A97E] border-[#C8A97E]/30",
    "Event this week": "bg-[#6B8F71]/15 text-[#8BB594] border-[#6B8F71]/30",
    "Rewards active": "bg-[#9B7EC8]/15 text-[#B89EDB] border-[#9B7EC8]/30",
    "Festival selection": "bg-[#C87E7E]/15 text-[#DBA09A] border-[#C87E7E]/30",
  };
  const classes = colorMap[label] || "bg-[#262626] text-[#9A9590] border-[#3a3a3a]";
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${classes}`}>
      {label}
    </span>
  );
}

/* ─── Film Card ─── */
export function FilmCard({ film, variant = "default" }: { film: FilmType; variant?: "default" | "compact" }) {
  return (
    <Link to={`/film/${film.id}`} className="group block">
      <div className="film-card-hover bg-[#141414] border border-[#262626] rounded-lg overflow-hidden hover:border-[#C8A97E]/30">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={film.image}
            alt={film.title}
            className="w-full h-full object-cover img-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
            {film.tags.slice(0, 2).map((tag) => (
              <StatusBadge key={tag} label={tag} />
            ))}
          </div>
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-[#C8A97E] rounded-full p-2.5">
              <Play size={16} className="text-[#0A0A0A] fill-[#0A0A0A]" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-display text-lg font-semibold text-[#F5F0EB] group-hover:text-[#C8A97E] transition-colors">
            {film.title}
          </h3>
          <p className="mt-1 text-sm text-[#9A9590]">
            {film.director} · {film.country} · {film.year}
          </p>
          {variant === "default" && (
            <p className="mt-2 text-sm text-[#9A9590] line-clamp-2 leading-relaxed">
              {film.shortDescription}
            </p>
          )}
          <div className="mt-3 flex items-center gap-4 text-xs text-[#9A9590]">
            <span className="flex items-center gap-1">
              <Users size={12} /> {film.members.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Gift size={12} /> {film.rewards} rewards
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── Editorial Card ─── */
export function EditorialCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-lg bg-[#141414] border border-[#262626] hover:border-[#C8A97E]/30 transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative overflow-hidden aspect-video md:aspect-auto">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover img-zoom"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="text-[#C8A97E] text-xs font-medium uppercase tracking-wider">
              {article.category}
            </span>
            <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-[#F5F0EB] group-hover:text-[#C8A97E] transition-colors leading-tight">
              {article.title}
            </h3>
            <p className="mt-3 text-[#9A9590] text-sm leading-relaxed">
              {article.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-[#9A9590]">
              <span>{article.author}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group film-card-hover bg-[#141414] border border-[#262626] rounded-lg overflow-hidden hover:border-[#C8A97E]/30">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover img-zoom"
        />
      </div>
      <div className="p-5">
        <span className="text-[#C8A97E] text-xs font-medium uppercase tracking-wider">
          {article.category}
        </span>
        <h3 className="mt-2 font-display text-lg font-semibold text-[#F5F0EB] group-hover:text-[#C8A97E] transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-[#9A9590] line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-[#9A9590]">
          <span>{article.author}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Event Card ─── */
export function EventCard({ event }: { event: EventType }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-lg p-5 hover:border-[#C8A97E]/30 transition-all duration-300 glow-hover">
      <div className="flex items-start justify-between">
        <span className="text-[#C8A97E] text-xs font-medium uppercase tracking-wider">
          {event.type}
        </span>
        <span className="flex items-center gap-1 text-xs text-[#9A9590]">
          <Users size={12} /> {event.attendees}
        </span>
      </div>
      <h4 className="mt-3 font-display text-lg font-semibold text-[#F5F0EB] leading-snug">
        {event.title}
      </h4>
      <p className="mt-1 text-sm text-[#9A9590]">{event.filmTitle}</p>
      <div className="mt-4 flex items-center gap-4 text-xs text-[#9A9590]">
        <span className="flex items-center gap-1">
          <Calendar size={12} /> {event.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {event.time}
        </span>
      </div>
      <Button
        size="sm"
        className="mt-4 w-full bg-transparent border border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E]/10 rounded-md text-xs"
      >
        RSVP
      </Button>
    </div>
  );
}

/* ─── Reward Card ─── */
export function RewardCard({ reward }: { reward: Reward }) {
  const rarityColors: Record<string, string> = {
    Common: "text-[#9A9590]",
    Uncommon: "text-[#6B8F71]",
    Rare: "text-[#C8A97E]",
    Legendary: "text-[#C87E7E]",
  };
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-lg p-5 hover:border-[#C8A97E]/30 transition-all duration-300 glow-hover">
      <div className="flex items-start justify-between">
        <div className="bg-[#C8A97E]/10 rounded-lg p-2.5">
          <Gift size={20} className="text-[#C8A97E]" />
        </div>
        <span className={`text-xs font-medium ${rarityColors[reward.rarity] || "text-[#9A9590]"}`}>
          {reward.rarity}
        </span>
      </div>
      <h4 className="mt-3 font-body text-sm font-semibold text-[#F5F0EB]">{reward.title}</h4>
      <p className="mt-1 text-xs text-[#9A9590] leading-relaxed">{reward.description}</p>
      <p className="mt-3 text-xs text-[#9A9590]">{reward.filmTitle}</p>
    </div>
  );
}

/* ─── Pricing Card ─── */
export function PricingCard({
  tier,
}: {
  tier: { name: string; price: string; description: string; features: string[]; cta: string; highlighted: boolean };
}) {
  return (
    <div
      className={`relative rounded-lg p-8 transition-all duration-300 ${
        tier.highlighted
          ? "bg-[#1A1A1A] border-2 border-[#C8A97E]/50 glow-hover"
          : "bg-[#141414] border border-[#262626] hover:border-[#C8A97E]/20"
      }`}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8A97E] text-[#0A0A0A] text-xs font-semibold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="font-display text-2xl font-bold text-[#F5F0EB]">{tier.name}</h3>
      <div className="mt-3">
        <span className="font-display text-3xl font-bold text-[#C8A97E]">{tier.price}</span>
      </div>
      <p className="mt-3 text-sm text-[#9A9590] leading-relaxed">{tier.description}</p>
      <ul className="mt-6 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-[#F5F0EB]/80">
            <ChevronRight size={14} className="text-[#C8A97E] mt-0.5 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`mt-8 w-full rounded-md font-medium ${
          tier.highlighted
            ? "bg-[#C8A97E] text-[#0A0A0A] hover:bg-[#D4BA94]"
            : "bg-transparent border border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E]/10"
        }`}
      >
        {tier.cta}
      </Button>
    </div>
  );
}

/* ─── Filter Chip ─── */
export function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
        active
          ? "bg-[#C8A97E]/20 text-[#C8A97E] border border-[#C8A97E]/40"
          : "bg-[#1A1A1A] text-[#9A9590] border border-[#262626] hover:border-[#C8A97E]/20 hover:text-[#F5F0EB]"
      }`}
    >
      {label}
    </button>
  );
}